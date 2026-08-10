'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Search, Sparkles, Send, Edit3, Copy, Check 
} from 'lucide-react';

const mockTratativas = [
  { id: 'TR-101', unidade: 'Posto Beija-flor | Lourdes (Centro)', cliente: 'Carlos Eduardo', canal: 'Google Maps', assunto: 'Demora no atendimento do caixa em horário de pico', status: 'Pendente', prioridade: 'Alta', data: '10/08/2026', respostaIA: 'Olá Carlos, pedimos desculpas pelo tempo de espera. Já alinhamos com a equipe do Posto Lourdes para reforçar a operação dos caixas nos horários de maior movimento. Agradecemos seu feedback!' },
  { id: 'TR-102', unidade: 'Churrascaria Beija-flor | Sabará (KM13)', cliente: 'Mariana Silva', canal: 'Canal do Cliente', assunto: 'Elogio ao buffet e rapidez do atendimento', status: 'Concluída', prioridade: 'Baixa', data: '09/08/2026', respostaIA: 'Ficamos muito felizes com seu elogio, Mariana! Toda a equipe da Churrascaria Sabará trabalha diariamente para oferecer essa experiência memorável na BR-381. Volte sempre!' },
  { id: 'TR-103', unidade: 'Posto Beija-flor | Vespasiano (MG-424)', cliente: 'Roberto Souza', canal: 'WhatsApp Externa', assunto: 'Dúvida sobre pontuação no app Beija-flor Pontua', status: 'Em Tratativa', prioridade: 'Média', data: '08/08/2026', respostaIA: 'Olá Roberto! Para garantir seus pontos no Beija-flor Pontua, basta informar o seu CPF ao frentista antes de iniciar o abastecimento em qualquer uma das nossas unidades.' },
];

export default function TratativasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(mockTratativas);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleEdit = (id: string, currentText: string) => {
    setEditingId(id);
    setEditedText(currentText);
  };

  const handleSaveText = (id: string) => {
    setItems(items.map(i => i.id === id ? { ...i, respostaIA: editedText } : i));
    setEditingId(null);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleConcluir = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'Concluída' } : item));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-sm hover:bg-slate-50 transition-all">
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" /> Voltar ao Dashboard
          </Link>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gestão de Chamados</span>
        </div>

        <div className="bg-gradient-to-r from-[#0f4c81] via-slate-900 to-slate-900 text-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="bg-white/10 backdrop-blur-sm text-blue-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                Central de Resolução
              </span>
              <h1 className="text-2xl font-black tracking-tight mt-2">Tratativas de Ocorrências</h1>
              <p className="text-slate-300 text-xs mt-1.5 max-w-xl leading-relaxed">
                Acompanhamento em tempo real de chamados multicanal com sugestões de resposta em conformidade com as diretrizes da marca Grupo Beija-flor.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-blue-200 block">Abertas</span>
                <span className="text-xl font-extrabold text-amber-300">{items.filter(i => i.status !== 'Concluída').length}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-blue-200 block">Concluídas</span>
                <span className="text-xl font-extrabold text-emerald-400">{items.filter(i => i.status === 'Concluída').length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por unidade, cliente ou assunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20 transition-all"
            />
          </div>
        </div>

        <div className="space-y-4">
          {items.filter(i => i.unidade.toLowerCase().includes(searchTerm.toLowerCase()) || i.assunto.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all space-y-4">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">{item.id}</span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 bg-blue-50 text-[#0f4c81] rounded-md border border-blue-100">{item.canal}</span>
                    <span className="text-xs font-bold text-slate-800">{item.unidade}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">
                    {item.cliente}: <span className="font-medium text-slate-600">"{item.assunto}"</span>
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                    item.status === 'Concluída' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#0f4c81] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> Sugestão de Resposta IA
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleCopy(item.id, item.respostaIA)}
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold transition-colors"
                    >
                      {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedId === item.id ? 'Copiado!' : 'Copiar Texto'}
                    </button>

                    {editingId !== item.id && (
                      <button
                        onClick={() => handleEdit(item.id, item.respostaIA)}
                        className="text-xs text-[#0f4c81] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <Edit3 className="w-3.5 h-3.5" /> Editar
                      </button>
                    )}
                  </div>
                </div>

                {editingId === item.id ? (
                  <div className="space-y-2">
                    <textarea
                      rows={3}
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/30"
                    />
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setEditingId(null)} className="text-xs px-3 py-1.5 font-semibold text-slate-500">Cancelar</button>
                      <button onClick={() => handleSaveText(item.id)} className="text-xs px-4 py-1.5 bg-[#0f4c81] text-white font-semibold rounded-lg shadow-sm">Salvar Alteração</button>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-700 leading-relaxed font-medium italic">"{item.respostaIA}"</p>
                )}
              </div>

              {item.status !== 'Concluída' && (
                <div className="flex items-center justify-end pt-1">
                  <button 
                    onClick={() => handleConcluir(item.id)}
                    className="px-5 py-2.5 bg-[#0f4c81] text-white text-xs font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" /> Publicar Resposta e Finalizar
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
