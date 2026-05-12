"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { UiModalsProvider } from "@/context/UiModalsContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <UiModalsProvider>{children}</UiModalsProvider>
    </CartProvider>
  );
}
