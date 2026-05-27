"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
  gap?: string;
}

export function Marquee({ children, className, gap = "gap-10" }: Props) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className={`flex ${gap} w-max marquee-track`}>
        {children}
        {children}
      </div>
    </div>
  );
}
