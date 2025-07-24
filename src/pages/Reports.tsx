import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, FileText, TrendingUp, Download, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import EcoHeader from "@/components/EcoHeader";
import EcoFooter from "@/components/EcoFooter";

const Reports = () => {
  const wasteData = [
    { type: "Resíduos Perigosos", quantity: "2.847 ton", percentage: 45, color: "bg-red-500" },
    { type: "Resíduos Não Perigosos", quantity: "3.124 ton", percentage: 55, color: "bg-eco-green" },
  ];

  const monthlyProduction = [
    { month: "Jan", quantity: 485 },
    { month: "Fev", quantity: 523 },
    { month: "Mar", quantity: 612 },
    { month: "Abr", quantity: 578 },
    { month: "Mai", quantity: 634 },
    { month: "Jun", quantity: 697 },
  ];

  const companyReports = [
    { company: "Braskem", waste: "1.245 ton", recycled: "89%", classification: "NBR 10.004" },
    { company: "Refinaria Suape", waste: "2.156 ton", recycled: "76%", classification: "NBR 10.004" },
    { company: "Porto de Suape", waste: "587 ton", recycled: "92%", classification: "NBR 10.004" },
    { company: "Estaleiro Atlântico Sul", waste: "983 ton", recycled: "81%", classification: "NBR 10.004" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <EcoHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Relatórios Administrativos</h1>
              <p className="text-muted-foreground">Acesso restrito - Administração Suape</p>
            </div>
            <Badge variant="outline" className="border-eco-green text-eco-green">
              <FileText className="w-4 h-4 mr-2" />
              Admin Only
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="production" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="production">Produção</TabsTrigger>
            <TabsTrigger value="companies">Empresas</TabsTrigger>
            <TabsTrigger value="classification">Classificação</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="production" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-eco-green" />
                    Total de Resíduos 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">5.971 ton</div>
                  <div className="text-sm text-muted-foreground">+12% vs 2023</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-eco-blue" />
                    Taxa de Reciclagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">84.6%</div>
                  <div className="text-sm text-muted-foreground">+5.2% vs 2023</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-eco-green" />
                    Média Mensal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">497 ton</div>
                  <div className="text-sm text-muted-foreground">Por mês</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Tipo de Resíduo</CardTitle>
                <CardDescription>Classificação baseada na NBR 10.004</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {wasteData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.type}</span>
                      <span className="text-muted-foreground">{item.quantity}</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Produção Mensal (2024)</CardTitle>
                <CardDescription>Quantidade de resíduos processados por mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-6 gap-4">
                  {monthlyProduction.map((month) => (
                    <div key={month.month} className="text-center">
                      <div className="text-sm text-muted-foreground mb-2">{month.month}</div>
                      <div className={`h-20 ${month.quantity > 600 ? 'bg-eco-green' : 'bg-eco-blue'} rounded-t flex items-end justify-center text-white text-xs font-bold pb-1`}
                           style={{ height: `${(month.quantity / 700) * 80}px` }}>
                        {month.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Relatório por Empresa</h2>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Exportar CSV
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Desempenho das Empresas Parceiras</CardTitle>
                <CardDescription>Dados de produção e reciclagem por empresa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {companyReports.map((company, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{company.company}</h3>
                        <p className="text-sm text-muted-foreground">Resíduos: {company.waste}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-eco-green">{company.recycled}</div>
                          <div className="text-xs text-muted-foreground">Reciclado</div>
                        </div>
                        <Badge variant="outline">{company.classification}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classification" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Classificação NBR 10.004</CardTitle>
                <CardDescription>Detalhamento por classificação de resíduos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Classe I - Perigosos</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Solventes contaminados</span>
                        <span className="font-medium">847 ton</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Óleos usados</span>
                        <span className="font-medium">1.234 ton</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lodos com metais pesados</span>
                        <span className="font-medium">766 ton</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Classe II - Não Perigosos</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Papel e papelão</span>
                        <span className="font-medium">1.456 ton</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Plásticos diversos</span>
                        <span className="font-medium">987 ton</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Metais ferrosos</span>
                        <span className="font-medium">681 ton</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Empresas Ativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+3 este mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Conexões Ativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+12 este mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Economia Circular</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 2.4M</div>
                  <p className="text-xs text-muted-foreground">Valor gerado</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">CO₂ Evitado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2k ton</div>
                  <p className="text-xs text-muted-foreground">Este ano</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Indicadores de Performance</CardTitle>
                <CardDescription>KPIs principais do sistema EcoCiclo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Eficiência de Reciclagem</span>
                      <span className="font-medium">84.6%</span>
                    </div>
                    <Progress value={84.6} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Conectividade de Empresas</span>
                      <span className="font-medium">92.3%</span>
                    </div>
                    <Progress value={92.3} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Redução de Resíduos para Aterro</span>
                      <span className="font-medium">76.8%</span>
                    </div>
                    <Progress value={76.8} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <EcoFooter />
    </div>
  );
};

export default Reports;