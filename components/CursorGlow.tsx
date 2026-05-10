"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        if (!visible) setVisible(true);
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-30 w-[400px] h-[400px] rounded-full transition-opacity duration-500"
      style={{
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.02) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
