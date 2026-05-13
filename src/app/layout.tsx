import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal";
import { VipBookingModal } from "@/components/modals/VipBookingModal";
import { RouteCartChrome } from "@/components/layout/RouteCartChrome";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AURUM — ресторан",
  description: "Ресторан AURUM: премиальная гастрономия, VIP кабинки и сервис высокого уровня.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`dark ${playfair.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-body-md text-on-background antialiased">
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <BookingModal />
          <VipBookingModal />
          <RouteCartChrome />
        </Providers>
      </body>
    </html>
  );
}
