import { Camera, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { contacts } from "@/data/contacts";

const link =
  "font-body-md text-body-md text-on-surface-variant transition-colors duration-300 hover:text-primary";

const NAV = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/menu", label: "Меню" },
  { href: "/interior", label: "Интерьер" },
  { href: "/delivery", label: "Доставка" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/15 bg-black py-16 md:py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col gap-10 border-b border-primary/10 pb-12 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-display-lg text-headline-lg tracking-widest text-primary">AURUM</div>
            <p className="mt-3 max-w-xs text-sm text-on-surface-variant">
              Ресторан премиальной гастрономии. Контакты продублированы ниже — как на макете для
              удобства гостя.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={link}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 text-primary">
            <a href={contacts.instagramHref} aria-label="Instagram" className="hover:opacity-80">
              <Camera className="h-6 w-6" strokeWidth={1.5} />
            </a>
            <a href={contacts.whatsappHref} aria-label="WhatsApp" className="hover:opacity-80">
              <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
            </a>
            <span className="opacity-40" aria-hidden>
              <Send className="h-6 w-6" strokeWidth={1.5} />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2">
          <div className="space-y-4 text-on-surface">
            <p className="font-label-caps text-label-caps text-primary">Телефон</p>
            <a href={contacts.phoneHref} className="block text-lg hover:text-primary">
              {contacts.phoneDisplay}
            </a>
            <p className="font-label-caps text-label-caps text-primary">Email</p>
            <a href={contacts.emailHref} className="block hover:text-primary">
              {contacts.emailDisplay}
            </a>
            <p className="font-label-caps text-label-caps text-primary">Адрес</p>
            <p className="text-on-surface-variant">{contacts.addressLines.join(", ")}</p>
          </div>
          <div className="space-y-4 text-on-surface">
            <p className="font-label-caps text-label-caps text-primary">Часы работы</p>
            <p className="text-on-surface-variant">
              {contacts.hoursWeekdayLabel}: {contacts.hoursWeekday}
            </p>
            <p className="text-on-surface-variant">
              {contacts.hoursWeekendLabel}: {contacts.hoursWeekend}
            </p>
            <p className="font-label-caps text-label-caps text-primary">Парковка</p>
            <p className="text-sm text-on-surface-variant">{contacts.parking}</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-primary/10 pt-10 md:flex-row md:items-center">
          <p className="text-sm text-on-surface-variant opacity-70">
            © {new Date().getFullYear()} AURUM. Все права защищены.
          </p>
          <Link href="#" className="text-sm text-on-surface-variant underline-offset-4 hover:text-primary hover:underline">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
