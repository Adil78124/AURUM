"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, LayoutGrid, MessageSquare, Sparkles, Truck } from "lucide-react";
import { cn } from "@/lib/cn";

const NAV: {
  href: string;
  label: string;
  icon: typeof Sparkles;
  exact?: boolean;
}[] = [
  { href: "/manage", label: "Dashboard", icon: Sparkles, exact: true },
  { href: "/manage/menu", label: "Меню", icon: LayoutGrid },
  { href: "/manage/reservations", label: "Брони", icon: CalendarDays },
  { href: "/manage/delivery", label: "Доставка", icon: Truck },
  { href: "/manage/reviews", label: "Отзывы", icon: MessageSquare },
];

export function ManageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a0806] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(235,193,99,0.12),transparent)]" />

      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/80">
              AURUM · Mock Admin
            </p>
            <h1 className="font-headline-lg text-2xl text-white md:text-3xl">{title}</h1>
            {subtitle ? (
              <p className="mt-1 max-w-xl text-sm text-zinc-400">{subtitle}</p>
            ) : null}
          </div>
          <Link
            href="/ru"
            className="self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-zinc-300 transition hover:border-primary/40 hover:text-primary"
          >
            На сайт
          </Link>
        </div>
      </header>

      <nav className="sticky top-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
          {NAV.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition",
                  active
                    ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white",
                )}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
    </div>
  );
}
