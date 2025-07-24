import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Recycle, Factory, Users, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-eco-green animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border-2 border-eco-blue animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transformando{" "}
                <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                  Resíduos
                </span>{" "}
                em Riqueza
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conectando um Polo Circular no Complexo Industrial de Suape através de inovação, 
                sustentabilidade e economia circular.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center border-eco-green/20 hover:shadow-lg transition-all">
                <Factory className="w-6 h-6 mx-auto mb-2 text-eco-green" />
                <div className="font-bold text-lg">150+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </Card>
              <Card className="p-4 text-center border-eco-blue/20 hover:shadow-lg transition-all">
                <Recycle className="w-6 h-6 mx-auto mb-2 text-eco-blue" />
                <div className="font-bold text-lg">89%</div>
                <div className="text-sm text-muted-foreground">Reaproveitamento</div>
              </Card>
              <Card className="p-4 text-center border-eco-green/20 hover:shadow-lg transition-all">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-eco-green" />
                <div className="font-bold text-lg">2.3M</div>
                <div className="text-sm text-muted-foreground">Ton/ano</div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-eco-green to-eco-blue hover:shadow-xl transition-all text-base px-8"
              >
                Cadastrar Resíduo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroBanner} 
                alt="Economia Circular Suape" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-green/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg animate-bounce">
              <Recycle className="w-6 h-6 text-eco-green" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Factory className="w-6 h-6 text-eco-blue" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;