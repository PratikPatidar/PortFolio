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
              Hi, I’m a <strong>Full Stack Developer</strong> who loves creating digital
              experiences that make people’s lives easier. My go-to stack is{" "}
              <strong>MERN</strong> (MongoDB, Express.js, React, Node.js), but I’m always exploring
              new tools.  
              I completed my <strong>B.E. from Barkatullah University, Bhopal</strong> with a CGPA
              of <strong>7.9/10</strong> and have been building projects that balance both
              performance and design.
            </p>

            <p className="mb-4 text-[15px]">
              Some work I’m most proud of:
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>
                  <strong>E-Learning Platform</strong> – A modern study platform designed for
                  accessibility and engagement.
                </li>
                <li>
                  <strong>Ecomzy</strong> – A fully functional e-commerce store built from scratch.
                </li>
                <li>
                  <strong>Text Summarization App</strong> – AI/NLP-powered tool that shortens large
                  texts in seconds.
                </li>
              </ul>
            </p>

            <p className="text-[15px]">
              Whether I’m working on the front-end, back-end, or the full stack, I focus on writing
              clean, maintainable code and delivering something I’d be proud to use myself.
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
            <h3 className="text-2xl font-semibold mb-4 text-white">Work Experience</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold">Frontend Developer (Svelte)</h4>
              <p className="text-sm text-neutral-400 mb-2">3 Month Internship</p>
              <p className="leading-relaxed text-[15px]">
                Worked on live, production-level projects using{" "}
                <strong>Svelte</strong> to build fast and lightweight interfaces.  
                Collaborated with designers and backend engineers, tracked tasks in{" "}
                <strong>JIRA</strong>, managed code in <strong>Git</strong>, and deployed via{" "}
                <strong>CI/CD pipelines</strong>.  
                <br />
                <span className="text-purple-400 text-sm">
                  Languages & Tools: Svelte, JavaScript (ES6), HTML5, CSS3, Git, JIRA
                </span>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Full-Stack Developer – Undigicore Pvt. Ltd.</h4>
              <p className="text-sm text-neutral-400 mb-2">2 Month Internship</p>
              <p className="leading-relaxed text-[15px]">
                Contributed to <strong>synthetic lead generation</strong>,{" "}
                <strong>computer vision</strong> systems, and{" "}
                <strong>predictive maintenance</strong>.  
                Optimized backend algorithms for faster processing and improved API responses,
                while also creating user-friendly dashboards.  
                <br />
                <span className="text-purple-400 text-sm">
                  Languages & Tools: Node.js, Express.js, MongoDB, Python, OpenCV, REST APIs
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
