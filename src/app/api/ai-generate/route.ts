import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { cliente, mensagem, instrucao, unidade } = await req.json();

    // Lógica de adaptação de resposta baseada no comando (instrucao) recebido
    let respostaGerada = '';

    if (instrucao && instrucao.toLowerCase().includes('formal')) {
      respostaGerada = `Prezado(a) ${cliente}, agradecemos pelo contato referente à unidade ${unidade}. Esclarecemos que sua manifestação ("${mensagem}") foi encaminhada à nossa diretoria para análise cabível. Permanece à disposição a gerência do Grupo Beija-flor.`;
    } else if (instrucao && instrucao.toLowerCase().includes('desculpa')) {
      respostaGerada = `Olá ${cliente}! Pedimos sinceras desculpas pelo inconveniente relatado em ${unidade}. Já alinhamos os processos com a equipe local para evitar reincidências. Queremos lhe oferecer uma experiência impecável na sua próxima visita!`;
    } else if (instrucao && instrucao.toLowerCase().includes('pontua')) {
      respostaGerada = `Olá ${cliente}! Muito obrigado pela avaliação sobre o ${unidade}. Lembre-se de acumular e resgatar seus pontos no aplicativo Beija-flor Pontua em todas as suas paradas conosco!`;
    } else {
      // Prompt padrão ajustado com a instrução do usuário
      respostaGerada = `Olá ${cliente}! Agradecemos o registro em relação ao ${unidade}. ${
        instrucao ? `[Ajuste solicitado: ${instrucao}] ` : ''
      }Analisamos seu relato ("${mensagem}") e estamos trabalhando para aprimorar continuamente nosso atendimento no Grupo Beija-flor.`;
    }

    return NextResponse.json({ resposta: respostaGerada });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao gerar resposta da IA' }, { status: 500 });
  }
}
