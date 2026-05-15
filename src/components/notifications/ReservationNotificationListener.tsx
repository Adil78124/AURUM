"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useToast } from "@/context/ToastContext";
import type { Reservation } from "@/lib/manage/types";
import { RESERVATION_ADDED_EVENT } from "@/lib/reservationEvents";
import { readJson, STORAGE_KEYS } from "@/lib/storage";

function showBrowserNotification(title: string, body: string) {
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  try {
    new Notification(title, { body });
  } catch {
    /* ignore */
  }
}

export function ReservationNotificationListener() {
  const pathname = usePathname();
  const { showToast } = useToast();
  const t = useTranslations("BookingNotifications");
  const lastNotifiedId = useRef<string | null>(null);
  const skipNextStorage = useRef(true);

  const notifyAdmin = (reservation: Reservation) => {
    if (lastNotifiedId.current === reservation.id) return;
    lastNotifiedId.current = reservation.id;

    const label =
      reservation.type === "vip" ? t("adminTitleVip") : t("adminTitleStandard");
    const message = t("adminMessage", {
      name: reservation.name,
      date: reservation.date,
      time: reservation.time,
      guests: reservation.guests,
    });
    showToast({ title: label, message, durationMs: 9000 });
    showBrowserNotification(label, message);
  };

  useEffect(() => {
    const isManage = pathname?.startsWith("/manage");
    if (!isManage) return;

    const onAdded = (e: Event) => {
      const reservation = (e as CustomEvent<Reservation>).detail;
      if (reservation) notifyAdmin(reservation);
    };

    const onStorage = (e: Event) => {
      if (skipNextStorage.current) {
        skipNextStorage.current = false;
        return;
      }
      const key = (e as CustomEvent<{ key: string }>).detail?.key;
      if (key !== STORAGE_KEYS.reservations) return;
      const list = readJson<Reservation[]>(STORAGE_KEYS.reservations) ?? [];
      const latest = list[0];
      if (latest) notifyAdmin(latest);
    };

    window.addEventListener(RESERVATION_ADDED_EVENT, onAdded);
    window.addEventListener("aurum-storage", onStorage);
    return () => {
      window.removeEventListener(RESERVATION_ADDED_EVENT, onAdded);
      window.removeEventListener("aurum-storage", onStorage);
    };
  }, [pathname, showToast, t]);

  return null;
}
