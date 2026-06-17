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
    title: "Recruitment Scheduling Dashboard",
    description: "I built this scheduling grid from the ground up to handle massive lists of candidates without lagging. It uses virtualized lists and smart pagination to keep scrolling butter-smooth.\n\nTo keep things from breaking, I locked down our entire data pipeline with strict TypeScript interfaces—which honestly saved us from countless runtime errors.\n\nFor the UI, I managed the global state using Redux so that multi-step user actions felt seamless, ensuring the screen didn't flicker every time an API call fired.",
    image: "/images/page.png",
    liveLink: "#",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "E-Learning Platform",
    description: "A full-stack MERN application I built to make online learning simpler. It lets users create courses, enroll, and track their progress effortlessly.\n\nI handled the JWT auth workflows and made sure the state management was rock solid under the hood.",
    image: "/images/elearning.png",
    liveLink: "https://e-learning-app-sand.vercel.app/",
    githubLink: "https://github.com/PratikPatidar/eLearning/",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Ecomzy E-Commerce",
    description: "An e-commerce prototype featuring dynamic product listings, cart management, and payment integration.\n\nI focused heavily on making the design fully responsive and keeping the performance snappy.",
    image: "/images/ecomzy.png",
    liveLink: "#",
    githubLink: "https://github.com/PratikPatidar",
    tags: ["React", "Redux", "Tailwind", "REST API"],
  }
];

const skillCategories = [
  {
    title: "Core Engineering",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "DOM manipulation"],
    icon: <FaJs className="text-yellow-400" />
  },
  {
    title: "Frameworks & Architecture",
    skills: ["React.js", "Next.js (SSR)", "SvelteKit"],
    icon: <FaReact className="text-blue-400" />
  },
  {
    title: "State & Data",
    skills: ["Redux Toolkit", "Context API", "Svelte Stores", "Zod validation"],
    icon: <SiRedux className="text-purple-500" />
  },
  {
    title: "Tooling & Performance",
    skills: ["Vite/Webpack", "Code-splitting", "Lazy loading"],
    icon: <SiVite className="text-yellow-400" />
  },
  {
    title: "API & Integration",
    skills: ["REST APIs", "JWT Auth", "Async/Await", "AbortController"],
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
        <Background3D />
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
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-12 font-medium">
                Frontend Engineer with over a year of production experience, mostly building fast, clean, and scalable web apps.
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
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 01. Who I Am</h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-8 text-3xl md:text-4xl font-bold leading-tight text-gradient">
                  I&apos;m a developer who actually cares about <span className="text-accent-gradient">how things work under the hood.</span>
                </div>
                <div className="md:col-span-4 space-y-6 text-lg text-white/60 font-medium pt-4 border-t md:border-t-0 md:border-l border-white/10 md:pl-12">
                  <p>Before jumping into the latest shiny frameworks, I made sure to really understand vanilla JavaScript—stuff like closures, async logic, and how the DOM actually behaves.</p>
                  <p>Day-to-day, my biggest focus is keeping state predictable and making sure the UI doesn&apos;t crash when dealing with messy data.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Technical Skills Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 02. What I Use</h2>
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
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 03. What I've Done</h2>
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

                  <ul className="space-y-8 text-xl text-white/60 max-w-4xl leading-relaxed">
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">01</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">Making Things Fast</span>
                            <p className="text-lg">Spent a lot of time debugging data-heavy tables that were lagging. By digging into component lifecycles and cutting out useless re-renders, I managed to get the layouts scrolling smoothly again.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">02</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">Fixing the State</span>
                            <p className="text-lg">Refactored our state management using Svelte Stores to create a single, reliable source of truth. This finally put an end to weird UI bugs caused by rapid data updates.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">03</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">Cutting the Fat</span>
                            <p className="text-lg">Sped up our initial load times by aggressively lazy-loading routes and splitting our code so users only download what they actually need.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">04</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">Building the Blocks</span>
                            <p className="text-lg">Put together a clean, reusable component library from scratch for our supplier platform, focusing heavily on keeping the DOM simple and CSS scoped.</p>
                        </div>
                    </li>
                    <li className="flex gap-6 items-start group/item">
                        <span className="text-blue-500 font-bold mt-1">05</span>
                        <div>
                            <span className="text-white block mb-1 font-bold">Taming APIs</span>
                            <p className="text-lg">Wrote the integration layer for our REST APIs and JWT auth. I also wired up abort controllers to kill pending requests, which fixed a bunch of race conditions we were having with stale data.</p>
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

          {/* Education Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 05. Education & Focus</h2>
              <div className="glass-card p-12 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-3xl font-bold mb-2">Bachelor of Technology</h3>
                    <p className="text-xl text-white/70">Computer Science & Engineering</p>
                    <p className="text-lg text-white/50 mt-1">Barkatullah University, Bhopal</p>
                    <div className="mt-6">
                        <p className="text-blue-400 text-3xl font-bold">7.89 CGPA</p>
                        <p className="text-white/30 font-bold uppercase tracking-widest text-sm mt-2">2020 — 2024</p>
                    </div>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12 flex flex-col justify-center">
                    <p className="text-lg text-white/70 mb-4"><span className="text-white font-bold">Languages:</span> English, Hindi.</p>
                    <p className="text-lg text-white/70"><span className="text-white font-bold">Focus:</span> Building efficient, minimal codebases and scalable web interfaces.</p>
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
                <p className="text-2xl text-white/40 max-w-xl mx-auto mb-16 font-medium">
                   Currently open for new opportunities and interesting collaborations.
                </p>
                <div className="flex flex-col items-center gap-8">
                    <a href="mailto:pratikpatidar7990@gmail.com" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all text-xl">
                        Say Hello
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                    </a>
                    <div className="space-y-2">
                        <p className="text-white/30 font-bold uppercase tracking-widest text-xs">pratikpatidar7990@gmail.com</p>
                        <p className="text-white/30 font-bold uppercase tracking-widest text-xs">+91 8269647990</p>
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
