"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { contacts } from "@/data/contacts";

type Props = {
  className?: string;
  title?: string;
};

/**
 * Google Maps embed (без API key). При сбое загрузки — кнопка «Открыть карту».
 */
export function ContactMapEmbed({
  className,
  title = "Карта — как добраться до AURUM",
}: Props) {
  const [loadTimedOut, setLoadTimedOut] = useState(false);
  const loadedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const onIframeLoad = useCallback(() => {
    loadedRef.current = true;
    setLoadTimedOut(false);
    clearTimer();
  }, [clearTimer]);

  useEffect(() => {
    loadedRef.current = false;
    setLoadTimedOut(false);
    clearTimer();
    timerRef.current = setTimeout(() => {
      if (!loadedRef.current) setLoadTimedOut(true);
    }, 18000);
    return clearTimer;
  }, [clearTimer, contacts.mapEmbedSrc]);

  return (
    <div className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-lg border border-primary/20 bg-[#0a0705] shadow-inner">
        {!loadTimedOut ? (
          <iframe
            title={title}
            src={contacts.mapEmbedSrc}
            className="block h-[320px] w-full border-0 md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            onLoad={onIframeLoad}
          />
        ) : (
          <div className="flex h-[320px] flex-col items-center justify-center gap-4 bg-[#0a0705] px-6 text-center md:h-[420px]">
            <p className="max-w-sm font-body-md text-on-surface-variant">
              Карта не загрузилась в этом окне. Откройте маршрут в Google Maps.
            </p>
            <a
              href={contacts.mapOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-primary/70 bg-primary-container/90 px-8 py-3 font-label-caps text-[11px] uppercase tracking-[0.16em] text-on-primary transition hover:brightness-110"
            >
              Открыть карту
            </a>
          </div>
        )}
      </div>
      {!loadTimedOut ? (
        <a
          href={contacts.mapOpenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-label-caps text-[11px] uppercase tracking-[0.14em] text-primary transition hover:underline"
        >
          Открыть карту
        </a>
      ) : null}
    </div>
  );
}
