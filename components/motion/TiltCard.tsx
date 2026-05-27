"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SPRING_TILT } from "@/lib/motion-presets";

interface Props {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className, maxTilt = 7 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, SPRING_TILT);
  const sy = useSpring(my, SPRING_TILT);
  const rotateX = useTransform(sy, [-0.5, 0.5], [ maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt,  maxTilt]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width  - 0.5);
    my.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
