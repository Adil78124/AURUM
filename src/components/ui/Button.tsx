import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-widest gold-glow transition-all duration-500 hover:bg-primary/10 hover:text-primary active:scale-95",
  outline:
    "border border-primary text-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/10 transition-all active:scale-95",
  ghost:
    "border border-primary/40 text-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/5 transition-all active:scale-95",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
