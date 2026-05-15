import { NextResponse } from "next/server";
import type { Reservation } from "@/lib/manage/types";

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  let reservation: Reservation;
  try {
    reservation = (await request.json()) as Reservation;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid body" }, { status: 400 });
  }

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

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: true, sent: false });
  }

  return NextResponse.json({ ok: true, sent: true });
}
