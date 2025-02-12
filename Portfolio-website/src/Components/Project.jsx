import { FaGithub } from "react-icons/fa6"
// import Image from "next/image"
import eLearning from "./images/elearning.png"
import Bytes from "./images/bytes.png"
import ecomzy from "./images/ecomzy.png"
import Chattr from "./images/chattr.png"
import Page from "./images/page.png"
// import Link from "next/link"

const projects = [
          {
                    title: "E-Learning Web Application",
                    description:
                              "A secure full-stack  E-Learning web application , to simplify learning experience. It allows users to create their own courses, enroll in existing courses and manage their course enrollment status.",
                    image: eLearning,
                    liveLink: "https://e-learning-app-sand.vercel.app/",
                    githubLink: "https://github.com/PratikPatidar/eLearning/",
                    tags: [
                              "MERN",
                              "JWT",
                              "JavaScript",
                              "Vercel",
                              "bcryptjs",
                              "Tailwind CSS",
                              "Render"
                    ]
          },

          {
                    title: "Ecomzy",
                    description:
                              "E-Commerce web application for buying and selling products. It includes user authentication, product listing, cart functionality, and payment integration.",
                    image: ecomzy,
                    liveLink: "",
                    githubLink: "https://github.com/PratikPatidar",
                    tags: [
                              "Node.js",
                              "MongoDB",
                              "Framer-Motion",
                              "Material-UI",
                              "Tailwand CSS",
                              "React js",
                              "shadcn/ui"
                    ]
          },

          {
                    title: "Modern SaaS Landing Page",
                    description:
                              "A modern SaaS landing page using Tailwind CSS, TypeScript, Next.js, and Framer Motion to create a visually appealing user interface with engaging animations.",
                    image: Page,
                    liveLink: "https://landing-page-rho-hazel.vercel.app/",
                    githubLink: "https://github.com/PratikPatidar",
                    tags: ["Node.js", "React.js", "Framer Motion", "Tailwind CSS", "TypeScript"]
          },
]

const Projects = () => {
          return (
                    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16 " id="project">
                              <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
                                        Projects
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {projects.map((project, index) => (
                                                  <div
                                                            key={index}
                                                            className="bg-foreground border-neutral-600 border-2 rounded-xl p-4"
                                                  >
                                                            <div className="overflow-hidden rounded-lg">
                                                                      <a href-={project.liveLink} target="_blank">
                                                                                <img
                                                                                          src={project.image}
                                                                                          alt={project.title}
                                                                                          className="rounded-lg "
                                                                                />
                                                                      </a>
                                                            </div>
                                                            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
                                                                      <a
                                                                                href={project.liveLink}
                                                                                className="text-2xl font-bold font-inter"
                                                                      >
                                                                                {project.title}
                                                                      </a>
                                                                      <div to={project.githubLink} target="_blank">
                                                                                <FaGithub className="hover:scale-110 size-6" />
                                                                      </div>
                                                            </div>
                                                            <div className="px-3 text-neutral-400 italic">
                                                                      {project.description}
                                                            </div>
                                                            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
                                                                      {project.tags.map((tag, tagIndex) => (
                                                                                <div
                                                                                          key={tagIndex}
                                                                                          className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full"
                                                                                >
                                                                                          {tag}
                                                                                </div>
                                                                      ))}
                                                            </div>
                                                  </div>
                                        ))}
                              </div>
                    </div>
          )
}

export default Projects
