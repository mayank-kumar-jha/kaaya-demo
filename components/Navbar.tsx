"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "GitHub", href: "https://github.com/mayank-kumar-jha/sora.ai", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-3xl rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-[#050507]/70 backdrop-blur-2xl border-white/[0.08] shadow-lg shadow-black/40"
            : "bg-[#050507]/40 backdrop-blur-xl border-white/[0.05] shadow-md shadow-black/20"
        }`}
      >
        <div className="flex items-center justify-between h-13 px-4 py-2">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-300">
              <span className="text-white font-bold text-xs">K</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
            <span className="gradient-text font-bold text-lg tracking-tight">Kaaya</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="px-3.5 py-1.5 text-sm text-[#9ca3af] hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://github.com/mayank-kumar-jha/sora.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-amber-500 transition-all duration-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[#9ca3af] hover:text-white transition-colors" aria-label="Open menu">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
