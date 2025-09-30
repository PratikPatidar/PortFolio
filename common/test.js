// proxy-check-and-run.js
// ES module script
// 1) fetch free proxy list from public API(s)
// 2) validate proxies by requesting api.ipify.org via the proxy
// 3) if we get at least one working proxy, rotate through them when sending emails
// 4) otherwise fall back to direct connections

import { HttpsProxyAgent } from 'https-proxy-agent';
import { sendEmailWithProxy } from './proxyCheck.js'; // user-provided module

// CONFIG
const PROXY_SOURCES = [
  'https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=5000&country=all',
  'https://www.proxy-list.download/api/v1/get?type=http'
];
const VALIDATION_URL = 'https://api.ipify.org?format=json';
const VALIDATION_TIMEOUT = 6000; // ms
const MAX_VALID_PROXIES = 30; // how many working proxies we want
const CONCURRENCY = 10; // how many proxies to test in parallel

// --- helper: sleep ---
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// --- fetch raw proxies from public sources ---
async function fetchProxyLists() {
  const set = new Set();

  for (const src of PROXY_SOURCES) {
    try {
      const res = await fetch(src, { timeout: 8000 });
      if (!res.ok) continue;
      const text = await res.text();
      text.split(/\r?\n/).map(s => s.trim()).filter(Boolean).forEach(p => set.add(p));
    } catch (err) {
      // ignore individual source failures
    }
  }

  return Array.from(set);
}

// --- validate single proxy (http/https proxies expected like host:port or http://host:port) ---
async function validateProxy(proxy) {
  let proxyUrl = proxy;
  if (!/^[a-zA-Z]+:\/\//.test(proxyUrl)) {
    proxyUrl = 'http://' + proxyUrl; // assume http
  }

  const agent = new HttpsProxyAgent(proxyUrl);
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), VALIDATION_TIMEOUT);

  try {
    const res = await fetch(VALIDATION_URL, { agent, signal: controller.signal });
    clearTimeout(id);
    if (!res.ok) return false;
    const j = await res.json();
    // if we receive an IP, proxy worked
    return typeof j.ip === 'string' && j.ip.length > 0;
  } catch (err) {
    clearTimeout(id);
    return false;
  }
}

// --- validate proxies with limited concurrency ---
async function getValidatedProxies(rawProxies, maxValid = MAX_VALID_PROXIES) {
  const valid = [];
  const queue = [...rawProxies];

  while (queue.length > 0 && valid.length < maxValid) {
    const batch = queue.splice(0, CONCURRENCY);
    const promises = batch.map(async (p) => {
      const ok = await validateProxy(p);
      return { p, ok };
    });

    const results = await Promise.all(promises);
    for (const r of results) {
      if (r.ok) {
        valid.push(r.p);
        console.log('Validated proxy:', r.p);
        if (valid.length >= maxValid) break;
      }
    }
    // small delay to avoid hammering sources
    await sleep(500);
  }

  return valid;
}

// --- email generation (reuse the same function style you used earlier) ---
function generateEmailVariations(baseEmail, maxVariations = 50) {
  const [localPart, domain] = baseEmail.split('@');
  const variations = new Set();

  function insertDots(str, start = 1) {
    if (variations.size >= maxVariations) return;
    if (start >= str.length) return;

    for (let i = start; i < str.length; i++) {
      const newStr = str.slice(0, i) + '.' + str.slice(i);
      variations.add(newStr + '@' + domain);
      insertDots(newStr, i + 2);
      if (variations.size >= maxVariations) break;
    }
  }

  insertDots(localPart);
  return Array.from(variations);
}

// --- main flow ---
async function main() {
  console.log('Fetching public proxy lists...');
  const raw = await fetchProxyLists();
  console.log(`Found ${raw.length} raw proxies.`);

  console.log('Validating proxies (this may take a while)...');
  const validated = await getValidatedProxies(raw, MAX_VALID_PROXIES);
  console.log(`Validated ${validated.length} proxies.`);

  const proxiesToUse = validated.length > 0 ? validated : null;
  if (!proxiesToUse) {
    console.warn('No working proxies found. Will proceed without proxies.');
  }

  // base emails (same as your earlier script)
  const baseEmails = [
    'nakmeisiliya12@gmail.com',
    'wkrishab1@gmail.com',
    'wkrishab12@gmail.com'
  ];

  const allEmailVariations = baseEmails.map(e => generateEmailVariations(e, 100)).flat();

  const API_URL = 'https://www.flixizen.com/.netlify/functions/waitlist';
  const DELAY_MS = 5000;

  for (let i = 0; i < allEmailVariations.length; i++) {
    const email = allEmailVariations[i];
    const proxy = proxiesToUse ? proxiesToUse[i % proxiesToUse.length] : null;
    console.log(`Sending ${email} via ${proxy ? proxy : 'direct connection'}...`);
    await sendEmailWithProxy(email, proxy, API_URL);
    console.log(`Waiting ${DELAY_MS/1000} seconds before next call...`);
    await sleep(DELAY_MS);
  }

  console.log('Done.');
}

// run
main().catch(err => { console.error('Fatal error:', err); process.exit(1); });
