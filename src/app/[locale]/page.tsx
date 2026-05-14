import { setRequestLocale } from "next-intl/server";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { FaqSection } from "@/components/home/FaqSection";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <HomeHeroSection />
      <WhyUsSection />
      <FaqSection />
    </>
  );
}
