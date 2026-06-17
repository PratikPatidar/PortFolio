import React from "react";
import { motion } from "framer-motion";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 px-6 sm:px-12 lg:px-20 bg-transparent font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-white mb-14"
        >
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Row Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* About Me Box */}
          <motion.div
            variants={fadeUp}
            custom={0}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a]
            border border-purple-500/20 hover:border-purple-400/40
            transition-all duration-300 rounded-xl p-5 sm:p-8
            text-neutral-200 shadow-md hover:shadow-lg hover:shadow-purple-500/10"
          >
            <p className="text-sm text-purple-400 mb-3">
              ✨ Building things that are functional, beautiful, and a little bit magical.
            </p>
            <p className="mb-4 leading-relaxed text-[15px]">
              Hi, I’m a <strong>Frontend Engineer</strong> with over 1.3 years of production experience 
              building responsive, scalable, and high-performance web applications, most recently at 
              <strong> Mercanis</strong>. I specialize in building data-heavy dashboards and B2B 
              supplier marketplaces that serve over 500K daily active users.
            </p>

            <p className="mb-4 text-[15px]">
              Core accomplishments:
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>
                  Optimized web performance from 4.2s to 2.7s load time (35% improvement) using code splitting and lazy loading.
                </li>
                <li>
                  Reduced bundle size from 4.2MB to 2.5MB through Webpack bundle analysis and optimization.
                </li>
                <li>
                  Architected real-time order status flow using WebSockets (Socket.io) for 2000+ concurrent connections.
                </li>
                <li>
                  Implemented multi-layer caching strategies (Redis, React Query, CDN) reducing DB queries by 70%.
                </li>
              </ul>
            </p>

            <p className="text-[15px]">
              Whether I’m working on the front-end, back-end, or the full stack, I focus on writing
              clean, maintainable code and delivering accessible user interfaces (WCAG standards).
            </p>
          </motion.div>

          {/* Work Experience Box */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a]
            border border-purple-500/20 hover:border-purple-400/40
            transition-all duration-300 rounded-xl p-5 sm:p-8
            text-neutral-200 shadow-md hover:shadow-lg hover:shadow-purple-500/10"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Professional Experience</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold">Frontend Engineer | Mercanis (B2B Supplier Marketplace)</h4>
              <p className="text-sm text-neutral-400 mb-2">Feb 2025 - Apr 2026 (1 Year)</p>
              <p className="leading-relaxed text-[15px]">
                Owned React components from design to production for a platform serving 500K+ daily active users. 
                Led performance optimization, built real-time tracking systems, and integrated payment gateways 
                with robust reconciliation flows.
                <br />
                <span className="text-purple-400 text-sm">
                  Skills: React.js, Next.js, Redux, Node.js, WebSockets, Payment APIs (Razorpay), Web Performance, Agile
                </span>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Frontend Developer Intern | Undigicore Pvt. Ltd.</h4>
              <p className="text-sm text-neutral-400 mb-2">Aug 2023 - Nov 2023 (3 Months)</p>
              <p className="leading-relaxed text-[15px]">
                Collaborated on synthetic lead generation and computer vision projects. Optimized backend 
                algorithms and developed user-friendly dashboards for complex data visualization.
                <br />
                <span className="text-purple-400 text-sm">
                  Skills: Node.js, Express.js, MongoDB, React, Python, UI/UX
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
