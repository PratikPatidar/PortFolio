'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUpRightFromSquare, FaChevronDown, FaReact, FaJs, FaGitAlt } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiVite, SiWebpack, SiZod, SiPostman, SiSvelte } from "react-icons/si";
import CourseList from '@/components/CourseList';
import dynamic from 'next/dynamic';

// Import 3D Background safely
const Background3D = dynamic(() => import('@/components/Background3D'), { ssr: false });

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
    description: "A comprehensive Minimum Viable Product (MVP) engineered from scratch to manage heavy recruitment workflows and candidate tracking.\n\nManaging thousands of candidate rows in the browser is expensive. I designed a highly optimized scheduling grid implementing advanced list rendering and pagination to ensure buttery-smooth scrolling.\n\nMulti-page candidate workflows require rock-solid memory. I wired the global state using Redux, paired with Next.js Server-Side Rendering (SSR) for instant initial loads. Strict TypeScript schemas were enforced to catch data malformations before they ever reached the DOM.",
    image: "/images/page.png",
    liveLink: "#",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "E-Learning Platform",
    description: "A secure full-stack MERN application engineered to make online learning simpler. Users can create courses, enroll, and track their progress effortlessly.\n\nI handled the JWT auth workflows and designed atomic state updates to ensure the application remains stable and predictable under the hood.",
    image: "/images/elearning.png",
    liveLink: "https://e-learning-app-sand.vercel.app/",
    githubLink: "https://github.com/PratikPatidar/eLearning/",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Ecomzy E-Commerce",
    description: "An e-commerce prototype featuring dynamic product listings, cart management, and robust payment integration.\n\nI focused heavily on defensive engineering—ensuring the frontend architecture could gracefully handle API latency and maintain a flawless user experience across all devices.",
    image: "/images/ecomzy.png",
    liveLink: "#",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["React", "Redux", "Tailwind", "REST API"],
  }
];

