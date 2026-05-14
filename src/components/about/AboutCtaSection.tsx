"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useUiModals } from "@/context/UiModalsContext";
import { premiumEase, staggerItem, staggerParent, viewportOnce } from "@/lib/animations";

export function AboutCtaSection() {
  const { openBooking } = useUiModals();
  const reduced = useReducedMotion();

  return (
    <section className="border-t border-primary/10 bg-surface-container-low py-section-gap text-center">
      <motion.div
        className="mx-auto max-w-2xl space-y-12 px-margin-mobile"
        variants={staggerParent(Boolean(reduced), 0.12, 0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={staggerItem(Boolean(reduced))}>
          <Sparkles className="mx-auto h-14 w-14 text-primary" strokeWidth={1.25} aria-hidden />
        </motion.div>
        <motion.h2
          variants={staggerItem(Boolean(reduced))}
          className="font-display-lg text-headline-lg text-on-surface"
        >
          Познакомьтесь с AURUM ближе
        </motion.h2>
        <motion.p
          variants={staggerItem(Boolean(reduced))}
          className="font-body-lg italic text-on-surface-variant"
        >
          Забронируйте столик и ощутите золотой стандарт гостеприимства на практике.
        </motion.p>
        <motion.div variants={staggerItem(Boolean(reduced))}>
          <button
            type="button"
            onClick={openBooking}
            className="bg-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-all gold-glow"
          >
            Забронировать столик
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
