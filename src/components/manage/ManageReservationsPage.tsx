"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useManageData } from "@/context/ManageDataContext";
import { ManageBtn, ManageCard } from "@/components/manage/ManageCard";
import { ManageShell } from "@/components/manage/ManageShell";
import { cn } from "@/lib/cn";

type Filter = "all" | "standard" | "vip";

export function ManageReservationsPage() {
  const { reservations } = useManageData();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return reservations.reservations;
    return reservations.reservations.filter((r) => r.type === filter);
  }, [filter, reservations.reservations]);

  return (
    <ManageShell
      title="Бронирования"
      subtitle="Заявки из модальных окон брони и VIP на сайте"
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {(
          [
            { id: "all" as const, label: "Все" },
            { id: "standard" as const, label: "Обычные" },
            { id: "vip" as const, label: "VIP" },
          ] as const
        ).map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            className={cn(
              "rounded-full px-4 py-2 text-xs uppercase tracking-wider transition",
              filter === id
                ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                : "border border-white/10 text-zinc-400 hover:text-white",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <ManageCard>
          <p className="text-center text-sm text-zinc-500">
            Пока нет заявок. Отправьте форму брони на сайте.
          </p>
        </ManageCard>
      ) : (
        <div className="space-y-3">
          {filtered.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <ManageCard className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="font-headline-lg text-lg text-white">{r.name}</span>
                    {r.type === "vip" ? (
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-300 ring-1 ring-amber-400/30">
                        VIP
                      </span>
                    ) : (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-zinc-400">
                        Столик
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-300">{r.phone}</p>
                  <p className="mt-1 text-sm text-primary/90">
                    {r.date} · {r.time} · {r.guests} гостей
                  </p>
                  {r.cabin ? (
                    <p className="mt-1 text-xs text-zinc-500">Кабина: {r.cabin}</p>
                  ) : null}
                  {r.comment ? (
                    <p className="mt-2 text-sm text-zinc-400">{r.comment}</p>
                  ) : null}
                  {r.preorder ? (
                    <p className="mt-1 text-xs text-zinc-500">Предзаказ: {r.preorder}</p>
                  ) : null}
                  <p className="mt-2 text-[10px] text-zinc-600">
                    {new Date(r.createdAt).toLocaleString("ru-RU")}
                  </p>
                </div>
                <ManageBtn variant="danger" onClick={() => reservations.removeReservation(r.id)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </ManageBtn>
              </ManageCard>
            </motion.div>
          ))}
        </div>
      )}
    </ManageShell>
  );
}
