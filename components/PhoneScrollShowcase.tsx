"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import dynamic from "next/dynamic";
import ScrollReveal from "./ScrollReveal";

const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0a0a12]/50" />
});

const slides = [
  {
    src: "/screenshots/idle.png",
    badge: "Always On",
    title: "Kaaya — Idle State",
    description:
      "Kaaya rests as a lightweight floating overlay. SoraEyes gently blink and breathe, signalling it's alive and ready — without interrupting your workflow.",
    accent: "#10b981",
    icon: "🌙",
  },
  {
    src: "/screenshots/what-is-kaaya.png",
    badge: "Natural Language",
    title: "Ask Anything",
    description:
      'Simply ask "What is Kaaya?" and receive a fully streamed, context-aware response. No apps to switch, no search bar — just conversation.',
    accent: "#34d399",
    icon: "💬",
  },
  {
    src: "/screenshots/voice-mode.png",
    badge: "Gemini Live",
    title: "Real-Time Voice",
    description:
      "Native 16kHz PCM audio streaming powers instant bidirectional voice. Talk to Kaaya as naturally as you would a person — zero lag.",
    accent: "#f59e0b",
    icon: "🎙️",
  },
  {
    src: "/screenshots/whatsapp.png",
    badge: "Deep Integration",
    title: "WhatsApp Control",
    description:
      'Say "Send good morning to Mom" and it\'s done. Kaaya manages your WhatsApp via Baileys — messages, contacts, and AI-drafted replies.',
    accent: "#25D366",
    icon: "📱",
  },
  {
    src: "/screenshots/memory.png",
    badge: "RAG Memory",
    title: "Remembers Everything",
    description:
      "Pinecone-backed vector memory with 768-dim Gemini embeddings. Upload PDFs, save notes, store contacts — semantically recalled whenever you need them.",
    accent: "#d4a843",
    icon: "🧠",
  },
  {
    src: "/screenshots/image-gen.png",
    badge: "FLUX.1 Schnell",
    title: "AI Image Generation",
    description:
      "Generate stunning visuals in 4 inference steps with FLUX.1 Schnell. Edit existing images with InstructPix2Pix — all rendered inside the overlay.",
    accent: "#a855f7",
    icon: "🎨",
  },
];

export default function PhoneScrollShowcase() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const go = (idx: number) => {
    setDir(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () => go(active === 0 ? slides.length - 1 : active - 1);
  const next = () => go(active === slides.length - 1 ? 0 : active + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((prevIdx) => (prevIdx === slides.length - 1 ? 0 : prevIdx + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [active]);

  const slide = slides[active];

  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
            See It In Action
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            From Idle to <span className="gradient-text">Intelligent</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#9ca3af]">
            Walk through every mode of Kaaya — from a quiet overlay to a full
            multimodal powerhouse.
          </p>
        </ScrollReveal>

        {/* Card — slides in on scroll, motion.div IS the card container */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, transform: "translateY(48px)" }}
          animate={cardInView ? { opacity: 1, transform: "translateY(0px)" } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity", background: "rgba(10,10,18,0.85)" }}
          className="relative rounded-3xl border border-white/[0.07] overflow-hidden"
        >
          {/* Spline 3D Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Spline scene="https://prod.spline.design/LeiSX9GFZYtowyGR/scene.splinecode" />
          </div>
          {/* Ambient glow */}
          <motion.div
            key={active}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
            style={{ backgroundColor: slide.accent }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-8 lg:p-14">
            {/* Screenshot */}
            <div className="relative flex-shrink-0">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/[0.08]"
                style={{ width: 260, height: 520 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: dir * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -24 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-cover object-top"
                      sizes="260px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Glow under phone */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full blur-xl opacity-40"
                style={{ backgroundColor: slide.accent }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: dir * 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: dir * -16 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Badge */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-6 border"
                    style={{
                      backgroundColor: `${slide.accent}18`,
                      borderColor: `${slide.accent}40`,
                      color: slide.accent,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: slide.accent }}
                    />
                    {slide.badge}
                  </span>

                  {/* Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border flex-shrink-0"
                      style={{
                        backgroundColor: `${slide.accent}12`,
                        borderColor: `${slide.accent}30`,
                      }}
                    >
                      {slide.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {slide.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#9ca3af] text-base md:text-lg leading-relaxed mb-8">
                    {slide.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-32 rounded-full mb-8"
                    style={{
                      background: `linear-gradient(to right, ${slide.accent}, transparent)`,
                    }}
                  />

                  {/* Slide tabs */}
                  <div className="flex flex-wrap gap-2">
                    {slides.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => go(i)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border"
                        style={{
                          backgroundColor:
                            i === active ? `${s.accent}20` : "transparent",
                          borderColor:
                            i === active ? `${s.accent}50` : "rgba(255,255,255,0.06)",
                          color: i === active ? s.accent : "#6b7280",
                        }}
                      >
                        <span>{s.icon}</span>
                        <span className="hidden sm:inline">{s.badge}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div className="absolute bottom-5 right-8 text-xs text-white/20 tracking-widest font-mono z-20">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
