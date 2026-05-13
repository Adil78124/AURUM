import Image from "next/image";
import { Star, User } from "lucide-react";
import type { Review } from "@/data/reviews";
import { cn } from "@/lib/cn";

export function ReviewCard({ review, featured }: { review: Review; featured?: boolean }) {
  const stars = review.rating ?? 5;

  return (
    <div
      className={cn(
        "flex min-h-[320px] flex-col rounded-2xl border bg-[#120d08]/80 p-8 shadow-lg backdrop-blur-sm",
        featured ? "border-primary/40" : "border-white/[0.08]",
      )}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-surface-container-low">
          {review.avatarSrc ? (
            <Image src={review.avatarSrc} alt="" fill className="object-cover" sizes="56px" />
          ) : (
            <User className="h-7 w-7 text-on-surface-variant" strokeWidth={1.25} aria-hidden />
          )}
        </div>
        <div>
          <p className="font-headline-lg text-lg text-on-surface">{review.author}</p>
          <p className="text-xs uppercase tracking-widest text-primary/75">{review.date}</p>
        </div>
      </div>
      <div className="my-6 flex text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5",
              i < stars ? "fill-primary text-primary" : "text-primary/35",
            )}
            strokeWidth={1.5}
            aria-hidden
          />
        ))}
      </div>
      <p className="flex-1 font-body-lg leading-relaxed text-on-surface">{review.text}</p>
    </div>
  );
}
