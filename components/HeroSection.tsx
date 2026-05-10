"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import AnimatedCounter from "./AnimatedCounter";

// Load MagicRings client-only (it uses WebGL)
const MagicRings = dynamic(() => import("./MagicRings"), { ssr: false });

const stats = [
  { value: "5+", label: "AI Models" },
  { value: "11", label: "Built-in Tools" },
  { value: "7", label: "Eye Expressions" },
  { value: "99.9%", label: "Uptime" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* MagicRings WebGL background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <MagicRings
          color="#10b981"
          colorTwo="#f59e0b"
          ringCount={6}
          speed={0.7}
          attenuation={12}
          lineThickness={1.5}
          baseRadius={0.3}
          radiusStep={0.12}
          scaleRate={0.08}
          opacity={0.85}
          noiseAmount={0.05}
          ringGap={1.6}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.08}
          hoverScale={1.1}
          parallax={0.03}
        />
      </div>

      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-Native Hyper-Assistant
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]"
        >
          <span className="gradient-text">Kaaya</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white/90 tracking-tight"
        >
          The Intelligent Digital Executive Assistant
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#9ca3af] leading-relaxed"
        >
          Orchestrating your digital ecosystem with state-of-the-art multimodal AI
          — WhatsApp, calls, memory, vision, and native device control from a
          single floating overlay.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/mayank-kumar-jha/sora.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-500 hover:from-emerald-500 hover:to-amber-500"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Get Started
            </span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white/80 border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            Explore Features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </motion.div>


        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-center cursor-default"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="mt-1 text-xs text-[#9ca3af] tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none" />
    </section>
  );
}
