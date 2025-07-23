import EcoHeader from "@/components/EcoHeader";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import NetworkSection from "@/components/NetworkSection";
import EcoFooter from "@/components/EcoFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EcoHeader />
      <HeroSection />
      <DashboardSection />
      <NetworkSection />
      <EcoFooter />
    </div>
  );
};

export default Index;