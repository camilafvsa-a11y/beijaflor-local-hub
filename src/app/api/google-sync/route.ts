import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET não configurados na Vercel.' },
      { status: 400 }
    );
  }

  // Verifica se o Google enviou o código de autorização de volta
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  // PASSO 1: Se ainda não tem o código, redireciona o usuário para fazer login no Google
  if (!code) {
    const redirectUri = 'https://beijaflor-local-hub.vercel.app/api/google-sync';
    const scope = 'https://www.googleapis.com/auth/business.manage';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;

    return NextResponse.redirect(authUrl);
  }

  // PASSO 2: Se recebeu o código do Google, troca pelo Token de Acesso e busca os dados
  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: 'https://beijaflor-local-hub.vercel.app/api/google-sync',
        grant_type: 'authorization_code',
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return NextResponse.json({ error: 'Falha ao obter token do Google', details: tokenData }, { status: 400 });
    }

    // PASSO 3: Busca as contas do Google Meu Negócio
    const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const accountsData = await accountsRes.json();

    if (!accountsData.accounts || accountsData.accounts.length === 0) {
      return NextResponse.json({ error: 'Nenhuma conta encontrada', details: accountsData });
    }

    const accountName = accountsData.accounts[0].name;

    // PASSO 4: Busca as unidades/locais reais do Grupo Beija-flor
    const locationsRes = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title,storeCode,phoneNumbers,storefrontAddress,websiteUri`,
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      }
    );
    const locationsData = await locationsRes.json();

    return NextResponse.json({
      success: true,
      account: accountName,
      totalLocations: locationsData.locations?.length || 0,
      locations: locationsData.locations || [],
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro de comunicação com o Google', details: String(error) }, { status: 500 });
  }
}
