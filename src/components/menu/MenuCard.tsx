"use client";

import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { formatTenge } from "@/lib/formatTenge";
import { useCart } from "@/context/CartContext";

export function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  return (
    <div className="glass-card group flex flex-col p-6 transition-all duration-500 amber-glow">
      <div className="relative mb-6 aspect-[4/3] overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="font-headline-lg text-title-italic text-primary">{item.name}</h3>
        <span className="shrink-0 font-body-lg text-primary">{formatTenge(item.priceTenge)}</span>
      </div>
      <p className="mb-8 flex-grow font-body-md text-on-surface-variant">{item.description}</p>
      <button
        type="button"
        onClick={() => addItem(item, 1)}
        className="w-full bg-primary py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-all amber-glow active:scale-95"
      >
        В корзину
      </button>
    </div>
  );
}
