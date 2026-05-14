"use client";

import { motion, useReducedMotion } from "framer-motion";
import { premiumEase, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  origin?: "left" | "center" | "right";
};

export function MotionGoldLine({ className, origin = "center" }: Props) {
  const reduced = useReducedMotion();
  const transformOrigin =
    origin === "left" ? "left center" : origin === "right" ? "right center" : "center";

  return (
    <motion.div
      className={cn(className)}
      initial={{ scaleX: reduced ? 1 : 0, opacity: reduced ? 1 : 0.4 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={viewportOnce}
      transition={{
        duration: reduced ? 0.2 : 0.95,
        ease: premiumEase,
      }}
      style={{ transformOrigin }}
    />
  );
}
