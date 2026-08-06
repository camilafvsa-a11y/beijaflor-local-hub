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

        if (!url || !key) {
          setLoading(false);
          return;
        }

        const res = await fetch(`${url}/rest/v1/units?select=*&order=code.asc`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUnits(data);
        }
      } catch (err) {
        console.error('Erro ao buscar unidades:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchUnits();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#0F4C81]">Painel das 24 Unidades</h1>
            <p className="text-slate-600 text-sm">Grupo Beija-flor — Integração com Supabase</p>
          </div>
          <a href="/" className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            ⬅ Voltar ao início
          </a>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500 font-semibold">
            Carregando unidades...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {units.map((unit) => (
              <div key={unit.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#0F4C81] bg-blue-50 px-2 py-0.5 rounded">
                      {unit.code || 'UBF'}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      unit.status === 'Atenção' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
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
      </div>
    </div>
  );
}
