'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, TrendingUp, Target, Zap } from 'lucide-react';

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
            <Lightbulb className="w-6 h-6 text-amber-500" /> Painel de Inteligência de Mercado
          </h1>
          <p className="text-slate-500 text-sm mt-1">Insights automáticos baseados nas buscas locais e avaliações do Google.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800">Pico de Buscas em Sabará</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Buscas por "Restaurante na BR-381" subiram 34% nos finais de semana. Recomendado impulsionar fotos do restaurante da unidade Sabará.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800">Fidelidade Beija-flor Pontua</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              72% das avaliações positivas no Posto Lourdes mencionam o uso do app Beija-flor Pontua para acúmulo de pontos no abastecimento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800">Otimização SEO Local</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Todas as 27 unidades do grupo possuem perfis otimizados com endereço, horários e categorias no Google Meu Negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
