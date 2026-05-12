import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { ReviewForm } from "@/components/reviews/ReviewForm";

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
      <div className="mb-section-gap text-center">
        <p className="mb-2 font-label-caps text-label-caps uppercase text-primary">
          Голоса наших гостей
        </p>
        <h1 className="font-display-lg text-display-lg text-primary">Отзывы посетителей</h1>
        <div className="mx-auto mt-6 h-px w-24 bg-primary/40" />
      </div>

      <p className="mx-auto mb-12 max-w-2xl text-center font-body-lg text-on-surface-variant">
        Отзывы с акцентом на атмосферу и качество — чтобы снять страх неизвестного и помочь выбрать
        формат визита.
      </p>

      <ReviewsCarousel />

      <div className="mt-section-gap">
        <ReviewForm />
      </div>
    </main>
  );
}
