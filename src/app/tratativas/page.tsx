'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, CheckCircle2, Send, Sparkles, AlertCircle } from 'lucide-react';

const mockTratativas = [
  { id: 'TR-101', unidade: 'Posto Beija-flor | Lourdes (Centro)', cliente: 'Carlos Eduardo', canal: 'Google Maps', assunto: 'Demora no atendimento do caixa', status: 'Pendente', data: '10/08/2026', respostaIA: 'Olá Carlos, pedimos desculpas pela espera. Já alinhamos com a equipe do Posto Lourdes para agilizar nosso atendimento. Agradecemos seu feedback!' },
  { id: 'TR-102', unidade: 'Churrascaria Beija-flor | Sabará (KM13)', cliente: 'Mariana Silva', canal: 'Canal do Cliente', assunto: 'Elogio ao buffet e atendimento', status: 'Concluída', data: '09/08/2026', respostaIA: 'Ficamos felizes com seu elogio, Mariana! Nossa equipe da Churrascaria Sabará trabalha diariamente para oferecer a melhor experiência.' },
  { id: 'TR-103', unidade: 'Posto Beija-flor | Vespasiano (MG-424)', cliente: 'Roberto Souza', canal: 'WhatsApp', assunto: 'Dúvida sobre pontuação no Beija-flor Pontua', status: 'Em Tratativa', data: '08/08/2026', respostaIA: 'Olá Roberto! Para pontuar no Beija-flor Pontua, basta informar seu CPF ao frentista antes de iniciar o abastecimento.' },
];

export default function TratativasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(mockTratativas);

  const handleConcluir = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'Concluída' } : item));
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
            <h1 className="text-2xl font-bold text-slate-900">Gestão Central de Tratativas</h1>
            <p className="text-slate-500 text-sm mt-1">Gerenciamento direto e publicação de respostas via Gestor de Contas.</p>
          </div>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por unidade, cliente ou assunto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
          />
        </div>

        <div className="space-y-4">
          {items.filter(i => i.unidade.toLowerCase().includes(searchTerm.toLowerCase()) || i.assunto.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-slate-100 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-400 font-bold">{item.id}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">{item.canal}</span>
                    <span className="text-xs font-bold text-slate-800">{item.unidade}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mt-1">{item.cliente}: "{item.assunto}"</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'Concluída' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  {item.status}
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f4c81] mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Sugestão de Resposta IA (Parâmetros Grupo Beija-flor)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">"{item.respostaIA}"</p>
              </div>

              {item.status !== 'Concluída' && (
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button 
                    onClick={() => handleConcluir(item.id)}
                    className="px-4 py-2 bg-[#0f4c81] text-white text-xs font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Publicar Resposta e Concluir
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
