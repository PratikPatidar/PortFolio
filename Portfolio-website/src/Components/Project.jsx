import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import eLearning from "./images/elearning.png";
import ecomzy from "./images/ecomzy.png";
import Page from "./images/page.png";

const projects = [
  {
    title: "E-Learning Web Application",
    description:
      "A secure full-stack E-Learning platform to simplify learning. Users can create courses, enroll, and manage their learning progress.",
    image: eLearning,
    liveLink: "https://e-learning-app-sand.vercel.app/",
    githubLink: "https://github.com/PratikPatidar/eLearning/",
    tags: ["MERN", "JWT", "JavaScript", "Vercel", "bcryptjs", "Tailwind CSS", "Render"],
  },
  {
    title: "Ecomzy",
    description:
      "E-Commerce app for buying & selling products with authentication, cart, and payment integration.",
    image: ecomzy,
    liveLink: "",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["Node.js", "MongoDB", "Framer Motion", "Material-UI", "Tailwind CSS", "React", "shadcn/ui"],
  },
  {
    title: "Modern SaaS Landing Page",
    description:
      "Landing page built with Tailwind, TypeScript, and Framer Motion for engaging UI animations.",
    image: Page,
    liveLink: "https://landing-page-rho-hazel.vercel.app/",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["Node.js", "React.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with location search, animated icons, and 5-day forecast using OpenWeatherMap API.",
    image: eLearning,
    liveLink: "#",
    githubLink: "#",
    tags: ["React", "Tailwind CSS", "API", "Framer Motion"],
  },
  {
    title: "Markdown Notes App",
    description:
      "Simple note-taking app with live markdown preview and local storage persistence.",
    image: eLearning,
    liveLink: "#",
    githubLink: "#",
    tags: ["React", "Tailwind CSS", "Markdown"],
  },
  {
    title: "Expense Tracker",
    description:
      "Track daily expenses, filter by category, and view monthly spending trends with charts.",
    image: eLearning,
    liveLink: "#",
    githubLink: "#",
    tags: ["React", "Tailwind CSS", "Chart.js"],
  },
];

const Projects = () => {
  return (
    <section
      className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16"
      id="project"
    >
      <h2 className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center text-white mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] border border-neutral-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="overflow-hidden rounded-lg">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-52 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </div>
            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
              <a
                href={project.liveLink}
                className="text-xl font-bold text-white hover:text-purple-400"
              >
                {project.title}
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:scale-110 size-6 text-white" />
              </a>
            </div>
            <p className="px-3 text-neutral-400 italic">{project.description}</p>
            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2">
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#2e2e2e] px-3 py-1 w-fit rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
