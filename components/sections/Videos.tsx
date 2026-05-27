"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const VIDEOS = [
  { title: "Automação de E-commerce com n8n", duration: "12:34", tag: "Automação" },
  { title: "Como Implementei IA em uma Loja Virtual", duration: "18:22", tag: "IA" },
  { title: "Shopify vs Nuvemshop: Qual Escolher?", duration: "09:50", tag: "E-commerce" },
];

export function Videos() {
  return (
    <section style={{ background: "var(--bg)" }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">Conteúdo</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-[1.12]"
            style={{ fontSize: "clamp(28px,4vw,46px)" }}
          >
            Trabalhos em{" "}
            <span className="text-accent italic">ação</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {VIDEOS.map(({ title, duration, tag }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative rounded-xl overflow-hidden border cursor-pointer"
              style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}
              whileHover={{ borderColor: "#00C9A4" }}
              transition={{ duration: 0.25 }}
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video relative line-grid flex items-center justify-center" style={{ background: "var(--bg-2)" }}>
                {/* Tag */}
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "var(--accent-bg)", color: "#00C9A4", border: "1px solid var(--accent-border)" }}
                >
                  {tag}
                </span>

                {/* Duration */}
                <span
                  className="absolute bottom-3 right-3 text-xs font-medium px-2 py-0.5 rounded"
                  style={{ background: "rgba(0,0,0,0.7)", color: "rgba(255,255,255,0.7)" }}
                >
                  {duration}
                </span>

                {/* Play button */}
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2"
                  style={{ background: "rgba(0,201,164,0.15)", borderColor: "rgba(0,201,164,0.5)" }}
                  whileHover={{ scale: 1.1, background: "rgba(0,201,164,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Play size={20} className="text-accent ml-0.5" fill="currentColor" />
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-display font-semibold text-white text-sm leading-snug group-hover:text-accent transition-colors duration-200">
                  {title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
