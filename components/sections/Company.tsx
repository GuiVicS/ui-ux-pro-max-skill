"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const PILLARS = [
  "Automações que eliminam trabalho manual repetitivo",
  "Lojas online otimizadas para conversão máxima",
  "Integrações que conectam todos os seus sistemas",
  "IA aplicada onde realmente gera resultado no e-commerce",
];

export function Company() {
  return (
    <section className="bg-white border-t" style={{ borderColor: "#F0F0F0" }}>
      <div className="section-wrap">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left — description */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">A empresa</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-[#0A0A0F] leading-[1.12] mb-6"
              style={{ fontSize: "clamp(28px,3.5vw,44px)" }}
            >
              Serafim Company:<br />
              <span className="text-accent italic">tecnologia que vende</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="leading-[1.75] mb-4" style={{ color: "#6B7280" }}>
              Somos uma software house especializada em <strong className="text-[#0A0A0F]">soluções digitais para
              e-commerce</strong>. Desde 2019, ajudamos empresas a usar tecnologia de ponta
              como vantagem competitiva real — não como custo.
            </motion.p>
            <motion.p variants={fadeUp} className="leading-[1.75]" style={{ color: "#6B7280" }}>
              Nossa abordagem une <strong className="text-[#0A0A0F]">visão estratégica de negócio</strong> com
              execução técnica impecável. O resultado: sistemas que crescem com a sua empresa
              e automações que trabalham por você 24h por dia, 7 dias por semana.
            </motion.p>
          </motion.div>

          {/* Right — pillar list */}
          <motion.ul
            className="flex flex-col gap-4"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {PILLARS.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl p-4 border"
                style={{ background: "#F8F9FA", borderColor: "#E5E7EB" }}
              >
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-[#0A0A0F] font-medium text-sm leading-snug">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
}
