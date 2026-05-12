import Image from "next/image";
import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review, featured }: { review: Review; featured?: boolean }) {
  return (
    <div
      className={`flex min-h-[320px] flex-col rounded-2xl border bg-zinc-900/60 p-8 shadow-lg backdrop-blur-sm ${
        featured ? "border-primary/40" : "border-white/10"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-primary/30">
          <Image src={review.avatarSrc} alt="" fill className="object-cover" sizes="56px" />
        </div>
        <div>
          <p className="font-headline-lg text-lg text-on-surface">{review.author}</p>
          <p className="text-xs uppercase tracking-widest text-primary/70">{review.date}</p>
        </div>
      </div>
      <div className="my-6 flex text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" strokeWidth={1.5} aria-hidden />
        ))}
      </div>
      <p className="flex-1 font-body-lg leading-relaxed text-on-surface">{review.text}</p>
    </div>
  );
}
