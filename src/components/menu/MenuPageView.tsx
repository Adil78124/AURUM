"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { MenuCategoryId } from "@/data/menu";
import { useManageData } from "@/context/ManageDataContext";
import { MenuCategoryNav } from "@/components/menu/MenuCategoryNav";
import { MenuCard } from "@/components/menu/MenuCard";
import { MotionGoldLine } from "@/components/motion/MotionGoldLine";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { premiumEase, staggerItem, staggerParent, viewportOnce } from "@/lib/animations";

export function MenuPageView() {
  const [active, setActive] = useState<MenuCategoryId>("starters");
  const reduced = useReducedMotion();
  const t = useTranslations("Menu");
  const { menu } = useManageData();
  const items = menu.menuItemsForSite;

  const filtered = useMemo(
    () => items.filter((i) => i.category === active),
    [active, items],
  );

  return (
    <>
      <div className="mb-section-gap text-center">
        <motion.h1
          className="mb-4 font-display-lg text-display-lg uppercase text-primary"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: reduced ? 0.32 : 0.85, ease: premiumEase }}
        >
          {t("title")}
        </motion.h1>
        <MotionGoldLine className="gold-thread mb-8" origin="center" />
        <MotionReveal variant="fadeIn" delay={0.08}>
          <p className="mx-auto max-w-2xl font-title-italic italic text-on-surface-variant">
            {t("subtitle")}
          </p>
        </MotionReveal>
      </div>
      <MenuCategoryNav active={active} onChange={setActive} />
      <motion.div
        key={active}
        className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3"
        variants={staggerParent(Boolean(reduced), 0.1, 0.04)}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((item) => (
          <motion.div key={item.id} variants={staggerItem(Boolean(reduced))}>
            <MenuCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
