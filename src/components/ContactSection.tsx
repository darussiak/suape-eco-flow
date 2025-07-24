import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Building2, Mail, Phone, Users } from "lucide-react";

const ContactSection = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [senderCompany, setSenderCompany] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const { toast } = useToast();

  const companies = [
    {
      id: "1",
      name: "SUAPE Petroquímica",
      type: "Petroquímica",
      materials: ["Plásticos", "Químicos"],
      status: "online",
      contacts: 45
    },
    {
      id: "2", 
      name: "Porto Digital Metal",
      type: "Metalúrgica",
      materials: ["Metais", "Sucata"],
      status: "online",
      contacts: 32
    },
    {
      id: "3",
      name: "EcoSuape Reciclagem",
      type: "Reciclagem",
      materials: ["Papel", "Vidro", "Metal"],
      status: "offline",
      contacts: 28
    },
    {
      id: "4",
      name: "Industrial Têxtil PE",
      type: "Têxtil",
      materials: ["Fibras", "Tecidos"],
      status: "online",
      contacts: 19
    }
  ];

  const handleSendMessage = () => {
    if (!selectedCompany || !message || !senderCompany || !senderEmail) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos para enviar a mensagem.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: `Sua mensagem foi enviada para ${companies.find(c => c.id === selectedCompany)?.name}`,
    });

    setMessage("");
    setSenderCompany("");
    setSenderEmail("");
    setSelectedCompany(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Conecte-se com Empresas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estabeleça conexões diretas com outras empresas do polo para trocar materiais e otimizar a economia circular
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Lista de Empresas */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Empresas Disponíveis
              </CardTitle>
              <CardDescription>
                Empresas conectadas na rede EcoCiclo Suape
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    selectedCompany === company.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedCompany(company.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">{company.name}</h3>
                    <Badge 
                      variant={company.status === 'online' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {company.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{company.type}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {company.materials.map((material) => (
                      <Badge key={material} variant="outline" className="text-xs">
                        {material}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    {company.contacts} conexões
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="/companies">
                  Ver Mais Empresas
                  <Building2 className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Formulário de Contato */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Enviar Mensagem
              </CardTitle>
              <CardDescription>
                {selectedCompany 
                  ? `Enviando mensagem para ${companies.find(c => c.id === selectedCompany)?.name}`
                  : "Selecione uma empresa para iniciar o contato"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Sua Empresa</label>
                  <Input
                    placeholder="Nome da sua empresa"
                    value={senderCompany}
                    onChange={(e) => setSenderCompany(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">E-mail</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Mensagem</label>
                  <Textarea
                    placeholder="Descreva sua proposta de parceria, materiais disponíveis ou necessidades..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 min-h-[120px]"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={handleSendMessage}
                  disabled={!selectedCompany}
                  className="flex-1"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" disabled={!selectedCompany}>
                      <Phone className="w-4 h-4 mr-2" />
                      Contato Direto
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Informações de Contato</DialogTitle>
                      <DialogDescription>
                        Dados de contato direto da empresa selecionada
                      </DialogDescription>
                    </DialogHeader>
                    {selectedCompany && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">
                            {companies.find(c => c.id === selectedCompany)?.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {companies.find(c => c.id === selectedCompany)?.type}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="text-sm">contato@{companies.find(c => c.id === selectedCompany)?.name.toLowerCase().replace(/\s+/g, '')}.com.br</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <span className="text-sm">(81) 9999-9999</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;