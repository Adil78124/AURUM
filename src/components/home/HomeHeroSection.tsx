"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useUiModals } from "@/context/UiModalsContext";
import { HERO_BACKGROUND_IMAGE } from "@/data/heroBackground";
import { premiumEase } from "@/lib/animations";

export function HomeHeroSection() {
  const { openBooking, openVip } = useUiModals();
  const reduced = useReducedMotion();
  const t = useTranslations("Home");

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-kenburns-inner relative h-full w-full">
          <Image
            src={HERO_BACKGROUND_IMAGE}
            alt={t("heroImageAlt")}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#1a0f08]/55 hero-vignette" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-56 bg-gradient-to-b from-transparent via-[#0c0805]/88 to-[#0a0705]" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.p
          className="mb-3 font-title-italic text-lg italic leading-snug tracking-[0.02em] text-on-surface antialiased sm:text-xl md:text-2xl md:font-semibold"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0.35 : 0.85, ease: premiumEase, delay: reduced ? 0 : 0.12 }}
        >
          {t("heroEyebrow")}
        </motion.p>
        <motion.h1
          className="mb-12 font-display-lg text-[56px] font-black leading-none tracking-[0.2em] text-on-surface antialiased drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-[80px] md:text-[120px]"
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduced ? 0.35 : 1.05, ease: premiumEase, delay: reduced ? 0 : 0.28 }}
        >
          AURUM
        </motion.h1>
        <motion.div
          className="flex flex-col justify-center gap-6 md:flex-row"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduced ? 0.05 : 0.14,
                delayChildren: reduced ? 0 : 0.55,
              },
            },
          }}
        >
          <motion.button
            type="button"
            variants={{
              hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: premiumEase } },
            }}
            onClick={openBooking}
            className="hero-gold-pulse bg-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-all gold-glow-strong"
          >
            {t("bookTable")}
          </motion.button>
          <motion.button
            type="button"
            variants={{
              hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: premiumEase } },
            }}
            onClick={openVip}
            className="border border-primary/80 px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-surface transition-all hover:border-primary hover:bg-primary/10 hover:text-on-surface"
          >
            {t("vipCabins")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
