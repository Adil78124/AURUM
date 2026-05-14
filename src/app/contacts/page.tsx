"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactSection } from "@/components/contacts/ContactSection";
import { premiumEase, viewportOnce } from "@/lib/animations";

export default function ContactsPage() {
  const reduced = useReducedMotion();

  return (
    <main className="contacts-page-bg pb-section-gap pt-[140px] font-body-md text-on-surface">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <motion.div
          className="mb-section-gap text-center"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: reduced ? 0.28 : 0.78, ease: premiumEase }}
        >
          <h1 className="mb-4 font-display-lg text-display-lg text-on-surface">Контакты</h1>
          <div className="mx-auto h-px w-24 bg-primary/30" />
        </motion.div>
        <ContactSection />
      </div>
    </main>
  );
}
