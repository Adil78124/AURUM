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

export default function InteriorPage() {
  return (
    <main className="font-body-md text-on-background">
      <header className="relative flex h-[819px] items-end overflow-hidden px-margin-mobile pb-section-gap md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <Image
            src={interiorHero.imageSrc}
            alt={interiorHero.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="mb-6 font-display-lg text-display-lg text-primary">
            {interiorHero.title}{" "}
            <span className="font-title-italic italic text-secondary">{interiorHero.titleItalic}</span>
          </h1>
          <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            {interiorHero.description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-container-max">
        <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
          <div className="mb-16 flex items-center gap-8">
            <h2 className="shrink-0 font-headline-lg text-headline-lg text-primary">
              {interiorMainHall.title}
            </h2>
            <div className="h-px w-full bg-primary/30" />
          </div>
          <div className="grid grid-cols-12 gap-gutter">
            <div className="relative col-span-12 overflow-hidden group md:col-span-8">
              <Image
                src={interiorMainHall.large.src}
                alt={interiorMainHall.large.alt}
                width={1400}
                height={500}
                className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 max-w-sm glass-card p-6">
                <p className="font-body-md text-on-surface">{interiorMainHall.caption}</p>
              </div>
            </div>
            <div className="col-span-12 flex min-h-[500px] flex-col gap-gutter md:col-span-4">
              <div className="relative min-h-[240px] flex-1 overflow-hidden group">
                <Image
                  src={interiorMainHall.small.src}
                  alt={interiorMainHall.small.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="glass-card flex min-h-[240px] flex-1 flex-col justify-center border-l-2 border-l-primary-container p-8">
                <span className="mb-4 font-label-caps text-primary">
                  {interiorMainHall.sideCard.label}
                </span>
                <h3 className="mb-4 font-headline-lg text-title-italic italic text-secondary">
                  {interiorMainHall.sideCard.title}
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  {interiorMainHall.sideCard.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-12">
                <span className="mb-4 block font-label-caps tracking-widest text-primary">
                  {interiorBar.eyebrow}
                </span>
                <h2 className="mb-8 font-display-lg text-headline-lg text-on-surface">
                  {interiorBar.title}
                </h2>
                <div className="mb-8 h-1 w-24 bg-primary" />
                <p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">
                  {interiorBar.text}
                </p>
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
              <div className="absolute -right-10 -top-10 -z-10 h-full w-full border border-primary/20" />
              <Image
                src={interiorBar.imageSrc}
                alt={interiorBar.imageAlt}
                width={900}
                height={600}
                className="h-[600px] w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <div className="space-y-gutter md:col-span-2">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    {interiorVip.title}
                  </h2>
                  <p className="font-title-italic italic text-secondary">{interiorVip.subtitle}</p>
                </div>
              </div>
              <div className="group relative h-[400px] overflow-hidden">
                <Image
                  src={interiorVip.imageSrc}
                  alt={interiorVip.imageAlt}
                  fill
                  className="object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="max-w-md text-on-surface">{interiorVip.overlayText}</p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col md:col-span-1">
              <div className="glass-card group relative mt-auto flex h-[500px] flex-col justify-between overflow-hidden border-t-2 border-t-primary-container p-8">
                <div className="relative z-10">
                  <h2 className="mb-6 font-headline-lg text-title-italic italic text-primary">
                    {interiorTerrace.title}
                  </h2>
                  <p className="font-body-md text-on-surface-variant">{interiorTerrace.text}</p>
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="h-px w-full bg-primary/20" />
                  <div className="flex items-center justify-between font-label-caps text-label-caps tracking-widest text-primary">
                    <span>{interiorTerrace.season}</span>
                    <Sun className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                  </div>
                </div>
                <Image
                  src={interiorTerrace.imageSrc}
                  alt={interiorTerrace.imageAlt}
                  fill
                  className="-z-10 object-cover opacity-30 transition-transform duration-[2000ms] group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile py-section-gap text-center md:px-margin-desktop">
          <div className="mx-auto max-w-2xl space-y-12">
            <Sparkles className="mx-auto inline-block h-14 w-14 text-primary" strokeWidth={1.25} aria-hidden />
            <h2 className="font-display-lg text-headline-lg text-on-surface">Прикоснитесь к легенде</h2>
            <p className="font-body-lg italic text-on-surface-variant">
              Забронируйте столик в AURUM и откройте для себя новый уровень гостеприимства.
            </p>
            <InteriorCtaButtons />
          </div>
        </section>
      </div>
    </main>
  );
}
