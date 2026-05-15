"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { ReservationNotificationListener } from "@/components/notifications/ReservationNotificationListener";
import { CartProvider } from "@/context/CartContext";
import { ManageDataProvider } from "@/context/ManageDataContext";
import { ToastProvider } from "@/context/ToastContext";
import { UiModalsProvider } from "@/context/UiModalsContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <ManageDataProvider>
          <CartProvider>
            <UiModalsProvider>
              <ReservationNotificationListener />
              {children}
            </UiModalsProvider>
          </CartProvider>
        </ManageDataProvider>
      </ToastProvider>
    </MotionConfig>
  );
}
