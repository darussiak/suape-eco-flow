import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Package, TrendingUp, MapPin, DollarSign } from "lucide-react";
import EcoHeader from "@/components/EcoHeader";
import EcoFooter from "@/components/EcoFooter";
import residuosData from "@/mockData/residuos_gerados.json";

const Residuos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDisponibilidade, setSelectedDisponibilidade] = useState("all");

  const disponibilidades = [...new Set(residuosData.map(r => r.disponibilidade))];

  const filteredResiduos = residuosData.filter((residuo) => {
    const matchesSearch = 
      residuo.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      residuo.tipo_residuo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      residuo.local_coleta.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDisponibilidade = 
      selectedDisponibilidade === "all" || residuo.disponibilidade === selectedDisponibilidade;
    
    return matchesSearch && matchesDisponibilidade;
  });

  const totalQuantidade = residuosData.reduce((acc, residuo) => acc + residuo.quantidade_mensal, 0);
  const totalCustoDescarte = residuosData.reduce((acc, residuo) => acc + Math.abs(residuo.custo_descarte_adequado * residuo.quantidade_mensal), 0);

  const getDisponibilidadeBadge = (disponibilidade: string) => {
    switch (disponibilidade) {
      case "Contínua":
        return "bg-eco-green/10 text-eco-green";
      case "Variável":
        return "bg-yellow-500/10 text-yellow-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCustoColor = (custo: number) => {
    return custo < 0 ? "text-eco-green" : "text-red-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <EcoHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Resíduos Gerados</h1>
          <p className="text-muted-foreground">
            Inventário completo dos resíduos gerados pelas empresas do polo industrial
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tipos de Resíduos</CardTitle>
              <Package className="h-4 w-4 text-eco-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{residuosData.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volume Total/Mês</CardTitle>
              <TrendingUp className="h-4 w-4 text-eco-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalQuantidade.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground">toneladas</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Custo Total Descarte/Mês</CardTitle>
              <DollarSign className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalCustoDescarte.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por empresa, tipo de resíduo ou local..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedDisponibilidade} onValueChange={setSelectedDisponibilidade}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por disponibilidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as disponibilidades</SelectItem>
              {disponibilidades.map((disp) => (
                <SelectItem key={disp} value={disp}>{disp}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Lista de Resíduos */}
        <div className="grid gap-6">
          {filteredResiduos.map((residuo, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{residuo.empresa}</CardTitle>
                    <CardDescription>{residuo.tipo_residuo}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-eco-blue/10 text-eco-blue">
                      {residuo.quantidade_mensal} ton/mês
                    </Badge>
                    <Badge className={getDisponibilidadeBadge(residuo.disponibilidade)}>
                      {residuo.disponibilidade}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-eco-green" />
                    <span className="font-medium">Local de Coleta:</span>
                    <span>{residuo.local_coleta}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Custo de Descarte Adequado</p>
                      <p className={`font-semibold ${getCustoColor(residuo.custo_descarte_adequado)}`}>
                        R$ {residuo.custo_descarte_adequado}/ton
                        {residuo.custo_descarte_adequado < 0 && " (Receita)"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Custo Total Mensal</p>
                      <p className={`font-bold ${getCustoColor(residuo.custo_descarte_adequado)}`}>
                        R$ {(residuo.custo_descarte_adequado * residuo.quantidade_mensal).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-eco-green/5 rounded-lg border-l-4 border-eco-green">
                    <p className="text-sm font-medium text-eco-green mb-1">Impacto na Economia Circular:</p>
                    <p className="text-sm">{residuo.impacto_economia_circular}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResiduos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum resíduo encontrado com os critérios de busca.</p>
          </div>
        )}
      </div>

      <EcoFooter />
    </div>
  );
};

export default Residuos;