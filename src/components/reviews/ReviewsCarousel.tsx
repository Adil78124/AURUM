"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/reviews/ReviewCard";

const VISIBLE = 3;

export function ReviewsCarousel() {
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, reviews.length - VISIBLE);

  const prev = useCallback(() => {
    setStart((s) => Math.max(0, s - 1));
  }, []);

  const next = useCallback(() => {
    setStart((s) => Math.min(maxStart, s + 1));
  }, [maxStart]);

  const slice = reviews.slice(start, start + VISIBLE);
  const pad = VISIBLE - slice.length;
  const padded = pad > 0 ? [...slice, ...Array.from({ length: pad }, () => null)] : slice;

  return (
    <div>
      <div className="mb-10 grid grid-cols-1 gap-gutter md:grid-cols-3">
        {padded.map((r, i) =>
          r ? (
            <ReviewCard key={r.id} review={r} featured={i === 1} />
          ) : (
            <div key={`empty-${i}`} className="hidden md:block" aria-hidden />
          ),
        )}
      </div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={start === 0}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Предыдущие отзывы"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2} aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={start >= maxStart}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Следующие отзывы"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  );
}
