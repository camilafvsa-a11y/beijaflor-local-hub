import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export async function GET() {
  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/tratativas?select=*&order=created_at.desc`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      return NextResponse.json([]);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json([]);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Garante que o ID e datas sejam gerados automaticamente se ausentes
    const payload = {
      codigo: body.codigo || `TR-${Math.floor(100 + Math.random() * 900)}`,
      origem: body.origem,
      unidade: body.unidade,
      cliente: body.cliente,
      mensagem: body.mensagem,
      resposta_ia: body.resposta_ia,
      status: body.status || 'Pendente'
    };

    const res = await fetch(`${supabaseUrl}/rest/v1/tratativas`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Erro na resposta do Supabase:', errText);
      return NextResponse.json({ error: errText }, { status: res.status });
    }

    return NextResponse.json({ success: true, item: payload });
  } catch (err) {
    return NextResponse.json({ error: 'Erro ao salvar tratativa' }, { status: 500 });
  }
}
