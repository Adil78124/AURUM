"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Review } from "@/data/reviews";
import { SEED_REVIEW_AVATARS, SEED_REVIEW_IDS } from "@/data/reviews";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { ReviewForm } from "@/components/reviews/ReviewForm";

export function ReviewsPageContent() {
  const [localReviews, setLocalReviews] = useState<Review[]>([]);
  const t = useTranslations("Reviews");

  const seedReviews: Review[] = SEED_REVIEW_IDS.map((id) => ({
    id,
    author: t(`items.${id}.author`),
    date: t(`items.${id}.date`),
    text: t(`items.${id}.text`),
    avatarSrc: SEED_REVIEW_AVATARS[id],
    rating: 5,
  }));

  const items = [...localReviews, ...seedReviews];

  return (
    <>
      <ReviewsCarousel items={items} />
      <div className="mt-section-gap">
        <ReviewForm
          onSubmitted={(r) => {
            setLocalReviews((prev) => [r, ...prev]);
          }}
        />
      </div>
    </>
  );
}
