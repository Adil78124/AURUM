"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { Review } from "@/data/reviews";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { premiumEase } from "@/lib/animations";

const VISIBLE = 3;

export function ReviewsCarousel({ items }: { items: Review[] }) {
  const [start, setStart] = useState(0);
  const reduced = useReducedMotion();
  const t = useTranslations("Reviews");
  const maxStart = Math.max(0, items.length - VISIBLE);

  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart, items.length]);

  const prev = useCallback(() => {
    setStart((s) => Math.max(0, s - 1));
  }, []);

  const next = useCallback(() => {
    setStart((s) => Math.min(maxStart, s + 1));
  }, [maxStart]);

  const slice = items.slice(start, start + VISIBLE);
  const pad = VISIBLE - slice.length;
  const padded = pad > 0 ? [...slice, ...Array.from({ length: pad }, () => null)] : slice;

  return (
    <div>
      <motion.div
        key={start}
        className="mb-10 grid grid-cols-1 gap-gutter md:grid-cols-3"
        initial={reduced ? false : { opacity: 0.65, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0.2 : 0.5, ease: premiumEase }}
      >
        {padded.map((r, i) =>
          r ? (
            <ReviewCard key={r.id} review={r} featured={i === 1} />
          ) : (
            <div key={`empty-${i}`} className="hidden md:block" aria-hidden />
          ),
        )}
      </motion.div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={start === 0}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label={t("prevAria")}
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2} aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={start >= maxStart}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label={t("nextAria")}
        >
          <ChevronRight className="h-6 w-6" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  );
}
