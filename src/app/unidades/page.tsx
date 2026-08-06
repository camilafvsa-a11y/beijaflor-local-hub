'use client';


import React from 'react';

export default function UnidadesPage() {
  const units = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Unidade Beija-flor ${i + 1}`,
    code: `POSTO-${100 + i + 1}`,
    status: i % 5 === 0 ? 'Atenção' : 'Operando Normalmente',
    rating: (4.2 + (i % 8) * 0.1).toFixed(1),
    pendingTreatments: i % 3,
    brand: i % 2 === 0 ? 'Petronas' : 'Bandeira Branca'
  }));

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#0F4C81]">Painel das 24 Unidades</h1>
            <p className="text-slate-600 text-sm">Grupo Beija-flor — Visão Geral Operacional</p>
          </div>
          <a href="/" className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            ⬅ Voltar ao início
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {units.map((unit) => (
            <div key={unit.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#0F4C81] bg-blue-50 px-2 py-0.5 rounded">
                    {unit.code}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    unit.status === 'Atenção' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {unit.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-base">{unit.name}</h3>
                <p className="text-xs text-slate-400 mb-4">{unit.brand}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>⭐ {unit.rating}</span>
                <span className="font-semibold text-slate-500">{unit.pendingTreatments} tratativas</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
