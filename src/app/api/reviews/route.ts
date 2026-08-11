import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  // Se o token ainda não estiver preenchido nas variáveis da Vercel
  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json(
      { error: 'Credenciais do Google ausentes nas variáveis de ambiente da Vercel (GOOGLE_REFRESH_TOKEN).' },
      { status: 401 }
    );
  }

  try {
    // 1. Gera o Access Token em tempo real usando o Refresh Token
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
      console.error('Erro ao renovar token do Google:', tokenData);
      return NextResponse.json({ error: 'Falha na autenticação OAuth2 com o Google.', details: tokenData }, { status: 401 });
    }

    const accessToken = tokenData.access_token;

    // 2. Busca a conta vinculada às 27 unidades do Grupo Beija-flor
    const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const accountsData = await accountsRes.json();
    const accountName = accountsData.accounts?.[0]?.name;

    if (!accountName) {
      return NextResponse.json({ error: 'Nenhuma conta do Google Business identificada para este usuário.' }, { status: 404 });
    }

    // 3. Busca os feedbacks reais no endpoint v4 do Google Business
    const reviewsRes = await fetch(`https://mybusiness.googleapis.com/v4/${accountName}/locations/-/reviews`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const reviewsData = await reviewsRes.json();

    // Mapeia os dados do Google para o formato exibido no painel
    const mappedReviews = (reviewsData.reviews || []).map((r: any) => ({
      id: r.reviewId || r.name,
      unidade: r.locationName || 'Unidade Grupo Beija-flor',
      autor: r.reviewer?.displayName || 'Cliente Google',
      nota: r.starRating === 'FIVE' ? 5 : r.starRating === 'FOUR' ? 4 : r.starRating === 'THREE' ? 3 : r.starRating === 'TWO' ? 2 : 1,
      comentario: r.comment || 'Avaliação sem comentário de texto.',
      data: new Date(r.createTime).toLocaleDateString('pt-BR'),
      respostaIA: r.reviewReply?.comment || 'Resposta pendente de geração via IA.',
      respondido: !!r.reviewReply
    }));

    return NextResponse.json(mappedReviews);
  } catch (error: any) {
    console.error('Erro de conexão com o Google:', error);
    return NextResponse.json({ error: 'Erro ao conectar aos servidores do Google', details: error.message }, { status: 500 });
  }
}
