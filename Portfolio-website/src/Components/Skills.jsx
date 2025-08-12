import React from "react";
import { motion } from "framer-motion";
import TechStackButton from "./ui/TechStackButton";

const Skills = () => {
  const skillCategories = [
    {
      title: "🌟 Frontend",
      skills: [
        { name: "React", icon: "bg-cyan-400", url: "https://reactjs.org/" },
        { name: "Next.js", icon: "bg-black", url: "https://nextjs.org/" },
        { name: "JavaScript", icon: "bg-yellow-300", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", icon: "bg-rose-400", url: "https://www.typescriptlang.org/" },
        { name: "HTML5", icon: "bg-orange-500", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { name: "CSS3", icon: "bg-blue-400", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Tailwind CSS", icon: "bg-lime-200", url: "https://tailwindcss.com/" },
        { name: "Material UI", icon: "bg-indigo-400", url: "https://mui.com/" },
        { name: "Framer Motion", icon: "bg-fuchsia-400", url: "https://www.framer.com/motion/" },
        { name: "shadcn/ui", icon: "bg-stone-300", url: "https://ui.shadcn.com/" },
        { name: "WordPress", icon: "bg-cyan-600", url: "https://wordpress.org/" },
      ],
    },
    {
      title: "💎 Backend",
      skills: [
        { name: "Node.js", icon: "bg-green-400", url: "https://nodejs.org/" },
        { name: "Express.js", icon: "bg-indigo-500", url: "https://expressjs.com/" },
        { name: "Java", icon: "bg-pink-500", url: "https://www.oracle.com/java/" },
        { name: "C", icon: "bg-violet-500", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        { name: "REST API", icon: "bg-emerald-400", url: "https://en.wikipedia.org/wiki/Representational_state_transfer" },
        { name: "GraphQL", icon: "bg-purple-500", url: "https://graphql.org/" },
      ],
    },
    {
      title: "🌍 Database",
      skills: [
        { name: "PostgreSQL", icon: "bg-teal-500", url: "https://www.postgresql.org/" },
        { name: "MongoDB", icon: "bg-green-500", url: "https://www.mongodb.com/" },
        { name: "SQL", icon: "bg-orange-400", url: "https://en.wikipedia.org/wiki/SQL" },
        { name: "Firebase", icon: "bg-amber-500", url: "https://firebase.google.com/" },
        { name: "FaunaDB", icon: "bg-pink-400", url: "https://fauna.com/" },
      ],
    },
    {
      title: "🛠 Tools & Platforms",
      skills: [
        { name: "Git", icon: "bg-lime-200", url: "https://git-scm.com/" },
        { name: "GitHub", icon: "bg-blue-500", url: "https://github.com/" },
        { name: "GitLab", icon: "bg-orange-500", url: "https://about.gitlab.com/" },
        { name: "Vercel", icon: "bg-red-500", url: "https://vercel.com/" },
        { name: "Bitbucket", icon: "bg-blue-700", url: "https://bitbucket.org/" },
        { name: "Jira", icon: "bg-indigo-400", url: "https://www.atlassian.com/software/jira" },
        { name: "Figma", icon: "bg-pink-500", url: "https://figma.com/" },
      ],
    },
    {
      title: "🚀 Testing",
      skills: [
        { name: "Jest", icon: "bg-yellow-400", url: "https://jestjs.io/" },
        { name: "Cypress", icon: "bg-green-400", url: "https://www.cypress.io/" },
        { name: "React Testing Library", icon: "bg-blue-400", url: "https://testing-library.com/docs/react-testing-library/intro/" },
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
