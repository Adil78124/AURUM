"use client";

import { Camera, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { contacts } from "@/data/contacts";
import { ContactMapEmbed } from "@/components/maps/ContactMapEmbed";
import { MotionReveal } from "@/components/motion/MotionReveal";

export function ContactSection() {
  const t = useTranslations("Contacts");

  return (
    <section className="glass-card mb-section-gap flex flex-col overflow-hidden rounded-lg shadow-2xl lg:flex-row">
      <MotionReveal
        variant="slideLeft"
        className="flex flex-col justify-center border-b border-primary/10 p-12 md:p-16 lg:w-1/2 lg:border-b-0 lg:border-r"
      >
        <div className="space-y-12">
          <div>
            <p className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-primary/60">
              {t("phoneSocial")}
            </p>
            <a
              href={contacts.phoneHref}
              className="mb-2 block font-headline-lg text-headline-lg text-on-surface transition-colors hover:text-primary"
            >
              {contacts.phoneDisplay}
            </a>
            <a
              href={contacts.emailHref}
              className="mb-2 block font-body-lg text-on-surface-variant transition-colors hover:text-primary"
            >
              {contacts.emailDisplay}
            </a>
            <div className="mt-4 flex space-x-6">
              <a
                href={contacts.instagramHref}
                className="flex items-center gap-2 text-on-surface-variant transition-colors hover:text-primary"
              >
                <Camera className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
                <span className="font-label-caps text-label-caps">{t("instagram")}</span>
              </a>
              <a
                href={contacts.whatsappHref}
                className="flex items-center gap-2 text-on-surface-variant transition-colors hover:text-primary"
              >
                <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
                <span className="font-label-caps text-label-caps">{t("whatsapp")}</span>
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-primary/60">{t("address")}</p>
            <p className="font-title-italic text-title-italic italic text-on-surface">
              {t("line1")}
              <br />
              {t("line2")}
              <br />
              {t("line3")}
            </p>
          </div>
          <div>
            <p className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-primary/60">{t("hours")}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-body-md text-on-surface-variant">{t("hoursWeekdayLabel")}</p>
                <p className="text-body-lg text-on-surface">{contacts.hoursWeekday}</p>
              </div>
              <div>
                <p className="text-body-md text-on-surface-variant">{t("hoursWeekendLabel")}</p>
                <p className="text-body-lg text-on-surface">{contacts.hoursWeekend}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-primary/60">{t("parking")}</p>
            <p className="font-body-md text-on-surface-variant">{t("parkingText")}</p>
          </div>
        </div>
      </MotionReveal>
      <MotionReveal
        variant="slideRight"
        className="relative w-full overflow-hidden border-t border-primary/10 p-6 lg:w-1/2 lg:border-l-0 lg:border-t-0 lg:p-8"
      >
        <p className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-primary/60 lg:hidden">{t("map")}</p>
        <ContactMapEmbed title={t("mapEmbedTitle")} />
      </MotionReveal>
    </section>
  );
}
