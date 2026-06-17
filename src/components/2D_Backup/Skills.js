import React from "react";
import { motion } from "framer-motion";
import TechStackButton from "./ui/TechStackButton";

const Skills = () => {
  const skillCategories = [
    {
      title: "🌟 Frontend Engineering",
      skills: [
        { name: "React.js", icon: "bg-cyan-400", url: "https://reactjs.org/" },
        { name: "Next.js", icon: "bg-black", url: "https://nextjs.org/" },
        { name: "JavaScript (ES6+)", icon: "bg-yellow-300", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", icon: "bg-blue-600", url: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", icon: "bg-lime-500", url: "https://tailwindcss.com/" },
        { name: "Redux/Toolkit", icon: "bg-purple-600", url: "https://redux.js.org/" },
        { name: "React Query", icon: "bg-rose-500", url: "https://tanstack.com/query/latest" },
      ],
    },
    {
      title: "💎 Backend & Databases",
      skills: [
        { name: "Node.js", icon: "bg-green-600", url: "https://nodejs.org/" },
        { name: "Express.js", icon: "bg-gray-600", url: "https://expressjs.com/" },
        { name: "MongoDB", icon: "bg-green-500", url: "https://www.mongodb.com/" },
        { name: "REST APIs", icon: "bg-emerald-500", url: "https://en.wikipedia.org/wiki/Representational_state_transfer" },
      ],
    },
    {
      title: "⚡ Real-time & Payments",
      skills: [
        { name: "WebSockets (Socket.io)", icon: "bg-indigo-500", url: "https://socket.io/" },
        { name: "Razorpay SDK", icon: "bg-blue-400", url: "https://razorpay.com/" },
        { name: "Payment Reconciliation", icon: "bg-yellow-600", url: "#" },
      ],
    },
    {
      title: "🛠 Tools, Monitoring & Testing",
      skills: [
        { name: "Git/GitHub", icon: "bg-gray-800", url: "https://github.com/" },
        { name: "Jest/RTL", icon: "bg-red-500", url: "https://jestjs.io/" },
        { name: "Cypress", icon: "bg-emerald-600", url: "https://www.cypress.io/" },
        { name: "Sentry", icon: "bg-purple-800", url: "https://sentry.io/" },
        { name: "Lighthouse", icon: "bg-orange-500", url: "https://developers.google.com/web/tools/lighthouse" },
        { name: "Webpack", icon: "bg-blue-500", url: "https://webpack.js.org/" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 sm:px-16 py-16 text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      {/* Skill Categories */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] rounded-lg p-6 shadow-md hover:shadow-purple-500/30 transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              {category.title}
            </h3>
            <div className="flex gap-2 flex-wrap">
              {category.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:scale-105"
                >
                  <TechStackButton name={skill.name} icon={skill.icon} />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
