"use client";
import { motion } from "framer-motion";
import { Counter } from "@/components/motion/Counter";
import { fadeUp, staggerContainer, EASE_OUT_EXPO } from "@/lib/motion-presets";

const STATS = [
  { n: 7,   suffix: " anos", label: "de experiência em tech" },
  { n: 50,  prefix: "+",     label: "soluções digitais entregues" },
  { n: 30,  prefix: "+",     label: "clientes ativos no Brasil" },
  { n: 99,  suffix: ".9%",   label: "uptime médio das soluções" },
];

export function About() {
  return (
    <section id="sobre" className="bg-white">
      <div className="section-wrap">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">Sobre o fundador</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-[#0A0A0F] leading-[1.12] mb-6"
              style={{ fontSize: "clamp(30px,4vw,46px)" }}
            >
              Olá, sou{" "}
              <span className="text-accent italic">Guilherme Gómes</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="leading-[1.75] mb-4" style={{ color: "#6B7280", fontSize: "clamp(16px,2vw,18px)" }}>
              Estrategista digital e especialista em Inteligência Artificial com sede em
              Franca/SP. Fundei a Serafim Company para transformar a realidade de
              e-commerces que ainda operam de forma manual e reativa.
            </motion.p>
            <motion.p variants={fadeUp} className="leading-[1.75]" style={{ color: "#6B7280", fontSize: "clamp(16px,2vw,18px)" }}>
              Cada projeto começa pela análise profunda do negócio. Só então entregamos
              automações, sistemas e IA que <strong className="text-[#0A0A0F]">geram resultados reais e mensuráveis</strong> —
              sem promessas vazias e sem gambiarras que quebram ao primeiro pico de vendas.
            </motion.p>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {STATS.map(({ n, prefix, suffix, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-xl p-6 border"
                style={{
                  background: "rgba(0,201,164,0.06)",
                  borderColor: "rgba(0,201,164,0.18)",
                }}
                whileHover={{ borderColor: "rgba(0,201,164,0.45)", transition: { duration: 0.2 } }}
              >
                <p
                  className="font-display font-extrabold text-accent leading-none mb-2"
                  style={{ fontSize: "clamp(28px,3.5vw,42px)" }}
                >
                  <Counter to={n} prefix={prefix ?? ""} suffix={suffix ?? ""} />
                </p>
                <p className="text-sm leading-snug" style={{ color: "#6B7280" }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
