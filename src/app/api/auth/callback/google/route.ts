import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Código de autorização não recebido.' }, { status: 400 });
  }

  // Redireciona o usuário de volta para o painel de avaliações após o aceite
  return NextResponse.redirect(new URL('/avaliacoes?auth=success', request.url));
}
