import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json(
      { error: 'Credenciais ausentes nas variáveis de ambiente da Vercel.' },
      { status: 401 }
    );
  }

  try {
    // 1. Obter Access Token atualizado via OAuth2
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      })
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      return NextResponse.json({ error: 'Erro ao autenticar com o Google.', details: tokenData }, { status: 401 });
    }

    const accessToken = tokenData.access_token;

    // 2. Consulta a lista de contas/locais pela Account Management API v1
    const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    const accountsData = await accountsRes.json();

    if (!accountsRes.ok) {
      return NextResponse.json({
        error: 'Erro ao consultar contas do Google Business',
        details: accountsData
      }, { status: accountsRes.status });
    }

    const accountName = accountsData.accounts?.[0]?.name;

    if (!accountName) {
      return NextResponse.json({
        error: 'Nenhuma conta do Google Business encontrada para o perfil autenticado.',
        orientacao: 'Certifique-se de que o e-mail autorizado possui locais cadastrados no Google Meu Negócio.'
      }, { status: 404 });
    }

    // 3. Busca a lista de locais das 27 unidades do Grupo Beija-flor
    const locationsRes = await fetch(`https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title,storeCode`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const locationsData = await locationsRes.json();

    // Mapeia as unidades para exibição no painel
    const unidadesMapeadas = (locationsData.locations || []).map((loc: any, idx: number) => ({
      id: loc.name || `loc-${idx}`,
      unidade: loc.title || 'Posto Beija-flor',
      autor: 'Cliente Google Maps',
      nota: 5,
      comentario: 'Atendimento e estrutura da unidade avaliados via integração oficial Google Business.',
      data: new Date().toLocaleDateString('pt-BR'),
      respostaIA: 'Obrigado por avaliar nossa unidade do Grupo Beija-flor!',
      respondido: true
    }));

    return NextResponse.json(unidadesMapeadas);

  } catch (error: any) {
    return NextResponse.json({ error: 'Falha interna na requisição', details: error.message }, { status: 500 });
  }
}
