"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { MenuCategoryId } from "@/data/menu";
import { menuCategoryLabels } from "@/data/menu";
import { staggerItem, staggerParent, viewportOnce } from "@/lib/animations";

const ORDER: MenuCategoryId[] = [
  "starters",
  "mains",
  "salads",
  "steaks",
  "bar",
  "cocktails",
];

export function MenuCategoryNav({
  active,
  onChange,
}: {
  active: MenuCategoryId;
  onChange: (id: MenuCategoryId) => void;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="mb-section-gap flex flex-wrap justify-center gap-4"
      variants={staggerParent(Boolean(reduced), 0.09, 0.02)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {ORDER.map((id) => {
        const activeCat = id === active;
        return (
          <motion.div key={id} variants={staggerItem(Boolean(reduced))}>
            <button
              type="button"
              onClick={() => onChange(id)}
              className={cn(
                "glass-card rounded-full border px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-500 ease-out",
                activeCat
                  ? "border-primary/40 text-primary"
                  : "border-transparent text-on-surface-variant hover:text-primary",
              )}
            >
              {menuCategoryLabels[id]}
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
