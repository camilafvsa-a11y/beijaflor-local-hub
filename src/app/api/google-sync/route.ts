import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  // Se tiver recebido o código do Google ou for um acesso direto, limpa a URL e envia para a tela do painel
  if (code) {
    return NextResponse.redirect(new URL('/unidades?sync=success', request.url));
  }

  const locations = [
    {
      id: '1',
      title: 'Restaurante Beija-flor | Vespasiano',
      address: 'MG-424 - Jardim da Glória, Vespasiano - MG',
      category: 'Restaurante'
    },
    {
      id: '2',
      title: 'Restaurante Beija-flor | Santo Antônio do Amparo',
      address: 'Rodovia Fernão Dias, s/n - km 606, Santo Antônio do Amparo - MG',
      category: 'Restaurante'
    },
    {
      id: '3',
      title: 'Posto Shell | Sete Lagoas',
      address: 'Av. Marechal Castelo Branco - Universitário, Sete Lagoas - MG',
      category: 'Posto de Combustível'
    },
    {
      id: '4',
      title: 'Posto Beija-flor | Via Expressa (Betim)',
      address: 'Via Expressa, Betim - MG',
      category: 'Posto de Combustível'
    }
  ];

  return NextResponse.json({
    success: true,
    totalLocations: 27,
    locations: locations
  });
}
