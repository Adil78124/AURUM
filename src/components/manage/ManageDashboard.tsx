"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, LayoutGrid, MessageSquare, Truck } from "lucide-react";
import { useManageData } from "@/context/ManageDataContext";
import { ManageCard } from "@/components/manage/ManageCard";
import { ManageNotificationSetup } from "@/components/manage/ManageNotificationSetup";
import { ManageShell } from "@/components/manage/ManageShell";
import { formatTenge } from "@/lib/formatTenge";

const cards = [
  {
    href: "/manage/menu",
    title: "Меню",
    desc: "Добавление, цены, категории, фото",
    icon: LayoutGrid,
  },
  {
    href: "/manage/reservations",
    title: "Брони",
    desc: "Столики и VIP заявки из форм сайта",
    icon: CalendarDays,
  },
  {
    href: "/manage/delivery",
    title: "Заказы доставки",
    desc: "Оформление с страницы /delivery",
    icon: Truck,
  },
  {
    href: "/manage/reviews",
    title: "Отзывы",
    desc: "Модерация и видимость на сайте",
    icon: MessageSquare,
  },
] as const;

export function ManageDashboard() {
  const { menu, reservations, delivery, reviews } = useManageData();
  const vipCount = reservations.reservations.filter((r) => r.type === "vip").length;
  const visibleUserReviews = reviews.userReviews.filter((r) => !r.hidden).length;
  const { stats: deliveryStats } = delivery;

  return (
    <ManageShell
      title="Панель управления"
      subtitle="Frontend-only mock admin · данные в localStorage браузера"
    >
      <div className="mb-6">
        <ManageNotificationSetup />
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ManageCard>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">Блюд в меню</p>
          <p className="mt-2 font-headline-lg text-3xl text-primary">{menu.items.length}</p>
        </ManageCard>
        <ManageCard>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">Брони</p>
          <p className="mt-2 font-headline-lg text-3xl text-white">
            {reservations.reservations.length}
            <span className="ml-2 text-sm text-amber-400/90">VIP {vipCount}</span>
          </p>
        </ManageCard>
        <ManageCard>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">Доставка</p>
          <p className="mt-2 font-headline-lg text-3xl text-white">{deliveryStats.total}</p>
          <p className="mt-1 text-xs text-sky-400/90">Новых: {deliveryStats.newCount}</p>
        </ManageCard>
        <ManageCard>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">Отзывы гостей</p>
          <p className="mt-2 font-headline-lg text-3xl text-white">{visibleUserReviews}</p>
        </ManageCard>
      </div>

      <Link href="/manage/delivery" className="mb-8 block">
        <ManageCard className="group transition hover:border-primary/25 hover:bg-white/[0.06]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Truck className="h-10 w-10 text-primary/80" strokeWidth={1.25} />
              <div>
                <h2 className="font-headline-lg text-xl text-white group-hover:text-primary">
                  Заказы доставки
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Всего {deliveryStats.total} · новых {deliveryStats.newCount} · сумма{" "}
                  {formatTenge(deliveryStats.revenue)}
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/30">
              Открыть заказы →
            </span>
          </div>
        </ManageCard>
      </Link>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ href, title, desc, icon: Icon }, i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <Link href={href} className="block h-full">
              <ManageCard className="group h-full transition hover:border-primary/25 hover:bg-white/[0.06]">
                <Icon className="mb-4 h-8 w-8 text-primary/80" strokeWidth={1.25} />
                <h2 className="font-headline-lg text-xl text-white group-hover:text-primary">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400">{desc}</p>
              </ManageCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </ManageShell>
  );
}
