import type { Reservation } from "@/lib/manage/types";

export const RESERVATION_ADDED_EVENT = "aurum-reservation-added";

export function dispatchReservationAdded(reservation: Reservation): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(RESERVATION_ADDED_EVENT, { detail: reservation }),
  );
}
