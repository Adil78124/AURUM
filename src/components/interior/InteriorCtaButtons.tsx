"use client";

import { useUiModals } from "@/context/UiModalsContext";

export function InteriorCtaButtons() {
  const { openBooking } = useUiModals();
  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-8 md:flex-row">
      <button
        type="button"
        onClick={openBooking}
        className="bg-primary-container px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-all duration-500 gold-glow"
      >
        Забронировать
      </button>
      <button
        type="button"
        className="border border-primary/40 px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest text-primary transition-all hover:bg-primary/5"
      >
        Виртуальный тур
      </button>
    </div>
  );
}
