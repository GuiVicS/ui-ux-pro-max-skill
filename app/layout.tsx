import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serafim Company — Estratégia Digital & IA para E-commerce",
  description:
    "Transformamos e-commerces com automações inteligentes e soluções de IA. Guilherme Gómes — Franca/SP.",
  openGraph: {
    title: "Serafim Company",
    description: "Soluções digitais de alto impacto para e-commerce",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
