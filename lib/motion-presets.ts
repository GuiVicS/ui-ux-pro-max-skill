export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_MICRO   = [0.22, 1, 0.36, 1] as const;

export const SPRING_MAGNETIC = { stiffness: 150, damping: 20 } as const;
export const SPRING_CURSOR   = { stiffness: 300, damping: 30 } as const;
export const SPRING_TILT     = { stiffness: 150, damping: 20 } as const;

export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const staggerContainer = (stagger = 0.1) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger } },
});
