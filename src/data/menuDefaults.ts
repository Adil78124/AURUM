import { menuItems } from "@/data/menu";
import type { StoredMenuItem } from "@/lib/manage/types";

/** Russian seed copy for local admin / offline menu (diploma demo). */
const RU_COPY: Record<
  string,
  { title: string; description: string }
> = {
  tartare: {
    title: "Тартар из говядины",
    description:
      "Мраморная говядина, трюфельное масло, каперсы и хрустящий багет с золотым напылением.",
  },
  scallops: {
    title: "Гребешки Сен-Жак",
    description:
      "Обжаренные гребешки с пюре из зеленого горошка и соусом из шампанского.",
  },
  caviar: {
    title: "Черная икра",
    description:
      "Осетровая икра высшего сорта, подается на льду с традиционными гарнирами.",
  },
  "pasta-truffle": {
    title: "Паста с трюфелем",
    description: "Домашняя паста, соус на основе сливок и свежий черный трюфель.",
  },
  wagyu: {
    title: "Рибай Wagyu",
    description: "Стейк из японской мраморной говядины высшей категории A5.",
  },
  sphere: {
    title: "Сфера AURUM",
    description: "Шоколадная сфера с муссом из лесных ягод и золотой карамелью.",
  },
  caesar: {
    title: "Салат Цезарь с креветками",
    description:
      "Романо, пармезан, соус цезарь, крупные тигровые креветки и гренки из бриоши.",
  },
  "old-fashioned": {
    title: "Коктейль AURUM Old Fashioned",
    description: "Бурбон, тростниковый сироп, биттер и аромат дыма кедра.",
  },
  "wine-glass": {
    title: "Бокал вина «Chateau Aurum»",
    description: "Отборное красное вино собственной бочковой выдержки ресторана.",
  },
};

export function getDefaultMenuItems(): StoredMenuItem[] {
  return menuItems.map((item) => {
    const copy = RU_COPY[item.id] ?? {
      title: item.id,
      description: "",
    };
    return {
      id: item.id,
      title: copy.title,
      description: copy.description,
      price: item.priceTenge,
      category: item.category,
      image: item.imageSrc,
    };
  });
}
