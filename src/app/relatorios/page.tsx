'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Sparkles, HelpCircle } from 'lucide-react';

export default function RelatoriosPage() {
  const [showModal, setShowModal] = useState(false);
  const [cliente, setCliente] = useState('');
  const [texto, setTexto] = useState('');
  const [npsResult, setNpsResult] = useState<number | null>(null);

  const handleAnaliseNPS = () => {
    if (!texto) return;
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
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-sm hover:bg-slate-50 transition-all">
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" /> Voltar ao Dashboard
          </Link>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Relatórios & NPS</span>
        </div>

        <div className="bg-gradient-to-r from-[#0f4c81] via-slate-900 to-slate-900 text-white p-8 rounded-3xl shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="bg-white/10 backdrop-blur-sm text-emerald-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
              Métricas Consolidadas
            </span>
            <h1 className="text-2xl font-black tracking-tight mt-2">Relatório Executivo de NPS</h1>
            <p className="text-slate-300 text-xs mt-1.5 max-w-xl leading-relaxed">
              Consolidação do Net Promoter Score unificando avaliações do Google Maps e pesquisas manuais de satisfação.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-[#0f4c81] px-5 py-3 rounded-2xl text-xs font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" /> + Inserir Avaliação Externa
          </button>
        </div>

        <div className="bg-blue-50/60 border border-blue-200/80 p-5 rounded-2xl space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0f4c81] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" /> Guia do Net Promoter Score (NPS)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            O **NPS** varia de **-100 a +100**. Notas **9-10** são **Promotores** (divulgam a marca), **7-8** são **Neutros**, e **0-6** são **Detretores**.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">NPS Geral da Rede</span>
            <div className="text-3xl font-black text-emerald-600">+82</div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Zona de Excelência</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recebidas no Mês</span>
            <div className="text-2xl font-black text-slate-900">142</div>
            <span className="text-[10px] text-slate-400 font-medium">Todas as 27 contas</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Acumulado Histórico</span>
            <div className="text-2xl font-black text-slate-900">6.840</div>
            <span className="text-[10px] text-slate-400 font-medium">Base total tratada</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Taxa de Resposta IA</span>
            <div className="text-2xl font-black text-[#0f4c81]">98.4%</div>
            <span className="text-[10px] text-emerald-600 font-bold">Agilidade operacional</span>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-xl">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">Cadastrar Avaliação Externa (WhatsApp/Presencial)</h3>
                <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Nome do Cliente</label>
                  <input
                    type="text"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3 py-2 border rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#0f4c81]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Relato / Feedback do Cliente</label>
                  <textarea
                    rows={3}
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Cole ou digite o texto recebido..."
                    className="w-full px-3 py-2 border rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#0f4c81]"
                  />
                </div>

                <button
                  onClick={handleAnaliseNPS}
                  className="w-full py-3 bg-[#0f4c81] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" /> Classificar Sentimento & NPS via IA
                </button>

                {npsResult !== null && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-1">
                    <span className="text-xs font-bold text-emerald-800 block uppercase">NPS Classificado pela IA:</span>
                    <div className="text-3xl font-black text-emerald-700">{npsResult} / 10</div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-500">Cancelar</button>
                <button onClick={() => setShowModal(false)} className="px-5 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-sm">Salvar Registro</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
