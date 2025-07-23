import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Recycle, Factory, TrendingUp } from "lucide-react";
import { useState } from "react";
import ecocicloLogo from "@/assets/ecociclo-logo.png";

const EcoHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={ecocicloLogo} 
                alt="EcoCiclo Suape" 
                className="h-10 w-10 animate-spin-slow"
              />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-eco-green to-eco-blue opacity-20 blur-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EcoCiclo Suape</h1>
              <p className="text-xs text-muted-foreground">Polo Circular</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-foreground hover:text-eco-green transition-colors font-medium">
              Dashboard
            </a>
            <a href="#network" className="text-foreground hover:text-eco-green transition-colors font-medium">
              Rede
            </a>
            <a href="#processes" className="text-foreground hover:text-eco-green transition-colors font-medium">
              Processos
            </a>
            <a href="#impact" className="text-foreground hover:text-eco-green transition-colors font-medium">
              Impacto
            </a>
          </nav>

          {/* Status Badge and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="bg-eco-green/10 text-eco-green border-eco-green/20">
              <div className="w-2 h-2 bg-eco-green rounded-full mr-2 animate-pulse-eco"></div>
              Sistema Ativo
            </Badge>
            <Button variant="default" className="bg-gradient-to-r from-eco-green to-eco-blue hover:shadow-lg transition-all">
              Conectar Empresa
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#dashboard" className="text-foreground hover:text-eco-green transition-colors font-medium">
                Dashboard
              </a>
              <a href="#network" className="text-foreground hover:text-eco-green transition-colors font-medium">
                Rede
              </a>
              <a href="#processes" className="text-foreground hover:text-eco-green transition-colors font-medium">
                Processos
              </a>
              <a href="#impact" className="text-foreground hover:text-eco-green transition-colors font-medium">
                Impacto
              </a>
              <div className="pt-4 border-t border-border">
                <Badge variant="secondary" className="bg-eco-green/10 text-eco-green border-eco-green/20 mb-4">
                  <div className="w-2 h-2 bg-eco-green rounded-full mr-2 animate-pulse-eco"></div>
                  Sistema Ativo
                </Badge>
                <Button variant="default" className="w-full bg-gradient-to-r from-eco-green to-eco-blue">
                  Conectar Empresa
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default EcoHeader;