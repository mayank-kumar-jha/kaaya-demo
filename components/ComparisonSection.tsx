"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "motion/react";

const comparisons = [
  { feature: "System-wide overlay", kaaya: true, traditional: false },
  { feature: "Native device control", kaaya: true, traditional: false },
  { feature: "Screen understanding", kaaya: true, traditional: false },
  { feature: "WhatsApp integration", kaaya: true, traditional: false },
  { feature: "Real-time voice", kaaya: true, traditional: false },
  { feature: "Long-term memory", kaaya: true, traditional: false },
  { feature: "Image generation", kaaya: true, traditional: false },
  { feature: "Animated personality", kaaya: true, traditional: false },
];

const advantages = [
  {
    icon: "🛡️",
    title: "Never Goes Down",
    description: "5-model Gemini waterfall + Groq fallback ensures 99.9%+ AI availability.",
    color: "#10b981",
  },
  {
    icon: "⚡",
    title: "Native-First UX",
    description: "1,800+ lines of Kotlin for a buttery-smooth overlay experience.",
    color: "#f59e0b",
  },
  {
    icon: "🎭",
    title: "Emotional Connection",
    description: "SoraEyes with blinking, looking, and glow create an animated personality.",
    color: "#34d399",
  },
  {
    icon: "🔮",
    title: "True Multimodal",
    description: "Text, voice, vision, image gen, and device control in one interface.",
    color: "#d4a843",
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#d4a843" }}>
            Why Kaaya
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Beyond Traditional{" "}
            <span className="gradient-text">Chatbots</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Comparison table */}
          <ScrollReveal>
            <div className="glass-card p-6 md:p-8 h-full">
              <h3 className="text-lg font-bold text-white mb-6">Feature Comparison</h3>
              <div className="space-y-1">
                {/* Header */}
                <div className="grid grid-cols-[1fr_80px_80px] gap-2 pb-3 border-b border-white/[0.06]">
                  <span className="text-xs text-[#9ca3af] uppercase tracking-wider">Feature</span>
                  <span className="text-xs text-emerald-400 uppercase tracking-wider text-center">Kaaya</span>
                  <span className="text-xs text-[#9ca3af] uppercase tracking-wider text-center">Others</span>
                </div>
                {comparisons.map((row, i) => (
                  <motion.div
                    key={row.feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="grid grid-cols-[1fr_80px_80px] gap-2 py-2.5 border-b border-white/[0.03] last:border-0"
                  >
                    <span className="text-sm text-white/80">{row.feature}</span>
                    <span className="text-center">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </span>
                    <span className="text-center">
                      <span className="text-red-400/60 text-sm">✗</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Advantages */}
          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <ScrollReveal key={adv.title} delay={i * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-5 flex items-start gap-4 cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 border"
                    style={{
                      backgroundColor: `${adv.color}10`,
                      borderColor: `${adv.color}25`,
                    }}
                  >
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{adv.title}</h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">{adv.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* By the Numbers */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-10">
            <h3 className="text-lg font-bold text-white mb-8 text-center">By the Numbers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { value: "13", label: "Service Modules" },
                { value: "11", label: "AI Tools" },
                { value: "1,800+", label: "Lines of Kotlin" },
                { value: "6", label: "TTS Voices" },
                { value: "5+1", label: "Model Waterfall" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#9ca3af] tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
