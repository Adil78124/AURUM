"use client";

import Image from "next/image";
import { Circle, Sparkles, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  interiorBar,
  interiorHero,
  interiorMainHall,
  interiorSecondHall,
  interiorTerrace,
  interiorVipCabinet,
  interiorVipMain,
} from "@/data/interior";
import { InteriorCtaButtons } from "@/components/interior/InteriorCtaButtons";
import { InteriorReveal } from "@/components/interior/InteriorReveal";
import { InteriorParallaxMedia } from "@/components/interior/InteriorParallaxMedia";
import { VirtualTourSection } from "@/components/interior/VirtualTourSection";

export function InteriorPageView() {
  const t = useTranslations("Interior");
  const barBullets = [t("bar.bullet1"), t("bar.bullet2")];

  return (
    <main className="interior-page-bg font-body-md text-on-background">
      <header className="relative flex h-[819px] items-end overflow-hidden px-margin-mobile pb-section-gap md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <InteriorParallaxMedia className="absolute inset-0 h-full w-full" range={26}>
            <div className="relative h-full min-h-[100vh] w-full">
              <Image
                src={interiorHero.imageSrc}
                alt={t("hero.imageAlt")}
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
            {t("hero.title")}{" "}
            <span className="font-title-italic italic text-primary">{t("hero.titleItalic")}</span>
          </h1>
          <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">{t("hero.description")}</p>
        </InteriorReveal>
      </header>

      <div className="mx-auto max-w-container-max">
        <InteriorReveal>
          <section
            aria-labelledby="interior-main-hall-heading"
            className="px-margin-mobile py-section-gap md:px-margin-desktop"
          >
            <div className="mb-16 flex items-center gap-6">
              <h2
                id="interior-main-hall-heading"
                className="shrink-0 font-headline-lg text-headline-lg text-on-surface"
              >
                {t("mainHall.title")}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/45 via-primary/25 to-transparent interior-gold-line" />
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="group relative col-span-12 overflow-hidden rounded-lg md:col-span-8">
                <InteriorParallaxMedia className="h-[500px] w-full md:h-[520px]">
                  <div className="relative h-full w-full">
                    <Image
                      src={interiorMainHall.imageSrc}
                      alt={t("mainHall.imageAlt")}
                      fill
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width:768px) 100vw, 66vw"
                    />
                  </div>
                </InteriorParallaxMedia>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0604]/85 via-transparent to-[#1a0f08]/25" />
                <div className="absolute bottom-6 left-6 max-w-sm rounded-md border border-primary/15 bg-[#0c0805]/75 p-6 shadow-lg backdrop-blur-md">
                  <p className="font-body-md text-on-surface">{t("mainHall.caption")}</p>
                </div>
              </div>
              <div className="col-span-12 flex min-h-[500px] flex-col md:col-span-4">
                <div className="flex min-h-[500px] flex-1 flex-col justify-center rounded-lg border border-primary/20 border-l-primary-container bg-[#0f0a06]/90 p-8 shadow-inner backdrop-blur-sm md:min-h-[520px]">
                  <span className="mb-4 font-label-caps text-primary">{t("mainHall.sideLabel")}</span>
                  <h3 className="mb-4 font-headline-lg text-title-italic italic text-on-surface">
                    {t("mainHall.sideTitle")}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">{t("mainHall.sideText")}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/35 to-transparent interior-gold-line" />
                </div>
              </div>
            </div>
          </section>
        </InteriorReveal>

        <InteriorReveal>
          <section
            aria-labelledby="interior-second-hall-heading"
            className="border-t border-primary/12 px-margin-mobile py-section-gap md:px-margin-desktop"
          >
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-6">
                  <h2
                    id="interior-second-hall-heading"
                    className="shrink-0 font-headline-lg text-headline-lg text-on-surface"
                  >
                    {t("secondHall.title")}
                  </h2>
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent interior-gold-line md:block" />
                </div>
                <p className="max-w-2xl font-body-md text-on-surface-variant">{t("secondHall.lead")}</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <InteriorParallaxMedia className="h-[440px] w-full md:h-[500px]" range={16}>
                <div className="relative h-full w-full">
                  <Image
                    src={interiorSecondHall.imageSrc}
                    alt={t("secondHall.imageAlt")}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.035]"
                    sizes="100vw"
                  />
                </div>
              </InteriorParallaxMedia>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0604]/65 via-transparent to-[#1a0f08]/20" />
            </div>
          </section>
        </InteriorReveal>

        <InteriorReveal>
          <section
            aria-labelledby="interior-bar-heading"
            className="relative border-y border-primary/10 bg-[#0c0805]/90 px-margin-mobile py-section-gap md:px-margin-desktop"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_30%,rgba(180,120,60,0.07),transparent_55%)]" />
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
              <div className="order-2 md:order-1">
                <div className="mb-12">
                  <span className="mb-4 block font-label-caps tracking-[0.22em] text-primary">{t("bar.eyebrow")}</span>
                  <h2 id="interior-bar-heading" className="mb-8 font-display-lg text-headline-lg text-on-surface">
                    {t("bar.title")}
                  </h2>
                  <div className="mb-8 h-px w-24 bg-gradient-to-r from-primary via-primary/40 to-transparent interior-gold-line" />
                  <p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">{t("bar.text")}</p>
                  <ul className="space-y-6">
                    {barBullets.map((b) => (
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
                        alt={t("bar.imageAlt")}
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
          <section
            aria-labelledby="interior-vip-heading"
            className="border-t border-primary/15 px-margin-mobile py-section-gap md:px-margin-desktop"
          >
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 id="interior-vip-heading" className="font-headline-lg text-headline-lg text-on-surface">
                  {t("vipMain.title")}
                </h2>
                <p className="font-title-italic italic text-primary/90">{t("vipMain.subtitle")}</p>
              </div>
              <div className="hidden h-px max-w-md flex-1 bg-gradient-to-r from-primary/35 via-primary/15 to-transparent interior-gold-line md:block" />
            </div>

            <div className="space-y-14 md:space-y-16">
              <div className="group relative overflow-hidden rounded-lg">
                <InteriorParallaxMedia className="h-[400px] w-full md:h-[480px]" range={16}>
                  <div className="relative h-full w-full">
                    <Image
                      src={interiorVipMain.imageSrc}
                      alt={t("vipMain.imageAlt")}
                      fill
                      className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.04]"
                      sizes="100vw"
                    />
                  </div>
                </InteriorParallaxMedia>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0a0604]/92 via-[#0a0604]/35 to-transparent p-6 md:p-10">
                  <p className="max-w-2xl font-body-lg text-on-surface md:text-body-lg">{t("vipMain.overlayText")}</p>
                </div>
              </div>

              <div>
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <span className="font-label-caps tracking-[0.22em] text-primary">{t("vipCabinet.eyebrow")}</span>
                  <div className="h-px min-w-[4rem] flex-1 bg-gradient-to-r from-primary/30 to-transparent interior-gold-line" />
                </div>
                <h3 className="mb-8 font-display-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
                  {t("vipCabinet.title")}
                </h3>
                <div className="group relative overflow-hidden rounded-lg border border-primary/15 shadow-xl">
                  <InteriorParallaxMedia className="h-[320px] w-full md:h-[400px]" range={14}>
                    <div className="relative h-full w-full">
                      <Image
                        src={interiorVipCabinet.imageSrc}
                        alt={t("vipCabinet.imageAlt")}
                        fill
                        className="object-cover transition-transform duration-[1.15s] ease-out group-hover:scale-[1.04]"
                        sizes="100vw"
                      />
                    </div>
                  </InteriorParallaxMedia>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0604]/55 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </section>
        </InteriorReveal>

        <InteriorReveal>
          <section
            aria-labelledby="interior-terrace-heading"
            className="relative border-t border-primary/15 bg-[#0a0705]/40 px-margin-mobile py-section-gap md:px-margin-desktop"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_40%,rgba(180,120,60,0.06),transparent_55%)]" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
              <div className="order-2 md:order-1">
                <span className="mb-4 block font-label-caps tracking-[0.22em] text-primary">{t("terrace.eyebrow")}</span>
                <h2
                  id="interior-terrace-heading"
                  className="mb-8 font-display-lg text-headline-lg-mobile text-on-surface md:text-display-lg"
                >
                  {t("terrace.title")}
                </h2>
                <div className="mb-8 h-px w-24 bg-gradient-to-r from-primary via-primary/40 to-transparent interior-gold-line" />
                <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">{t("terrace.text")}</p>
                <div className="flex max-w-md items-center justify-between gap-4 border-t border-primary/15 pt-6 font-label-caps text-label-caps tracking-widest text-primary">
                  <span>{t("terrace.season")}</span>
                  <Sun className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="group relative overflow-hidden rounded-lg shadow-2xl">
                  <InteriorParallaxMedia className="h-[480px] w-full md:h-[520px]" range={18}>
                    <div className="relative h-full w-full">
                      <Image
                        src={interiorTerrace.imageSrc}
                        alt={t("terrace.imageAlt")}
                        fill
                        className="object-cover transition-transform duration-[1.15s] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                    </div>
                  </InteriorParallaxMedia>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0604]/45 to-transparent" />
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
              <h2 className="font-display-lg text-headline-lg text-on-surface">{t("cta.title")}</h2>
              <p className="font-body-lg italic text-on-surface-variant">{t("cta.subtitle")}</p>
              <InteriorCtaButtons />
            </div>
          </section>
        </InteriorReveal>
      </div>
    </main>
  );
}
