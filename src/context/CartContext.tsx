"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MenuItem } from "@/data/menu";

export type CartLine = {
  item: MenuItem;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  toggleDrawer: () => void;
  addItem: (item: MenuItem, qty?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeLine: (id: string) => void;
  totalQty: number;
  totalTenge: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = useCallback((item: MenuItem, qty = 1) => {
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.item.id === item.id);
      if (idx === -1) return [...prev, { item, quantity: qty }];
      const next = [...prev];
      next[idx] = {
        ...next[idx],
        quantity: next[idx].quantity + qty,
      };
      return next;
    });
    setDrawerOpen(true);
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setLines((prev) => {
      if (quantity <= 0) return prev.filter((l) => l.item.id !== id);
      return prev.map((l) =>
        l.item.id === id ? { ...l, quantity } : l,
      );
    });
  }, []);

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.item.id !== id));
  }, []);

  const totalQty = useMemo(
    () => lines.reduce((s, l) => s + l.quantity, 0),
    [lines],
  );

  const totalTenge = useMemo(
    () => lines.reduce((s, l) => s + l.item.priceTenge * l.quantity, 0),
    [lines],
  );

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((o) => !o);
  }, []);

  const value = useMemo(
    () => ({
      lines,
      drawerOpen,
      setDrawerOpen,
      toggleDrawer,
      addItem,
      setQuantity,
      removeLine,
      totalQty,
      totalTenge,
    }),
    [
      lines,
      drawerOpen,
      toggleDrawer,
      addItem,
      setQuantity,
      removeLine,
      totalQty,
      totalTenge,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
