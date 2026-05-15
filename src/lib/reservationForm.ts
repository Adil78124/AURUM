import type { ReservationInput } from "@/hooks/useReservations";

export function parseReservationForm(
  form: HTMLFormElement,
  type: ReservationInput["type"],
): ReservationInput | null {
  const fd = new FormData(form);
  const name = String(fd.get("name") ?? "").trim();
  const phone = String(fd.get("phone") ?? "").trim();
  const date = String(fd.get("date") ?? "");
  const time = String(fd.get("time") ?? "");
  const guestsRaw = String(fd.get("guests") ?? "1");
  const guests = Math.max(1, Number.parseInt(guestsRaw, 10) || 1);
  const comment = String(fd.get("note") ?? "");
  const preorder = String(fd.get("preorder") ?? "");
  const cabin = type === "vip" ? String(fd.get("cabin") ?? "") : undefined;

  if (!name || !phone || !date || !time) return null;

  return {
    type,
    name,
    phone,
    date,
    time,
    guests,
    comment,
    preorder,
    cabin: cabin || undefined,
  };
}
