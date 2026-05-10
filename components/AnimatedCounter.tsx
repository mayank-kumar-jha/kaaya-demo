"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const numStr = match[1].replace(/,/g, "");
    const suffix = match[2]; // e.g., "+", "%", "+"
    const target = parseFloat(numStr);
    const hasDecimal = numStr.includes(".");
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;

    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease out cubic
      const t = step / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      current = target * eased;

      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        const formatted = hasDecimal
          ? current.toFixed(1)
          : Math.floor(current).toLocaleString();
        setDisplay(formatted + suffix);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
