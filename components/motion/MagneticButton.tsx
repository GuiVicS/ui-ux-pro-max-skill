"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SPRING_MAGNETIC } from "@/lib/motion-presets";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function MagneticButton({ children, className, style, href, onClick, target, rel }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_MAGNETIC);
  const springY = useSpring(y, SPRING_MAGNETIC);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width  / 2)) * 0.35);
    y.set((e.clientY - (rect.top  + rect.height / 2)) * 0.35);
  };

  const onLeave = () => { x.set(0); y.set(0); };

  if (href) {
    return (
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
        <motion.a
          href={href}
          target={target}
          rel={rel}
          style={{ x: springX, y: springY, ...style }}
          whileTap={{ scale: 0.97 }}
          className={className}
        >
          {children}
        </motion.a>
      </div>
    );
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      <motion.button
        onClick={onClick}
        style={{ x: springX, y: springY, ...style }}
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        {children}
      </motion.button>
    </div>
  );
}
