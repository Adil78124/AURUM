"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ReviewsPageContent } from "@/components/reviews/ReviewsPageContent";
import { premiumEase, viewportOnce } from "@/lib/animations";

export function ReviewsPageView() {
  const reduced = useReducedMotion();
  const t = useTranslations("Reviews");

  return (
    <main className="mx-auto w-full max-w-container-max overflow-x-clip px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
      <motion.div
        className="mb-section-gap w-full min-w-0 max-w-full text-center"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: reduced ? 0.3 : 0.8, ease: premiumEase }}
      >
        <p className="mb-2 font-label-caps text-label-caps uppercase text-primary">{t("eyebrow")}</p>
        <h1 className="mx-auto max-w-full break-words font-display-lg text-display-lg-mobile text-balance text-on-surface md:text-display-md lg:text-display-lg">
          {t("title")}
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-primary/40" />
      </motion.div>

      <motion.p
        className="mx-auto mb-12 max-w-2xl text-center font-body-lg text-on-surface-variant"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: reduced ? 0.3 : 0.75, ease: premiumEase, delay: reduced ? 0 : 0.1 }}
      >
        {t("intro")}
      </motion.p>

      <ReviewsPageContent />
    </main>
  );
}
