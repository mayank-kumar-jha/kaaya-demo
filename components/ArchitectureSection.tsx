"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ScrollReveal from "./ScrollReveal";

/* ────── Architecture Nodes ────── */
interface ArchNode {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
  color: string;
  x: number;
  y: number;
}

const nodes: ArchNode[] = [
  // Column 1
  { id: "user", label: "User Input", sublabel: "Voice · Text · Vision · Screen", icon: "👤", color: "#10b981", x: 120, y: 220 },
  // Column 2
  { id: "overlay", label: "Android Overlay", sublabel: "1,800+ lines Kotlin · SoraEyes", icon: "📱", color: "#34d399", x: 350, y: 80 },
  { id: "nodejs", label: "Node.js Backend", sublabel: "Express · Socket.IO · 13 Services", icon: "⚡", color: "#f59e0b", x: 350, y: 220 },
  { id: "dashboard", label: "Web Dashboard", sublabel: "Global Centralized Control", icon: "📊", color: "#d4a843", x: 350, y: 360 },
  // Column 3
  { id: "gemini", label: "Gemini Intelligence", sublabel: "2.5 Flash · Waterfall · Tools", icon: "🧠", color: "#10b981", x: 580, y: 80 },
  { id: "pinecone", label: "Pinecone RAG", sublabel: "768-dim Vectors · Long-term", icon: "🔍", color: "#f59e0b", x: 580, y: 220 },
  { id: "services", label: "Ecosystem Services", sublabel: "WhatsApp · TTS · Image Gen", icon: "🌐", color: "#d4a843", x: 580, y: 360 },
];

/* ────── Connections ────── */
interface Connection {
  from: string;
  to: string;
  path: string;
  color: string;
}

const connections: Connection[] = [
  // From User
  { from: "user", to: "overlay", path: "M 210 220 C 240 220, 240 80, 260 80", color: "#10b981" },
  { from: "user", to: "nodejs", path: "M 210 220 L 260 220", color: "#f59e0b" },
  // Vertical Node.js connections
  { from: "overlay", to: "nodejs", path: "M 350 120 L 350 180", color: "#34d399" },
  { from: "nodejs", to: "dashboard", path: "M 350 260 L 350 320", color: "#d4a843" },
  // From Node.js out to Col 3
  { from: "nodejs", to: "gemini", path: "M 440 220 C 470 220, 470 80, 490 80", color: "#10b981" },
  { from: "nodejs", to: "pinecone", path: "M 440 220 L 490 220", color: "#f59e0b" },
  { from: "nodejs", to: "services", path: "M 440 220 C 470 220, 470 360, 490 360", color: "#d4a843" },
  // Top vertical connection
  { from: "pinecone", to: "gemini", path: "M 580 180 L 580 120", color: "#34d399" },
];

function AnimatedConnection({ path, color, delay, isInView }: { path: string; color: string; delay: number; isInView: boolean }) {
  return (
    <motion.path
      d={path}
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeOpacity={0.4}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
    />
  );
}

