import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <WhyUsSection />
      <GallerySection />
      <FaqSection />
    </>
  );
}
