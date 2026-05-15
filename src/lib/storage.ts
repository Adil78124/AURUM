const isBrowser = () => typeof window !== "undefined";

export function readJson<T>(key: string): T | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function jsonEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function writeJson<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    const serialized = JSON.stringify(value);
    if (window.localStorage.getItem(key) === serialized) return;
    window.localStorage.setItem(key, serialized);
    window.dispatchEvent(new CustomEvent("aurum-storage", { detail: { key } }));
  } catch (err) {
    if (err instanceof DOMException && err.name === "QuotaExceededError") {
      console.warn("[AURUM] localStorage quota exceeded");
    }
  }
}

export function removeKey(key: string): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

export const STORAGE_KEYS = {
  menu: "aurum:menu",
  reservations: "aurum:reservations",
  reviews: "aurum:reviews",
  reviewsMeta: "aurum:reviews-meta",
  deliveryOrders: "aurum:delivery-orders",
} as const;
