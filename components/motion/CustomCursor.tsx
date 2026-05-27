"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { SPRING_CURSOR } from "@/lib/motion-presets";

export function CustomCursor() {
  const cursorX = useSpring(0, SPRING_CURSOR);
  const cursorY = useSpring(0, SPRING_CURSOR);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as Element;
      setHovering(!!el.closest('a, button, [role="button"], input, textarea, select, label'));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY, visible]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{ scale: hovering ? 2.2 : 1 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-3 h-3 rounded-full bg-accent"
        style={{ mixBlendMode: "difference" }}
      />
    </motion.div>
  );
}
