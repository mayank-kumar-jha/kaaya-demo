"use client";

import { motion } from "motion/react";

export default function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow aura behind phone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] h-[600px] md:w-[400px] md:h-[700px] rounded-[60px] bg-gradient-to-br from-emerald-500/30 via-amber-500/15 to-emerald-600/20 blur-[80px] animate-glow-pulse" />
      </div>

      {/* Phone frame */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ transformStyle: "preserve-3d", transform: "rotateY(3deg) rotateX(2deg)" }}
        >
          {/* Phone bezel */}
          <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-[44px] bg-gradient-to-b from-[#1a1a24] to-[#0d0d14] border border-white/[0.08] shadow-2xl shadow-black/60 overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#0d0d14] rounded-b-2xl z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>

            {/* Inner screen */}
            <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-[#0a0a12]">
              {/* Animated gradient placeholder for video */}
              <div className="w-full h-full relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#0a0a12] to-amber-900/30" />

                {/* Animated orbs */}
                <motion.div
                  animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-emerald-500/20 blur-3xl"
                />
                <motion.div
                  animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-amber-500/15 blur-3xl"
                />

                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center cursor-pointer group shadow-lg shadow-emerald-500/10"
                  >
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white ml-1 group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                  <p className="mt-4 text-xs text-white/40 tracking-widest uppercase font-medium">
                    Watch Demo
                  </p>
                </div>

                {/* Kaaya eye animation hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50"
                  />
                </div>
              </div>
            </div>

            {/* Screen reflection */}
            <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Phone side highlight */}
          <div className="absolute -right-[1px] top-[100px] w-[2px] h-[60px] bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full" />
          <div className="absolute -left-[1px] top-[120px] w-[2px] h-[40px] bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full" />
          <div className="absolute -left-[1px] top-[170px] w-[2px] h-[40px] bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
