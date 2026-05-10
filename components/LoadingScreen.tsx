"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const Orb = dynamic(() => import("./Orb"), { ssr: false });

interface LoadingScreenProps {
  // When forceMount is true, the component is owned by page.tsx which replaces
  // it with <main> — so we just play animations, no self-unmounting needed.
  forceMount?: boolean;
}

export default function LoadingScreen({ forceMount = false }: LoadingScreenProps) {
  type Phase = "fadein" | "visible" | "fadeout";
  const [phase, setPhase] = useState<Phase>("fadein");
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    // Fade in: 0 → 600ms
    // Stay visible: 600ms → 2000ms
    // Fade out: 2000ms → 2800ms
    const visibleTimer = setTimeout(() => setPhase("visible"), 600);
    const fadeOutTimer = setTimeout(() => setPhase("fadeout"), 2000);

    // Self-unmount only when not controlled by parent (forceMount=false mode)
    let unmountTimer: ReturnType<typeof setTimeout>;
    if (!forceMount) {
      unmountTimer = setTimeout(() => setUnmounted(true), 2850);
    }

    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(fadeOutTimer);
      if (!forceMount) clearTimeout(unmountTimer);
    };
  }, [forceMount]);

  if (unmounted) return null;

  const opacity =
    phase === "fadein" ? 0 : phase === "visible" ? 1 : 0;

  const transition =
    phase === "fadein"
      ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      : phase === "fadeout"
      ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
      : { duration: 0 };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050507]"
      animate={{ opacity }}
      transition={transition as any}
      style={{ pointerEvents: phase === "fadeout" ? "none" : "auto" }}
    >
      {/* Orb — contained region for GPU efficiency */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ width: 440, height: 440 }}>
          <Orb
            hue={270}
            hoverIntensity={0.5}
            rotateOnHover={true}
            forceHoverState={false}
            backgroundColor="#050507"
          />
        </div>
      </div>

      {/* Brand — centered on top */}
      <div className="relative z-10 flex flex-col items-center gap-3 pointer-events-none select-none">
        <p
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "var(--font-rostex), system-ui, sans-serif",
          }}
        >
          Kaaya
        </p>
        <p className="text-sm text-white/40 tracking-[0.3em] uppercase font-medium">
          AI · Initializing
        </p>
        <div className="flex gap-1.5 mt-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-violet-500/70"
              style={{ animation: `loading-dot 1.4s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes loading-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
}
