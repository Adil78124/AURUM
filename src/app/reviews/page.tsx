"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReviewsPageContent } from "@/components/reviews/ReviewsPageContent";
import { premiumEase, viewportOnce } from "@/lib/animations";

export default function ReviewsPage() {
  const reduced = useReducedMotion();

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
      <motion.div
        className="mb-section-gap text-center"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: reduced ? 0.3 : 0.8, ease: premiumEase }}
      >
        <p className="mb-2 font-label-caps text-label-caps uppercase text-primary">
          Голоса наших гостей
        </p>
        <h1 className="font-display-lg text-display-lg text-on-surface">Отзывы посетителей</h1>
        <div className="mx-auto mt-6 h-px w-24 bg-primary/40" />
      </motion.div>

      <motion.p
        className="mx-auto mb-12 max-w-2xl text-center font-body-lg text-on-surface-variant"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: reduced ? 0.3 : 0.75, ease: premiumEase, delay: reduced ? 0 : 0.1 }}
      >
        Отзывы с акцентом на атмосферу и качество — чтобы снять страх неизвестного и помочь выбрать
        формат визита.
      </motion.p>

      <ReviewsPageContent />
    </main>
  );
}
