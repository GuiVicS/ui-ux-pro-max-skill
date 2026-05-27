"use client";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion-presets";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function RevealText({ text, className, delay = 0, stagger = 0.08, once = true }: Props) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: delay + i * stagger }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}
