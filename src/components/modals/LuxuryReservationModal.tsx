"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

type LuxuryReservationModalProps = {
  open: boolean;
  onClose: () => void;
  titleId: string;
  heroSrc: string;
  heroAlt: string;
  sideKicker: string;
  sideLine: string;
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
};

export function LuxuryReservationModal({
  open,
  onClose,
  titleId,
  heroSrc,
  heroAlt,
  sideKicker,
  sideLine,
  title,
  subtitle,
  children,
}: LuxuryReservationModalProps) {
  const t = useTranslations("Common");
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/85 p-3 backdrop-blur-md sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="my-auto flex w-full max-w-[min(1160px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[1.75rem] border border-primary/20 bg-[#0c0a08] shadow-[0_0_0_1px_rgba(255,228,175,0.06),0_40px_100px_rgba(0,0,0,0.65)] ring-1 ring-white/5 md:my-8 md:max-h-[min(92vh,720px)] md:min-h-[min(600px,82vh)] md:flex-row md:items-stretch md:rounded-[2rem]">
        {/* Visual column */}
        <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-52 md:h-auto md:min-h-full md:w-[40%] md:max-w-[440px] lg:w-[43%]">
          <Image
            src={heroSrc}
            alt={heroAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 44vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 md:bg-gradient-to-r md:from-black/85 md:via-black/35 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:inset-0 md:flex md:flex-col md:justify-end md:p-7 lg:p-8">
            <p className="font-label-caps text-[10px] uppercase tracking-[0.35em] text-primary/90 md:text-[11px]">
              {sideKicker}
            </p>
            <p className="mt-1.5 max-w-[16rem] font-body-md text-sm leading-snug text-white/90 md:mt-2 md:text-base">
              {sideLine}
            </p>
          </div>
        </div>

        {/* Form column */}
        <div className="relative flex min-h-0 min-w-0 flex-1 flex-col border-t border-white/10 bg-zinc-950/90 backdrop-blur-xl md:border-l md:border-t-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-black/40 p-2 text-zinc-300 transition-colors hover:border-primary/30 hover:bg-white/10 hover:text-white md:right-4 md:top-4"
            aria-label={t("close")}
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <div className="flex min-h-0 flex-1 flex-col px-5 pb-6 pt-12 md:min-h-0 md:px-7 md:pb-7 md:pt-14 lg:px-9 lg:pb-8 lg:pt-16">
            <h2
              id={titleId}
              className="pr-10 text-xl font-bold leading-tight tracking-tight text-[#4a8fff] md:text-2xl lg:text-[1.65rem]"
            >
              {title}
            </h2>
            <div className="mt-2 text-xs leading-relaxed text-zinc-400 md:mt-3 md:max-w-xl md:text-sm">
              {subtitle}
            </div>

            <div className="mt-5 min-h-0 flex-1 md:mt-6 md:flex md:flex-col md:overflow-y-auto md:overflow-x-hidden md:pr-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
