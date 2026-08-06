'use client';

import React, { useEffect, useState } from 'react';

interface Unit {
  id: string;
  code?: string;
  status?: string;
  name: string;
  brand?: string;
  rating?: number;
  pending_treatments?: number;
}

export default function UnidadesPage() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUnits() {
      try {
        setLoading(true);
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (url && key) {
          const res = await fetch(`${url}/rest/v1/units?select=*&order=code.asc`, {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
            },
          });

          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) {
              setUnits(data);
            }
          }
        }
      } catch (err) {
        console.error('Erro ao buscar do Supabase:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchUnits();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      {/* Menu Lateral (Sidebar) */}
      <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col justify-between hidden md:flex shrink-0">
        <div>
          {/* Logo / Header */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-[#0F4C81]">Beija-flor</h1>
            <p className="text-xs text-slate-500">Local Hub — Gestão de Rede</p>
          </div>

          {/* Campo de Busca */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar unidade..."
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Links de Navegação */}
          <nav className="space-y-1">
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>🏠</span>
              <span>Início</span>
            </a>
            <a
              href="/unidades"
              className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-white bg-[#0F4C81] rounded-lg"
            >
              <span>🏢</span>
              <span>Unidades</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>📋</span>
              <span>Tratativas</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>⭐</span>
              <span>Avaliações</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>🛡️</span>
              <span>Aprovações</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>💡</span>
              <span>Inteligência</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>📊</span>
              <span>Relatórios</span>
            </a>
          </nav>
        </div>

        {/* Perfil do Usuário */}
        <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0F4C81] flex items-center justify-center font-bold text-xs">
            PO
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Product Owner</p>
            <p className="text-[10px] text-slate-500">Administrador</p>
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-6 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-4 py-2 rounded-lg font-medium">
          ⚠️ AMBIENTE DE TESTE — PRODUCT OWNER EXCLUSIVE (HOMOLOGAÇÃO FASE 0)
        </div>

        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#0F4C81]">Painel das Unidades</h1>
            <p className="text-slate-600 text-sm">Grupo Beija-flor — Integração direta via Supabase</p>
          </div>
          <a
            href="/"
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <span>⬅</span> Voltar ao início
          </a>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500 font-semibold">
            Conectando ao Supabase e carregando unidades...
          </div>
        ) : units.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
            <p className="text-slate-600 font-medium">Nenhuma unidade encontrada na tabela <code className="bg-slate-100 px-2 py-0.5 rounded text-xs">units</code> do Supabase.</p>
            <p className="text-xs text-slate-400 mt-2">Certifique-se de que a tabela possui dados e que as variáveis de ambiente <code className="bg-slate-100 px-1">NEXT_PUBLIC_SUPABASE_URL</code> e <code className="bg-slate-100 px-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> estão configuradas na Vercel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#0F4C81] bg-blue-50 px-2 py-0.5 rounded">
                      {unit.code || 'UBF'}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        unit.status === 'Atenção'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {unit.status || 'Operando Normalmente'}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{unit.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{unit.brand || 'Grupo Beija-flor'}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span>⭐ {unit.rating || '5.0'}</span>
                  <span className="font-semibold text-slate-500">
                    {unit.pending_treatments ?? 0} tratativas
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
