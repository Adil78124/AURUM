"use client";

import { useCallback, useEffect, useState } from "react";
import type { Reservation, ReservationType } from "@/lib/manage/types";
import { jsonEqual, readJson, STORAGE_KEYS, writeJson } from "@/lib/storage";
import { dispatchReservationAdded } from "@/lib/reservationEvents";
import { notifyReservationChannels } from "@/lib/notifyReservation";

export type ReservationInput = {
  type: ReservationType;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  comment?: string;
  preorder?: string;
  cabin?: string;
};

export function useReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => {
      const next = readJson<Reservation[]>(STORAGE_KEYS.reservations) ?? [];
      setReservations((prev) => (jsonEqual(prev, next) ? prev : next));
    };
    load();
    setReady(true);
    const onStorage = (e: Event) => {
      const key = (e as CustomEvent<{ key: string }>).detail?.key;
      if (!key || key === STORAGE_KEYS.reservations) load();
    };
    window.addEventListener("aurum-storage", onStorage);
    return () => window.removeEventListener("aurum-storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.reservations, reservations);
  }, [reservations, ready]);

  const addReservation = useCallback((input: ReservationInput) => {
    const entry: Reservation = {
      id: `res-${Date.now()}`,
      type: input.type,
      name: input.name.trim(),
      phone: input.phone.trim(),
      date: input.date,
      time: input.time,
      guests: input.guests,
      comment: input.comment?.trim() ?? "",
      preorder: input.preorder?.trim() ?? "",
      cabin: input.cabin,
      createdAt: new Date().toISOString(),
    };
    setReservations((prev) => [entry, ...prev]);
    dispatchReservationAdded(entry);
    void notifyReservationChannels(entry);
    return entry;
  }, []);

  const removeReservation = useCallback((id: string) => {
    setReservations((prev) => prev.filter((r) => r.id !== id));
  }, []);

  return { reservations, ready, addReservation, removeReservation };
}
