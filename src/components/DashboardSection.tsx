import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Recycle, 
  Factory, 
  Zap, 
  Droplets, 
  Users, 
  TrendingUp, 
  Gauge,
  ArrowUp,
  ArrowDown,
  Activity
} from "lucide-react";

const DashboardSection = () => {
  const metrics = [
    {
      title: "Resíduos Processados",
      value: "1.847",
      unit: "toneladas",
      change: "+12.5%",
      trend: "up",
      icon: Recycle,
      color: "eco-green"
    },
    {
      title: "Empresas Conectadas",
      value: "147",
      unit: "parceiros",
      change: "+3",
      trend: "up",
      icon: Factory,
      color: "eco-blue"
    },
    {
      title: "Energia Recuperada",
      value: "2.156",
      unit: "MWh",
      change: "+8.2%",
      trend: "up",
      icon: Zap,
      color: "eco-green"
    },
    {
      title: "Água Reutilizada",
      value: "45.8",
      unit: "mil m³",
      change: "+15.7%",
      trend: "up",
      icon: Droplets,
      color: "eco-blue"
    }
  ];

  const processes = [
    { name: "Reciclagem de Plásticos", efficiency: 94, status: "Ativo" },
    { name: "Tratamento de Efluentes", efficiency: 87, status: "Ativo" },
    { name: "Biodigestão Anaeróbia", efficiency: 92, status: "Ativo" },
    { name: "Recuperação Energética", efficiency: 78, status: "Manutenção" },
    { name: "Compostagem Industrial", efficiency: 89, status: "Ativo" }
  ];

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dashboard em Tempo Real
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitore o desempenho da economia circular no Complexo Industrial de Suape
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg bg-${metric.color}/10`}>
                      <IconComponent className={`w-5 h-5 text-${metric.color}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.unit}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.title}
                    </div>
                  </div>
                </CardContent>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${metric.color} to-${metric.color}/50`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;