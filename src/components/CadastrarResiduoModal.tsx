import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Recycle } from "lucide-react";

interface CadastrarResiduoModalProps {
  children: React.ReactNode;
}

const CadastrarResiduoModal = ({ children }: CadastrarResiduoModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nomeResiduo: "",
    tipo: "",
    quantidade: "",
    unidade: "",
    empresa: "",
    descricao: "",
    contato: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular cadastro
    console.log("Dados do resíduo:", formData);
    
    toast({
      title: "Resíduo cadastrado com sucesso!",
      description: `${formData.nomeResiduo} foi adicionado ao sistema.`,
    });
    
    // Reset form and close modal
    setFormData({
      nomeResiduo: "",
      tipo: "",
      quantidade: "",
      unidade: "",
      empresa: "",
      descricao: "",
      contato: "",
    });
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Recycle className="w-5 h-5 text-eco-green" />
            Cadastrar Resíduo
          </DialogTitle>
          <DialogDescription>
            Registre um novo resíduo no sistema para facilitar conexões de economia circular.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nomeResiduo">Nome do Resíduo *</Label>
              <Input
                id="nomeResiduo"
                value={formData.nomeResiduo}
                onChange={(e) => handleInputChange("nomeResiduo", e.target.value)}
                placeholder="Ex: Papel, Plástico, Metal..."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo *</Label>
              <Select value={formData.tipo} onValueChange={(value) => handleInputChange("tipo", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="organico">Orgânico</SelectItem>
                  <SelectItem value="reciclavel">Reciclável</SelectItem>
                  <SelectItem value="perigoso">Perigoso</SelectItem>
                  <SelectItem value="eletronico">Eletrônico</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantidade">Quantidade *</Label>
              <Input
                id="quantidade"
                type="number"
                value={formData.quantidade}
                onChange={(e) => handleInputChange("quantidade", e.target.value)}
                placeholder="0"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unidade">Unidade *</Label>
              <Select value={formData.unidade} onValueChange={(value) => handleInputChange("unidade", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                  <SelectItem value="ton">Toneladas (ton)</SelectItem>
                  <SelectItem value="m3">Metros cúbicos (m³)</SelectItem>
                  <SelectItem value="litros">Litros (L)</SelectItem>
                  <SelectItem value="unidades">Unidades</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa *</Label>
            <Input
              id="empresa"
              value={formData.empresa}
              onChange={(e) => handleInputChange("empresa", e.target.value)}
              placeholder="Nome da empresa geradora"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contato">Contato</Label>
            <Input
              id="contato"
              value={formData.contato}
              onChange={(e) => handleInputChange("contato", e.target.value)}
              placeholder="Email ou telefone para contato"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => handleInputChange("descricao", e.target.value)}
              placeholder="Informações adicionais sobre o resíduo..."
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-eco-green to-eco-blue">
              Cadastrar Resíduo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CadastrarResiduoModal;