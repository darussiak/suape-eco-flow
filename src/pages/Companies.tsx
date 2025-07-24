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

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [mapboxToken, setMapboxToken] = useState("");

  const companies = [
    {
      id: "1",
      name: "SUAPE Petroquímica",
      type: "Petroquímica",
      materials: ["Plásticos", "Químicos", "Resinas"],
      status: "online",
      contacts: 45,
      location: { lat: -8.3927, lng: -35.0061 },
      address: "Complexo Industrial de Suape, Ipojuca - PE",
      email: "contato@suapepetroquimica.com.br",
      phone: "(81) 3522-1000",
      description: "Líder em produção petroquímica com foco em sustentabilidade e economia circular."
    },
    {
      id: "2", 
      name: "Porto Digital Metal",
      type: "Metalúrgica",
      materials: ["Metais", "Sucata", "Ligas"],
      status: "online",
      contacts: 32,
      location: { lat: -8.3945, lng: -35.0080 },
      address: "Zona Industrial de Suape, Cabo de Santo Agostinho - PE",
      email: "contato@portodigitalmetal.com.br",
      phone: "(81) 3591-2000",
      description: "Especializada em reciclagem e processamento de materiais metálicos."
    },
    {
      id: "3",
      name: "EcoSuape Reciclagem",
      type: "Reciclagem",
      materials: ["Papel", "Vidro", "Metal", "Eletrônicos"],
      status: "offline",
      contacts: 28,
      location: { lat: -8.3910, lng: -35.0095 },
      address: "Distrito Industrial de Suape, Ipojuca - PE", 
      email: "contato@ecosuapereciclagem.com.br",
      phone: "(81) 3526-3000",
      description: "Centro de reciclagem multi-material com tecnologia avançada de separação."
    },
    {
      id: "4",
      name: "Industrial Têxtil PE",
      type: "Têxtil",
      materials: ["Fibras", "Tecidos", "Algodão"],
      status: "online",
      contacts: 19,
      location: { lat: -8.3888, lng: -35.0120 },
      address: "Complexo de Suape, Ipojuca - PE",
      email: "contato@industrialtextilpe.com.br", 
      phone: "(81) 3528-4000",
      description: "Produção sustentável de têxteis com aproveitamento de resíduos."
    },
    {
      id: "5",
      name: "Química Verde SUAPE",
      type: "Química",
      materials: ["Solventes", "Ácidos", "Bases"],
      status: "online",
      contacts: 37,
      location: { lat: -8.3962, lng: -35.0043 },
      address: "Polo Petroquímico de Suape, Ipojuca - PE",
      email: "contato@quimicaverde.com.br",
      phone: "(81) 3525-5000",
      description: "Desenvolvimento de produtos químicos eco-friendly para a indústria."
    },
    {
      id: "6",
      name: "Energia Renovável Nordeste",
      type: "Energia",
      materials: ["Biomassa", "Resíduos Orgânicos"],
      status: "online",
      contacts: 41,
      location: { lat: -8.3901, lng: -35.0150 },
      address: "Parque Eólico de Suape, Cabo de Santo Agostinho - PE",
      email: "contato@energiarenovavel.com.br",
      phone: "(81) 3530-6000", 
      description: "Geração de energia limpa a partir de resíduos industriais e biomassa."
    }
  ];

  const companyTypes = ["all", "Petroquímica", "Metalúrgica", "Reciclagem", "Têxtil", "Química", "Energia"];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.materials.some(material => material.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "all" || company.type === selectedType;
    return matchesSearch && matchesType;
  });

  const MapComponent = () => {
    if (!mapboxToken) {
      return (
        <div className="h-[600px] bg-muted/30 rounded-lg flex flex-col items-center justify-center">
          <MapPin className="w-16 h-16 text-muted-foreground mb-4" />
          <p className="text-lg font-medium text-foreground mb-2">Visualização do Mapa</p>
          <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
            Para visualizar o mapa interativo das empresas, insira seu token público do Mapbox
          </p>
          <div className="flex gap-2 w-full max-w-md">
            <Input
              placeholder="Token público do Mapbox"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <Button onClick={() => setMapboxToken(mapboxToken)}>
              Carregar
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Obtenha seu token em{" "}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              mapbox.com
            </a>
          </p>
        </div>
      );
    }

    return (
      <div className="h-[600px] bg-muted/30 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <Map className="w-16 h-16 text-primary mx-auto mb-4" />
          <p className="text-lg font-medium text-foreground">Mapa Interativo</p>
          <p className="text-sm text-muted-foreground">
            Visualização das {filteredCompanies.length} empresas no Complexo de Suape
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
                      <h4 className="text-sm font-medium mb-2">Materiais:</h4>
                      <div className="flex flex-wrap gap-1">
                        {company.materials.map((material) => (
                          <Badge key={material} variant="outline" className="text-xs">
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
                              <h4 className="text-sm font-medium mb-2">Materiais disponíveis:</h4>
                              <div className="flex flex-wrap gap-1">
                                {company.materials.map((material) => (
                                  <Badge key={material} variant="outline" className="text-xs">
                                    {material}
                                  </Badge>
                                ))}
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