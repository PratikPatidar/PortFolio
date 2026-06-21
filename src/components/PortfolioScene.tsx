'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUpRightFromSquare, FaChevronDown, FaArrowDown, FaReact, FaJs, FaGitAlt, FaNetworkWired, FaPaperPlane } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiVite, SiWebpack, SiZod, SiPostman, SiSvelte } from "react-icons/si";
import dynamic from 'next/dynamic';

// Import 3D Background safely
const Background3D = dynamic(() => import('@/components/Background3D'), { ssr: false });

// --- Reusable Animation Wrapper ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "50px" }}
    transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    title: "Recruitment Scheduling Dashboard",
    type: "Enterprise Project",
    description: "Built a scheduling grid that handles large amounts of data. Added virtualization so users can scroll smoothly without lag.\n\nUsed TypeScript extensively to catch bugs early before they reach production.\n\nHandled complex user interactions carefully so that live status updates don't cause the screen to flicker or layout to jump.",
    image: "/images/ats_dashboard.jpg",
    liveLink: "#",
    githubLink: "#",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Authentication & State (E-Learning)",
    description: "A full-stack app focused on building a secure JWT authentication flow and protecting private routes.\n\nUsed Redux to keep the login state stable across the app and implemented proper token handling to keep user sessions secure from cross-site attacks.",
    image: "/images/elearning.png",
    liveLink: "https://e-learning-app-sand.vercel.app/",
    githubLink: "https://github.com/PratikPatidar/eLearning/",
    tags: ["React", "Redux", "JWT", "Node.js"],
  },
  {
    title: "Trip Now",
    type: "Web Application",
    description: "A modern travel and booking platform built to provide seamless user experiences. Features include responsive design, engaging UI, and smooth navigation for trip planning.\n\nOptimized for performance and built with modern frontend tools to ensure a fast and reliable user journey.",
    image: "/images/tripnow.png",
    liveLink: "https://tripnow-gray.vercel.app/",
    githubLink: "https://github.com/PratikPatidar/TripNow.git",
    tags: ["React", "Tailwind CSS", "Vite", "REST APIs"],
  }
];

