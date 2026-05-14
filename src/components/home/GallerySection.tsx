"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/cn";
import { premiumEase, viewportOnce } from "@/lib/animations";

export function GallerySection() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const regionRef = useRef<HTMLElement>(null);

  const n = galleryItems.length;
  const current = galleryItems[index]!;
  const prevIdx = (index - 1 + n) % n;
  const nextIdx = (index + 1) % n;

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? n - 1 : i - 1));
  }, [n]);

  const next = useCallback(() => {
    setIndex((i) => (i === n - 1 ? 0 : i + 1));
  }, [n]);

  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  const scrollStrip = useCallback((dir: -1 | 1) => {
    stripRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section
      ref={regionRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Фотогалерея ресторана AURUM"
      className="overflow-hidden bg-[#261a00] py-section-gap outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#261a00]"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-4 text-center font-display-lg text-headline-lg-mobile text-primary md:text-headline-lg">
          Фотогалерея
        </h2>
        <p className="mb-8 text-center font-body-md text-on-surface-variant">
          Листайте миниатюры или используйте стрелки и клавиши{" "}
          <span className="whitespace-nowrap text-on-surface/80">← →</span>
        </p>

        <motion.div
          className="flex flex-col items-stretch gap-gutter lg:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduced ? 0.05 : 0.14,
                delayChildren: reduced ? 0 : 0.06,
              },
            },
          }}
        >
          <motion.button
            type="button"
            onClick={prev}
            aria-label="Предыдущее фото"
            variants={{
              hidden: reduced ? { opacity: 0 } : { opacity: 0, x: -28 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: premiumEase } },
            }}
            className="group relative hidden h-[380px] w-[22%] shrink-0 overflow-hidden rounded-sm border border-primary/15 bg-black/30 transition hover:border-primary/35 md:h-[460px] lg:block lg:h-[500px]"
          >
            <Image
              src={galleryItems[prevIdx]!.src}
              alt=""
              fill
              className="object-cover brightness-[0.65] transition duration-500 group-hover:scale-[1.04] group-hover:brightness-90"
              sizes="25vw"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 font-label-caps text-[10px] uppercase tracking-[0.2em] text-primary/90">
              Назад
            </span>
          </motion.button>

          <motion.div
            className="relative w-full min-w-0 flex-1"
            variants={{
              hidden: reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: premiumEase } },
            }}
          >
            <div className="pointer-events-none absolute -inset-1 border border-primary/25 md:-inset-3" />
            <div className="relative rounded-sm bg-black/40 p-1 md:p-2">
              <div
                className="ring-2 ring-white/90 ring-offset-2 ring-offset-[#261a00]"
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0]?.clientX ?? null;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current == null) return;
                  const x = e.changedTouches[0]?.clientX;
                  if (x == null) return;
                  const dx = x - touchStartX.current;
                  touchStartX.current = null;
                  if (dx > 56) prev();
                  else if (dx < -56) next();
                }}
              >
                <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[420px] lg:h-[480px]">
                  <Image
                    key={current.id}
                    src={current.src}
                    alt={current.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 75vw"
                  />
                </div>
              </div>
            </div>

            <motion.div
              className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-1 md:pl-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.55, ease: premiumEase }}
            >
              <button
                type="button"
                onClick={prev}
                className="pointer-events-auto rounded-full border border-white/10 bg-black/55 p-2 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/75 md:p-2.5"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="h-7 w-7 md:h-9 md:w-9" strokeWidth={1.5} />
              </button>
            </motion.div>
            <motion.div
              className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-1 md:pr-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.55, ease: premiumEase }}
            >
              <button
                type="button"
                onClick={next}
                className="pointer-events-auto rounded-full border border-white/10 bg-black/55 p-2 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/75 md:p-2.5"
                aria-label="Следующее фото"
              >
                <ChevronRight className="h-7 w-7 md:h-9 md:w-9" strokeWidth={1.5} />
              </button>
            </motion.div>
          </motion.div>

          <motion.button
            type="button"
            onClick={next}
            aria-label="Следующее фото"
            variants={{
              hidden: reduced ? { opacity: 0 } : { opacity: 0, x: 28 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: premiumEase } },
            }}
            className="group relative hidden h-[380px] w-[22%] shrink-0 overflow-hidden rounded-sm border border-primary/15 bg-black/30 transition hover:border-primary/35 md:h-[460px] lg:block lg:h-[500px]"
          >
            <Image
              src={galleryItems[nextIdx]!.src}
              alt=""
              fill
              className="object-cover brightness-[0.65] transition duration-500 group-hover:scale-[1.04] group-hover:brightness-90"
              sizes="25vw"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
            <span className="absolute bottom-3 right-3 font-label-caps text-[10px] uppercase tracking-[0.2em] text-primary/90">
              Далее
            </span>
          </motion.button>
        </motion.div>

        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-primary/30 bg-[#1a1208]/95 p-2 text-primary shadow-md hover:bg-[#261a00] md:flex"
            aria-label="Прокрутить миниатюры влево"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => scrollStrip(1)}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-primary/30 bg-[#1a1208]/95 p-2 text-primary shadow-md hover:bg-[#261a00] md:flex"
            aria-label="Прокрутить миниатюры вправо"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>

          <div
            ref={stripRef}
            role="tablist"
            aria-label="Миниатюры галереи"
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-1 pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:thin] md:px-10 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/35 [&::-webkit-scrollbar-track]:bg-black/20"
          >
            {galleryItems.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Фото ${i + 1} из ${n}: ${item.alt}`}
                ref={(el) => {
                  thumbRefs.current[i] = el;
                }}
                onClick={() => setIndex(i)}
                className={cn(
                  "relative h-[72px] w-[108px] shrink-0 snap-center overflow-hidden rounded-md border-2 transition-all duration-200 sm:h-20 sm:w-[7.5rem]",
                  i === index
                    ? "scale-[1.03] border-primary shadow-[0_0_0_1px_rgba(240,197,103,0.35)] ring-2 ring-primary/50"
                    : "border-transparent opacity-75 hover:opacity-100",
                )}
              >
                <Image src={item.src} alt="" fill className="object-cover" sizes="120px" />
                {i === index ? (
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-primary" />
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center font-label-caps text-label-caps tracking-[0.2em] text-on-surface-variant">
          {index + 1} / {n}
        </p>
      </div>
    </section>
  );
}
