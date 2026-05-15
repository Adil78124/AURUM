import { cn } from "@/lib/cn";

export function ManageCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ManageInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/30",
        className,
      )}
      {...props}
    />
  );
}

export function ManageTextarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full resize-y rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/30",
        className,
      )}
      {...props}
    />
  );
}

export function ManageSelect({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/30",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function ManageBtn({
  className,
  variant = "primary",
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
}) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition",
        variant === "primary" &&
          "bg-primary/90 text-on-primary hover:bg-primary",
        variant === "ghost" &&
          "border border-white/15 bg-white/5 text-zinc-200 hover:border-primary/30 hover:text-primary",
        variant === "danger" &&
          "border border-red-500/30 bg-red-950/40 text-red-200 hover:bg-red-900/50",
        className,
      )}
      {...props}
    />
  );
}
