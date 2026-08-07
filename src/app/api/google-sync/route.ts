import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = process.env.GOOGLE_BUSINESS_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { error: 'GOOGLE_BUSINESS_ACCESS_TOKEN não configurado na Vercel.' },
      { status: 400 }
    );
  }

  try {
    // 1. Busca automaticamente as contas do usuário para obter o Account ID correto
    const accountsRes = await fetch(
      'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const accountsData = await accountsRes.json();

    if (!accountsData.accounts || accountsData.accounts.length === 0) {
      return NextResponse.json(
        { error: 'Nenhuma conta do Google Meu Negócio encontrada para este token.', details: accountsData },
        { status: 404 }
      );
    }

    // Pega a primeira conta ativa encontrada
    const accountName = accountsData.accounts[0].name; // formato: accounts/123456789...

    // 2. Busca todas as unidades/locais pertencentes a essa conta
    const locationsRes = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title,storeCode,phoneNumbers,storefrontAddress,websiteUri`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const locationsData = await locationsRes.json();

    return NextResponse.json({
      success: true,
      accountFound: accountName,
      totalLocations: locationsData.locations?.length || 0,
      locations: locationsData.locations || [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao conectar à API do Google Meu Negócio.', details: String(error) },
      { status: 500 }
    );
  }
}