const skillCategories = [
  {
    title: "Core Engineering",
    skills: ["JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: <FaJs className="text-yellow-400" />
  },
  {
    title: "Frameworks & Arch.",
    skills: ["React", "Next.js", "SvelteKit"],
    icon: <FaReact className="text-blue-400" />
  },
  {
    title: "State & Data",
    skills: ["Redux Toolkit", "Svelte Stores", "Zod Schema Validation"],
    icon: <SiRedux className="text-purple-500" />
  },
  {
    title: "Tooling & Performance",
    skills: ["Vite", "Webpack", "Code-splitting", "Bundle Optimization"],
    icon: <SiVite className="text-yellow-400" />
  },
  {
    title: "Integration",
    skills: ["RESTful APIs", "Swagger", "WebSockets", "JWT Authentication"],
    icon: <FaNetworkWired className="text-green-400" />
  },
  {
    title: "AI & Dev Tools",
    skills: ["Cursor", "Claude", "Gemini"],
    icon: <span className="text-purple-400 font-bold text-2xl">✦</span>
  },
  {
    title: "Workflow & Design",
    skills: ["Git & GitLab", "Jira (Agile)", "Figma", "Confluence"],
    icon: <FaGithub className="text-white" />
  }
];

export default function PortfolioScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
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

  useEffect(() => {
    const handleOpenResume = () => setIsResumeOpen(true);
    window.addEventListener("open-resume", handleOpenResume);
    return () => window.removeEventListener("open-resume", handleOpenResume);
  }, []);

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
        <main className="max-w-5xl mx-auto space-y-48 p-6">
          
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center relative pt-20">
            <FadeIn>
              <h2 className="text-blue-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6">
                Frontend Engineer
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-white leading-none">
                Pratik <br className="md:hidden" />
                <span className="text-white/40">Patidar.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base text-white/50 max-w-2xl leading-relaxed mb-10 font-medium">
                I’m a Frontend Engineer who loves building fast, reliable web apps. I care deeply about clean code, strong JavaScript fundamentals, and creating user experiences that actually feel good to use.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all text-xs whitespace-nowrap shrink-0">
                  <FaPaperPlane className="text-blue-500 group-hover:rotate-12 transition-transform" /> Let's Talk
                </a>
                <button onClick={() => setIsResumeOpen(true)} className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 glass-card font-bold rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-xs shrink-0">
                  <span className="text-white/70 group-hover:text-white transition-colors">Resume</span>
                </button>
                <div className="flex gap-3 sm:gap-4 shrink-0">
                  <a href="https://linkedin.com/in/pratik-patidar" target="_blank" rel="noreferrer" className="p-4 sm:p-5 glass-card rounded-full hover:bg-white/10 hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-white/70 hover:text-white">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/pratik-patidar" target="_blank" rel="noreferrer" className="p-4 sm:p-5 glass-card rounded-full hover:bg-white/10 hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-white/70 hover:text-white">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-16 md:mt-24">
               <a href="#about" aria-label="Scroll down" className="inline-flex flex-col items-center gap-3 text-white/30 hover:text-white/80 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
                  <FaArrowDown size={16} className="animate-bounce" />
               </a>
            </FadeIn>
            
          </section>

          {/* About Me Section */}
          <section id="about" className="scroll-mt-32 max-w-4xl">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 01. Beyond the Frameworks</h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-12 space-y-6 text-sm text-white/70 font-medium leading-relaxed">
                  <p>I’m a Frontend Engineer who genuinely cares about how things work under the hood. While it's easy to get caught up in the hype of new frameworks, I've spent my time building production applications by focusing heavily on the fundamentals: memory management, closures, and keeping the DOM lean.</p>
                  <p>My daily toolkit includes Next.js, React, and SvelteKit, but my real job is making sure the user experience doesn't break when an app is flooded with real-time data. I actually enjoy fixing the annoying stuff—whether that’s tracking down a weird layout stutter, cleaning up a messy global state, or figuring out why a page is taking too long to load.</p>
                  <p>To me, great engineering is about making complex things feel simple and predictable. When I'm not writing code, I'm usually reading up on software architecture or experimenting with new ways to make web apps feel native and lightning fast.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Core Philosophy Section */}
          <section className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 02. How I Build</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 md:p-8 glass-card rounded-[2rem] group hover:scale-[1.02] transition-transform">
                  <h3 className="text-base font-bold text-white mb-3">Performance First</h3>
                  <p className="text-white/60 text-xs leading-relaxed">Users shouldn't have to wait. I focus on keeping the initial load as light as possible using code splitting and lazy loading so the app feels fast on any device.</p>
                </div>
                <div className="p-6 md:p-8 glass-card rounded-[2rem] group hover:scale-[1.02] transition-transform">
                  <h3 className="text-base font-bold text-white mb-3">Predictable State</h3>
                  <p className="text-white/60 text-xs leading-relaxed">A UI should never lie to the user. I keep application state clean and strictly controlled using tools like Redux and Svelte Stores so the data displayed is always accurate.</p>
                </div>
                <div className="p-6 md:p-8 glass-card rounded-[2rem] group hover:scale-[1.02] transition-transform">
                  <h3 className="text-base font-bold text-white mb-3">Defensive Coding</h3>
                  <p className="text-white/60 text-xs leading-relaxed">The network is unpredictable. I build safe API layers using TypeScript and proper error handling to prevent weird glitches and silent crashes when things go wrong.</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-32">
            <FadeIn>
              <div className="mb-16">
                <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-4 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-blue-500"></span>
                  / 03. Experience
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-white">Where I've Made an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Impact</span></h3>
              </div>
              
              <div className="relative flex flex-col gap-12 md:gap-16">
                {/* Global Timeline Line (Desktop only) */}
                <div className="absolute left-[1.15rem] top-12 bottom-12 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent hidden md:block opacity-30"></div>

                {/* Undigicore Combined Experience */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex mt-12 z-10 w-10 justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-all duration-500 ring-4 ring-[#0c0c0e]" />
                  </div>
                  
                  <div className="glass-card flex-1 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group-hover:-translate-y-2 transition-all duration-500 border border-white/5 group-hover:border-purple-500/30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] group-hover:bg-purple-500/20 transition-colors duration-700" />
                    
                    <div className="relative z-10">
                      <div className="mb-10">
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Frontend Engineer</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-sm text-purple-400 font-medium">@ Undigicore</p>
                          <span className="px-2 py-0.5 bg-white/10 text-white/50 rounded text-[10px] font-bold uppercase tracking-wider">Remote</span>
                        </div>
                      </div>
                      
                      {/* Timeline Progression Container */}
                      <div className="relative pl-6 mb-12">
                        <div className="absolute left-0 top-3 bottom-3 w-px bg-white/20"></div>
                        
                        {/* Intern Phase */}
                        <div className="relative mb-8 group/phase">
                          <div className="absolute -left-[29px] top-2.5 w-3 h-3 rounded-full bg-[#0c0c0e] border-2 border-white/40 group-hover/phase:border-purple-400 transition-colors z-10"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="font-bold text-base text-white group-hover/phase:text-purple-300 transition-colors">Frontend Engineering Intern</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs font-bold uppercase tracking-wider w-fit">Aug 2023 - Nov 2023</span>
                          </div>
                        </div>

                        {/* Freelance Phase */}
                        <div className="relative group/phase">
                          <div className="absolute -left-[29px] top-2.5 w-3 h-3 rounded-full bg-[#0c0c0e] border-2 border-purple-500 group-hover/phase:bg-purple-500 transition-colors z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="font-bold text-base text-white group-hover/phase:text-purple-300 transition-colors">Freelance Frontend Engineer</span>
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-300/80 rounded-full text-xs font-bold uppercase tracking-wider w-fit">Jul 2024 - Dec 2024</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-10">
                        {['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Responsive Design'].map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-white/5 text-xs font-semibold text-white/60 rounded-xl border border-white/5">{tech}</span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-purple-500">✦</span> Bug Resolution & Reliability</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Collaborated with the development team to identify, document, and resolve multiple bugs, leading to a smoother and more reliable user experience.</p>
                        </div>
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-purple-500">✦</span> UI/UX Optimization</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Conducted functional and UI/UX testing, providing actionable feedback that enhanced product performance. Improved product usability by identifying and reporting edge cases during testing.</p>
                        </div>
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-purple-500">✦</span> Team Collaboration</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Worked closely with mentors and senior developers to understand workflows, debug issues, and suggest improvements.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Techstuff Experience */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex mt-12 z-10 w-10 justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-all duration-500 ring-4 ring-[#0c0c0e]" />
                  </div>
                  
                  <div className="glass-card flex-1 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group-hover:-translate-y-2 transition-all duration-500 border border-white/5 group-hover:border-blue-500/30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Frontend Engineer</h3>
                          <div className="flex items-center gap-3">
                            <p className="text-sm text-blue-400 font-medium">@ Techstuff Private Limited</p>
                            <span className="px-2 py-0.5 bg-white/10 text-white/50 rounded text-xs font-bold uppercase tracking-wider">Indore</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1">
                          <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">Present</span>
                          <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mt-1">Started Feb 2025</span>
                        </div>
                      </div>
                      
                      {/* Timeline Progression Container */}
                      <div className="relative pl-6 mb-12">
                        <div className="absolute left-0 top-3 bottom-3 w-px bg-white/20"></div>
                        
                        {/* Intern Phase */}
                        <div className="relative mb-8 group/phase">
                          <div className="absolute -left-[29px] top-2.5 w-3 h-3 rounded-full bg-[#0c0c0e] border-2 border-white/40 group-hover/phase:border-blue-400 transition-colors z-10"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="font-bold text-base text-white group-hover/phase:text-blue-300 transition-colors">Frontend Engineering Intern</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs font-bold uppercase tracking-wider w-fit">Feb 2025 - Jul 2025</span>
                          </div>
                        </div>

                        {/* Full-Time Phase */}
                        <div className="relative group/phase">
                          <div className="absolute -left-[29px] top-2.5 w-3 h-3 rounded-full bg-[#0c0c0e] border-2 border-blue-500 group-hover/phase:bg-blue-500 transition-colors z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="font-bold text-base text-white group-hover/phase:text-blue-300 transition-colors">Full-Time Frontend Engineer</span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-300/80 rounded-full text-xs font-bold uppercase tracking-wider w-fit">Aug 2025 - Present</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-10">
                        {['Next.js', 'SvelteKit', 'TypeScript', 'Tailwind CSS'].map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-white/5 text-xs font-semibold text-white/60 rounded-xl border border-white/5">{tech}</span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-blue-500">✦</span> Rendering Optimization</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Debugged and resolved layout stutters in data-dense tables by auditing component lifecycles and eliminating unnecessary re-paints. Shifted heavy computations out of the main thread to keep UI interactions responsive under load.</p>
                        </div>
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-blue-500">✦</span> State Architecture</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Replaced loose state patterns with atomic transactions using Svelte Stores. This eliminated race conditions during rapid data stream updates and ensured the UI state always mirrors the source of truth.</p>
                        </div>
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-blue-500">✦</span> Performance Engineering</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Reduced Time-to-Interactive (TTI) by 35% through aggressive code-splitting at route boundaries. Optimized asset delivery via Vite to minimize payload size for low-bandwidth connections.</p>
                        </div>
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-blue-500">✦</span> Component Modularity</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Built a library of reusable, semantic UI components. Focused on CSS containment and DOM simplicity to ensure visual stability even as dashboard complexity scales.</p>
                        </div>
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-blue-500">✦</span> API Integration</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Implemented custom WebSocket handlers to manage real-time status updates, ensuring efficient event delegation and graceful degradation when API latency spikes.</p>
                        </div>
                        <div className="space-y-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all">
                          <h4 className="text-white font-bold flex items-center gap-2"><span className="text-blue-500">✦</span> Agile & Workflows</h4>
                          <p className="text-white/60 text-xs leading-relaxed">Collaborated with Senior Engineers on Agile Sprint Planning and technical feature scoping. Managed daily Merge Request (MR) code reviews, enforcing strict Git branching workflows and maintaining high code quality.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </section>

          {/* Key Projects Section */}
          <section id="projects" className="scroll-mt-32">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-12">/ 04. Code in Action</h2>
              <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                  <div key={index} className="group glass-card p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center hover:border-white/20 transition-all duration-500">
                    
                    {/* LEFT: Name and Image */}
                    <div className="w-full md:w-[35%] flex flex-col gap-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <div className="w-full aspect-video overflow-hidden rounded-[1rem] relative border border-white/5 shrink-0">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-[#0c0c0e]/30 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    </div>

                    {/* RIGHT: Summary, Tech Stack, and Links */}
                    <div className="w-full md:w-[65%] flex flex-col gap-4 h-full">
                      <div className="flex flex-wrap gap-2">
                        {project.type && <span className="px-3 py-1 bg-white/5 text-[10px] font-bold text-white/70 rounded-full uppercase tracking-wider flex items-center gap-1.5"><FaNetworkWired /> {project.type}</span>}
                      </div>
                      
                      <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-2 my-2">
                        {project.tags.map((tech) => (
                          <span key={tech} className="text-[10px] font-semibold text-white/40 px-2 py-1 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-white/5">
                        {project.liveLink !== "#" && (
                          <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-6 py-3 bg-white text-black rounded-full hover:scale-105 active:scale-95 transition-transform">
                            Live View <FaArrowUpRightFromSquare size={12} />
                          </a>
                        )}
                        {project.githubLink !== "#" && (
                          <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 active:scale-95 transition-colors">
                            Source <FaGithub size={12} />
                          </a>
                        )}
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
                      <div className="text-2xl">{cat.icon}</div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-white/5 text-white/60 text-xs font-medium rounded-xl border border-white/5 hover:border-white/20 hover:text-white transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <FadeIn>
              <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tighter">Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Together</span></h2>
                  <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">
                     I am currently open to new opportunities where I can tackle complex frontend scaling challenges and contribute to a fast-paced, engineering-first team.
                  </p>
                  <div className="flex flex-col items-center gap-8">
                      <form 
                        className="w-full max-w-2xl mx-auto flex flex-col gap-4 text-left"
                        onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const name = formData.get('name');
                          const subject = formData.get('subject');
                          const message = formData.get('message');
                          window.location.href = `mailto:pratikpatidar7990@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Hi Pratik,\n\nI am ${name}.\n\n${message}`)}`;
                        }}
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                           <input required name="name" type="text" placeholder="Your Name" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium" />
                           <input required name="subject" type="text" placeholder="Subject" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium" />
                        </div>
                        <textarea required name="message" placeholder="Your Message..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none font-medium"></textarea>
                        
                        <button type="submit" className="mt-4 w-full md:w-auto md:self-end inline-flex items-center justify-center px-12 py-5 bg-white text-black font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-sm">
                            Send Message
                        </button>
                      </form>
                  </div>
                </div>
                </div>
             </FadeIn>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
             <p>© 2026 PRATIK PATIDAR</p>
             <div className="flex items-center gap-8">
                <a href="https://github.com/PratikPatidar/PortFolio" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-white/50"><FaGithub size={14} className="inline-block" /> View Source</a>
                <span className="hover:text-blue-500 transition-colors cursor-default">Next.js 16</span>
                <span className="hover:text-blue-500 transition-colors cursor-default">Framer Motion</span>
                <span className="hover:text-blue-500 transition-colors cursor-default">Tailwind CSS</span>
             </div>
          </footer>

        </main>
      </div>

      {/* Resume Viewer Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0c0c0e]/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10 bg-black/20">
            <h2 className="text-base md:text-lg font-bold text-white tracking-widest uppercase">Pratik Patidar <span className="text-blue-500 opacity-60 hidden sm:inline">- Resume</span></h2>
            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="/resume.pdf" 
                download="Pratik_Patidar_Resume.pdf"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-full transition-colors flex items-center gap-2 tracking-wider"
              >
                <FaArrowDown size={14} />
                Download
              </a>
              <button 
                onClick={() => setIsResumeOpen(false)} 
                className="text-white/50 hover:text-white font-bold text-xs tracking-widest uppercase transition-colors"
              >
                Close
              </button>
            </div>
          </div>
          <div className="flex-1 w-full h-full p-4 md:p-8 overflow-hidden">
             <iframe 
               src="/resume.pdf#toolbar=0" 
               className="w-full h-full rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-white/5" 
               title="Resume PDF Viewer"
             />
          </div>
        </div>
      )}
    </div>
  );
}
