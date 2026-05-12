"use client";

import { usePathname } from "next/navigation";
import { CartDrawer } from "@/components/menu/CartDrawer";
import { FloatingCart } from "@/components/menu/FloatingCart";

export function RouteCartChrome() {
  const pathname = usePathname();
  const show = pathname === "/menu" || pathname === "/delivery";
  if (!show) return null;
  return (
    <>
      <FloatingCart />
      <CartDrawer />
    </>
  );
}
