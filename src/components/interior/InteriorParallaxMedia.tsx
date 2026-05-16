"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Vertical shift range in px */
  range?: number;
};

/**
 * Subtle scroll-linked parallax inside a fixed-height overflow clip.
 * Child should fill the box (e.g. Next/Image fill inside a relative h-full wrapper).
 */
export function InteriorParallaxMedia({ children, className, range = 18 }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const update = useCallback(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const progress = (vh * 0.88 - rect.top) / (vh + rect.height);
    const clamped = Math.min(1, Math.max(0, progress));
    const y = (clamped - 0.5) * 2 * range;
    const scale = window.matchMedia("(max-width: 767px)").matches ? 1.02 : 1.05;
    inner.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale})`;
  }, [range]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      <div
        ref={innerRef}
        className="h-full w-full origin-center will-change-transform"
        style={{ transform: "translate3d(0,0,0) scale(1.02)" }}
      >
        {children}
      </div>
    </div>
  );
}
