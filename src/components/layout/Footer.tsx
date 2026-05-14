"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Camera, MessageCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { contacts } from "@/data/contacts";
import { ContactMapEmbed } from "@/components/maps/ContactMapEmbed";
import { premiumEase, staggerItem, staggerParent, viewportOnce } from "@/lib/animations";

const link =
  "font-body-md text-body-md text-on-surface-variant transition-colors duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(240,197,103,0.25)]";

const FOOTER_NAV = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/menu", key: "menu" as const },
  { href: "/interior", key: "interior" as const },
  { href: "/delivery", key: "delivery" as const },
  { href: "/reviews", key: "reviews" as const },
  { href: "/contacts", key: "contacts" as const },
] as const;

export function Footer() {
  const reduced = useReducedMotion();
  const tNav = useTranslations("Nav");
  const tFooter = useTranslations("Footer");
  const tContacts = useTranslations("Contacts");

  return (
    <footer className="w-full border-t border-primary/15 bg-black py-16 md:py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <motion.div
          className="flex flex-col gap-10 border-b border-primary/10 pb-12 md:flex-row md:items-start md:justify-between"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: reduced ? 0.3 : 0.85, ease: premiumEase }}
        >
          <div>
            <div className="font-display-lg text-headline-lg tracking-widest text-primary">AURUM</div>
            <p className="mt-3 max-w-xs text-sm text-on-surface-variant">{tFooter("tagline")}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_NAV.map((item) => (
              <Link key={item.href} href={item.href} className={link}>
                {tNav(item.key)}
              </Link>
            ))}
          </nav>
          <motion.div
            className="flex gap-6 text-primary"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduced ? 0.04 : 0.1 } },
            }}
          >
            <motion.a
              variants={staggerItem(Boolean(reduced))}
              href={contacts.instagramHref}
              aria-label={tFooter("instagramAria")}
              className="hover:opacity-80"
            >
              <Camera className="h-6 w-6" strokeWidth={1.5} />
            </motion.a>
            <motion.a
              variants={staggerItem(Boolean(reduced))}
              href={contacts.whatsappHref}
              aria-label={tFooter("whatsappAria")}
              className="hover:opacity-80"
            >
              <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
            </motion.a>
            <motion.span variants={staggerItem(Boolean(reduced))} className="opacity-40" aria-hidden>
              <Send className="h-6 w-6" strokeWidth={1.5} />
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2"
          variants={staggerParent(Boolean(reduced), 0.14, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div className="space-y-4 text-on-surface" variants={staggerItem(Boolean(reduced))}>
            <p className="font-label-caps text-label-caps text-primary">{tFooter("phone")}</p>
            <a href={contacts.phoneHref} className="block text-lg hover:text-primary">
              {contacts.phoneDisplay}
            </a>
            <p className="font-label-caps text-label-caps text-primary">{tFooter("email")}</p>
            <a href={contacts.emailHref} className="block hover:text-primary">
              {contacts.emailDisplay}
            </a>
            <p className="font-label-caps text-label-caps text-primary">{tFooter("address")}</p>
            <p className="text-on-surface-variant">
              {tContacts("line1")}
              {", "}
              {tContacts("line2")}
              {", "}
              {tContacts("line3")}
            </p>
          </motion.div>
          <motion.div className="space-y-4 text-on-surface" variants={staggerItem(Boolean(reduced))}>
            <p className="font-label-caps text-label-caps text-primary">{tFooter("hours")}</p>
            <p className="text-on-surface-variant">
              {tContacts("hoursWeekdayLabel")}: {contacts.hoursWeekday}
            </p>
            <p className="text-on-surface-variant">
              {tContacts("hoursWeekendLabel")}: {contacts.hoursWeekend}
            </p>
            <p className="font-label-caps text-label-caps text-primary">{tFooter("parking")}</p>
            <p className="text-sm text-on-surface-variant">{tContacts("parkingText")}</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-b border-primary/10 py-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: premiumEase }}
        >
          <p className="mb-4 font-label-caps text-label-caps text-primary">{tFooter("map")}</p>
          <ContactMapEmbed title={tContacts("mapEmbedTitle")} />
        </motion.div>

        <motion.div
          className="flex flex-col items-start justify-between gap-6 border-t border-primary/10 pt-10 md:flex-row md:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: premiumEase }}
        >
          <p className="text-sm text-on-surface-variant opacity-70">
            {tFooter("copyright", { year: new Date().getFullYear() })}
          </p>
          <Link
            href="#"
            className="text-sm text-on-surface-variant underline-offset-4 hover:text-primary hover:underline"
          >
            {tFooter("privacy")}
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
