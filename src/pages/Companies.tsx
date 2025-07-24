import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EcoHeader from "@/components/EcoHeader";
import EcoFooter from "@/components/EcoFooter";
import { ArrowLeft, Building2, Map, List, MapPin, Users, Mail, Phone, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import mockCompaniesData from "@/mockData/mock_companies.json";

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  // Transform mock data to match component structure
  const companies = mockCompaniesData.map((company: any) => ({
    id: company.id.toString(),
    name: company.company_name,
    type: company.polo,
    materials: company.residuos_gerados || [],
    status: "online",
    contacts: Math.floor(Math.random() * 50) + 10, // Random number between 10-60
    location: { lat: company.latitude, lng: company.longitude },
    address: company.endereco,
    email: company.email_contato,
    phone: company.telefone_contato,
    description: company.descricao_empresa,
    municipality: company.municipio,
    area: company.area_ha,
    perimeter: company.perimeter_m
  }));

  // Extract unique company types from the data
  const companyTypes = ["all", ...Array.from(new Set(companies.map(company => company.type)))];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.materials.some((material: string) => material.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "all" || company.type === selectedType;
    return matchesSearch && matchesType;
  });

  const MapComponent = () => {
    return (
      <div className="h-[600px] bg-muted/30 rounded-lg relative">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '8px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDi5jNQFrt5JARwEV9PnLdCJ7t8Ag4Ndic&center=-8.3564,-34.9392&zoom=13&maptype=satellite`}
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Map className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Complexo de Suape</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {filteredCompanies.length} empresas visualizadas
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <EcoHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/#contact">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Empresas Conectadas</h1>
              <p className="text-muted-foreground">Rede completa de parceiros da economia circular no Complexo de Suape</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar empresas ou materiais..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  {companyTypes.map(type => (
                    <option key={type} value={type}>
                      {type === "all" ? "Todos os Tipos" : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="list" className="flex items-center gap-2">
              <List className="w-4 h-4" />
              Lista
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              Mapa
            </TabsTrigger>
          </TabsList>

          {/* List View */}
          <TabsContent value="list" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <Card key={company.id} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <CardDescription>{company.type}</CardDescription>
                      </div>
                      <Badge 
                        variant={company.status === 'online' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {company.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{company.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Resíduos Gerados:</h4>
                      <div className="flex flex-wrap gap-1">
                        {company.materials.map((material: string, index: number) => (
                          <Badge key={`${material}-${index}`} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {company.contacts} conexões
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {company.address.split(',')[0]}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Building2 className="w-4 h-4 mr-1" />
                            Ver Detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{company.name}</DialogTitle>
                            <DialogDescription>{company.type}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-sm">{company.description}</p>
                            
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-sm">{company.address}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="text-sm">{company.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-sm">{company.phone}</span>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2">Resíduos gerados:</h4>
                              <div className="flex flex-wrap gap-1">
                                {company.materials.map((material: string, index: number) => (
                                  <Badge key={`${material}-${index}`} variant="outline" className="text-xs">
                                    {material}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                              <div>
                                <span className="font-medium">Área:</span> {company.area} ha
                              </div>
                              <div>
                                <span className="font-medium">Município:</span> {company.municipality}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button size="sm" className="flex-1">
                        <Mail className="w-4 h-4 mr-1" />
                        Contatar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredCompanies.length === 0 && (
              <div className="text-center py-12">
                <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Nenhuma empresa encontrada</h3>
                <p className="text-muted-foreground">Tente ajustar os filtros de busca</p>
              </div>
            )}
          </TabsContent>

          {/* Map View */}
          <TabsContent value="map" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="w-5 h-5 text-primary" />
                  Mapa das Empresas
                </CardTitle>
                <CardDescription>
                  Localização das {filteredCompanies.length} empresas no Complexo Industrial de Suape
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MapComponent />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <EcoFooter />
    </div>
  );
};

export default Companies;