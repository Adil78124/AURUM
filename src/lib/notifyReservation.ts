import type { Reservation } from "@/lib/manage/types";

/** Send an optional Telegram notification through the server API route. */
export async function notifyReservationChannels(reservation: Reservation): Promise<void> {
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
