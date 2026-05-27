"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingBag, Zap, Brain, GitBranch, Headphones } from "lucide-react";
import { TiltCard } from "@/components/motion/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion-presets";

const SERVICES = [
  {
    icon: Globe,
    title: "Lojas e Sistemas Web",
    items: ["Sites responsivos e modernos", "E-commerce completo (Next.js)", "Painéis administrativos", "APIs e integrações customizadas"],
  },
  {
    icon: ShoppingBag,
    title: "Lojas Online",
    items: ["Setup completo Shopify & Nuvemshop", "Otimização de conversão (CRO)", "Temas 100% personalizados", "Integração com ERPs e marketplaces"],
  },
  {
    icon: Zap,
    title: "Automações",
    items: ["Fluxos com n8n e Make", "Notificações e alertas inteligentes", "Automação de marketing", "Processos de vendas no piloto automático"],
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    items: ["Chatbots e assistentes virtuais", "Análise preditiva de dados", "Recomendação de produtos com IA", "IA generativa aplicada ao negócio"],
  },
  {
    icon: GitBranch,
    title: "Conexão de Sistemas",
    items: ["Integração via APIs REST/GraphQL", "Conectores para ERPs e CRMs", "Sincronização de estoque em tempo real", "Webhooks e eventos automatizados"],
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    items: ["Monitoramento e uptime 99.9%", "Correção de bugs urgente", "Atualizações de segurança", "Relatórios mensais de performance"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white border-t" style={{ borderColor: "#F0F0F0" }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">O que fazemos</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[#0A0A0F] leading-[1.12]"
            style={{ fontSize: "clamp(28px,4vw,46px)" }}
          >
            Soluções que{" "}
            <span className="text-accent italic">impulsionam resultados</span>
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-3 sm:grid-cols-2 gap-5"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map(({ icon: Icon, title, items }) => (
            <motion.div key={title} variants={fadeUp}>
              <TiltCard className="h-full">
                <div
                  className="h-full rounded-xl p-7 border transition-all duration-300 group"
                  style={{ background: "#fff", borderColor: "#E5E7EB" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#00C9A4";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,201,164,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: "var(--accent-bg)" }}
                  >
                    <Icon size={20} className="text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-[#0A0A0F] text-lg mb-4">{title}</h3>

                  {/* Bullet list */}
                  <ul className="flex flex-col gap-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#6B7280" }}>
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
