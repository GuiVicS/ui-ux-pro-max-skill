"use client";
import { motion } from "framer-motion";
import { Globe, Link2, Play, Mail } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const NAV_COL = [
  { label: "Sobre",      href: "#sobre"    },
  { label: "Serviços",   href: "#servicos" },
  { label: "Cases",      href: "#cases"    },
  { label: "Contato",    href: "#cta"      },
];

const SERVICES_COL = [
  "Lojas e Sistemas Web",
  "Lojas Online (Shopify)",
  "Automações (n8n / Make)",
  "Inteligência Artificial",
  "Conexão de Sistemas",
];

const SOCIALS = [
  { icon: Globe,    href: "#",   label: "Instagram" },
  { icon: Link2,    href: "#",   label: "LinkedIn"  },
  { icon: Play,     href: "#",   label: "YouTube"   },
  { icon: Mail,     href: "mailto:contato@serafimcompany.com.br", label: "E-mail" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">

        <motion.div
          className="grid md:grid-cols-4 gap-10 mb-16"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <a href="/" className="font-display font-extrabold text-2xl text-white">
              Serafim<span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--muted)" }}>
              Estratégia digital e IA para e-commerces que querem resultados reais.
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
              Franca/SP · Brasil
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 hover:border-accent hover:text-accent"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navegação */}
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-5">Navegação</p>
            <ul className="flex flex-col gap-3">
              {NAV_COL.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "var(--muted)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-5">Serviços</p>
            <ul className="flex flex-col gap-3">
              {SERVICES_COL.map((s) => (
                <li key={s}>
                  <span className="text-sm" style={{ color: "var(--muted)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-5">Contato</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:contato@serafimcompany.com.br" className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>
                  contato@serafimcompany.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5516999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-dark transition-colors"
                >
                  WhatsApp: +55 (16) 9 9999-9999
                </a>
              </li>
              <li>
                <span className="text-sm" style={{ color: "var(--muted)" }}>Franca, São Paulo — SP</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "rgba(255,255,255,0.25)" }}
        >
          <p>© {new Date().getFullYear()} Serafim Company. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>

      {/* Brand name in low relief */}
      <div className="overflow-hidden pointer-events-none select-none">
        <p
          className="font-display font-extrabold text-center leading-none"
          style={{
            fontSize: "clamp(60px,14vw,180px)",
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.04em",
            marginBottom: "-0.2em",
          }}
        >
          SERAFIM
        </p>
      </div>
    </footer>
  );
}
