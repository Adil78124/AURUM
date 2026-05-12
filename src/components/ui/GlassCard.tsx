import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function GlassCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass-card", className)} {...props} />;
}
