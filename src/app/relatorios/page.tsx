'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BarChart3, Plus, Download, Sparkles, PieChart, Star } from 'lucide-react';

export default function RelatoriosPage() {
  const [showModal, setShowModal] = useState(false);
  const [cliente, setCliente] = useState('');
  const [texto, setTexto] = useState('');
  const [npsResult, setNpsResult] = useState<number | null>(null);

  const handleAnaliseNPS = () => {
    if (!texto) return;
    // Algoritmo Simulado NPS com IA
    const lower = texto.toLowerCase();
    if (lower.includes('ótimo') || lower.includes('excelente') || lower.includes('adoro')) {
      setNpsResult(10);
    } else if (lower.includes('demorou') || lower.includes('ruim') || lower.includes('problema')) {
      setNpsResult(4);
    } else {
      setNpsResult(8);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              Relatórios Consolidados & NPS
            </h1>
            <p className="text-slate-500 text-sm mt-1">Consolidação de dados do Google Maps + Inserções Manuais com análise de NPS por IA.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#0f4c81] text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-blue-900 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" /> + Inserção Manual (NPS IA)
            </button>
          </div>
        </div>

        {/* Métricas de NPS Unificado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-400">NPS Geral Unificado</span>
            <div className="text-3xl font-bold text-emerald-600">+82</div>
            <p className="text-xs text-slate-500">Zona de Excelência (Google + Pesquisas Internas)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-400">Promotores vs Detretores</span>
            <div className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="text-emerald-600">86% Promotores</span> • <span className="text-red-500">4% Detretores</span>
            </div>
            <p className="text-xs text-slate-500">Calculado via Algoritmo de Sentimento IA</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-400">Origem das Avaliações</span>
            <div className="text-sm font-bold text-slate-800">
              82% Google Maps • 18% Inserção Manual
            </div>
            <p className="text-xs text-slate-500">Total de 1.420 interações registradas</p>
          </div>
        </div>

        {/* Modal de Inserção Manual com NPS IA */}
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-xl">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900 text-base">Inserção Manual de Pesquisa / Feedback</h3>
                <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Nome do Cliente</label>
                  <input
                    type="text"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Relato / Feedback do Cliente</label>
                  <textarea
                    rows={3}
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Cole ou digite o texto do cliente (ex: Atendimento ótimo no posto...)"
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  />
                </div>

                <button
                  onClick={handleAnaliseNPS}
                  className="w-full py-2.5 bg-[#0f4c81] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Analisar Sentimento e Atribuir NPS por IA
                </button>

                {npsResult !== null && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-1">
                    <span className="text-xs font-bold text-emerald-800">NPS Atribuído pela IA:</span>
                    <div className="text-2xl font-bold text-emerald-700">{npsResult} / 10</div>
                    <p className="text-[11px] text-emerald-600">Classificação: {npsResult >= 9 ? 'Promotor' : 'Neutro/Detretor'}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancelar</button>
                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-xl">Salvar no Relatório</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
