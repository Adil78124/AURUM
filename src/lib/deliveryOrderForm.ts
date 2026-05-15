import type { DeliveryOrderInput, DeliveryPaymentMethod } from "@/lib/manage/deliveryTypes";

export type DeliveryLineForOrder = {
  id: string;
  title: string;
  quantity: number;
  price: number;
};

export function parseDeliveryOrderForm(
  form: HTMLFormElement,
  lines: DeliveryLineForOrder[],
  totals: { subtotal: number; deliveryPrice: number; total: number },
  paymentMethod: DeliveryPaymentMethod,
  promoCode: string,
): DeliveryOrderInput | null {
  const fd = new FormData(form);
  const customerName = String(fd.get("fio") ?? "").trim();
  const phone = String(fd.get("phone") ?? "").trim();
  const address = String(fd.get("street") ?? "").trim();

  if (!customerName || !phone || !address || lines.length === 0) return null;

  const email = String(fd.get("email") ?? "").trim();
  const intercom = String(fd.get("intercom") ?? "").trim();
  const apartment = String(fd.get("apt") ?? "").trim();
  const floor = String(fd.get("floor") ?? "").trim();
  const comment = String(fd.get("comment") ?? "").trim();
  const cardRaw = String(fd.get("card") ?? "").replace(/\s/g, "");
  const cardLast4 =
    paymentMethod === "card" && cardRaw.length >= 4 ? cardRaw.slice(-4) : undefined;

  return {
    customerName,
    phone,
    email: email || undefined,
    address,
    intercom: intercom || undefined,
    apartment: apartment || undefined,
    floor: floor || undefined,
    comment: comment || undefined,
    paymentMethod,
    cardLast4,
    items: lines.map((l) => ({
      id: l.id,
      title: l.title,
      quantity: l.quantity,
      price: l.price,
    })),
    promoCode: promoCode.trim() || undefined,
    deliveryPrice: totals.deliveryPrice,
    subtotal: totals.subtotal,
    total: totals.total,
  };
}
