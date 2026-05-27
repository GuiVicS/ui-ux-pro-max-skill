"use client";
import ReactLenis from "lenis/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.08,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
