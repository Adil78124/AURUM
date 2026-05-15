"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import type { Review } from "@/data/reviews";
import { SEED_REVIEW_AVATARS, SEED_REVIEW_IDS } from "@/data/reviews";
import { useManageData } from "@/context/ManageDataContext";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { ReviewForm } from "@/components/reviews/ReviewForm";

export function ReviewsPageContent() {
  const t = useTranslations("Reviews");
  const { reviews } = useManageData();

  const items = useMemo(() => {
    const seed: Review[] = SEED_REVIEW_IDS.filter(
      (id) =>
        !reviews.meta.deletedIds.includes(id) && !reviews.meta.hiddenIds.includes(id),
    ).map((id) => ({
      id,
      author: t(`items.${id}.author`),
      date: t(`items.${id}.date`),
      text: t(`items.${id}.text`),
      avatarSrc: SEED_REVIEW_AVATARS[id],
      rating: 5,
    }));

    const user = reviews.userReviews
      .filter((r) => !r.hidden)
      .map((r) => reviews.toPublicReview(r));

    return [...user, ...seed];
  }, [t, reviews]);

  return (
    <>
      <ReviewsCarousel items={items} />
      <div className="mt-section-gap">
        <ReviewForm
          onSubmitted={(r) => {
            reviews.addReview(r);
          }}
        />
      </div>
    </>
  );
}
