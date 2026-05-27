"use client";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Shield, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const DIFFS = [
  {
    icon: Lightbulb,
    title: "Visão de Negócio Primeiro",
    desc: "Entendemos profundamente o seu negócio antes de escrever uma única linha de código. Isso garante que a solução certa seja construída — na primeira vez.",
  },
  {
    icon: Code2,
    title: "Código que Escala",
    desc: "Arquitetura robusta, documentada e sem gambiarras. Suas soluções crescem com a empresa — não quebram quando as vendas explodem.",
  },
  {
    icon: Shield,
    title: "Parceria de Longo Prazo",
    desc: "Suporte real pós-entrega, não abandono. Monitoramos, atualizamos e evoluímos as soluções junto com o crescimento do seu negócio.",
  },
  {
    icon: Sparkles,
    title: "IA com Propósito Real",
    desc: "Nada de IA decorativa. Implementamos Inteligência Artificial onde ela realmente gera resultado: mais conversões, menos custo operacional.",
  },
];

export function Differentials() {
  return (
    <section className="bg-white border-t" style={{ borderColor: "#F0F0F0" }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">Por que Serafim Company</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[#0A0A0F] leading-[1.12]"
            style={{ fontSize: "clamp(28px,4vw,46px)" }}
          >
            Mais que conhecimento{" "}
            <span className="text-accent italic">técnico</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {DIFFS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex gap-5 rounded-xl p-6 border transition-all duration-300"
              style={{ background: "#F8F9FA", borderColor: "#E5E7EB" }}
              whileHover={{ borderColor: "#00C9A4", background: "rgba(0,201,164,0.03)", transition: { duration: 0.2 } }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-bg)" }}
              >
                <Icon size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#0A0A0F] text-base mb-2">{title}</h3>
                <p className="text-sm leading-[1.7]" style={{ color: "#6B7280" }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
