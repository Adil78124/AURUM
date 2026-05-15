"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useDeliveryOrders } from "@/hooks/useDeliveryOrders";
import { useReservations } from "@/hooks/useReservations";
import { useStoredMenu } from "@/hooks/useStoredMenu";
import { useStoredReviews } from "@/hooks/useStoredReviews";

type ManageDataValue = {
  menu: ReturnType<typeof useStoredMenu>;
  reservations: ReturnType<typeof useReservations>;
  delivery: ReturnType<typeof useDeliveryOrders>;
  reviews: ReturnType<typeof useStoredReviews>;
};

const ManageDataContext = createContext<ManageDataValue | null>(null);

export function ManageDataProvider({ children }: { children: ReactNode }) {
  const menu = useStoredMenu();
  const reservations = useReservations();
  const delivery = useDeliveryOrders();
  const reviews = useStoredReviews();

  const value = useMemo(
    () => ({ menu, reservations, delivery, reviews }),
    [menu, reservations, delivery, reviews],
  );

  return (
    <ManageDataContext.Provider value={value}>{children}</ManageDataContext.Provider>
  );
}

export function useManageData() {
  const ctx = useContext(ManageDataContext);
  if (!ctx) throw new Error("useManageData must be used within ManageDataProvider");
  return ctx;
}
