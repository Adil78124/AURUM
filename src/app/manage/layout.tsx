import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ReservationNotificationListener } from "@/components/notifications/ReservationNotificationListener";
import { ManageDataProvider } from "@/context/ManageDataContext";
import { ToastProvider } from "@/context/ToastContext";
import ruA from "../../../messages/ru/a.json";
import ruB from "../../../messages/ru/b.json";

const ruMessages = { ...ruA, ...ruB };

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
  title: "AURUM Manage",
  robots: { index: false, follow: false },
};

export default function ManageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      translate="no"
      className={`notranslate dark ${playfair.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="notranslate font-body-md antialiased" suppressHydrationWarning>
        <NextIntlClientProvider locale="ru" messages={ruMessages}>
          <ToastProvider>
            <ManageDataProvider>
              <ReservationNotificationListener />
              {children}
            </ManageDataProvider>
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
