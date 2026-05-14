"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/CartContext";
import { premiumEase } from "@/lib/animations";

export function FloatingCart() {
  const { totalQty, toggleDrawer } = useCart();
  const reduced = useReducedMotion();
  const prevQty = useRef(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (totalQty > prevQty.current) {
      if (!reduced) {
        setPulse(true);
        const t = window.setTimeout(() => setPulse(false), 520);
        prevQty.current = totalQty;
        return () => window.clearTimeout(t);
      }
    }
    prevQty.current = totalQty;
  }, [totalQty, reduced]);

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      <motion.button
        type="button"
        onClick={toggleDrawer}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-2xl amber-glow"
        aria-label="Корзина"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{
          opacity: 1,
          scale: pulse ? [1, 1.08, 1] : 1,
        }}
        transition={{ duration: pulse ? 0.48 : 0.55, ease: premiumEase }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
      >
        <ShoppingBag className="h-8 w-8" strokeWidth={1.5} aria-hidden />
        {totalQty > 0 ? (
          <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-error-container text-[10px] font-bold text-on-error-container">
            {totalQty > 99 ? "99+" : totalQty}
          </div>
        ) : null}
      </motion.button>
    </div>
  );
}
