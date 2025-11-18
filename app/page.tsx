import { AboutSection } from "@/components/about-section";
import { BrandSection } from "@/components/brand-section";
import { HeroSection } from "@/components/hero-section";
import { ServiceSection } from "@/components/service-section";

export default async function Home() {
  return (
    <main className="no-scrollbar overflow-x-hidden w-full h-full">
      <HeroSection />
      <AboutSection />
      <BrandSection />
      <ServiceSection />
    </main>
  );
}
