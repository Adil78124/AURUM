import { setRequestLocale } from "next-intl/server";
import { AboutPageView } from "@/components/about/AboutPageView";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageView />;
}
