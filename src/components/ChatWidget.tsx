'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hi! 👋 I'm Pratik's Digital Twin. I know all about his code, experience, and skills. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: messages })
      });

      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "Sorry, I'm having trouble connecting to the brain right now. Please try again later!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[320px] sm:w-[380px] bg-[#0c0c0e]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-white/5"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="h-16 bg-gradient-to-r from-white/5 to-transparent border-b border-white/10 flex items-center justify-between px-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    AI
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#0c0c0e] rounded-full shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                </div>
                <div>
                  <h3 className="text-white text-base font-bold tracking-wide">Pratik's Digital Twin</h3>
                  <p className="text-green-400 text-[11px] font-medium flex items-center gap-1.5 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`max-w-[85%] px-5 py-3 text-[15px] leading-relaxed whitespace-pre-wrap shadow-md ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white self-end rounded-2xl rounded-tr-sm' 
                      : 'bg-white/5 border border-white/10 text-gray-200 self-start rounded-2xl rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-white/5 border border-white/10 text-gray-200 self-start rounded-2xl rounded-tl-sm px-5 py-4 text-sm flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-md">
              <form onSubmit={handleSend} className="relative flex items-center group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my experience..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white disabled:opacity-50 disabled:grayscale transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-0.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center text-white transition-all duration-500 hover:scale-110 active:scale-95 border border-white/20 z-10 ${isOpen ? 'bg-white/10 backdrop-blur-md rotate-90' : 'bg-blue-600'}`}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              <path d="M8 9h8M8 13h6" opacity="0.7"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
