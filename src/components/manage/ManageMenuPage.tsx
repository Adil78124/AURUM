"use client";

import { useState } from "react";
import { MenuItemImage } from "@/components/menu/MenuItemImage";
import { MenuImageField } from "@/components/manage/MenuImageField";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Plus, Trash2 } from "lucide-react";
import type { MenuCategoryId } from "@/data/menu";
import { useManageData } from "@/context/ManageDataContext";
import type { StoredMenuItem } from "@/lib/manage/types";
import {
  ManageBtn,
  ManageCard,
  ManageInput,
  ManageSelect,
  ManageTextarea,
} from "@/components/manage/ManageCard";
import { ManageShell } from "@/components/manage/ManageShell";

const CATEGORIES: { id: MenuCategoryId; label: string }[] = [
  { id: "starters", label: "Закуски" },
  { id: "mains", label: "Главные" },
  { id: "salads", label: "Салаты" },
  { id: "steaks", label: "Стейки" },
  { id: "bar", label: "Бар" },
  { id: "cocktails", label: "Коктейли" },
];

const emptyDish = (): Omit<StoredMenuItem, "id"> => ({
  title: "",
  description: "",
  price: 0,
  category: "starters",
  image: "",
});

export function ManageMenuPage() {
  const { menu } = useManageData();
  const [editing, setEditing] = useState<StoredMenuItem | null>(null);
  const [draft, setDraft] = useState<Omit<StoredMenuItem, "id">>(emptyDish());
  const [isNew, setIsNew] = useState(false);

  const openNew = () => {
    setIsNew(true);
    setEditing(null);
    setDraft(emptyDish());
  };

  const openEdit = (item: StoredMenuItem) => {
    setIsNew(false);
    setEditing(item);
    setDraft({
      title: item.title,
      description: item.description,
      price: item.price,
      category: item.category,
      image: item.image,
    });
  };

  const save = () => {
    if (!draft.title.trim()) return;
    if (isNew) {
      menu.addItem(draft);
    } else if (editing) {
      menu.updateItem(editing.id, draft);
    }
    setEditing(null);
    setIsNew(false);
    setDraft(emptyDish());
  };

  return (
    <ManageShell title="Управление меню" subtitle="Изменения сразу видны на странице /menu">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <ManageBtn variant="primary" onClick={openNew}>
          <span className="inline-flex items-center gap-2">
            <Plus className="h-3.5 w-3.5" /> Добавить блюдо
          </span>
        </ManageBtn>
        <ManageBtn variant="ghost" onClick={() => menu.resetMenu()}>
          Сбросить к умолчанию
        </ManageBtn>
      </div>

      <AnimatePresence>
        {(isNew || editing) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <ManageCard>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                {isNew ? "Новое блюдо" : "Редактирование"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-xs text-zinc-500">
                  Название
                  <ManageInput
                    className="mt-1"
                    value={draft.title}
                    onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
                  />
                </label>
                <label className="block text-xs text-zinc-500">
                  Цена (₸)
                  <ManageInput
                    type="number"
                    className="mt-1"
                    value={draft.price || ""}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, price: Number(e.target.value) || 0 }))
                    }
                  />
                </label>
                <label className="block text-xs text-zinc-500 md:col-span-2">
                  Описание
                  <ManageTextarea
                    className="mt-1"
                    rows={2}
                    value={draft.description}
                    onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
                  />
                </label>
                <label className="block text-xs text-zinc-500">
                  Категория
                  <ManageSelect
                    className="mt-1"
                    value={draft.category}
                    onChange={(e) =>
                      setDraft((d) => ({
                        ...d,
                        category: e.target.value as MenuCategoryId,
                      }))
                    }
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id} className="bg-zinc-900">
                        {c.label}
                      </option>
                    ))}
                  </ManageSelect>
                </label>
                <MenuImageField
                  value={draft.image}
                  onChange={(image) => setDraft((d) => ({ ...d, image }))}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <ManageBtn variant="primary" onClick={save}>
                  Сохранить
                </ManageBtn>
                <ManageBtn
                  variant="ghost"
                  onClick={() => {
                    setEditing(null);
                    setIsNew(false);
                  }}
                >
                  Отмена
                </ManageBtn>
              </div>
            </ManageCard>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {menu.items.map((item) => (
          <ManageCard key={item.id} className="flex flex-col">
            <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-black/50">
              <MenuItemImage src={item.image} alt={item.title} sizes="320px" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">{item.category}</p>
            <h3 className="font-headline-lg text-lg text-white">{item.title}</h3>
            <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-400">{item.description}</p>
            <p className="mt-2 text-primary">{item.price.toLocaleString("ru-RU")} ₸</p>
            <div className="mt-4 flex gap-2">
              <ManageBtn variant="ghost" className="flex-1" onClick={() => openEdit(item)}>
                <span className="inline-flex items-center justify-center gap-1">
                  <Pencil className="h-3 w-3" /> Изменить
                </span>
              </ManageBtn>
              <ManageBtn variant="danger" onClick={() => menu.removeItem(item.id)}>
                <Trash2 className="h-3.5 w-3.5" />
              </ManageBtn>
            </div>
          </ManageCard>
        ))}
      </div>
    </ManageShell>
  );
}
