"use client";
import { motion } from "framer-motion";
import { Marquee } from "@/components/motion/Marquee";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const TOOLS = [
  { name: "Next.js",     emoji: "▲" },
  { name: "Shopify",     emoji: "🛍" },
  { name: "Nuvemshop",   emoji: "☁" },
  { name: "n8n",         emoji: "⚡" },
  { name: "Make",        emoji: "🔄" },
  { name: "OpenAI",      emoji: "✦" },
  { name: "Supabase",    emoji: "⚙" },
  { name: "Vercel",      emoji: "▲" },
  { name: "TypeScript",  emoji: "TS" },
  { name: "Node.js",     emoji: "🟢" },
  { name: "Python",      emoji: "🐍" },
  { name: "WhatsApp API",emoji: "💬" },
];

export function Tools() {
  return (
    <section className="overflow-hidden line-grid" style={{ background: "var(--bg-2)" }}>
      <div className="py-20">

        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto px-6 mb-12"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">Stack & ferramentas</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-[1.12]"
            style={{ fontSize: "clamp(26px,3.5vw,42px)" }}
          >
            O que eu sei{" "}
            <span className="text-accent italic">usar de verdade</span>
          </motion.h2>
        </motion.div>

        {/* Marquee */}
        <Marquee>
          {TOOLS.map(({ name, emoji }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl px-5 py-3.5 border shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "var(--border)",
              }}
            >
              <span className="text-base leading-none">{emoji}</span>
              <span className="font-display font-semibold text-white text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
}
