import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json(
      { error: 'Credenciais ausentes nas variáveis da Vercel.' },
      { status: 401 }
    );
  }

  try {
    // 1. Gera o Access Token renovado via OAuth2
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
      return NextResponse.json({ error: 'Erro ao obter token do Google', details: tokenData }, { status: 401 });
    }

    const accessToken = tokenData.access_token;

    // 2. Tenta obter as contas do Google Business Profile
    let accountName = '';
    const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const accountsData = await accountsRes.json();

    if (accountsData.accounts && accountsData.accounts.length > 0) {
      // Pega a primeira conta encontrada (ou de grupo de empresas)
      accountName = accountsData.accounts[0].name;
    } else {
      // Fallback para conta padrão pessoal
      accountName = 'accounts/me';
    }

    // 3. Consulta as avaliações no endpoint v4 do Google
    const reviewsRes = await fetch(`https://mybusiness.googleapis.com/v4/${accountName}/locations/-/reviews`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const reviewsData = await reviewsRes.json();

    // Trata erro de retorno do Google se ainda não houver locais vinculados
    if (reviewsData.error) {
      return NextResponse.json({
        warning: 'Google API respondeu com aviso de estrutura de conta.',
        googleError: reviewsData.error,
        orientacao: 'Sua conta precisa estar vinculada como Proprietária no Google My Business Manager.'
      }, { status: 200 });
    }

    const mappedReviews = (reviewsData.reviews || []).map((r: any) => ({
      id: r.reviewId || r.name,
      unidade: r.locationName || 'Posto Beija-flor',
      autor: r.reviewer?.displayName || 'Cliente Google',
      nota: r.starRating === 'FIVE' ? 5 : r.starRating === 'FOUR' ? 4 : r.starRating === 'THREE' ? 3 : r.starRating === 'TWO' ? 2 : 1,
      comentario: r.comment || 'Avaliação sem comentário por texto.',
      data: new Date(r.createTime).toLocaleDateString('pt-BR'),
      respostaIA: r.reviewReply?.comment || 'Resposta gerada automaticamente aguardando aprovação.',
      respondido: !!r.reviewReply
    }));

    return NextResponse.json(mappedReviews);
  } catch (error: any) {
    return NextResponse.json({ error: 'Falha na comunicação com o Google', details: error.message }, { status: 500 });
  }
}
