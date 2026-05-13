"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useUiModals } from "@/context/UiModalsContext";
import { contacts } from "@/data/contacts";

const NAV = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/menu", label: "Меню" },
  { href: "/interior", label: "Интерьер" },
  { href: "/delivery", label: "Доставка" },
  { href: "/reviews", label: "Отзывы" },
] as const;

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { openBooking } = useUiModals();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#0c0805]/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-container-max items-center justify-between gap-2 px-3 py-2.5 sm:px-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap font-display-lg text-base font-semibold uppercase tracking-[0.16em] text-on-surface transition-colors hover:text-primary sm:text-lg"
        >
          AURUM
        </Link>

        <nav className="hidden min-w-0 flex-1 justify-center px-1 lg:flex">
          <ul className="flex flex-nowrap items-center justify-center gap-1 xl:gap-2">
            {NAV.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap px-1.5 py-1 font-label-caps text-[10px] uppercase tracking-[0.1em] transition-colors xl:px-2 xl:text-[11px] xl:tracking-[0.12em]",
                    navActive(pathname, item.href)
                      ? "border-b border-primary pb-0.5 text-primary"
                      : "text-on-surface/90 hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={contacts.phoneHref}
            className="hidden whitespace-nowrap font-label-caps text-[11px] uppercase tracking-[0.1em] text-on-surface/80 transition-colors hover:text-primary lg:inline xl:text-xs"
          >
            {contacts.phoneDisplay}
          </a>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={openBooking}
            className="hidden whitespace-nowrap rounded-sm bg-primary-container px-3 py-2 font-label-caps text-[9px] font-semibold uppercase tracking-[0.12em] text-on-primary transition-all hover:brightness-110 active:scale-[0.98] lg:inline xl:px-4 xl:text-[10px] xl:tracking-[0.14em]"
          >
            Забронировать столик
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/30 text-primary lg:hidden"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-primary/10 bg-surface-container-lowest/98 px-4 py-5 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "whitespace-nowrap font-label-caps text-label-caps tracking-[0.15em]",
                  navActive(pathname, item.href) ? "text-primary" : "text-on-surface/85 hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a href={contacts.phoneHref} className="whitespace-nowrap font-label-caps text-primary">
              {contacts.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openBooking();
              }}
              className="mt-1 w-full whitespace-nowrap bg-primary-container py-3 font-label-caps text-label-caps uppercase tracking-widest text-on-primary"
            >
              Забронировать столик
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
