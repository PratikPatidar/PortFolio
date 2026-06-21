'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ChatWidget from '@/components/ChatWidget';
import { FaGithub } from "react-icons/fa6";

// Dynamically import the entire scene to ensure it only runs on the client.
// We are using a stable 2D Framer Motion architecture.
const PortfolioScene = dynamic(() => import('@/components/PortfolioScene'), { 
  ssr: false,
  loading: () => <div className="h-screen bg-[#030303] flex items-center justify-center text-white font-bold tracking-widest uppercase text-xs">Initializing Portfolio...</div>
});

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen bg-[#030303] flex items-center justify-center text-white font-bold tracking-widest uppercase text-xs">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c0c0e]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <span className="font-bold tracking-[0.3em] text-xs text-white">PRATIK PATIDAR</span>
          <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest uppercase text-white/50">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <button onClick={() => window.dispatchEvent(new Event('open-resume'))} className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">Resume</button>
            <a href="#contact" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <PortfolioScene />
      
      {/* Floating Chat Support Widget */}
      <ChatWidget />
    </div>
  );
}
