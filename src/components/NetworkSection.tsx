import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  ArrowRight, 
  Recycle, 
  Factory, 
  Zap, 
  Droplets,
  Link,
  MapPin,
  TrendingUp
} from "lucide-react";

const NetworkSection = () => {
  const companies = [
    {
      name: "Petroquímica Suape",
      type: "Petroquímica",
      connections: 12,
      materials: ["Resíduos Plásticos", "Vapor"],
      status: "Ativo",
      efficiency: 94
    },
    {
      name: "Refinaria Abreu e Lima",
      type: "Refinaria",
      connections: 8,
      materials: ["Óleo Usado", "Calor Residual"],
      status: "Ativo",
      efficiency: 87
    },
    {
      name: "Companhia Siderúrgica",
      type: "Siderurgia",
      connections: 15,
      materials: ["Escória", "Gases"],
      status: "Ativo",
      efficiency: 91
    },
    {
      name: "Terminal de Contêineres",
      type: "Logística",
      connections: 6,
      materials: ["Resíduos Sólidos", "Águas Pluviais"],
      status: "Expansão",
      efficiency: 78
    }
  ];

  const materialFlows = [
    {
      from: "Petroquímica",
      to: "Recicladora",
      material: "Resíduos Plásticos",
      volume: "450 ton/mês",
      icon: Recycle,
      color: "eco-green"
    },
    {
      from: "Refinaria",
      to: "Cogeração",
      material: "Calor Residual",
      volume: "1.2 MW",
      icon: Zap,
      color: "eco-blue"
    },
    {
      from: "Siderúrgica",
      to: "Cimenteira",
      material: "Escória",
      volume: "800 ton/mês",
      icon: Factory,
      color: "eco-green"
    },
    {
      from: "Terminal",
      to: "Tratamento",
      material: "Águas Pluviais",
      volume: "2.5 mil m³",
      icon: Droplets,
      color: "eco-blue"
    }
  ];

  return (
    <section id="network" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Rede de Empresas Conectadas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize as conexões e fluxos de materiais na economia circular do Complexo de Suape
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-8">
          {/* Companies List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-eco-green" />
                Principais Empresas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {companies.map((company, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{company.name}</h4>
                      <p className="text-sm text-muted-foreground">{company.type}</p>
                    </div>
                    <Badge 
                      variant={company.status === 'Ativo' ? 'secondary' : 'outline'}
                      className={company.status === 'Ativo' ? 'bg-eco-green/10 text-eco-green border-eco-green/20' : ''}
                    >
                      {company.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Link className="w-4 h-4" />
                      {company.connections} conexões
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {company.efficiency}% eficiência
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {company.materials.map((material, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                Ver Todas as Empresas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Material Flows */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-eco-blue" />
                Fluxos de Materiais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {materialFlows.map((flow, index) => {
                const IconComponent = flow.icon;
                return (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-md bg-${flow.color}/10`}>
                          <IconComponent className={`w-4 h-4 text-${flow.color}`} />
                        </div>
                        <span className="font-medium text-sm">{flow.material}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {flow.volume}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                        {flow.from}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                        {flow.to}
                      </span>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-4 border-t border-border">
                <Button variant="outline" className="w-full border-eco-blue text-eco-blue hover:bg-eco-blue hover:text-white">
                  Visualizar Mapa Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;