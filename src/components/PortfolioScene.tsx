'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUpRightFromSquare, FaChevronDown, FaReact, FaJs, FaGitAlt } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiVite, SiWebpack, SiZod, SiPostman, SiSvelte } from "react-icons/si";
import CourseList from '@/components/CourseList';

// --- Reusable Animation Wrapper ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    title: "Recruitment Scheduling Dashboard (ATS)",
    description: "Data Handling: Architected a scheduling grid designed to manage large candidate datasets, implementing optimized list rendering and pagination for seamless scrolling. \n\nType Safety: Applied strict TypeScript interfaces across the entire data pipeline, effectively catching potential runtime failures before they hit the user's browser. \n\nUI Stability: Managed complex global state using Redux to support multi-step user actions. Ensured that API responses are handled properly, preventing UI flickering and maintaining layout integrity.",
    image: "/images/page.png",
    liveLink: "#",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "E-Learning Web Application",
    description: "Secure full-stack MERN platform. Users can create courses, enroll, and manage progress. Implemented JWT authentication and complex state handling.",
    image: "/images/elearning.png",
    liveLink: "https://e-learning-app-sand.vercel.app/",
    githubLink: "https://github.com/PratikPatidar/eLearning/",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Ecomzy",
    description: "E-Commerce application with product management, authentication, and payment integration. Focused on responsive design and performance.",
    image: "/images/ecomzy.png",
    liveLink: "#",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["React", "Redux", "Tailwind", "REST API"],
  }
];

const skillCategories = [
  {
    title: "Core Engineering",
    skills: ["JavaScript (ES6+)", "TypeScript (Interface-driven)", "HTML5", "CSS3", "DOM manipulation"],
    icon: <FaJs className="text-yellow-400" />
  },
  {
    title: "Frameworks & Architecture",
    skills: ["React.js", "Next.js (SSR)", "SvelteKit"],
    icon: <FaReact className="text-blue-400" />
  },
  {
    title: "State & Data",
    skills: ["Redux Toolkit", "Context API", "Svelte Stores", "Zod schema validation"],
    icon: <SiRedux className="text-purple-500" />
  },
  {
    title: "Tooling & Performance",
    skills: ["Vite/Webpack", "Code-splitting strategies", "Lazy loading"],
    icon: <SiVite className="text-yellow-400" />
  },
  {
    title: "API & Integration",
    skills: ["RESTful APIs", "JWT Authentication", "Async/Await", "AbortController"],
    icon: <SiPostman className="text-orange-500" />
  }
];

