"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { UiModalsProvider } from "@/context/UiModalsContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <UiModalsProvider>{children}</UiModalsProvider>
      </CartProvider>
    </MotionConfig>
  );
}
