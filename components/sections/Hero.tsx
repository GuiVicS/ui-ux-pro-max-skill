"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, Zap } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { EASE_OUT_EXPO } from "@/lib/motion-presets";

const WA = "https://wa.me/5516999999999?text=Olá%20Guilherme%2C%20quero%20transformar%20meu%20negócio!";

const HEADLINE_LINES = [
  { text: "Transformo ideias em",   teal: false },
  { text: "soluções digitais",      teal: true  },
  { text: "de alto impacto",        teal: false },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient teal glow */}
      <div
        className="absolute right-[10%] top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,201,164,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute left-[5%] bottom-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,201,164,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-32 pt-40 grid md:grid-cols-2 gap-12 items-center">

        {/* ── Left column ── */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Zap size={12} className="text-accent" />
            <span className="eyebrow">Estrategista Digital & Especialista em IA</span>
          </motion.div>

          {/* Headline — text curtain reveal */}
          <h1
            className="font-display font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(40px,5.5vw,68px)" }}
          >
            {HEADLINE_LINES.map(({ text, teal }, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  className="block"
                  style={{ color: teal ? "#00C9A4" : "#fff", fontStyle: teal ? "italic" : "normal" }}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 + i * 0.12 }}
                >
                  {text}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.55 }}
            className="text-[clamp(16px,2vw,18px)] leading-[1.75] max-w-md mb-8"
            style={{ color: "var(--muted)" }}
          >
            Fundador da Serafim Company, ajudo donos de e-commerce a escalar
            seus negócios com automações inteligentes e soluções de IA —
            resultados mensuráveis desde a primeira entrega.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.68 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <MagneticButton
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-[#060D10] font-semibold rounded-lg hover:bg-accent-dark transition-colors text-sm"
            >
              Transformar meu negócio <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton
              href="#cases"
              className="inline-flex items-center gap-2 px-6 py-3.5 border font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm text-accent"
              style={{ borderColor: "rgba(0,201,164,0.4)" } as React.CSSProperties}
            >
              Ver casos de sucesso
            </MagneticButton>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex items-center gap-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-sm" style={{ color: "var(--muted)" }}>
              +50 clientes satisfeitos em todo o Brasil
            </span>
          </motion.div>
        </div>

        {/* ── Right column — founder card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.3 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-[340px] h-[440px]">
            {/* Glow behind */}
            <div
              className="absolute inset-0 rounded-2xl blur-[80px] scale-90 pointer-events-none"
              style={{ background: "rgba(0,201,164,0.15)" }}
            />
            {/* Card */}
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden border line-grid"
              style={{
                background: "linear-gradient(135deg, #0C2020 0%, #060D10 100%)",
                borderColor: "rgba(0,201,164,0.2)",
              }}
            >
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(6,13,16,0.95), transparent)" }}
              />

              {/* Avatar */}
              <div className="absolute top-10 inset-x-0 flex justify-center">
                <div
                  className="w-28 h-28 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "rgba(0,201,164,0.4)", background: "var(--accent-bg)" }}
                >
                  <span className="font-display font-bold text-4xl text-accent">G</span>
                </div>
              </div>

              {/* Floating tag */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: "var(--accent-bg)", color: "#00C9A4", border: "1px solid var(--accent-border)" }}
              >
                ✦ IA Expert
              </motion.div>

              {/* Info */}
              <div className="absolute bottom-6 inset-x-6 text-center">
                <p className="font-display font-bold text-xl text-white">Guilherme Gómes</p>
                <p className="text-accent text-sm mt-1">Fundador & CEO</p>
                <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>Serafim Company · Franca/SP</p>

                {/* Stats row */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { n: "+50", label: "Projetos" },
                    { n: "7",   label: "Anos" },
                    { n: "+30", label: "Clientes" },
                  ].map(({ n, label }) => (
                    <div key={label} className="rounded-lg py-2" style={{ background: "var(--accent-bg)" }}>
                      <p className="font-display font-bold text-accent text-base">{n}</p>
                      <p className="text-[10px]" style={{ color: "var(--muted)" }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border flex justify-center pt-1.5"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "rgba(0,201,164,0.7)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