export default function PortfolioScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const meshRotate = useTransform(smoothScroll, [0, 1], [0, 90]);
  const meshScale = useTransform(smoothScroll, [0, 0.5, 1], [1, 1.3, 1]);

  return (
    <div ref={containerRef} className="relative">
      
      {/* Interactive Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div className="mouse-follower" style={{ left: mouseX, top: mouseY }} />
        <motion.div 
          className="mesh-bg absolute inset-[-20%]"
          style={{ rotate: meshRotate, scale: meshScale }} 
        />
        <div className="grid-overlay absolute inset-0" />
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]" 
        style={{ scaleX: scrollYProgress }} 
      />

      <div className="relative z-10 w-full px-6">
        <main className="max-w-5xl mx-auto space-y-48">
          
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center relative">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Available for New Projects
              </div>
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-8 text-gradient">
                Pratik<br />Patidar.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed mb-12 font-medium">
                Frontend Engineer with <span className="text-white">1.4+ years of production experience</span> focusing on clean architectures and responsive interfaces.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-wrap gap-6 items-center">
              <a href="mailto:pratikpatidar7990@gmail.com" className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all">
                Let&apos;s Talk
              </a>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/pratik-patidar" target="_blank" rel="noreferrer" className="p-4 glass-card rounded-xl hover:scale-110 transition-transform">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://github.com/pratik-patidar" target="_blank" rel="noreferrer" className="p-4 glass-card rounded-xl hover:scale-110 transition-transform">
                  <FaGithub size={22} />
                </a>
              </div>
            </FadeIn>
            
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-0 text-white/20"
            >
                <FaChevronDown size={24} />
            </motion.div>
          </section>

          {/* Professional Summary Section */}
          <section id="about" className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 01. Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-8 text-3xl md:text-4xl font-bold leading-tight text-gradient">
                  I prioritize <span className="text-accent-gradient">vanilla JavaScript fundamentals</span>—closures, async patterns, and DOM manipulation—before layering on frameworks.
                </div>
                <div className="md:col-span-4 space-y-6 text-lg text-white/40 font-medium pt-4 border-t md:border-t-0 md:border-l border-white/10 md:pl-12">
                  <p>My work centers on building predictable state management.</p>
                  <p>Ensuring UI stability while interacting with complex data structures.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Technical Skills Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 02. Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((cat, i) => (
                  <div key={cat.title} className="p-8 glass-card rounded-[2rem] group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl">{cat.icon}</div>
                      <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-white/5 text-white/60 text-sm font-medium rounded-xl border border-white/5 hover:border-white/20 hover:text-white transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 03. Experience</h2>
              <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
                    <div>
                      <h3 className="text-4xl font-bold mb-2">Frontend Engineer</h3>
                      <p className="text-blue-400 text-xl font-medium">Techstuff Private Limited</p>
                    </div>
                    <p className="text-white/30 font-bold uppercase tracking-widest text-sm">Feb 2025 — Present</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {['SvelteKit', 'TypeScript', 'Tailwind CSS'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-bold text-white/40 rounded-lg border border-white/5 uppercase tracking-tighter">{tech}</span>
                    ))}
                  </div>

                  <ul className="space-y-8 text-xl text-white/50 max-w-4xl leading-relaxed">
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold">01</span>
                        <div>
                            <span className="text-white block mb-1">Rendering Optimization</span>
                            <p className="text-lg">Debugged and resolved layout stutters in data-dense tables by auditing component lifecycles and eliminating unnecessary re-paints.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold">02</span>
                        <div>
                            <span className="text-white block mb-1">State Architecture</span>
                            <p className="text-lg">Enforced predictable state updates and a single source of truth using Svelte Stores, eliminating UI inconsistencies during rapid data updates.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold">03</span>
                        <div>
                            <span className="text-white block mb-1">Performance Engineering</span>
                            <p className="text-lg">Optimized application load times through strategic route-level code-splitting and lazy loading. Minimized asset payload via Vite for faster initial rendering.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold">04</span>
                        <div>
                            <span className="text-white block mb-1">Component Modularity</span>
                            <p className="text-lg">Built a library of reusable, semantic UI components for an enterprise supplier platform. Focused on CSS containment and DOM simplicity to ensure visual stability.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold">05</span>
                        <div>
                            <span className="text-white block mb-1">API Integration</span>
                            <p className="text-lg">Handled complex RESTful API integrations and secure JWT workflows, utilizing AbortController to cancel pending requests, prevent race conditions, and avoid stale data injection.</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Key Projects Section */}
          <section id="projects" className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 04. Selected Work</h2>
              <div className="grid grid-cols-1 gap-12">
                {projects.map((project, index) => (
                  <div key={index} className="group glass-card p-4 rounded-[2rem] flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-[40%] aspect-[4/3] overflow-hidden rounded-2xl relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <div className="w-full md:w-[60%] pr-10 py-6">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">{tag}</span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <div className="text-sm text-white/50 mb-8 space-y-4 whitespace-pre-wrap leading-relaxed">
                        {project.description.split('\n\n').map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-blue-400 transition-colors">
                          Live View <FaArrowUpRightFromSquare size={14} />
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-blue-400 transition-colors">
                          Code <FaGithub size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Education Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 05. Education & Focus</h2>
              <div className="glass-card p-12 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-3xl font-bold mb-2">Bachelor of Technology</h3>
                    <p className="text-xl text-white/60">Computer Science & Engineering</p>
                    <p className="text-lg text-white/40 mt-1">Barkatullah University, Bhopal</p>
                    <div className="mt-6">
                        <p className="text-blue-400 text-3xl font-bold">7.89 CGPA</p>
                        <p className="text-white/30 font-bold uppercase tracking-widest text-sm mt-2">2020 — 2024</p>
                    </div>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12 flex flex-col justify-center">
                    <p className="text-lg text-white/60 mb-4"><span className="text-white font-bold">Languages:</span> English, Hindi.</p>
                    <p className="text-lg text-white/60"><span className="text-white font-bold">Focus:</span> Building efficient, minimal codebases and scalable web interfaces.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Dynamic Data / Homework Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 06. Dynamic Data</h2>
              <div className="p-10 glass-card rounded-[2rem]">
                <CourseList />
              </div>
            </FadeIn>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-32 py-40 text-center">
             <FadeIn>
                <h2 className="text-7xl md:text-9xl font-extrabold mb-12 tracking-tighter text-gradient leading-[0.8]">Start a<br />conversation.</h2>
                <p className="text-2xl text-white/30 max-w-xl mx-auto mb-16 font-medium">
                   Currently open for new opportunities and interesting collaborations.
                </p>
                <div className="flex flex-col items-center gap-8">
                    <a href="mailto:pratikpatidar7990@gmail.com" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all text-xl">
                        Say Hello
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                    </a>
                    <div className="space-y-2">
                        <p className="text-white/20 font-bold uppercase tracking-widest text-xs">pratikpatidar7990@gmail.com</p>
                        <p className="text-white/20 font-bold uppercase tracking-widest text-xs">+91 8269647990</p>
                    </div>
                </div>
             </FadeIn>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
             <p>© 2026 PRATIK PATIDAR</p>
             <div className="flex gap-8">
                <span className="hover:text-blue-500 transition-colors cursor-default">Next.js 16</span>
                <span className="hover:text-blue-500 transition-colors cursor-default">Framer Motion</span>
                <span className="hover:text-blue-500 transition-colors cursor-default">Tailwind CSS</span>
             </div>
          </footer>

        </main>
      </div>
    </div>
  );
}
