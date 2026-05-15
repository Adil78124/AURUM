"use client";

import { useCallback, useEffect, useState } from "react";
import { getDefaultMenuItems } from "@/data/menuDefaults";
import type { MenuItem } from "@/data/menu";
import type { StoredMenuItem } from "@/lib/manage/types";
import { jsonEqual, readJson, STORAGE_KEYS, writeJson } from "@/lib/storage";

function toMenuItem(stored: StoredMenuItem): MenuItem {
  return {
    id: stored.id,
    category: stored.category,
    priceTenge: stored.price,
    imageSrc: stored.image,
    title: stored.title,
    description: stored.description,
  };
}

export function useStoredMenu() {
  const [items, setItems] = useState<StoredMenuItem[]>(getDefaultMenuItems);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => {
      const stored = readJson<StoredMenuItem[]>(STORAGE_KEYS.menu);
      const next = stored?.length ? stored : getDefaultMenuItems();
      setItems((prev) => (jsonEqual(prev, next) ? prev : next));
    };
    load();
    setReady(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent<{ key: string }>).detail?.key;
      if (!key || key === STORAGE_KEYS.menu) load();
    };
    window.addEventListener("aurum-storage", onStorage);
    return () => window.removeEventListener("aurum-storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.menu, items);
  }, [items, ready]);

  const menuItemsForSite = items.map(toMenuItem);

  const addItem = useCallback((item: Omit<StoredMenuItem, "id">) => {
    const id = `dish-${Date.now()}`;
    setItems((prev) => [...prev, { ...item, id }]);
    return id;
  }, []);

  const updateItem = useCallback((id: string, patch: Partial<StoredMenuItem>) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, ...patch, id } : i)));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const resetMenu = useCallback(() => {
    setItems(getDefaultMenuItems());
  }, []);

  return {
    items,
    menuItemsForSite,
    ready,
    addItem,
    updateItem,
    removeItem,
    resetMenu,
    setItems,
  };
}
