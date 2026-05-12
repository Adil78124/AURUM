"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const OPTIONS = [
  { code: "RU" as const, label: "Рус" },
  { code: "KZ" as const, label: "Каз" },
  { code: "EN" as const, label: "Анг" },
];

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<(typeof OPTIONS)[number]["code"]>("RU");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  const currentLabel = OPTIONS.find((o) => o.code === current)?.label ?? "Рус";

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
      >
        <span className="whitespace-nowrap">{currentLabel}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 transition-transform", open && "rotate-180")} strokeWidth={2} />
      </button>
      {open ? (
        <ul
          role="listbox"
          className="lang-dropdown-enter absolute right-0 mt-2 min-w-[132px] overflow-hidden rounded-xl border border-primary/50 bg-[#120c08]/95 py-1 shadow-[0_0_28px_rgba(240,197,103,0.22)] backdrop-blur-xl"
        >
          {OPTIONS.map((opt) => (
            <li key={opt.code}>
              <button
                type="button"
                role="option"
                aria-selected={opt.code === current}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2.5 text-left text-xs text-on-surface-variant transition-colors hover:bg-primary/10 hover:text-primary",
                  opt.code === current && "text-primary",
                )}
                onClick={() => {
                  setCurrent(opt.code);
                  setOpen(false);
                }}
              >
                <span className="whitespace-nowrap">{opt.label}</span>
                {opt.code === current ? (
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
