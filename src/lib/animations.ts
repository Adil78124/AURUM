import type { Variants } from "framer-motion";

/** Cinematic ease — calm, no bounce */
export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = {
  once: true,
  margin: "-72px 0px -72px 0px",
  amount: 0.15,
} as const;

function dur(base: number, reduced: boolean) {
  return reduced ? Math.min(0.38, base * 0.45) : base;
}

function slideX(reduced: boolean) {
  return reduced ? 0 : 26;
}

export function fadeUp(reduced: boolean, delay = 0): Variants {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur(0.85, reduced), ease: premiumEase, delay: reduced ? 0 : delay },
    },
  };
}

export function fadeIn(reduced: boolean, delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: dur(0.75, reduced), ease: premiumEase, delay: reduced ? 0 : delay },
    },
  };
}

export function slideLeft(reduced: boolean, delay = 0): Variants {
  const x = slideX(reduced);
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, x: -x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur(0.82, reduced), ease: premiumEase, delay: reduced ? 0 : delay },
    },
  };
}

export function slideRight(reduced: boolean, delay = 0): Variants {
  const x = slideX(reduced);
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, x: x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur(0.82, reduced), ease: premiumEase, delay: reduced ? 0 : delay },
    },
  };
}

export function scaleIn(reduced: boolean, delay = 0): Variants {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: dur(0.88, reduced), ease: premiumEase, delay: reduced ? 0 : delay },
    },
  };
}

export function blurReveal(reduced: boolean, delay = 0): Variants {
  if (reduced) return fadeIn(reduced, delay);
  return {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: dur(0.95, reduced), ease: premiumEase, delay },
    },
  };
}

export type RevealVariantName = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn" | "blurReveal";

export function getRevealVariants(
  name: RevealVariantName,
  reduced: boolean,
  delay = 0,
): Variants {
  switch (name) {
    case "fadeIn":
      return fadeIn(reduced, delay);
    case "slideLeft":
      return slideLeft(reduced, delay);
    case "slideRight":
      return slideRight(reduced, delay);
    case "scaleIn":
      return scaleIn(reduced, delay);
    case "blurReveal":
      return blurReveal(reduced, delay);
    default:
      return fadeUp(reduced, delay);
  }
}

export function staggerParent(reduced: boolean, stagger = 0.1, delayChildren = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0.04 : stagger,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  };
}

export function staggerItem(reduced: boolean): Variants {
  return fadeUp(reduced, 0);
}
