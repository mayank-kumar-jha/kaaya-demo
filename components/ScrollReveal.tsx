"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
  direction = "up",
  distance = 32,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // once:true keeps scroll-up animations completed (prevents re-triggering lag)
  // margin: -60px means animation fires slightly before the element enters viewport
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const offsetMap = {
    up:    { x: "0px",          y: `${distance}px` },
    down:  { x: "0px",          y: `-${distance}px` },
    left:  { x: `${distance}px`, y: "0px" },
    right: { x: `-${distance}px`, y: "0px" },
  };
  const o = offsetMap[direction];

  return (
    <motion.div
      ref={ref}
      // Use CSS transform strings (not Framer's x/y shortcuts) to guarantee
      // GPU compositing and avoid any layout-phase involvement
      initial={{ opacity: 0, transform: `translate(${o.x}, ${o.y})` }}
      animate={
        isInView
          ? { opacity: 1, transform: "translate(0px, 0px)" }
          : {}
      }
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
