'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, TrendingUp, TrendingDown, Star, AlertTriangle } from 'lucide-react';

const contasAnalise = [
  { id: 1, unidade: 'Posto Beija-flor | Vespasiano (MG-424)', notaAnterior: 4.6, notaAtual: 4.8, status: 'subiu', avaliacoes: 312 },
  { id: 2, unidade: 'Churrascaria Beija-flor | Sabará (KM13)', notaAnterior: 4.8, notaAtual: 4.9, status: 'subiu', avaliacoes: 840 },
  { id: 3, unidade: 'Posto Beija-flor | Morro Alto', notaAnterior: 4.7, notaAtual: 4.5, status: 'caiu', avaliacoes: 154, alerta: 'Reclamação de fila no caixa' },
  { id: 4, unidade: 'Posto Beija-flor | Lourdes (Centro)', notaAnterior: 4.7, notaAtual: 4.7, status: 'estavel', avaliacoes: 420 },
  { id: 5, unidade: 'Posto Beija-flor | San Genaro', notaAnterior: 4.6, notaAtual: 4.4, status: 'caiu', avaliacoes: 130, alerta: 'Atraso na calibragem de pneu' },
];

export default function InteligenciaPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-xs">
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" /> Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" /> Inteligência de Desempenho Conta por Conta
          </h1>
          <p className="text-slate-500 text-xs mt-1">Monitoramento individual de variação de notas nas 27 unidades do Grupo Beija-flor.</p>
        </div>

        {/* Alerta de Contas em Queda */}
        <div className="bg-red-50/60 border border-red-200/80 p-5 rounded-2xl space-y-2">
          <h3 className="text-sm font-bold text-red-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600" /> Unidades que Exigem Atenção (Queda de Nota no Mês)
          </h3>
          <p className="text-xs text-red-700 leading-relaxed">
            Identificamos queda pontual de desempenho em 2 unidades neste mês. Recomenda-se verificar as tratativas pendentes.
          </p>
        </div>

        {/* Tabela de Inteligência por Conta */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200/80">
              <tr>
                <th className="p-4">Unidade</th>
                <th className="p-4">Mês Anterior</th>
                <th className="p-4">Mês Atual</th>
                <th className="p-4">Variação</th>
                <th className="p-4">Total Avaliações</th>
                <th className="p-4">Diagnóstico IA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {contasAnalise.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">{c.unidade}</td>
                  <td className="p-4 text-slate-500 font-medium">{c.notaAnterior} ★</td>
                  <td className="p-4 font-bold text-slate-900">{c.notaAtual} ★</td>
                  <td className="p-4">
                    {c.status === 'subiu' && (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3" /> +0.2
                      </span>
                    )}
                    {c.status === 'caiu' && (
                      <span className="inline-flex items-center gap-1 text-red-700 font-bold bg-red-50 px-2 py-0.5 rounded-md">
                        <TrendingDown className="w-3 h-3" /> -0.2
                      </span>
                    )}
                    {c.status === 'estavel' && (
                      <span className="text-slate-400 font-medium">Estável</span>
                    )}
                  </td>
                  <td className="p-4 font-medium text-slate-700">{c.avaliacoes} comentários</td>
                  <td className="p-4">
                    {c.alerta ? (
                      <span className="text-red-600 font-semibold text-[11px]">{c.alerta}</span>
                    ) : (
                      <span className="text-emerald-600 font-semibold text-[11px]">Operação Estável</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
