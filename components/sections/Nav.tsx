"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { EASE_OUT_EXPO } from "@/lib/motion-presets";

const NAV_LINKS = [
  { label: "Sobre",    href: "#sobre"    },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases",    href: "#cases"    },
  { label: "Processo", href: "#metricas" },
  { label: "Contato",  href: "#cta"      },
];

const WA = "https://wa.me/5516999999999?text=Olá%20Guilherme%2C%20quero%20transformar%20meu%20negócio!";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b"
            : ""
        }`}
        style={{
          background: scrolled ? "rgba(6,13,16,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderColor: "rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display font-extrabold text-xl text-white tracking-tight select-none">
            Serafim<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent text-[#060D10] text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors inline-flex items-center gap-1.5"
            >
              Falar no WhatsApp
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: "var(--bg)" }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: EASE_OUT_EXPO, duration: 0.5 }}
                className="font-display font-bold text-3xl text-white hover:text-accent transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.5 }}
              className="mt-4 px-8 py-4 bg-accent text-[#060D10] font-semibold rounded-lg text-lg"
            >
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
