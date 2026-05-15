"use client";

import { useCallback, useEffect, useState } from "react";
import type {
  DeliveryOrder,
  DeliveryOrderInput,
  DeliveryOrderStatus,
} from "@/lib/manage/deliveryTypes";
import { jsonEqual, readJson, STORAGE_KEYS, writeJson } from "@/lib/storage";

export type { DeliveryOrderInput };

export function useDeliveryOrders() {
  const [orders, setOrders] = useState<DeliveryOrder[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => {
      const next = readJson<DeliveryOrder[]>(STORAGE_KEYS.deliveryOrders) ?? [];
      setOrders((prev) => (jsonEqual(prev, next) ? prev : next));
    };
    load();
    setReady(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent<{ key: string }>).detail?.key;
      if (!key || key === STORAGE_KEYS.deliveryOrders) load();
    };
    window.addEventListener("aurum-storage", onStorage);
    return () => window.removeEventListener("aurum-storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.deliveryOrders, orders);
  }, [orders, ready]);

  const addOrder = useCallback((input: DeliveryOrderInput) => {
    const entry: DeliveryOrder = {
      ...input,
      id: `del-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: "new",
    };
    setOrders((prev) => [entry, ...prev]);
    return entry;
  }, []);

  const updateStatus = useCallback((id: string, status: DeliveryOrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }, []);

  const removeOrder = useCallback((id: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  }, []);

  const stats = {
    total: orders.length,
    newCount: orders.filter((o) => o.status === "new").length,
    revenue: orders.reduce((s, o) => s + o.total, 0),
  };

  return { orders, ready, addOrder, updateStatus, removeOrder, stats };
}
