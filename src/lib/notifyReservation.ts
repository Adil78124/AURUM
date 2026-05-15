import type { Reservation } from "@/lib/manage/types";
import { notifyTelegramReservation } from "@/lib/telegram";

/** Client + optional API route Telegram notify (no heavy backend). */
export async function notifyReservationChannels(reservation: Reservation): Promise<void> {
  void notifyTelegramReservation(reservation);

  try {
    await fetch("/api/notify-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    });
  } catch {
    /* demo */
  }
}
