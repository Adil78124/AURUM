"use client";

import { cn } from "@/lib/cn";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export function InteriorReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useInViewOnce();

  return (
    <div
      ref={ref}
      className={cn("interior-reveal", visible && "interior-reveal-visible", className)}
    >
      {children}
    </div>
  );
}
