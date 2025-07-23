import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import PaymentSection from "@/components/PaymentSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <PaymentSection />
    </div>
  );
};

export default Index;
