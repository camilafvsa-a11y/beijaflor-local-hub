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
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-xs">
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" /> Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Relatórios Executivos & Análise NPS</h1>
            <p className="text-slate-500 text-xs mt-1">Consolidação do volume mensal e pesquisas externas do Grupo Beija-flor.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0f4c81] text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-blue-900 transition-all flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-4 h-4" /> + Cadastrar Avaliação Externa (NPS IA)
          </button>
        </div>

        {/* O que é NPS - Card Educativo Minimalista */}
        <div className="bg-blue-50/50 border border-blue-200/60 p-5 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0f4c81]">
            <HelpCircle className="w-4 h-4" /> Entenda o que é a Nota NPS (Net Promoter Score)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            O **NPS** mede o nível de lealdade dos clientes numa escala de **-100 a +100**. 
            Clientes com notas **9-10** são **Promotores** (recomendam o grupo), **7-8** são **Neutros**, e **0-6** são **Detretores**.
          </p>
        </div>

        {/* Métricas e Volumes Mensais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400">NPS Unificado da Rede</span>
            <div className="text-2xl font-bold text-emerald-600 mt-1">+82</div>
            <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">Zona de Excelência</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400">Recebidas no Mês (Agosto)</span>
            <div className="text-2xl font-bold text-slate-900 mt-1">142</div>
            <span className="text-[10px] text-slate-400 font-medium">Todas as 27 contas</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400">Acumulado Histórico</span>
            <div className="text-2xl font-bold text-slate-900 mt-1">6.840</div>
            <span className="text-[10px] text-slate-400 font-medium">Avaliações consolidadas</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400">Taxa de Resposta IA</span>
            <div className="text-2xl font-bold text-[#0f4c81] mt-1">98.4%</div>
            <span className="text-[10px] text-emerald-600 font-medium">Atendimento agilizado</span>
          </div>
        </div>

        {/* Modal de Inserção Externa */}
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-xl">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">Cadastrar Avaliação Externa (WhatsApp/Presencial)</h3>
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
                    className="w-full px-3 py-2 border rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Relato / Feedback do Cliente</label>
                  <textarea
                    rows={3}
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Cole ou digite o texto recebido..."
                    className="w-full px-3 py-2 border rounded-xl text-xs"
                  />
                </div>

                <button
                  onClick={handleAnaliseNPS}
                  className="w-full py-2.5 bg-[#0f4c81] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Classificar Sentimento & NPS via IA
                </button>

                {npsResult !== null && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-1">
                    <span className="text-xs font-bold text-emerald-800">NPS Classificado pela IA:</span>
                    <div className="text-2xl font-bold text-emerald-700">{npsResult} / 10</div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancelar</button>
                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-xl">Salvar Registro</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
