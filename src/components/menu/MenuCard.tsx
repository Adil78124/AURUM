"use client";

import { motion } from "framer-motion";
import { MenuItemImage } from "@/components/menu/MenuItemImage";
import { useTranslations } from "next-intl";
import type { MenuItem } from "@/data/menu";
import { formatTenge } from "@/lib/formatTenge";
import { useCart } from "@/context/CartContext";
import { premiumEase } from "@/lib/animations";

export function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const t = useTranslations("Menu");

  return (
    <motion.div
      className="glass-card group flex flex-col p-6 transition-shadow duration-500 amber-glow"
      whileHover={{
        y: -3,
        boxShadow: "0 0 0 1px rgba(240, 197, 103, 0.25), 0 12px 40px rgba(0,0,0,0.35)",
      }}
      transition={{ duration: 0.5, ease: premiumEase }}
    >
      <div className="relative mb-6 aspect-[4/3] overflow-hidden">
        <motion.div className="relative h-full w-full" whileHover={{ scale: 1.04 }} transition={{ duration: 0.7, ease: premiumEase }}>
          <MenuItemImage
            src={item.imageSrc}
            alt={item.title ?? t(`items.${item.id}.imageAlt`)}
            className="grayscale-[30%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </motion.div>
      </div>
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="font-headline-lg text-title-italic text-primary">
          {item.title ?? t(`items.${item.id}.name`)}
        </h3>
        <span className="shrink-0 font-body-lg text-primary">{formatTenge(item.priceTenge)}</span>
      </div>
      <p className="mb-8 flex-grow font-body-md text-on-surface-variant">
        {item.description ?? t(`items.${item.id}.description`)}
      </p>
      <motion.button
        type="button"
        onClick={() => addItem(item, 1)}
        className="w-full bg-primary py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors amber-glow active:scale-95"
        whileHover={{ filter: "brightness(1.08)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.35, ease: premiumEase }}
      >
        {t("addToCart")}
      </motion.button>
    </motion.div>
  );
}
