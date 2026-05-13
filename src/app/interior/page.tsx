"use client";

import Image from "next/image";
import { Circle, Sparkles, Sun } from "lucide-react";
import {
  interiorBar,
  interiorHero,
  interiorMainHall,
  interiorTerrace,
  interiorVip,
} from "@/data/interior";
import { InteriorCtaButtons } from "@/components/interior/InteriorCtaButtons";
import { InteriorReveal } from "@/components/interior/InteriorReveal";
import { InteriorParallaxMedia } from "@/components/interior/InteriorParallaxMedia";
import { VirtualTourSection } from "@/components/interior/VirtualTourSection";

export default function InteriorPage() {
  return (
    <main className="interior-page-bg font-body-md text-on-background">
      <header className="relative flex h-[819px] items-end overflow-hidden px-margin-mobile pb-section-gap md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <InteriorParallaxMedia className="absolute inset-0 h-full w-full" range={26}>
            <div className="relative h-full min-h-[100vh] w-full">
              <Image
                src={interiorHero.imageSrc}
                alt={interiorHero.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </InteriorParallaxMedia>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0704] via-[#120a06]/55 to-[#1a100a]/35" />
          <div className="absolute inset-0 bg-[#2c1810]/25 mix-blend-multiply" />
          <div className="interior-image-vignette pointer-events-none absolute inset-0" />
        </div>
        <InteriorReveal className="relative z-10 max-w-3xl">
          <h1 className="mb-6 font-display-lg text-display-lg text-on-surface">
            {interiorHero.title}{" "}
            <span className="font-title-italic italic text-primary">{interiorHero.titleItalic}</span>
          </h1>
          <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">{interiorHero.description}</p>
        </InteriorReveal>
      </header>

      <div className="mx-auto max-w-container-max">
        <InteriorReveal>
          <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
            <div className="mb-16 flex items-center gap-6">
              <h2 className="shrink-0 font-headline-lg text-headline-lg text-on-surface">{interiorMainHall.title}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/45 via-primary/25 to-transparent interior-gold-line" />
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="group relative col-span-12 overflow-hidden rounded-lg md:col-span-8">
                <InteriorParallaxMedia className="h-[500px] w-full md:h-[520px]">
                  <div className="relative h-full w-full">
                    <Image
                      src={interiorMainHall.large.src}
                      alt={interiorMainHall.large.alt}
                      fill
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width:768px) 100vw, 66vw"
                    />
                  </div>
                </InteriorParallaxMedia>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0604]/85 via-transparent to-[#1a0f08]/25" />
                <div className="absolute bottom-6 left-6 max-w-sm rounded-md border border-primary/15 bg-[#0c0805]/75 p-6 shadow-lg backdrop-blur-md">
                  <p className="font-body-md text-on-surface">{interiorMainHall.caption}</p>
                </div>
              </div>
              <div className="col-span-12 flex min-h-[500px] flex-col gap-gutter md:col-span-4">
                <div className="group relative min-h-[240px] flex-1 overflow-hidden rounded-lg">
                  <InteriorParallaxMedia className="h-full min-h-[240px] w-full" range={14}>
                    <div className="relative h-full min-h-[240px] w-full">
                      <Image
                        src={interiorMainHall.small.src}
                        alt={interiorMainHall.small.alt}
                        fill
                        className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                  </InteriorParallaxMedia>
                  <div className="pointer-events-none absolute inset-0 bg-[#1f120c]/20" />
                </div>
                <div className="flex min-h-[240px] flex-1 flex-col justify-center rounded-lg border border-primary/20 border-l-primary-container bg-[#0f0a06]/90 p-8 shadow-inner backdrop-blur-sm">
                  <span className="mb-4 font-label-caps text-primary">{interiorMainHall.sideCard.label}</span>
                  <h3 className="mb-4 font-headline-lg text-title-italic italic text-on-surface">
                    {interiorMainHall.sideCard.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">{interiorMainHall.sideCard.text}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/35 to-transparent interior-gold-line" />
                </div>
              </div>
            </div>
          </section>
        </InteriorReveal>

        <InteriorReveal>
          <section className="relative border-y border-primary/10 bg-[#0c0805]/90 px-margin-mobile py-section-gap md:px-margin-desktop">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_30%,rgba(180,120,60,0.07),transparent_55%)]" />
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
              <div className="order-2 md:order-1">
                <div className="mb-12">
                  <span className="mb-4 block font-label-caps tracking-[0.22em] text-primary">
                    {interiorBar.eyebrow}
                  </span>
                  <h2 className="mb-8 font-display-lg text-headline-lg text-on-surface">{interiorBar.title}</h2>
                  <div className="mb-8 h-px w-24 bg-gradient-to-r from-primary via-primary/40 to-transparent interior-gold-line" />
                  <p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">{interiorBar.text}</p>
                  <ul className="space-y-6">
                    {interiorBar.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-4">
                        <Circle className="h-2 w-2 shrink-0 fill-primary text-primary" aria-hidden />
                        <span className="font-body-md text-on-surface">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="absolute -right-8 -top-8 -z-10 hidden h-[calc(100%+2rem)] w-[calc(100%+2rem)] border border-primary/25 md:block interior-float-slow" />
                <div className="group relative overflow-hidden rounded-lg shadow-2xl">
                  <InteriorParallaxMedia className="h-[520px] w-full" range={20}>
                    <div className="relative h-full w-full">
                      <Image
                        src={interiorBar.imageSrc}
                        alt={interiorBar.imageAlt}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.045]"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                    </div>
                  </InteriorParallaxMedia>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0a0604]/55 to-transparent" />
                </div>
              </div>
            </div>
          </section>
        </InteriorReveal>

        <InteriorReveal>
          <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              <div className="space-y-gutter md:col-span-2">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">{interiorVip.title}</h2>
                    <p className="font-title-italic italic text-primary/90">{interiorVip.subtitle}</p>
                  </div>
                </div>
                <div className="group relative h-[400px] overflow-hidden rounded-lg">
                  <InteriorParallaxMedia className="h-full w-full" range={16}>
                    <div className="relative h-full w-full">
                      <Image
                        src={interiorVip.imageSrc}
                        alt={interiorVip.imageAlt}
                        fill
                        className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width:768px) 100vw, 66vw"
                      />
                    </div>
                  </InteriorParallaxMedia>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0a0604]/92 via-[#0a0604]/35 to-transparent p-8">
                    <p className="max-w-lg text-on-surface">{interiorVip.overlayText}</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:col-span-1">
                <div className="group relative mt-auto flex min-h-[500px] flex-col justify-between overflow-hidden rounded-lg border border-primary/15 border-t-primary-container bg-[#0f0a06]/85 p-8 shadow-xl backdrop-blur-md">
                  <div className="relative z-10">
                    <h2 className="mb-6 font-headline-lg text-title-italic italic text-on-surface">
                      {interiorTerrace.title}
                    </h2>
                    <p className="font-body-md text-on-surface-variant">{interiorTerrace.text}</p>
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/35 to-transparent interior-gold-line" />
                    <div className="flex items-center justify-between font-label-caps text-label-caps tracking-widest text-primary">
                      <span>{interiorTerrace.season}</span>
                      <Sun className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                    </div>
                  </div>
                  <Image
                    src={interiorTerrace.imageSrc}
                    alt={interiorTerrace.imageAlt}
                    fill
                    className="-z-10 object-cover opacity-35 transition-transform duration-[2.2s] ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </section>
        </InteriorReveal>

        <VirtualTourSection />

        <InteriorReveal>
          <section className="px-margin-mobile py-section-gap text-center md:px-margin-desktop">
            <div className="mx-auto max-w-2xl space-y-12">
              <Sparkles
                className="mx-auto inline-block h-14 w-14 text-primary"
                strokeWidth={1.25}
                aria-hidden
              />
              <h2 className="font-display-lg text-headline-lg text-on-surface">Прикоснитесь к легенде</h2>
              <p className="font-body-lg italic text-on-surface-variant">
                Забронируйте столик в AURUM и откройте для себя новый уровень гостеприимства.
              </p>
              <InteriorCtaButtons />
            </div>
          </section>
        </InteriorReveal>
      </div>
    </main>
  );
}
