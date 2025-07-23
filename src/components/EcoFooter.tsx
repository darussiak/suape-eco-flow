import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Recycle, 
  Factory, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter,
  ExternalLink
} from "lucide-react";
import ecocicloLogo from "@/assets/ecociclo-logo.png";

const EcoFooter = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={ecocicloLogo} 
                alt="EcoCiclo Suape" 
                className="h-8 w-8"
              />
              <div>
                <h3 className="font-bold text-foreground">EcoCiclo Suape</h3>
                <p className="text-xs text-muted-foreground">Polo Circular</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando resíduos em riqueza através da economia circular no 
              Complexo Industrial de Suape.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="border-eco-blue/20 hover:bg-eco-blue hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-eco-green/20 hover:bg-eco-green hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Plataforma</h4>
            <ul className="space-y-2">
              <li>
                <a href="#dashboard" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#network" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">
                  Rede de Empresas
                </a>
              </li>
              <li>
                <a href="#processes" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">
                  Processos
                </a>
              </li>
              <li>
                <a href="#impact" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">
                  Impacto Ambiental
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-eco-blue transition-colors flex items-center gap-1">
                  Relatórios
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-eco-blue transition-colors flex items-center gap-1">
                  Documentação
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-eco-blue transition-colors flex items-center gap-1">
                  Estudos de Caso
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-eco-blue transition-colors flex items-center gap-1">
                  API
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-eco-green" />
                <span>Complexo de Suape, PE</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-eco-blue" />
                <span>contato@ecociclo.suape.pe.gov.br</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-eco-green" />
                <span>+55 (81) 3522-8000</span>
              </div>
            </div>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-gradient-to-r from-eco-green to-eco-blue hover:shadow-lg transition-all"
            >
              Fale Conosco
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 EcoCiclo Suape. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-eco-green transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-eco-blue transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-eco-green transition-colors">
              Sustentabilidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcoFooter;