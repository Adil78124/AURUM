"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type UiModalsContextValue = {
  bookingOpen: boolean;
  vipOpen: boolean;
  openBooking: () => void;
  openVip: () => void;
  closeBooking: () => void;
  closeVip: () => void;
};

const UiModalsContext = createContext<UiModalsContextValue | null>(null);

export function UiModalsProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [vipOpen, setVipOpen] = useState(false);

  const openBooking = useCallback(() => {
    setVipOpen(false);
    setBookingOpen(true);
  }, []);

  const openVip = useCallback(() => {
    setBookingOpen(false);
    setVipOpen(true);
  }, []);

  const closeBooking = useCallback(() => setBookingOpen(false), []);
  const closeVip = useCallback(() => setVipOpen(false), []);

  const value = useMemo(
    () => ({
      bookingOpen,
      vipOpen,
      openBooking,
      openVip,
      closeBooking,
      closeVip,
    }),
    [bookingOpen, vipOpen, openBooking, openVip, closeBooking, closeVip],
  );

  return (
    <UiModalsContext.Provider value={value}>{children}</UiModalsContext.Provider>
  );
}

export function useUiModals() {
  const ctx = useContext(UiModalsContext);
  if (!ctx) {
    throw new Error("useUiModals must be used within UiModalsProvider");
  }
  return ctx;
}
