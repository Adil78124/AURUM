"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { InteriorReveal } from "@/components/interior/InteriorReveal";

const PREVIEW = "/IMG_4924.PNG";

export function VirtualTourSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <InteriorReveal>
        <section className="relative overflow-hidden border-y border-primary/15 bg-[#100a06] px-margin-mobile py-section-gap md:px-margin-desktop">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,168,83,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-900/15 blur-[100px] interior-ambient-orb" />

          <div className="relative z-10 mx-auto grid max-w-container-max gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-primary/20 shadow-2xl"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <Image
                src={PREVIEW}
                alt="Превью интерьера AURUM"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/50 bg-black/40 shadow-[0_0_40px_rgba(240,197,103,0.35)] backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                  <Play className="ml-1 h-9 w-9 text-primary" fill="currentColor" strokeWidth={0} aria-hidden />
                </span>
              </div>
            </button>

            <div className="space-y-8 text-left">
              <p className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary">
                Виртуальный тур
              </p>
              <h2 className="font-display-lg text-headline-lg-mobile text-on-surface md:text-display-lg">
                Исследуйте интерьер AURUM
              </h2>
              <p className="max-w-xl font-body-lg text-on-surface-variant">
                Прогуляйтесь по залам и VIP-зонам в удобном темпе. Полноценный 360°-тур появится здесь
                чуть позже — а пока соберите настроение будущего визита.
              </p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center border border-primary/50 bg-primary-container/90 px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-primary transition-all hover:brightness-110"
              >
                Открыть виртуальный тур
              </button>
            </div>
          </div>
        </section>
      </InteriorReveal>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="virtual-tour-title"
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/25 bg-[#0f0a06]/95 shadow-2xl">
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-on-surface transition hover:bg-black/70"
              onClick={() => setOpen(false)}
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <div className="relative aspect-video w-full">
              <Image
                src={PREVIEW}
                alt="Превью интерьера для виртуального тура"
                fill
                className="object-cover opacity-60"
                sizes="100vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
                <Play className="h-14 w-14 text-primary/90" strokeWidth={1} aria-hidden />
                <h3 id="virtual-tour-title" className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
                  Тур скоро будет доступен
                </h3>
                <p className="max-w-md font-body-md text-on-surface-variant">
                  Мы подключаем панораму 2GIS / 360°. Если нужен тур сейчас — администратор проведёт
                  вас по залу при бронировании.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-2 border border-primary/40 px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest text-primary transition hover:bg-primary/10"
                >
                  Понятно
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
