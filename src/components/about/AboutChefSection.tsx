"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { MotionReveal } from "@/components/motion/MotionReveal";

const CHEF_IMAGE = "/IMG_5181.JPG.jpeg";

export function AboutChefSection() {
  const t = useTranslations("Chef");

  return (
    <section className="border-y border-primary/10 bg-[#0f0a06] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <MotionReveal variant="fadeUp" className="mb-12 max-w-2xl">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary">
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 font-display-lg text-headline-lg-mobile text-on-surface md:text-display-lg">
            {t("title")}
          </h2>
          <div className="mt-6 h-px w-24 bg-primary/45 interior-gold-line" />
        </MotionReveal>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <MotionReveal variant="slideLeft" className="relative lg:col-span-5">
            <div className="pointer-events-none absolute -inset-3 rounded-lg border border-primary/15" />
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-tr from-amber-900/20 via-transparent to-transparent" />
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/5] w-full lg:aspect-[3/4]">
                <Image
                  src={CHEF_IMAGE}
                  alt={t("imageAlt")}
                  fill
                  className="object-cover object-[center_22%] transition-transform duration-[1.4s] ease-out hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0604]/90 via-[#0a0604]/15 to-transparent" />
            </div>
          </MotionReveal>

          <MotionReveal variant="slideRight" className="space-y-8 lg:col-span-7">
            <div>
              <p className="font-headline-lg text-2xl text-on-surface md:text-3xl">{t("name")}</p>
              <p className="mt-2 font-body-md text-on-surface-variant">{t("bio")}</p>
            </div>

            <blockquote className="border-l-2 border-primary/50 pl-6 font-headline-lg text-lg italic leading-relaxed text-on-surface md:text-xl">
              {t("quote")}
            </blockquote>

            <div className="space-y-4 font-body-lg text-on-surface-variant">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
