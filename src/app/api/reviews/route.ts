import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json([
      {
        id: "rev-real-1",
        unidade: "Churrascaria Beija-flor | Sabará (KM13)",
        autor: "Cliente Google Maps",
        nota: 5,
        comentario: "Excelente parada na BR-381, atendimento rápido e comida muito boa.",
        data: "10/08/2026",
        respostaIA: "Agradecemos o seu feedback! Trabalhamos para oferecer a melhor experiência na BR-381. Volte sempre!",
        respondido: false
      }
    ]);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar no Google" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ status: "published", id: body.reviewId });
}
