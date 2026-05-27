"use client";
import { motion } from "framer-motion";
import { Counter } from "@/components/motion/Counter";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const METRICS = [
  { prefix: ">", n: 40, suffix: "%", label: "Ganho de eficiência operacional", desc: "em média nos projetos entregues" },
  { prefix: "",  n: 10, suffix: "h+", label: "Economizadas por semana",          desc: "com automações de processos manuais" },
  { prefix: "",  n: 99, suffix: ".9%", label: "Uptime das soluções",              desc: "monitoramento contínuo e SLA garantido" },
  { prefix: "+", n: 25, suffix: "%",  label: "Crescimento em vendas",             desc: "crescimento médio no primeiro trimestre" },
];

export function Metrics() {
  return (
    <section id="metricas" className="bg-white">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">Impacto mensurável</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[#0A0A0F] leading-[1.12]"
            style={{ fontSize: "clamp(28px,4vw,46px)" }}
          >
            Números que{" "}
            <span className="text-accent italic">comprovam</span>
          </motion.h2>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {METRICS.map(({ prefix, n, suffix, label, desc }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="text-center rounded-xl p-8 border"
              style={{ background: "#F8F9FA", borderColor: "#E5E7EB" }}
              whileHover={{
                borderColor: "#00C9A4",
                background: "rgba(0,201,164,0.04)",
                transition: { duration: 0.25 },
              }}
            >
              <p
                className="font-display font-extrabold text-accent leading-none mb-3"
                style={{ fontSize: "clamp(36px,5vw,54px)" }}
              >
                <Counter to={n} prefix={prefix} suffix={suffix} />
              </p>
              <p className="font-semibold text-[#0A0A0F] text-sm mb-1">{label}</p>
              <p className="text-xs leading-snug" style={{ color: "#9CA3AF" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
