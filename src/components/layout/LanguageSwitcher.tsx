"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

const LABELS: Record<(typeof routing.locales)[number], string> = {
  ru: "RU",
  kz: "KZ",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale() as (typeof routing.locales)[number];
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Header");

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  const currentLabel = LABELS[locale] ?? "RU";

  return (
    <div className="relative z-[60] shrink-0" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 rounded-lg border border-primary/45 bg-[#1a1209]/90 px-2.5 py-1.5 font-label-caps text-[10px] uppercase tracking-[0.12em] text-primary backdrop-blur-md transition-colors",
          "hover:border-primary hover:bg-primary/10",
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("language")}
      >
        <span className="whitespace-nowrap">{currentLabel}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 transition-transform", open && "rotate-180")} strokeWidth={2} />
      </button>
      {open ? (
        <ul
          role="listbox"
          className="lang-dropdown-enter absolute right-0 mt-2 min-w-[132px] overflow-hidden rounded-xl border border-primary/50 bg-[#120c08]/95 py-1 shadow-[0_0_28px_rgba(240,197,103,0.22)] backdrop-blur-xl"
        >
          {routing.locales.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2.5 text-left text-xs text-on-surface-variant transition-colors hover:bg-primary/10 hover:text-primary",
                  code === locale && "text-primary",
                )}
                onClick={() => {
                  router.replace(pathname, { locale: code });
                  setOpen(false);
                }}
              >
                <span className="whitespace-nowrap">{LABELS[code]}</span>
                {code === locale ? (
                  <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