const skillCategories = [
  {
    title: "The Core",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "DOM Manipulation"],
    icon: <FaJs className="text-yellow-400" />
  },
  {
    title: "The Frameworks",
    skills: ["React.js", "Next.js (SSR)", "SvelteKit"],
    icon: <FaReact className="text-blue-400" />
  },
  {
    title: "State & Data",
    skills: ["Redux Toolkit", "Svelte Stores", "Context API", "Zod Validation"],
    icon: <SiRedux className="text-purple-500" />
  },
  {
    title: "Performance & Tooling",
    skills: ["Vite", "Webpack", "JWT Auth", "RESTful APIs", "GitLab CI/CD"],
    icon: <SiVite className="text-yellow-400" />
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
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <Background3D />
        <motion.div className="mouse-follower pointer-events-none" style={{ left: mouseX, top: mouseY }} />
        <motion.div 
          className="mesh-bg absolute inset-[-20%] pointer-events-none"
          style={{ rotate: meshRotate, scale: meshScale }} 
        />
        <div className="grid-overlay absolute inset-0 pointer-events-none" />
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
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-gradient leading-[1.1]">
                Hi, I'm Pratik Patidar.<br />
                <span className="text-5xl md:text-7xl text-white/80">I don't just build User Interfaces.</span><br />
                <span className="text-5xl md:text-7xl text-accent-gradient">I engineer them for the browser.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed mb-12 font-medium">
                Frontend Engineer | Next.js • React.js • SvelteKit<br/>
                Crafting high-performance, scalable web applications by keeping the main thread free and the state predictable.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-wrap gap-6 items-center">
              <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                🔥 View My Work
              </a>
              <a href="/resume%20(13).pdf" target="_blank" className="px-10 py-4 glass-card text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                📄 Grab My Resume
              </a>
            </FadeIn>
            
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-0 text-white/20"
            >
                <FaChevronDown size={24} />
            </motion.div>
          </section>

          {/* About Me Section */}
          <section id="about" className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 01. Beyond the Frameworks</h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-12 space-y-6 text-xl md:text-2xl text-white/70 font-medium leading-relaxed">
                  <p>In a frontend ecosystem obsessed with the newest tools, I stay grounded in the fundamentals. I am a Frontend Engineer with over a year of rigorous production experience, specializing in complex, data-heavy web applications.</p>
                  <p>While my daily toolkit includes Next.js and SvelteKit, my real focus is on what happens under the hood: memory management, event loops, closures, and DOM optimization. I believe that a great UI is not just about pixel-perfect CSS; it's about handling high-frequency data streams without dropping frames.</p>
                  <p>From resolving deep-rooted asynchronous race conditions to restructuring global state for enterprise dashboards, my goal is always the same: to write code that is as predictable as it is performant.</p>
                  <p>When I am not auditing component lifecycles or slicing Time-to-Interactive (TTI) metrics, you’ll find me exploring scalable frontend architectures and minimalistic design patterns.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Core Philosophy Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 02. How I Build</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 glass-card rounded-[2rem] group hover:scale-[1.02] transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-4">Performance First</h3>
                  <p className="text-white/60 leading-relaxed">Users shouldn't pay the cost of heavy JavaScript. I aggressively implement route-level code splitting, dynamic imports, and lazy loading to keep the initial payload feather-light.</p>
                </div>
                <div className="p-8 glass-card rounded-[2rem] group hover:scale-[1.02] transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-4">Predictable State</h3>
                  <p className="text-white/60 leading-relaxed">A UI should never lie to the user. I design atomic, strictly controlled state architectures using Redux and Svelte Stores to ensure a single, unquestionable source of truth.</p>
                </div>
                <div className="p-8 glass-card rounded-[2rem] group hover:scale-[1.02] transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-4">Defensive Engineering</h3>
                  <p className="text-white/60 leading-relaxed">The network is unpredictable. I build robust API layers utilizing strict TypeScript interfaces and AbortControllers to prevent race conditions, stale data, and silent runtime crashes.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 03. Where I've Made an Impact</h2>
              <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
                    <div>
                      <h3 className="text-4xl font-bold mb-2">Frontend Engineer <span className="text-blue-400">@ Techstuff Private Limited</span></h3>
                      <p className="text-white/50 text-lg font-medium">Timeline: Feb 2025 - Present</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Svelte Stores'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-bold text-white/40 rounded-lg border border-white/5 uppercase tracking-tighter">{tech}</span>
                    ))}
                  </div>

                  <ul className="space-y-8 text-xl text-white/60 max-w-4xl leading-relaxed">
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">✦</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">The Project</span>
                            <p className="text-lg">Core contributor to 'Mercanis', an enterprise-scale supplier management platform handling massive datasets and multi-step user workflows.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">✦</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">The Challenge</span>
                            <p className="text-lg">The application suffered from layout stutters during rapid data updates, and unpredictable API latency caused severe race conditions in dashboard filters.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">✦</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">The Solution</span>
                            <p className="text-lg">I audited the component tree to eliminate unnecessary re-paints and enforced a strict state architecture using Svelte Stores. To secure the network layer, I integrated `AbortController` systems to cancel pending requests during rapid user interactions.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">✦</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">The Impact</span>
                            <p className="text-lg">Successfully eliminated data inconsistencies and optimized asset delivery via Vite, shrinking the Time-to-Interactive (TTI) by an impressive 35%.</p>
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
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 04. Code in Action</h2>
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
                      <div className="text-base text-white/60 mb-8 space-y-4 whitespace-pre-wrap leading-relaxed">
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

          {/* Technical Skills Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 05. The Tech Arsenal</h2>
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
                <h2 className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tighter text-gradient leading-[1.1]">Let's build something solid together.</h2>
                <p className="text-xl text-white/60 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                   I am currently open to new opportunities where I can tackle complex frontend scaling challenges and contribute to a fast-paced, engineering-first team. If you're looking for a developer who understands both the user experience and the browser engine, we should talk.
                </p>
                <div className="flex flex-col items-center gap-8">
                    <a href="mailto:pratikpatidar7990@gmail.com" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all text-xl">
                        Say Hello
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                    </a>
                    <div className="flex gap-6 text-white/40 font-bold uppercase tracking-widest text-xs">
                        <a href="mailto:pratikpatidar7990@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
                        <span>|</span>
                        <a href="https://linkedin.com/in/pratik-patidar" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                        <span>|</span>
                        <a href="https://github.com/pratik-patidar" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
                    </div>
                </div>
             </FadeIn>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
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
