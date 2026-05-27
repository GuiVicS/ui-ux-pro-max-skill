"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion-presets";

interface Props {
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function Counter({ to, from = 0, prefix = "", suffix = "", duration = 2, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: EASE_OUT_EXPO,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
}
