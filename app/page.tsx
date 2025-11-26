import HarikaStudioHero from "../components/home-page/hero-section";
import HarikaSpaceSection from "@/components/home-page/space-section";
import HarikaAboutSection from "@/components/home-page/about-section";
import HarikaQuoteSection from "@/components/home-page/quote-section";
import HarikaServicesSection from "@/components/home-page/service-section";
import HarikaContactSection from "@/components/home-page/contact-section";

export default async function Home() {
  return (
    <main className="">
      <HarikaStudioHero />
      <HarikaSpaceSection />
      <HarikaAboutSection />
      <HarikaQuoteSection />
      <HarikaServicesSection />
      <HarikaContactSection />
    </main>
  );
}
