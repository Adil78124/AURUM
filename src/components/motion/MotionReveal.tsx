"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  getRevealVariants,
  type RevealVariantName,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariantName;
  delay?: number;
  /** Override default viewport (e.g. earlier trigger for hero children) */
  margin?: string;
};

export function MotionReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  margin,
}: Props) {
  const reduced = useReducedMotion();
  const variants = getRevealVariants(variant, Boolean(reduced), delay);
  const viewport = margin ? { ...viewportOnce, margin } : viewportOnce;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
