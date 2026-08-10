'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, TrendingUp, Target, Star, BarChart2 } from 'lucide-react';

export default function InteligenciaPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" /> Inteligência de Reputação & Evolução
          </h1>
          <p className="text-slate-500 text-sm mt-1">Evolução temporal das notas médias e consolidação das 27 contas do Grupo Beija-flor.</p>
        </div>

        {/* Evolução da Nota Média */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" /> Evolução da Nota Média da Rede (Últimos 6 Meses)
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Evolução: 4.5 ★ ➔ 4.8 ★
            </span>
          </div>

          <div className="grid grid-cols-6 gap-2 pt-4">
            {[
              { mes: 'Março', nota: '4.5' },
              { mes: 'Abril', nota: '4.6' },
              { mes: 'Maio', nota: '4.6' },
              { mes: 'Junho', nota: '4.7' },
              { mes: 'Julho', nota: '4.7' },
              { mes: 'Agosto', nota: '4.8' },
            ].map((m) => (
              <div key={m.mes} className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-center space-y-1">
                <span className="text-[11px] font-semibold text-slate-400">{m.mes}</span>
                <div className="text-lg font-bold text-slate-800 flex items-center justify-center gap-1">
                  {m.nota} <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#0f4c81]" /> Top 3 Unidades Melhor Avaliadas
            </h3>
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center text-xs p-2.5 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700">1. Churrascaria Beija-flor | Sabará (KM13)</span>
                <span className="font-bold text-amber-600 flex items-center gap-1">4.9 ★</span>
              </div>
              <div className="flex justify-between items-center text-xs p-2.5 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700">2. Posto Beija-flor | Lourdes (Centro)</span>
                <span className="font-bold text-amber-600 flex items-center gap-1">4.8 ★</span>
              </div>
              <div className="flex justify-between items-center text-xs p-2.5 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700">3. Posto Beija-flor | Igarapé</span>
                <span className="font-bold text-amber-600 flex items-center gap-1">4.8 ★</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-600" /> Temas Mais Citados nos Elogios
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-lg border border-emerald-200">Pão com Linguiça (420 citções)</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-200">Beija-flor Pontua (310 citações)</span>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-lg border border-amber-200">Atendimento Pista (280 citações)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200">Chuveiro Limpo (190 citações)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
