"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function FloatingCart() {
  const { totalQty, toggleDrawer } = useCart();

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      <button
        type="button"
        onClick={toggleDrawer}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-2xl transition-transform hover:scale-110 active:scale-90 amber-glow"
        aria-label="Корзина"
      >
        <ShoppingBag className="h-8 w-8" strokeWidth={1.5} aria-hidden />
        {totalQty > 0 ? (
          <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-error-container text-[10px] font-bold text-on-error-container">
            {totalQty > 99 ? "99+" : totalQty}
          </div>
        ) : null}
      </button>
    </div>
  );
}
