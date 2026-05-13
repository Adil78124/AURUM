"use client";

import { Sparkles } from "lucide-react";
import { useUiModals } from "@/context/UiModalsContext";

export function AboutCtaSection() {
  const { openBooking } = useUiModals();
  return (
    <section className="border-t border-primary/10 bg-surface-container-low py-section-gap text-center">
      <div className="mx-auto max-w-2xl space-y-12 px-margin-mobile">
        <Sparkles className="mx-auto h-14 w-14 text-primary" strokeWidth={1.25} aria-hidden />
        <h2 className="font-display-lg text-headline-lg text-on-surface">
          Познакомьтесь с AURUM ближе
        </h2>
        <p className="font-body-lg italic text-on-surface-variant">
          Забронируйте столик и ощутите золотой стандарт гостеприимства на практике.
        </p>
        <button
          type="button"
          onClick={openBooking}
          className="bg-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-all gold-glow"
        >
          Забронировать столик
        </button>
      </div>
    </section>
  );
}
