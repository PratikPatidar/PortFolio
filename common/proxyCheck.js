// proxyCheck.js
// ES module: fetch public HTTP proxies and validate them

import fetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';

// --- Fetch public proxy list ---
export async function fetchPublicProxies() {
  console.log("Fetching public proxy lists...");
  try {
    const response = await fetch('https://www.proxy-list.download/api/v1/get?type=http'); // public HTTP proxies
    const text = await response.text();
    const proxies = text.split(/\r?\n/).map(p => p.trim()).filter(Boolean);
    console.log(`Found ${proxies.length} raw proxies.`);
    return proxies;
  } catch (err) {
    console.error("Failed to fetch proxy list:", err.message);
    return [];
  }
}

// --- Validate a single proxy ---
async function validateProxy(proxy) {
  try {
    const agent = new HttpsProxyAgent(`http://${proxy}`);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const res = await fetch('https://api.ipify.org?format=json', { agent, signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      console.log(`✅ Validated proxy: ${proxy}`);
      return proxy;
    }
  } catch (err) {
    // ignore failed proxy
  }
  return null;
}

// --- Fetch & validate proxies ---
export async function getValidatedProxies(limit = 20) {
  const rawProxies = await fetchPublicProxies();
  const validated = [];

  console.log("Validating proxies (this may take a while)...");
  for (const proxy of rawProxies) {
    if (validated.length >= limit) break; // limit to N working proxies
    const ok = await validateProxy(proxy);
    if (ok) validated.push(ok);
  }

  console.log(`Total validated proxies: ${validated.length}`);
  return validated;
}
