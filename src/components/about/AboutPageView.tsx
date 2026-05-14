"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AboutChefSection } from "@/components/about/AboutChefSection";
import { AboutQuoteSection } from "@/components/about/AboutQuoteSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { premiumEase, viewportOnce } from "@/lib/animations";

const HERO_IMG = "/IMG_4924.PNG";

export function AboutPageView() {
  const reduced = useReducedMotion();
  const t = useTranslations("About");

  return (
    <main className="pt-28 md:pt-32">
      <section className="mx-auto mb-section-gap grid min-h-[600px] max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile md:min-h-[819px] md:grid-cols-12 md:px-margin-desktop">
        <motion.div
          className="space-y-8 md:col-span-5"
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: reduced ? 0.3 : 0.85, ease: premiumEase }}
        >
          <div className="space-y-4">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-primary">{t("heroEyebrow")}</span>
            <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">{t("heroTitle")}</h1>
          </div>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">{t("heroLead")}</p>
          <div className="rounded border border-primary/20 bg-surface-container-low/80 p-6 md:hidden">
            <p className="font-body-md text-on-surface-variant">
              <span className="font-title-italic italic text-primary">{t("heroCard")}</span> {t("heroCardText")}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative md:col-span-7"
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: reduced ? 0.3 : 0.88, ease: premiumEase, delay: reduced ? 0 : 0.1 }}
        >
          <div className="gold-glow aspect-[4/5] overflow-hidden rounded-lg md:aspect-[16/10]">
            <Image
              src={HERO_IMG}
              alt={t("heroImageAlt")}
              width={1200}
              height={750}
              className="h-full w-full object-cover transition-all duration-1000 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805] via-transparent to-transparent opacity-70" />
          </div>
          <div className="glass-card absolute -bottom-8 -left-8 hidden max-w-xs border border-primary/20 p-8 lg:block">
            <span className="font-title-italic text-title-italic italic text-primary">{t("estLabel")}</span>
            <span className="mt-1 block font-body-md text-body-md text-on-surface-variant">{t("estSub")}</span>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-primary/10 bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 grid gap-gutter md:grid-cols-2 md:items-center">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary">{t("sectionEyebrow")}</span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-on-surface">{t("sectionTitle")}</h2>
            </div>
            <p className="font-body-lg text-on-surface-variant">{t("sectionLead")}</p>
          </div>
          <div className="grid gap-gutter lg:grid-cols-2">
            <p className="font-body-md leading-relaxed text-on-surface-variant">{t("p1")}</p>
            <p className="font-body-md leading-relaxed text-on-surface-variant">{t("p2")}</p>
          </div>
        </div>
      </section>

      <AboutChefSection />
      <AboutQuoteSection />
      <AboutCtaSection />
    </main>
  );
}
