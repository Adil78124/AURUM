import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Providers } from "../providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal";
import { VipBookingModal } from "@/components/modals/VipBookingModal";
import { RouteCartChrome } from "@/components/layout/RouteCartChrome";
import { routing } from "@/i18n/routing";

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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurum.example";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ru: "/ru",
        kk: "/kz",
        en: "/en",
        "x-default": "/ru",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const copyrightYear = new Date().getFullYear();

  return (
    <html
      lang={locale}
      translate="no"
      className={`notranslate dark ${playfair.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body
        className="notranslate flex min-h-screen flex-col bg-background font-body-md text-on-background antialiased"
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer copyrightYear={copyrightYear} />
            <BookingModal />
            <VipBookingModal />
            <RouteCartChrome />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
