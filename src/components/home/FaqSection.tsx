"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/faq";
import { MotionGoldLine } from "@/components/motion/MotionGoldLine";
import { premiumEase, staggerItem, staggerParent, viewportOnce } from "@/lib/animations";

export function FaqSection() {
  const [openId, setOpenId] = useState<string>("2");
  const reduced = useReducedMotion();

  return (
    <section className="bg-surface-dim py-section-gap">
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-0">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: reduced ? 0.3 : 0.75, ease: premiumEase }}
        >
          <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Популярные вопросы</h2>
          <MotionGoldLine className="mx-auto h-px w-24 bg-primary/40" origin="center" />
        </motion.div>
        <motion.div
          className="space-y-0 divide-y divide-white/10"
          variants={staggerParent(Boolean(reduced), 0.11, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {faqItems.map((item, idx) => {
            const open = openId === item.id;
            const n = idx + 1;
            return (
              <motion.div key={item.id} className="py-5" variants={staggerItem(Boolean(reduced))}>
                <button
                  type="button"
                  className="flex w-full items-start gap-4 text-left"
                  onClick={() => setOpenId(open ? "" : item.id)}
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 text-sm font-semibold text-on-surface">
                    {n}
                  </span>
                  <span className="flex-1 font-body-lg text-body-lg text-on-surface">
                    {item.question}
                  </span>
                  <span className="mt-1 shrink-0 text-primary">
                    {open ? (
                      <X className="h-6 w-6" strokeWidth={2} aria-hidden />
                    ) : (
                      <Plus className="h-6 w-6" strokeWidth={2} aria-hidden />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: reduced ? 0.22 : 0.45, ease: premiumEase }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-xl bg-[#1a5fb4] px-5 py-4 text-on-surface shadow-lg">
                        <p className="font-body-md text-body-md leading-relaxed text-white">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
