"use client";

import { motion, useReducedMotion } from "framer-motion";
import { premiumEase } from "@/lib/animations";
import { cn } from "@/lib/cn";

const interiorViewport = {
  once: true,
  margin: "-10% 0px -8% 0px",
  amount: 0.12,
} as const;

export function InteriorReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reduced ? 0 : 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={interiorViewport}
      transition={{
        duration: reduced ? 0.34 : 0.88,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  );
}
