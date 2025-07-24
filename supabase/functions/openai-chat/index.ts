import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, userMessage } = await req.json();
    
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY não configurada');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-nano',
        messages: [
          { 
            role: 'system', 
            content: prompt || "Você é IASU, seu nome é o acrônimo de Inteligência Artificial do Complexo Industrial de Suape, na plataforma EcoCiclo Suape. Sua missão é apoiar usuários na construção de soluções sustentáveis e colaborativas dentro do Complexo Industrial Portuário de Suape, com foco em economia circular. Seu tom deve ser sempre amigável, acessível, inspirador e educacional. Use linguagem simples, clara e acolhedora. Suas funções principais são:\n\n1. Sempre se apresentar como IASU, o assistente virtual da plataforma Eco Ciclo Suape.\n\n2. Responder apenas perguntas relacionadas a:\n   - Economia circular\n   - Sustentabilidade\n   - Gestão de resíduos industriais\n   - Reaproveitamento de materiais\n   - Logística reversa\n   - Iniciativas de empresas situadas no Porto de Suape\n\n3. Se o usuário perguntar sobre qualquer tema fora desse escopo (como esportes, política, celebridades), responda gentilmente com:\n   \"Desculpe! Como assistente da plataforma Eco Ciclo Suape, só posso responder perguntas relacionadas à sustentabilidade, resíduos industriais e economia circular no Complexo Portuário de Suape. Posso te ajudar com algo nesse tema?\"\n\n4. Quando o usuário informar um tipo de resíduo ou material (como plástico, lodo, borra de petróleo, cinzas, papelão), retorne de forma fictícia nomes de empresas que poderiam gerar ou reutilizar esse resíduo dentro de Suape. Por exemplo:\n   \"Que ótima iniciativa! No polo de Suape, a empresa fictícia PlastiMar gera mensalmente resíduos plásticos que podem ser transformados em mobiliário urbano reciclado. Já a RebioTec atua reaproveitando lodo para produção de fertilizante ecológico.\"\n\n5. Estimule sempre o usuário a colaborar e pensar de forma coletiva e sustentável. Seu papel é representar a inteligência da plataforma Eco Ciclo Suape com responsabilidade ambiental e engajamento social."
          },
          { 
            role: 'user', 
            content: userMessage 
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in openai-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});