"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Package, Search, Trash2 } from "lucide-react";
import { useManageData } from "@/context/ManageDataContext";
import {
  DELIVERY_FILTER_TABS,
  DELIVERY_STATUS_LABELS,
  DELIVERY_STATUS_STYLES,
  PAYMENT_LABELS,
  type DeliveryOrder,
  type DeliveryOrderStatus,
} from "@/lib/manage/deliveryTypes";
import { DeliveryOrderDetailModal } from "@/components/manage/DeliveryOrderDetailModal";
import { ManageBtn, ManageCard, ManageInput, ManageSelect } from "@/components/manage/ManageCard";
import { ManageShell } from "@/components/manage/ManageShell";
import { formatTenge } from "@/lib/formatTenge";
import { cn } from "@/lib/cn";

type FilterId = (typeof DELIVERY_FILTER_TABS)[number]["id"];

export function ManageDeliveryPage() {
  const { delivery } = useManageData();
  const { orders, updateStatus, removeOrder } = delivery;
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<DeliveryOrder | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return orders.filter((o) => {
      if (filter !== "all" && o.status !== filter) return false;
      if (!q) return true;
      return (
        o.id.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.phone.toLowerCase().includes(q) ||
        o.address.toLowerCase().includes(q) ||
        (o.email?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [orders, filter, query]);

  return (
    <ManageShell
      title="Заказы доставки"
      subtitle="Заявки со страницы /delivery · localStorage aurum:delivery-orders"
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <ManageInput
            className="pl-10"
            placeholder="Поиск: имя, телефон, адрес, ID…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <p className="text-xs text-zinc-500">
          Найдено: <span className="text-primary">{filtered.length}</span> / {orders.length}
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {DELIVERY_FILTER_TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-[10px] uppercase tracking-wider transition",
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
        <ManageCard className="py-16 text-center">
          <Package className="mx-auto mb-4 h-12 w-12 text-zinc-600" strokeWidth={1.25} />
          <h2 className="font-headline-lg text-xl text-white">Пока нет заказов доставки</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
            Новые заявки появятся здесь после отправки формы на странице доставки.
          </p>
        </ManageCard>
      ) : (
        <div className="space-y-3">
          {filtered.map((order, i) => {
            const qty = order.items.reduce((s, it) => s + it.quantity, 0);
            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                <ManageCard className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-zinc-500">{order.id}</span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1",
                          DELIVERY_STATUS_STYLES[order.status],
                        )}
                      >
                        {DELIVERY_STATUS_LABELS[order.status]}
                      </span>
                    </div>
                    <p className="font-headline-lg text-lg text-white">{order.customerName}</p>
                    <p className="text-sm text-zinc-400">
                      {order.phone}
                      {order.email ? ` · ${order.email}` : ""}
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">{order.address}</p>
                    <p className="mt-2 text-xs text-zinc-500">
                      {new Date(order.createdAt).toLocaleString("ru-RU")} · {qty} шт. ·{" "}
                      {PAYMENT_LABELS[order.paymentMethod]}
                    </p>
                    <ul className="mt-2 space-y-0.5 text-xs text-zinc-500">
                      {order.items.slice(0, 3).map((it) => (
                        <li key={it.id}>
                          {it.title} × {it.quantity}
                        </li>
                      ))}
                      {order.items.length > 3 ? (
                        <li>+ ещё {order.items.length - 3} поз.</li>
                      ) : null}
                    </ul>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col lg:items-end">
                    <p className="text-right font-headline-lg text-xl text-primary">
                      {formatTenge(order.total)}
                    </p>
                    <label className="block w-full min-w-[10rem] text-[10px] text-zinc-500 sm:w-auto">
                      Статус
                      <ManageSelect
                        className="mt-1"
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(order.id, e.target.value as DeliveryOrderStatus)
                        }
                      >
                        {DELIVERY_FILTER_TABS.filter((t) => t.id !== "all").map((t) => (
                          <option key={t.id} value={t.id} className="bg-zinc-900">
                            {t.label}
                          </option>
                        ))}
                      </ManageSelect>
                    </label>
                    <div className="flex gap-2">
                      <ManageBtn variant="ghost" className="flex-1" onClick={() => setDetail(order)}>
                        Подробнее
                      </ManageBtn>
                      <ManageBtn variant="danger" onClick={() => setDeleteId(order.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </ManageBtn>
                    </div>
                  </div>
                </ManageCard>
              </motion.div>
            );
          })}
        </div>
      )}

      <DeliveryOrderDetailModal
        order={detail}
        onClose={() => setDetail(null)}
        onStatusChange={updateStatus}
        onDelete={removeOrder}
      />

      {deleteId ? (
        <div className="fixed inset-0 z-[220] flex items-center justify-center bg-black/70 p-4">
          <ManageCard className="max-w-sm">
            <p className="mb-4 text-sm text-zinc-200">Удалить заказ {deleteId}?</p>
            <div className="flex gap-2">
              <ManageBtn
                variant="danger"
                className="flex-1"
                onClick={() => {
                  removeOrder(deleteId);
                  setDeleteId(null);
                  if (detail?.id === deleteId) setDetail(null);
                }}
              >
                Удалить
              </ManageBtn>
              <ManageBtn variant="ghost" className="flex-1" onClick={() => setDeleteId(null)}>
                Отмена
              </ManageBtn>
            </div>
          </ManageCard>
        </div>
      ) : null}
    </ManageShell>
  );
}
