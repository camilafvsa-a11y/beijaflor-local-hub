import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET não configurados.' },
      { status: 400 }
    );
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    const redirectUri = 'https://beijaflor-local-hub.vercel.app/api/google-sync';
    const scope = 'https://www.googleapis.com/auth/business.manage';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;

    return NextResponse.redirect(authUrl);
  }

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
      return NextResponse.json({ error: 'Falha ao obter token', details: tokenData }, { status: 400 });
    }

    // Busca direta na API de informações de locais usando a conta logada
    const locationsRes = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/me/locations?readMask=name,title,storeCode,phoneNumbers,storefrontAddress,websiteUri`,
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      }
    );

    const locationsData = await locationsRes.json();

    return NextResponse.json({
      success: true,
      data: locationsData,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao conectar com Google', details: String(error) }, { status: 500 });
  }
}
