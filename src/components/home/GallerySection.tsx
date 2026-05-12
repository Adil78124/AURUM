"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import { gallerySlides } from "@/data/gallery";

export function GallerySection() {
  const [index, setIndex] = useState(0);
  const slide = gallerySlides[index]!;

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? gallerySlides.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i === gallerySlides.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section className="overflow-hidden bg-[#261a00] py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-12 text-center font-display-lg text-headline-lg-mobile text-primary md:text-headline-lg">
          Фотогалерея
        </h2>
        <div className="flex flex-col items-center gap-gutter md:flex-row">
          <div className="hidden w-[22%] opacity-50 transition-opacity hover:opacity-100 lg:block">
            <Image
              src={slide.leftThumbSrc}
              alt={slide.leftThumbAlt}
              width={400}
              height={533}
              className="aspect-[3/4] rounded-sm object-cover brightness-75 grayscale"
            />
          </div>
          <div className="relative w-full flex-1">
            <div className="pointer-events-none absolute -inset-1 border border-primary/25 md:-inset-3" />
            <div className="relative rounded-sm bg-black/40 p-1 md:p-2">
              <div className="ring-2 ring-white/90 ring-offset-2 ring-offset-[#261a00]">
                <Image
                  src={slide.mainSrc}
                  alt={slide.mainAlt}
                  width={1200}
                  height={600}
                  className="h-[380px] w-full object-cover md:h-[600px]"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 -left-2 flex items-center md:-left-10">
              <button
                type="button"
                onClick={prev}
                className="rounded-full bg-black/40 px-2 py-2 text-white transition-colors hover:bg-black/70"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
              </button>
            </div>
            <div className="absolute inset-y-0 -right-2 flex items-center md:-right-10">
              <button
                type="button"
                onClick={next}
                className="rounded-full bg-black/40 px-2 py-2 text-white transition-colors hover:bg-black/70"
                aria-label="Следующее фото"
              >
                <ChevronRight className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
              </button>
            </div>
          </div>
          <div className="hidden w-[22%] opacity-50 transition-opacity hover:opacity-100 lg:block">
            <Image
              src={slide.rightThumbSrc}
              alt={slide.rightThumbAlt}
              width={400}
              height={533}
              className="aspect-[3/4] rounded-sm object-cover brightness-75 grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
