"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "GitHub", href: "https://github.com/mayank-kumar-jha/sora.ai", external: true },
];

function LetsTalkButton({ size = "md" }: { size?: "sm" | "md" }) {
  const [open, setOpen] = useState(false);
  const isSmall = size === "sm";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`group inline-flex items-center gap-1.5 font-medium rounded-full border transition-all duration-300
          ${isSmall
            ? "px-3.5 py-1.5 text-sm text-white/70 border-white/10 hover:border-violet-500/40 hover:text-white hover:bg-violet-500/8"
            : "px-5 py-2 text-sm text-white/70 border-white/10 hover:border-violet-500/40 hover:text-white hover:bg-violet-500/8"
          }`}
      >
        <span>Let&apos;s Talk</span>
        <svg
          className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isSmall ? "w-3 h-3" : "w-3.5 h-3.5"}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full mt-3 right-0 md:left-1/2 md:-translate-x-1/2 z-50 w-64 rounded-2xl border border-white/10 bg-[#0d0d14]/95 backdrop-blur-xl shadow-2xl shadow-black/60 p-5"
            >
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-violet-400 mb-4">
                Contact
              </p>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919899177436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 mb-2 group"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-[#9ca3af] uppercase tracking-wide">Message</p>
                  <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">WhatsApp</p>
                </div>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mayank-kumar-jha-368015350/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-[#9ca3af] uppercase tracking-wide">Connect</p>
                  <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors truncate">LinkedIn</p>
                </div>
              </a>
              {/* Arrow */}
              <div className="absolute -top-1.5 right-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rotate-45 bg-[#0d0d14] border-l border-t border-white/10" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for eyes
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Blinking state
  const [isBlinking, setIsBlinking] = useState(false);
  const expandTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking and window size
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Random blinking logic
  useEffect(() => {
    const blink = () => {
      // 5% chance to blink every 200ms feels natural
      if (Math.random() > 0.95) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150); // Blink duration
        
        // Sometimes double blink
        if (Math.random() > 0.7) {
          setTimeout(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
          }, 300);
        }
      }
    };

    const interval = setInterval(blink, 200);
    return () => clearInterval(interval);
  }, []);

  // Calculate eye offsets based on mouse position relative to center of screen
  const maxEyeMove = 4; // max pixels the pupil can move
  const eyeOffsetX = windowSize.width ? ((mousePos.x / windowSize.width) - 0.5) * maxEyeMove * 2 : 0;
  const eyeOffsetY = windowSize.height ? ((mousePos.y / windowSize.height) - 0.5) * maxEyeMove * 2 : 0;

  // Handle hover delays to prevent flickering
  const handleMouseEnter = () => {
    if (expandTimeoutRef.current) clearTimeout(expandTimeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    expandTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200); // Small delay before collapsing
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.nav
        layout
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // Allows tap on mobile to expand
        onClick={() => setIsHovered(true)}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className={`pointer-events-auto overflow-hidden rounded-full border transition-colors duration-500 flex items-center justify-center relative
          ${isHovered ? "w-full max-w-4xl h-14" : "w-28 h-12 md:w-32 md:h-12 cursor-pointer"}
          ${!isHovered
            ? "bg-black/80 backdrop-blur-3xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : scrolled
              ? "bg-[#050507]/90 backdrop-blur-2xl border-white/[0.08] shadow-lg shadow-black/40"
              : "bg-[#050507]/60 backdrop-blur-xl border-white/[0.05] shadow-md shadow-black/20"
        }`}
      >
        <AnimatePresence mode="wait">
          {!isHovered ? (
            // CAPSULE STATE (Eyes)
            <motion.div
              key="capsule"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-3 w-full h-full"
            >
              {/* Left Eye */}
              <div 
                className="w-3.5 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center relative overflow-hidden transition-transform duration-100"
                style={{ transform: `scaleY(${isBlinking ? 0.1 : 1})` }}
              >
                <motion.div 
                  className="w-2 h-3 rounded-full bg-cyan-400 absolute shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                  animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </div>
              {/* Right Eye */}
              <div 
                className="w-3.5 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center relative overflow-hidden transition-transform duration-100"
                style={{ transform: `scaleY(${isBlinking ? 0.1 : 1})` }}
              >
                <motion.div 
                  className="w-2 h-3 rounded-full bg-cyan-400 absolute shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                  animate={{ x: eyeOffsetX, y: eyeOffsetY }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </div>
            </motion.div>
          ) : (
            // EXPANDED STATE (Original Navbar)
            <motion.div
              key="navbar"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center justify-between w-full px-4 h-full"
            >
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 group shrink-0">
                <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow duration-300">
                  <span className="text-white font-bold text-xs relative z-10">K</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </div>
                <span className="font-bold text-lg tracking-tight hidden sm:block">Kaaya</span>
              </a>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group relative px-3.5 py-1.5 text-sm text-[#9ca3af] hover:text-white rounded-full transition-all duration-300 hover:bg-white/[0.05]"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-4 bg-violet-400/60 transition-all duration-300 rounded-full" />
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-2 shrink-0">
                {/* GitHub button - hidden on small mobile */}
                <a
                  href="https://github.com/mayank-kumar-jha/sora.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex group items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-violet-700 to-violet-600 text-white hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-400 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35"
                >
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>

                {/* Let's Talk button */}
                <LetsTalkButton size="sm" />
                
                {/* Mobile menu button */}
                <button className="md:hidden ml-1 p-1 text-[#9ca3af] hover:text-white transition-colors" aria-label="Open menu">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
