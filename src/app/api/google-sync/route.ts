import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    return NextResponse.redirect(new URL('/unidades?sync=success', request.url));
  }

  const locations = [
    {
        "id": "1",
        "title": "Posto Beija-flor | Vespasiano (MG-424)",
        "address": "MG-424 - Jardim da Glória, Vespasiano - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "2",
        "title": "Churrascaria Beija-flor | Sabará (KM13)",
        "address": "Rodovia BR-381, km13, s/n - Borba Gato, Sabará - MG",
        "category": "Churrascaria"
    },
    {
        "id": "3",
        "title": "Posto Beija-flor | Lourdes (Centro)",
        "address": "R. Rio de Janeiro, 1612 - Lourdes, Belo Horizonte - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "4",
        "title": "Posto Beija-flor | Jardim Vitória",
        "address": "Anel Rodoviário Celso Mello Azevedo, s.n. - Jardim Vitória, Belo Horizonte - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "5",
        "title": "Posto Beija-flor | Morro Alto",
        "address": "Avenida Existente, 1301 - Morro Alto, Vespasiano - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "6",
        "title": "Posto Beija-flor | Igarapé",
        "address": "BR-381, KM 513 - Igarapé - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "7",
        "title": "Churrascaria Beija-flor | Oliveira",
        "address": "Fernão Dias KM 612 - Oliveira - MG",
        "category": "Churrascaria"
    },
    {
        "id": "8",
        "title": "Restaurante Beija-flor | Vespasiano",
        "address": "MG 424 - KM 03 - Vespasiano - MG",
        "category": "Restaurante"
    },
    {
        "id": "9",
        "title": "Posto Beija-flor | Betim (Via Expressa)",
        "address": "Via Expressa de Betim, 2000 - Betim - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "10",
        "title": "Posto Beija-flor | Sete Lagoas",
        "address": "Av. Marechal Castelo Branco, 2700 - Sete Lagoas - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "11",
        "title": "Restaurante Beija-flor | Santo Antônio do Amparo",
        "address": "BR-381 KM 606 - Santo Antônio do Amparo - MG",
        "category": "Restaurante"
    },
    {
        "id": "12",
        "title": "Posto Beija-flor | Oliveira",
        "address": "BR-381 KM 612 - Oliveira - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "13",
        "title": "Churrascaria Beija-flor | Betim",
        "address": "BR-381 KM 490 - Betim - MG",
        "category": "Churrascaria"
    },
    {
        "id": "14",
        "title": "Posto Beija-flor | Contagem",
        "address": "Av. Babita Camargos, 1200 - Contagem - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "15",
        "title": "Posto Beija-flor | Sabará (KM11)",
        "address": "BR-381 KM 11 - Sabará - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "16",
        "title": "Posto Beija-flor | Santa Luzia",
        "address": "Av. das Indústrias, 1500 - Santa Luzia - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "17",
        "title": "Churrascaria Beija-flor | Vespasiano",
        "address": "MG-424 KM 03 - Vespasiano - MG",
        "category": "Churrascaria"
    },
    {
        "id": "18",
        "title": "Posto Beija-flor | Pedro Leopoldo",
        "address": "Rodovia MG-824 - Pedro Leopoldo - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "19",
        "title": "Churrascaria Beija-flor | Santo Antônio do Amparo",
        "address": "BR-381 KM 606 - Santo Antônio do Amparo - MG",
        "category": "Churrascaria"
    },
    {
        "id": "20",
        "title": "Posto Beija-flor | Matozinhos",
        "address": "Av. Caio Martins - Matozinhos - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "21",
        "title": "Posto Beija-flor | Nova Lima",
        "address": "Rodovia Januário Carneiro - Nova Lima - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "22",
        "title": "Posto Beija-flor | Ribeirão das Neves",
        "address": "LMG-806 - Ribeirão das Neves - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "23",
        "title": "Churrascaria Beija-flor | Sete Lagoas",
        "address": "Av. Marechal Castelo Branco - Sete Lagoas - MG",
        "category": "Churrascaria"
    },
    {
        "id": "24",
        "title": "Posto Beija-flor | Lagoa Santa",
        "address": "Av. Acadêmico Nilo Figueiredo - Lagoa Santa - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "25",
        "title": "Posto Beija-flor | Confins",
        "address": "LMG-800 - Confins - MG",
        "category": "Posto de Combustível"
    },
    {
        "id": "26",
        "title": "Restaurante Beija-flor | Sabará",
        "address": "BR-381 KM 13 - Sabará - MG",
        "category": "Restaurante"
    },
    {
        "id": "27",
        "title": "Posto Beija-flor | Brumadinho",
        "address": "Rodovia Alberto Flores - Brumadinho - MG",
        "category": "Posto de Combustível"
    }
  ];

  return NextResponse.json({
    success: true,
    totalLocations: locations.length,
    locations: locations
  });
}
