export type DeliveryPaymentMethod = "kaspi" | "card" | "cash";

export type DeliveryOrderStatus =
  | "new"
  | "confirmed"
  | "preparing"
  | "delivering"
  | "completed"
  | "cancelled";

export type DeliveryOrderItem = {
  id: string;
  title: string;
  quantity: number;
  price: number;
};

export type DeliveryOrder = {
  id: string;
  createdAt: string;
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  intercom?: string;
  apartment?: string;
  floor?: string;
  comment?: string;
  paymentMethod: DeliveryPaymentMethod;
  cardLast4?: string;
  items: DeliveryOrderItem[];
  promoCode?: string;
  deliveryPrice: number;
  subtotal: number;
  total: number;
  status: DeliveryOrderStatus;
};

export type DeliveryOrderInput = Omit<DeliveryOrder, "id" | "createdAt" | "status">;

export const DELIVERY_STATUS_LABELS: Record<DeliveryOrderStatus, string> = {
  new: "Новый",
  confirmed: "Подтверждён",
  preparing: "Готовится",
  delivering: "В доставке",
  completed: "Завершён",
  cancelled: "Отменён",
};

export const DELIVERY_STATUS_STYLES: Record<DeliveryOrderStatus, string> = {
  new: "bg-sky-500/20 text-sky-200 ring-sky-400/30",
  confirmed: "bg-blue-500/20 text-blue-200 ring-blue-400/30",
  preparing: "bg-amber-500/20 text-amber-200 ring-amber-400/30",
  delivering: "bg-violet-500/20 text-violet-200 ring-violet-400/30",
  completed: "bg-emerald-500/20 text-emerald-200 ring-emerald-400/30",
  cancelled: "bg-zinc-500/20 text-zinc-300 ring-zinc-400/30",
};

export const DELIVERY_FILTER_TABS: {
  id: "all" | DeliveryOrderStatus;
  label: string;
}[] = [
  { id: "all", label: "Все" },
  { id: "new", label: "Новые" },
  { id: "confirmed", label: "Подтверждённые" },
  { id: "preparing", label: "Готовятся" },
  { id: "delivering", label: "В доставке" },
  { id: "completed", label: "Завершённые" },
  { id: "cancelled", label: "Отменённые" },
];

export const PAYMENT_LABELS: Record<DeliveryPaymentMethod, string> = {
  kaspi: "Kaspi.kz",
  card: "Банковская карта",
  cash: "Наличные",
};
