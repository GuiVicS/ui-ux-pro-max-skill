"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, EASE_OUT_EXPO } from "@/lib/motion-presets";

const CASES = [
  {
    num: "01",
    title: "E-commerce de Moda Premium",
    desc: "Loja Shopify completa com IA de recomendação e fluxos de recompra automatizados",
    tag: "Shopify + IA",
    result: "R$ 2,4M",
  },
  {
    num: "02",
    title: "Automação de Pipeline de Vendas",
    desc: "Qualificação automática de leads via WhatsApp com integração ao CRM e nutrição por n8n",
    tag: "Automação",
    result: "R$ 180K",
  },
  {
    num: "03",
    title: "Plataforma de Gestão Interna",
    desc: "Sistema web customizado para controle de pedidos, estoque e relatórios em tempo real",
    tag: "Sistema Web",
    result: "R$ 920K",
  },
  {
    num: "04",
    title: "Shopify de Alta Performance",
    desc: "Redesign e otimização completa com foco em CRO, velocidade e mobile-first",
    tag: "Shopify + CRO",
    result: "R$ 600K",
  },
  {
    num: "05",
    title: "IA para Nutrição de Leads",
    desc: "Pipeline inteligente com OpenAI que personaliza comunicações e aumenta conversão em 34%",
    tag: "Inteligência Artificial",
    result: "R$ 1,2M",
  },
];

export function Cases() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="cases" className="bg-white">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">Portfólio</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[#0A0A0F] leading-[1.12]"
            style={{ fontSize: "clamp(28px,4vw,46px)" }}
          >
            Projetos que{" "}
            <span className="text-accent italic">geram resultados</span>
          </motion.h2>
        </motion.div>

        {/* List */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CASES.map(({ num, title, desc, tag, result }, i) => (
            <motion.div
              key={num}
              variants={fadeUp}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group border-b flex items-center gap-6 py-6 cursor-pointer"
              style={{
                borderColor: hovered === i ? "#00C9A4" : "#E5E7EB",
                transition: "border-color 0.25s",
              }}
            >
              {/* Number */}
              <span
                className="font-display font-bold text-sm tabular-nums w-8 shrink-0 transition-colors duration-200"
                style={{ color: hovered === i ? "#00C9A4" : "#D1D5DB" }}
              >
                {num}
              </span>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3
                    className="font-display font-bold text-[#0A0A0F] transition-colors duration-200"
                    style={{
                      fontSize: "clamp(18px,2.5vw,24px)",
                      color: hovered === i ? "#060D10" : "#0A0A0F",
                    }}
                  >
                    {title}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      color: "#00C9A4",
                      borderColor: "rgba(0,201,164,0.3)",
                      background: "rgba(0,201,164,0.06)",
                    }}
                  >
                    {tag}
                  </span>
                </div>
                <p className="text-sm leading-snug" style={{ color: "#6B7280" }}>{desc}</p>
              </div>

              {/* Result badge */}
              <div className="flex items-center gap-3 shrink-0">
                <motion.span
                  animate={{ scale: hovered === i ? 1.05 : 1 }}
                  transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                  className="px-3 py-1.5 rounded-lg text-sm font-bold"
                  style={{ background: "#00C9A4", color: "#060D10" }}
                >
                  {result}
                </motion.span>
                <ArrowUpRight
                  size={16}
                  className="transition-all duration-200"
                  style={{
                    color: hovered === i ? "#00C9A4" : "#D1D5DB",
                    transform: hovered === i ? "translate(2px,-2px)" : "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
