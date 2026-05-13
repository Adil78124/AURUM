"use client";

import { useState } from "react";
import type { Review } from "@/data/reviews";
import { reviews as seedReviews } from "@/data/reviews";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { ReviewForm } from "@/components/reviews/ReviewForm";

export function ReviewsPageContent() {
  const [localReviews, setLocalReviews] = useState<Review[]>([]);
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
