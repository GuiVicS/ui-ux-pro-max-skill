"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const WA = "https://wa.me/5516999999999?text=Olá%20Guilherme%2C%20quero%20agendar%20um%20diagnóstico%20gratuito!";

export function CTAFinal() {
  return (
    <section id="cta" className="aurora-bg relative overflow-hidden">
      {/* Teal glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,201,164,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,201,164,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="relative z-10 section-wrap text-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-5">Vamos começar?</motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(32px,5vw,58px)" }}
          >
            Pronto para transformar{" "}
            <span className="text-accent italic">seu negócio?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[clamp(16px,2vw,18px)] leading-[1.75] mb-10"
            style={{ color: "var(--muted)" }}
          >
            Agende uma conversa gratuita de 30 minutos. Vamos analisar o seu
            negócio e identificar onde automação e IA podem gerar mais resultado —
            sem compromisso.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-8">
            <MagneticButton
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#060D10] font-bold rounded-lg hover:bg-accent-dark transition-colors text-base"
            >
              Agendar diagnóstico gratuito <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton
              href="#cases"
              className="inline-flex items-center gap-2 px-8 py-4 border font-semibold rounded-lg hover:bg-white/5 transition-colors text-base text-white"
              style={{ borderColor: "rgba(255,255,255,0.2)" } as React.CSSProperties}
            >
              Ver portfólio
            </MagneticButton>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center items-center gap-6"
            style={{ color: "var(--muted)" }}
          >
            <span className="flex items-center gap-1.5 text-sm">
              <Shield size={14} className="text-accent" /> Diagnóstico 100% gratuito
            </span>
            <span className="text-white/20">|</span>
            <span className="text-sm">Sem compromisso</span>
            <span className="text-white/20">|</span>
            <span className="text-sm">Resposta em até 24h</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
