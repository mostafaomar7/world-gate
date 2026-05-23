import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import CorporateSection from "@/components/CorporateSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

// Awards section replaces honeymoon
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <DestinationsSection />
        <AboutSection />
        <AwardsSection />
        <CorporateSection />
        <TestimonialsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
