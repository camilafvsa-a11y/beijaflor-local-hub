import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = 'https://beijaflor-local-hub.vercel.app/api/auth/callback/google';
  const scope = 'https://www.googleapis.com/auth/business.manage';

  if (!clientId) {
    return NextResponse.json({ error: 'GOOGLE_CLIENT_ID não configurado na Vercel.' }, { status: 500 });
  }

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=code&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;

  return NextResponse.redirect(googleAuthUrl);
}
