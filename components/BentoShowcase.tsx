"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

interface BentoCardProps {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index: number;
}

function BentoCard({ image, title, description, icon, className = "", index }: BentoCardProps) {
  return (
    <ScrollReveal delay={index * 0.15} className={className}>
      <TiltCard tiltAmount={6} className="h-full">
        {/* subcard-hover uses CSS transform only — GPU-composited, no layout reflow */}
        <div className="group relative h-full rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a0a12] cursor-pointer subcard-hover">
          {/* Image */}
          <div className="relative w-full h-full min-h-[280px] md:min-h-[320px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors duration-300">
                {icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-sm md:text-base text-[#9ca3af] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Hover border glow */}
          <div className="absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/25 transition-all duration-500 pointer-events-none" />
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}

const features = [
  {
    image: "/images/bento-texture-1.png",
    title: "Frontier Intelligence",
    description:
      "5-model Gemini waterfall with Groq fallback ensures 99.9% AI availability. Token-by-token streaming with 11 built-in function-calling tools for zero-wait responses.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    image: "/images/bento-texture-2.png",
    title: "Seamless Ecosystem",
    description:
      "Deep WhatsApp integration via Baileys, native phone calls, alarms, music, and app launching — all driven by natural language from a persistent floating overlay.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    image: "/images/bento-texture-3.png",
    title: "Living Personality",
    description:
      "SoraEyes — animated eyes with 7 expressive states: idle blinking, attentive listening, thoughtful thinking, expressive speaking, and more. A face that feels alive.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
];

const capabilities = [
  { icon: "💬", label: "WhatsApp" },
  { icon: "📞", label: "Calls" },
  { icon: "🎵", label: "Music" },
  { icon: "⏰", label: "Alarms" },
  { icon: "🎨", label: "Image Gen" },
  { icon: "🧠", label: "Memory" },
  { icon: "🌐", label: "Web Search" },
  { icon: "👁️", label: "Vision" },
  { icon: "🎙️", label: "Voice" },
  { icon: "📱", label: "Apps" },
];

export default function BentoShowcase() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Not Just an AI.{" "}
            <span className="gradient-text">Your Digital Executive.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#9ca3af]">
            Unlike traditional chatbots confined to a single app, Kaaya operates system-wide
            — seeing your screen, controlling your phone, and remembering everything through
            vector-embedded long-term memory.
          </p>
        </ScrollReveal>

        {/* Capability pills */}
        <ScrollReveal delay={0.2} className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-white/70 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors duration-300 cursor-default"
              >
                <span>{cap.icon}</span>
                <span>{cap.label}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large card spans 2 cols */}
          <BentoCard {...features[0]} index={0} className="lg:col-span-2" />
          <BentoCard {...features[1]} index={1} className="lg:col-span-1" />
          <BentoCard {...features[2]} index={2} className="lg:col-span-1" />

          {/* Stats card */}
          <ScrollReveal delay={0.45} className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8 h-full subcard-hover">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Powered by Model Waterfall</h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">
                    Kaaya tries up to 5 Gemini models in sequence before falling back to Groq Llama-3.3 70B.
                    Every response is streamed token-by-token for instant feedback with automatic tool deduplication.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Gemini 2.5 Flash", "Gemini 2.0 Flash", "Gemini 3 Flash", "Gemini 2.5 Lite", "Groq 70B"].map(
                    (model, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.06] text-white/60 whitespace-nowrap cursor-default hover:text-white/90 hover:bg-violet-500/8 hover:border-violet-500/30 transition-colors"
                      >
                        {model}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
