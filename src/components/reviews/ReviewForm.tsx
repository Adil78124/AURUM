"use client";

import { MessageSquare, Star } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/cn";

export function ReviewForm() {
  const [rating, setRating] = useState(0);

  return (
    <GlassCard className="relative mx-auto max-w-2xl overflow-hidden p-12">
      <div className="absolute right-0 top-0 p-4 opacity-10">
        <MessageSquare className="h-32 w-32 text-primary" strokeWidth={1} aria-hidden />
      </div>
      <h3 className="mb-8 text-center font-headline-lg text-headline-lg-mobile text-primary">
        Оставить отзыв
      </h3>
      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border-b border-primary/30 py-2 transition-colors focus-within:border-primary">
            <label className="mb-1 block font-title-italic text-sm italic text-primary/60">
              Имя
            </label>
            <input
              className="w-full border-none bg-transparent p-0 text-on-surface outline-none ring-0 placeholder:text-surface-variant"
              placeholder="Имя Фамилия"
              name="name"
            />
          </div>
          <div className="border-b border-primary/30 py-2 transition-colors focus-within:border-primary">
            <label className="mb-1 block font-title-italic text-sm italic text-primary/60">
              Телефон или email
            </label>
            <input
              className="w-full border-none bg-transparent p-0 text-on-surface outline-none ring-0 placeholder:text-surface-variant"
              placeholder="+7 или email"
              name="contact"
            />
          </div>
        </div>
        <div className="border-b border-primary/30 py-2 transition-colors focus-within:border-primary">
          <label className="mb-1 block font-title-italic text-sm italic text-primary/60">
            Ваш отзыв
          </label>
          <textarea
            className="w-full resize-none border-none bg-transparent p-0 text-on-surface outline-none ring-0 placeholder:text-surface-variant"
            placeholder="Расскажите о вашем визите..."
            rows={3}
            name="text"
          />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-2 text-primary/40">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                className="transition-colors hover:text-primary"
                onClick={() => setRating(n)}
                aria-label={`Оценка ${n}`}
              >
                <Star
                  className={cn(
                    "h-8 w-8 transition-colors",
                    n <= rating ? "fill-primary text-primary" : "text-primary/40",
                  )}
                  strokeWidth={1.5}
                  aria-hidden
                />
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="bg-primary px-12 py-4 font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-primary transition-all gold-glow"
          >
            Отправить отзыв
          </button>
        </div>
      </form>
    </GlassCard>
  );
}
