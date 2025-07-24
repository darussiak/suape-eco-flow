import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, TrendingDown, ArrowRightLeft, Factory, Recycle } from "lucide-react";
import EcoHeader from "@/components/EcoHeader";
import EcoFooter from "@/components/EcoFooter";
import conexoesData from "@/mockData/conexoes.json";

const Conexoes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConexoes = conexoesData.filter((conexao) =>
    conexao.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conexao.tipo_residuo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conexao.empresa_receptora.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalEconomia = conexoesData.reduce((acc, conexao) => acc + conexao.economia_total, 0);
  const totalToneladas = conexoesData.reduce((acc, conexao) => acc + conexao.toneladas_mensal, 0);

  return (
    <div className="min-h-screen bg-background">
      <EcoHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Conexões Circulares</h1>
          <p className="text-muted-foreground">
            Mapeamento das conexões estabelecidas entre empresas para aproveitamento de resíduos
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conexões Ativas</CardTitle>
              <ArrowRightLeft className="h-4 w-4 text-eco-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{conexoesData.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Material Processado/Mês</CardTitle>
              <Recycle className="h-4 w-4 text-eco-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalToneladas.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground">toneladas</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Economia Total/Mês</CardTitle>
              <TrendingDown className="h-4 w-4 text-eco-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalEconomia.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Busca */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por empresa, resíduo ou empresa receptora..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Lista de Conexões */}
        <div className="grid gap-6">
          {filteredConexoes.map((conexao, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{conexao.empresa}</CardTitle>
                    <CardDescription>{conexao.tipo_residuo}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-eco-green/10 text-eco-green">
                    {conexao.toneladas_mensal} ton/mês
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-eco-blue" />
                    <span className="font-medium">Empresa Receptora:</span>
                    <span>{conexao.empresa_receptora}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Recycle className="h-4 w-4 text-eco-green" />
                    <span className="font-medium">Uso do Resíduo:</span>
                    <span>{conexao.uso_do_residuo}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Custo Matéria Virgem</p>
                      <p className="font-semibold">R$ {conexao.custo_materia_virgem}/ton</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Custo Matéria Circular</p>
                      <p className="font-semibold text-eco-green">R$ {conexao.custo_materia_circular}/ton</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Economia Mensal</p>
                      <p className="font-bold text-eco-green">R$ {conexao.economia_total.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredConexoes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma conexão encontrada com os critérios de busca.</p>
          </div>
        )}
      </div>

      <EcoFooter />
    </div>
  );
};

export default Conexoes;