import EcoHeader from "@/components/EcoHeader";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import NetworkSection from "@/components/NetworkSection";
import ContactSection from "@/components/ContactSection";
import EcoFooter from "@/components/EcoFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EcoHeader />
      <HeroSection />
      <DashboardSection />
      <NetworkSection />
      <ContactSection />
      <EcoFooter />
    </div>
  );
};

export default Index;