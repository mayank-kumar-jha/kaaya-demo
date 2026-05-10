"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "motion/react";

const featureBlocks = [
  {
    icon: "🤖",
    title: "Intelligent AI Chat",
    description: "Streaming token-by-token responses with function calling, image understanding, and context-aware conversations. Automatic tool deduplication across model retries.",
    highlight: "11 built-in tools",
    color: "#10b981",
  },
  {
    icon: "🎙️",
    title: "Gemini Live — Real-Time Voice",
    description: "Bidirectional real-time voice powered by native Kotlin AudioRecord for raw 16kHz PCM capture. 24kHz PCM output with Aoede voice for natural conversations.",
    highlight: "Native WSS streaming",
    color: "#f59e0b",
  },
  {
    icon: "💬",
    title: "WhatsApp Integration",
    description: "Full WhatsApp connectivity via Baileys — QR code or pairing code. Prisma-backed session persistence, smart contact resolution, and AI-driven messaging.",
    highlight: "\"Send goodmorning to Mom\"",
    color: "#34d399",
  },
  {
    icon: "🧠",
    title: "RAG Memory",
    description: "Long-term memory through Pinecone vector database with 768-dim Gemini embeddings. Upload PDFs, save notes, store contacts — semantic search across everything.",
    highlight: "Personal knowledge base",
    color: "#f59e0b",
  },
  {
    icon: "🎨",
    title: "AI Image Generation",
    description: "Text-to-image with FLUX.1 Schnell (4-step inference) and image editing with InstructPix2Pix. Generated images rendered directly in the floating overlay.",
    highlight: "\"Make it look like a cartoon\"",
    color: "#d4a843",
  },
  {
    icon: "👁️",
    title: "Screen Capture & Vision",
    description: "MediaProjection API for screenshot capture with base64 encoding. Gemini analyzes what's on your screen in real-time. Nuclear persistence survives service restarts.",
    highlight: "\"What's on my screen?\"",
    color: "#10b981",
  },
];

const overlayStates = [
  { state: "Idle", eyes: "Normal blinking, micro-jitter, occasional glances", color: "#9ca3af" },
  { state: "Listening", eyes: "Enlarged, alert, rhythmic pulsing", color: "#10b981" },
  { state: "Thinking", eyes: "Upward offset, tilted, nervous jitter", color: "#f59e0b" },
  { state: "Speaking", eyes: "Large, expressive, talking animation", color: "#34d399" },
  { state: "Capturing", eyes: "Focused, scanning mode", color: "#d4a843" },
  { state: "Live", eyes: "Gemini Live voice mode, real-time streaming", color: "#fbbf24" },
];

export default function FeaturesDeepDive() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-4">
            Deep Dive
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Every Feature,{" "}
            <span className="gradient-text">Production-Ready</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#9ca3af]">
            13 service modules. 8 API route modules. 6 Prisma models.
            Battle-tested against ephemeral filesystem corruption, container rebuilds, and network failures.
          </p>
        </ScrollReveal>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
          {featureBlocks.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 h-full group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 border transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${feat.color}10`,
                      borderColor: `${feat.color}25`,
                    }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{feat.title}</h3>
                    <p className="text-sm text-[#9ca3af] leading-relaxed mb-3">{feat.description}</p>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase"
                      style={{
                        backgroundColor: `${feat.color}12`,
                        color: feat.color,
                        border: `1px solid ${feat.color}30`,
                      }}
                    >
                      {feat.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* The Overlay — Kaaya's Living Face */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left — Description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg">
                    🎭
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">The Living Overlay</h3>
                    <p className="text-xs text-[#9ca3af]">Kaaya&apos;s Crown Jewel UX</p>
                  </div>
                </div>
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
                  A native Android floating overlay — 1,800+ lines of Kotlin — that persists on top of all apps.
                  SoraEyes feature animated eyes with breathing glow, random blinking, and micro-jitter that makes
                  Kaaya feel alive even in idle state. Three sizes: Compact, Mini, and Half-screen.
                </p>

                {/* Creator credit */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-xs font-bold text-white">
                    MJ
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Created by Mayank Kumar Jha</p>
                    <p className="text-[10px] text-[#9ca3af]">Internal Codename: Sora · v2.0.0</p>
                  </div>
                </div>
              </div>

              {/* Right — Overlay states */}
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9ca3af] mb-4">
                  Eye Animation States
                </p>
                <div className="space-y-2">
                  {overlayStates.map((s, i) => (
                    <ScrollReveal key={s.state} delay={i * 0.08} direction="right" distance={20}>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                        <div
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: s.color, boxShadow: `0 0 10px ${s.color}50` }}
                        />
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-white">{s.state}</span>
                          <span className="text-xs text-[#9ca3af] ml-2">{s.eyes}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
