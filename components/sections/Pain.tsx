"use client";
import { motion } from "framer-motion";
import { Clock, TrendingDown, DollarSign, BarChart2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const PAINS = [
  {
    icon: Clock,
    title: "Processos manuais",
    desc: "Horas desperdiçadas em tarefas repetitivas que uma automação resolveria em segundos — todos os dias.",
  },
  {
    icon: TrendingDown,
    title: "Concorrentes na frente",
    desc: "Enquanto você opera no manual, seus concorrentes já usam IA para atender mais rápido, vender mais e escalar.",
  },
  {
    icon: DollarSign,
    title: "Vendas escapando",
    desc: "Leads sem follow-up, carrinhos abandonados, oportunidades perdidas pela falta de automação inteligente.",
  },
  {
    icon: BarChart2,
    title: "Decisões no escuro",
    desc: "Sem dados integrados e visíveis, cada decisão estratégica é um chute. Você precisa de clareza para crescer.",
  },
];

export function Pain() {
  return (
    <section style={{ background: "var(--bg)" }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">Reconhece essa dor?</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-[1.12]"
            style={{ fontSize: "clamp(28px,4vw,46px)" }}
          >
            O custo de{" "}
            <span className="text-accent italic">não evoluir</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[clamp(16px,2vw,18px)] leading-[1.7]" style={{ color: "var(--muted)" }}>
            Cada dia sem automação e IA é um dia que você deixa dinheiro na mesa
            enquanto seus concorrentes avançam.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PAINS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-xl p-6 border"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}
              whileHover={{ borderColor: "rgba(255,255,255,0.18)", transition: { duration: 0.2 } }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(255,80,80,0.1)" }}
              >
                <Icon size={18} style={{ color: "#FF6B6B" }} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
              <p className="text-sm leading-[1.65]" style={{ color: "var(--muted)" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
