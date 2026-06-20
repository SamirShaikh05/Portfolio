/** Unified motion design tokens — single timing language across the portfolio */

export const EASE = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
};

export const DURATION = {
  fast: 0.35,
  base: 0.55,
  slow: 0.75,
  hero: 0.9,
};

export const VIEWPORT = {
  once: true,
  amount: 0.22,
  margin: "-60px 0px -60px 0px",
};

export const STAGGER = {
  fast: 0.06,
  base: 0.08,
  slow: 0.12,
};

export const TRANSITION = {
  fast: { duration: DURATION.fast, ease: EASE.out },
  base: { duration: DURATION.base, ease: EASE.out },
  slow: { duration: DURATION.slow, ease: EASE.out },
  hero: { duration: DURATION.hero, ease: EASE.out },
};

export const COLORS = {
  base: "#0B0F19",
  baseDeep: "#05080d",
};
