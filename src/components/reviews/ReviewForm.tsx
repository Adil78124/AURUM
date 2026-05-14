"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/cn";
import type { Review } from "@/data/reviews";
import { premiumEase, staggerItem, staggerParent, viewportOnce } from "@/lib/animations";

type Props = {
  onSubmitted?: (review: Review) => void;
};

export function ReviewForm({ onSubmitted }: Props) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const reduced = useReducedMotion();
  const t = useTranslations("ReviewForm");

  return (
    <GlassCard className="relative mx-auto max-w-2xl overflow-hidden p-12">
      <div className="absolute right-0 top-0 p-4 opacity-10">
        <MessageSquare className="h-32 w-32 text-primary" strokeWidth={1} aria-hidden />
      </div>
      <motion.h3
        className="mb-8 text-center font-headline-lg text-headline-lg-mobile text-on-surface"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: reduced ? 0.28 : 0.72, ease: premiumEase }}
      >
        {t("title")}
      </motion.h3>
      <motion.form
        className="space-y-8"
        variants={staggerParent(Boolean(reduced), 0.1, 0.04)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        onSubmit={(e) => {
          e.preventDefault();
          const trimmedName = name.trim() || t("guestDefault");
          const trimmedText = text.trim();
          if (!trimmedText || rating < 1) return;

          const entry: Review = {
            id: `local-${Date.now()}`,
            author: trimmedName,
            date: t("justNow"),
            text: `«${trimmedText}»`,
            rating,
          };

          onSubmitted?.(entry);
          setSuccess(true);
          setText("");
          setRating(0);
          setContact("");
          setName("");
          window.setTimeout(() => setSuccess(false), 8000);
        }}
      >
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={staggerItem(Boolean(reduced))}
        >
          <div className="border-b border-primary/30 py-2 transition-colors focus-within:border-primary">
            <label className="mb-1 block font-title-italic text-sm italic text-on-surface-variant">
              {t("name")}
            </label>
            <input
              className="w-full border-none bg-transparent p-0 text-on-surface outline-none ring-0 placeholder:text-on-surface-variant/50"
              placeholder={t("namePh")}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="border-b border-primary/30 py-2 transition-colors focus-within:border-primary">
            <label className="mb-1 block font-title-italic text-sm italic text-on-surface-variant">
              {t("contact")}
            </label>
            <input
              className="w-full border-none bg-transparent p-0 text-on-surface outline-none ring-0 placeholder:text-on-surface-variant/50"
              placeholder={t("contactPh")}
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </motion.div>
        <motion.div
          className="border-b border-primary/30 py-2 transition-colors focus-within:border-primary"
          variants={staggerItem(Boolean(reduced))}
        >
          <label className="mb-1 block font-title-italic text-sm italic text-on-surface-variant">
            {t("text")}
          </label>
          <textarea
            className="w-full resize-none border-none bg-transparent p-0 text-on-surface outline-none ring-0 placeholder:text-on-surface-variant/50"
            placeholder={t("textPh")}
            rows={3}
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-6"
          variants={staggerItem(Boolean(reduced))}
        >
          <div className="flex space-x-2 text-primary/40">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                className="transition-colors hover:text-primary"
                onClick={() => setRating(n)}
                aria-label={t("ratingAria", { n })}
              >
                <Star
                  className={cn(
                    "h-8 w-8 transition-colors",
                    n <= rating ? "fill-primary text-primary" : "text-primary/40",
                  )}
                  strokeWidth={1.5}
                  aria-hidden
                />
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="bg-primary px-12 py-4 font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-primary transition-all gold-glow"
          >
            {t("submit")}
          </button>
          <AnimatePresence>
            {success ? (
              <motion.p
                key="success"
                className="max-w-md text-center font-body-md text-on-surface"
                role="status"
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: reduced ? 0.22 : 0.45, ease: premiumEase }}
              >
                {t("success")}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.form>
    </GlassCard>
  );
}
