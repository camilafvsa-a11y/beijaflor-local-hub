'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BarChart3, Download, Calendar, ArrowUpRight } from 'lucide-react';

export default function RelatoriosPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" /> Relatórios Executivos
            </h1>
            <p className="text-slate-500 text-sm mt-1">Métricas de visualização, chamadas e cliques em rotas do Grupo Beija-flor.</p>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-800">
            <Download className="w-4 h-4" /> Exportar PDF
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs text-slate-400 font-medium">Visualizações no Maps</span>
            <div className="text-2xl font-bold text-slate-900 mt-1 flex items-center gap-2">
              142.800 <span className="text-xs font-semibold text-emerald-600 flex items-center"><ArrowUpRight className="w-3 h-3" /> +12%</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs text-slate-400 font-medium">Solicitações de Rota</span>
            <div className="text-2xl font-bold text-slate-900 mt-1 flex items-center gap-2">
              38.450 <span className="text-xs font-semibold text-emerald-600 flex items-center"><ArrowUpRight className="w-3 h-3" /> +8%</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs text-slate-400 font-medium">Chamadas Telefônicas</span>
            <div className="text-2xl font-bold text-slate-900 mt-1 flex items-center gap-2">
              4.120 <span className="text-xs font-semibold text-emerald-600 flex items-center"><ArrowUpRight className="w-3 h-3" /> +5%</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs text-slate-400 font-medium">Cliques no Site</span>
            <div className="text-2xl font-bold text-slate-900 mt-1 flex items-center gap-2">
              19.300 <span className="text-xs font-semibold text-emerald-600 flex items-center"><ArrowUpRight className="w-3 h-3" /> +15%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
