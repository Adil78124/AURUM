"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import {
  DELIVERY_STATUS_LABELS,
  DELIVERY_STATUS_STYLES,
  DELIVERY_FILTER_TABS,
  PAYMENT_LABELS,
  type DeliveryOrder,
  type DeliveryOrderStatus,
} from "@/lib/manage/deliveryTypes";
import { ManageBtn, ManageSelect } from "@/components/manage/ManageCard";
import { formatTenge } from "@/lib/formatTenge";
import { cn } from "@/lib/cn";

type Props = {
  order: DeliveryOrder | null;
  onClose: () => void;
  onStatusChange: (id: string, status: DeliveryOrderStatus) => void;
  onDelete: (id: string) => void;
};

export function DeliveryOrderDetailModal({ order, onClose, onStatusChange, onDelete }: Props) {
  const [mounted, setMounted] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [status, setStatus] = useState<DeliveryOrderStatus>("new");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (order) {
      setStatus(order.status);
      setConfirmDelete(false);
    }
  }, [order]);

  useEffect(() => {
    if (!order) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [order, onClose]);

  if (!order || !mounted) return null;

  const itemCount = order.items.reduce((s, i) => s + i.quantity, 0);
  const statuses = DELIVERY_FILTER_TABS.filter((t) => t.id !== "all").map((t) => ({
    value: t.id as DeliveryOrderStatus,
    label: t.label,
  }));

  return createPortal(
    <div
      className="fixed inset-0 z-[210] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-white/10 bg-[#0c0a08] p-5 shadow-2xl sm:rounded-2xl sm:p-6"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Заказ</p>
            <h2 className="font-headline-lg text-xl text-white">{order.id}</h2>
            <p className="mt-1 text-xs text-zinc-500">
              {new Date(order.createdAt).toLocaleString("ru-RU")}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-zinc-400 hover:text-white"
            aria-label="Закрыть"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <span
          className={cn(
            "mb-4 inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1",
            DELIVERY_STATUS_STYLES[order.status],
          )}
        >
          {DELIVERY_STATUS_LABELS[order.status]}
        </span>

        <section className="mb-4 space-y-2 text-sm">
          <h3 className="text-[10px] font-semibold uppercase tracking-widest text-primary/80">
            Клиент
          </h3>
          <p className="text-white">{order.customerName}</p>
          <p className="text-zinc-300">{order.phone}</p>
          {order.email ? <p className="text-zinc-400">{order.email}</p> : null}
          <p className="text-zinc-300">{order.address}</p>
          {order.intercom ? <p className="text-zinc-500">Домофон: {order.intercom}</p> : null}
          {order.apartment ? (
            <p className="text-zinc-500">Квартира/офис: {order.apartment}</p>
          ) : null}
          {order.floor ? <p className="text-zinc-500">Этаж: {order.floor}</p> : null}
          {order.comment ? <p className="text-zinc-400">«{order.comment}»</p> : null}
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary/80">
            Состав ({itemCount} шт.)
          </h3>
          <ul className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            {order.items.map((item) => (
              <li key={item.id} className="flex justify-between gap-2 text-sm">
                <span className="text-zinc-200">
                  {item.title} × {item.quantity}
                </span>
                <span className="shrink-0 text-primary">{formatTenge(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-4 space-y-1 text-sm text-zinc-300">
          <div className="flex justify-between">
            <span>Подытог</span>
            <span>{formatTenge(order.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Доставка</span>
            <span>{order.deliveryPrice === 0 ? "Бесплатно" : formatTenge(order.deliveryPrice)}</span>
          </div>
          {order.promoCode ? (
            <p className="text-xs text-zinc-500">Промокод: {order.promoCode}</p>
          ) : null}
          <div className="flex justify-between border-t border-white/10 pt-2 font-semibold text-white">
            <span>Итого</span>
            <span>{formatTenge(order.total)}</span>
          </div>
          <p className="text-xs text-zinc-500">
            Оплата: {PAYMENT_LABELS[order.paymentMethod]}
            {order.cardLast4 ? ` ·••• ${order.cardLast4}` : ""}
          </p>
        </section>

        <label className="mb-4 block text-xs text-zinc-500">
          Статус заказа
          <ManageSelect
            className="mt-1"
            value={status}
            onChange={(e) => {
              const next = e.target.value as DeliveryOrderStatus;
              setStatus(next);
              onStatusChange(order.id, next);
            }}
          >
            {statuses.map((s) => (
              <option key={s.value} value={s.value} className="bg-zinc-900">
                {s.label}
              </option>
            ))}
          </ManageSelect>
        </label>

        {confirmDelete ? (
          <div className="mb-3 rounded-xl border border-red-500/30 bg-red-950/30 p-3">
            <p className="mb-3 text-sm text-red-200">Удалить заказ без восстановления?</p>
            <div className="flex gap-2">
              <ManageBtn
                variant="danger"
                className="flex-1"
                onClick={() => {
                  onDelete(order.id);
                  onClose();
                }}
              >
                Удалить
              </ManageBtn>
              <ManageBtn variant="ghost" className="flex-1" onClick={() => setConfirmDelete(false)}>
                Отмена
              </ManageBtn>
            </div>
          </div>
        ) : (
          <ManageBtn variant="danger" className="mb-3 w-full" onClick={() => setConfirmDelete(true)}>
            Удалить заказ
          </ManageBtn>
        )}

        <ManageBtn variant="ghost" className="w-full" onClick={onClose}>
          Закрыть
        </ManageBtn>
      </div>
    </div>,
    document.body,
  );
}
