"use client";

import { cn } from "@/lib/cn";
import type { MenuCategoryId } from "@/data/menu";
import { menuCategoryLabels } from "@/data/menu";

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
  return (
    <div className="mb-section-gap flex flex-wrap justify-center gap-4">
      {ORDER.map((id) => {
        const activeCat = id === active;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "glass-card rounded-full border px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors",
              activeCat
                ? "border-primary/40 text-primary"
                : "border-transparent text-on-surface-variant hover:text-primary",
            )}
          >
            {menuCategoryLabels[id]}
          </button>
        );
      })}
    </div>
  );
}
