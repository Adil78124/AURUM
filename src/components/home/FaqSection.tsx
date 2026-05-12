"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<string>("2");

  return (
    <section className="bg-surface-dim py-section-gap">
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-0">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Популярные вопросы</h2>
          <div className="mx-auto h-px w-24 bg-primary/40" />
        </div>
        <div className="space-y-0 divide-y divide-white/10">
          {faqItems.map((item, idx) => {
            const open = openId === item.id;
            const n = idx + 1;
            return (
              <div key={item.id} className="py-5">
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
                {open ? (
                  <div className="mt-4 rounded-xl bg-[#1a5fb4] px-5 py-4 text-on-surface shadow-lg">
                    <p className="font-body-md text-body-md leading-relaxed text-white">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
