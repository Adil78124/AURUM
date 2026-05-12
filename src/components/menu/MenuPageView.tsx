"use client";

import { useMemo, useState } from "react";
import {
  menuItems,
  type MenuCategoryId,
} from "@/data/menu";
import { MenuCategoryNav } from "@/components/menu/MenuCategoryNav";
import { MenuCard } from "@/components/menu/MenuCard";

export function MenuPageView() {
  const [active, setActive] = useState<MenuCategoryId>("starters");

  const filtered = useMemo(
    () => menuItems.filter((i) => i.category === active),
    [active],
  );

  return (
    <>
      <div className="mb-section-gap text-center">
        <h1 className="mb-4 font-display-lg text-display-lg uppercase text-primary">
          МЕНЮ AURUM
        </h1>
        <div className="gold-thread mb-8" />
        <p className="mx-auto max-w-2xl font-title-italic italic text-on-surface-variant">
          Искусство гастрономии в атмосфере абсолютной приватности и роскоши.
        </p>
      </div>
      <MenuCategoryNav active={active} onChange={setActive} />
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