function PulsingDot({ cx, cy, color, delay }: { cx: number; cy: number; color: string; delay: number }) {
  return (
    <>
      <motion.circle
        cx={cx}
        cy={cy}
        r={3}
        fill={color}
        animate={{ r: [3, 5, 3], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r={3}
        fill="none"
        stroke={color}
        strokeWidth={1}
        animate={{ r: [5, 12, 5], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      />
    </>
  );
}

function ArchitectureNode({ node, delay, isInView }: { node: ArchNode; delay: number; isInView: boolean }) {
  return (
    <motion.foreignObject
      x={node.x - 90}
      y={node.y - 40}
      width={180}
      height={80}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="glass-card-hover p-3 flex items-start gap-3 h-full" style={{ borderRadius: '12px' }}>
        <span className="text-xl mt-0.5 shrink-0">{node.icon}</span>
        <div className="min-w-0">
          <p className="text-xs font-bold text-white leading-tight truncate">{node.label}</p>
          <p className="text-[10px] text-[#9ca3af] leading-tight mt-1">{node.sublabel}</p>
        </div>
      </div>
    </motion.foreignObject>
  );
}

/* ────── Tech Stack Grid ────── */
const techCategories = [
  {
    title: "AI & ML",
    color: "#10b981",
    items: ["Gemini 2.5 Flash", "Gemini 2.0 Flash", "Groq Llama-3.3 70B", "FLUX.1 Schnell", "Deepgram Aura TTS", "Groq Whisper STT"],
  },
  {
    title: "Backend",
    color: "#f59e0b",
    items: ["Node.js 20+", "Express.js", "Socket.IO", "Prisma ORM", "PostgreSQL 16", "Redis 7"],
  },
  {
    title: "Mobile",
    color: "#d4a843",
    items: ["React Native 0.81", "Expo 54", "Kotlin Overlay", "Reanimated 4", "Three.js + R3F", "TypeScript"],
  },
  {
    title: "Infrastructure",
    color: "#34d399",
    items: ["Render Cloud", "Pinecone Vector DB", "Stripe Billing", "Docker Compose", "JWT Auth", "Nginx"],
  },
];

export default function ArchitectureSection() {
  const svgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-4">
            System Design
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The Architecture Behind{" "}
            <span className="gradient-text">Kaaya</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#9ca3af]">
            Event-driven, real-time communication over Socket.IO and raw WebSocket.
            A full-stack AI-native system from device overlay to vector database.
          </p>
        </ScrollReveal>

        {/* Architecture Diagram — Desktop */}
        <ScrollReveal className="mb-20 hidden lg:block">
          <div
            ref={svgRef}
            className="relative glass-card p-8 overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

            <svg viewBox="0 0 700 440" className="w-full h-auto block max-w-[850px] mx-auto" fill="none">
              {/* Grid background lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h${i}`} x1={0} y1={i * 40} x2={700} y2={i * 40} stroke="rgba(255,255,255,0.02)" strokeWidth={1} />
              ))}
              {Array.from({ length: 18 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={440} stroke="rgba(255,255,255,0.02)" strokeWidth={1} />
              ))}

              {/* Connections */}
              {connections.map((conn, i) => (
                <AnimatedConnection
                  key={conn.from + conn.to}
                  path={conn.path}
                  color={conn.color}
                  delay={0.3 + i * 0.15}
                  isInView={isInView}
                />
              ))}

              {/* Pulsing dots at node positions */}
              {nodes.map((node, i) => (
                <PulsingDot
                  key={node.id}
                  cx={node.x + 75}
                  cy={node.y - 25}
                  color={node.color}
                  delay={i * 0.3}
                />
              ))}

              {/* Architecture Nodes */}
              {nodes.map((node, i) => (
                <ArchitectureNode
                  key={node.id}
                  node={node}
                  delay={0.2 + i * 0.1}
                  isInView={isInView}
                />
              ))}
            </svg>
          </div>
        </ScrollReveal>

        {/* Architecture Diagram — Mobile (stacked cards) */}
        <div className="lg:hidden mb-16 space-y-3">
          {nodes.map((node, i) => (
            <ScrollReveal key={node.id} delay={i * 0.1}>
              <div className="glass-card-hover p-4 flex items-center gap-4" style={{ borderRadius: '12px' }}>
                <span className="text-2xl shrink-0">{node.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white">{node.label}</p>
                  <p className="text-xs text-[#9ca3af] mt-0.5">{node.sublabel}</p>
                </div>
                <div
                  className="ml-auto w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: node.color, boxShadow: `0 0 12px ${node.color}60` }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div id="tech-stack">
          <ScrollReveal className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-4">
              Technology
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Complete Tech Stack
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {techCategories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.1}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.color, boxShadow: `0 0 12px ${cat.color}60` }}
                    />
                    <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                      {cat.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[#9ca3af] flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
