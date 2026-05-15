import type { Reservation } from "@/lib/manage/types";

/**
 * Optional Telegram notifications (no backend).
 *
 * Set in `.env.local`:
 *   NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=...
 *   NEXT_PUBLIC_TELEGRAM_CHAT_ID=...
 *
 * If unset, calls are no-ops (safe for local demo).
 */
export async function notifyTelegramReservation(reservation: Reservation): Promise<void> {
  const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const label = reservation.type === "vip" ? "VIP бронь" : "Бронь столика";
  const cabin =
    reservation.type === "vip" && reservation.cabin
      ? `\nКабина: ${reservation.cabin}`
      : "";

  const text = [
    `🥂 AURUM — ${label}`,
    `Имя: ${reservation.name}`,
    `Тел: ${reservation.phone}`,
    `Дата: ${reservation.date} ${reservation.time}`,
    `Гости: ${reservation.guests}`,
    reservation.comment ? `Комментарий: ${reservation.comment}` : "",
    reservation.preorder ? `Предзаказ: ${reservation.preorder}` : "",
    cabin,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  } catch {
    /* demo: ignore network errors */
  }
}
