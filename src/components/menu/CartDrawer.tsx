"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { MenuItemImage } from "@/components/menu/MenuItemImage";
import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { formatTenge } from "@/lib/formatTenge";
import { premiumEase } from "@/lib/animations";

export function CartDrawer() {
  const { drawerOpen, setDrawerOpen, lines, setQuantity, removeLine, totalTenge } = useCart();
  const reduced = useReducedMotion();
  const tCart = useTranslations("Cart");
  const tMenu = useTranslations("Menu");
  const tCommon = useTranslations("Common");

  useEffect(() => {
    if (!drawerOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen, setDrawerOpen]);

  const drawerTransition = { duration: reduced ? 0.22 : 0.48, ease: premiumEase };

  return (
    <AnimatePresence>
      {drawerOpen ? (
        <div key="cart-overlay" className="fixed inset-0 z-[90]">
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label={tCart("closeOverlay")}
            onClick={() => setDrawerOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.15 : 0.35, ease: premiumEase }}
          />
          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-primary/20 bg-surface-container-lowest/95 shadow-2xl backdrop-blur-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={drawerTransition}
          >
            <div className="flex items-center justify-between border-b border-primary/15 px-6 py-5">
              <h2 className="font-headline-lg text-headline-lg-mobile text-primary">{tCart("title")}</h2>
              <button
                type="button"
                className="text-on-surface-variant hover:text-primary"
                onClick={() => setDrawerOpen(false)}
                aria-label={tCommon("close")}
              >
                <X className="h-6 w-6" strokeWidth={2} aria-hidden />
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <p className="font-body-md text-on-surface-variant">{tCart("empty")}</p>
              ) : (
                lines.map((line) => (
                  <div
                    key={line.item.id}
                    className="glass-card flex gap-4 border border-primary/10 p-4"
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden">
                      <MenuItemImage
                        src={line.item.imageSrc}
                        alt={line.item.title ?? tMenu(`items.${line.item.id}.imageAlt`)}
                        className="grayscale-0"
                        sizes="96px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-title-italic text-primary">
                        {line.item.title ?? tMenu(`items.${line.item.id}.name`)}
                      </p>
                      <p className="text-sm text-on-surface-variant">
                        {formatTenge(line.item.priceTenge)} × {line.quantity}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          type="button"
                          className="h-8 w-8 rounded border border-primary/30 text-primary hover:bg-primary/10"
                          onClick={() => setQuantity(line.item.id, line.quantity - 1)}
                          aria-label={tCommon("less")}
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
                          aria-label={tCommon("more")}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="ml-auto text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary"
                          onClick={() => removeLine(line.item.id)}
                        >
                          {tCommon("delete")}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-primary/15 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-body-lg text-primary">{tCommon("total")}</span>
                <span className="font-body-lg font-semibold text-primary">
                  {formatTenge(totalTenge)}
                </span>
              </div>
              <p className="text-center font-body-md text-xs text-on-surface-variant/70">
                {tCart("checkoutHint")}
              </p>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
