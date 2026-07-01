// Central tempo control for every animation on the site.
// 1 = normal speed, 0.5 = twice as fast, 2 = half speed.
export const SPEED = 1;

export const dur = (base: number) => base * SPEED;

// Shared easing curves so GSAP + framer-motion timelines feel consistent.
export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  soft: "power1.out",
} as const;

export const EASE_FM = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
