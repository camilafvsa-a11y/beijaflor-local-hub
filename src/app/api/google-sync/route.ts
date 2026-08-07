import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = process.env.GOOGLE_BUSINESS_ACCESS_TOKEN;
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !accountId) {
    return NextResponse.json(
      { error: 'Credenciais do Google não configuradas nas variáveis da Vercel' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/${accountId}/locations`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await res.json();
    return NextResponse.json({ success: true, locations: data.locations });
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao buscar dados do Google' }, { status: 500 });
  }
}
