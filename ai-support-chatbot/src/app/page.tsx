import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import LiveChatDemo from "@/components/sections/LiveChatDemo";
import BenefitsSection from "@/components/sections/BenefitsSection";
import DashboardPreview from "@/components/sections/DashboardPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <LiveChatDemo />
        <BenefitsSection />
        <DashboardPreview />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
