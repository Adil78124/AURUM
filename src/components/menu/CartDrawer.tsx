"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatTenge } from "@/lib/formatTenge";

export function CartDrawer() {
  const { drawerOpen, setDrawerOpen, lines, setQuantity, removeLine, totalTenge } =
    useCart();

  useEffect(() => {
    if (!drawerOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen, setDrawerOpen]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Закрыть корзину"
        onClick={() => setDrawerOpen(false)}
      />
      <aside className="cart-drawer-enter absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-primary/20 bg-surface-container-lowest/95 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-primary/15 px-6 py-5">
          <h2 className="font-headline-lg text-headline-lg-mobile text-primary">Корзина</h2>
          <button
            type="button"
            className="text-on-surface-variant hover:text-primary"
            onClick={() => setDrawerOpen(false)}
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" strokeWidth={2} aria-hidden />
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <p className="font-body-md text-on-surface-variant">Корзина пока пуста.</p>
          ) : (
            lines.map((line) => (
              <div
                key={line.item.id}
                className="glass-card flex gap-4 border border-primary/10 p-4"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden">
                  <Image
                    src={line.item.imageSrc}
                    alt={line.item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-title-italic text-primary">{line.item.name}</p>
                  <p className="text-sm text-on-surface-variant">
                    {formatTenge(line.item.priceTenge)} × {line.quantity}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      className="h-8 w-8 rounded border border-primary/30 text-primary hover:bg-primary/10"
                      onClick={() => setQuantity(line.item.id, line.quantity - 1)}
                      aria-label="Меньше"
                    >
                      −
                    </button>
                    <span className="font-label-caps text-label-caps text-primary">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      className="h-8 w-8 rounded border border-primary/30 text-primary hover:bg-primary/10"
                      onClick={() => setQuantity(line.item.id, line.quantity + 1)}
                      aria-label="Больше"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary"
                      onClick={() => removeLine(line.item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t border-primary/15 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-body-lg text-primary">Итого</span>
            <span className="font-body-lg font-semibold text-primary">
              {formatTenge(totalTenge)}
            </span>
          </div>
          <p className="text-center font-body-md text-xs text-on-surface-variant/70">
            Оформление заказа доступно на странице «Доставка».
          </p>
        </div>
      </aside>
    </div>
  );
}
