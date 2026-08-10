'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, MapPin, Sparkles, Send, Copy, Edit3, Check, MessageSquare } from 'lucide-react';

const mockReviews = [
  { id: 1, unidade: 'Churrascaria Beija-flor | Sabará (KM13)', autor: 'Guilherme Augusto', nota: 5, comentario: 'Excelente atendimento e o famoso pão com linguiça é imbatível! Parada obrigatória na BR-381.', data: '10/08/2026', respostaIA: 'Olá Guilherme! Agradecemos demais pelo carinho. Nosso pão com linguiça é feito com muito cuidado para ser essa parada tradicional e especial. Volte sempre ao Grupo Beija-flor!', respondido: false },
  { id: 2, unidade: 'Posto Beija-flor | Lourdes (Centro)', autor: 'Patrícia Mendes', nota: 4, comentario: 'Posto bem localizado em BH e atendimento super ágil na pista. O aplicativo Beija-flor Pontua creditou rápido.', data: '09/08/2026', respostaIA: 'Ficamos felizes com sua avaliação, Patrícia! Que ótimo saber que aproveitou o Beija-flor Pontua no Posto Lourdes. Estamos sempre às ordens!', respondido: false },
  { id: 3, unidade: 'Posto Beija-flor | Igarapé', autor: 'Marcos Vinícius', nota: 5, comentario: 'Estrutura excelente para caminhoneiros e motoristas. Banheiros e chuveiros impecáveis.', data: '08/08/2026', respostaIA: 'Olá Marcos! A comodidade e higiene para quem vive na estrada são prioridades absolutas no Grupo Beija-flor. Muito obrigado pelo feedback positivo!', respondido: true },
];

export default function AvaliacoesPage() {
  const [reviews, setReviews] = useState(mockReviews);

  const handleResponder = (id: number) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, respondido: true } : r));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-xs hover:bg-slate-50 transition-all">
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" /> Voltar ao Dashboard
          </Link>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gestão de Reputação</span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-[#0f4c81] via-slate-900 to-slate-900 text-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="bg-white/10 backdrop-blur-md text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                Google Maps Reviews
              </span>
              <h1 className="text-2xl font-black tracking-tight mt-2">Avaliações das 27 Unidades</h1>
              <p className="text-slate-300 text-xs mt-1.5 max-w-xl leading-relaxed">
                Centralização de feedbacks públicos e respostas automáticas geradas por Inteligência Artificial no tom institucional da empresa.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-center">
              <span className="text-[10px] uppercase font-bold text-blue-200 block">Média Geral da Rede</span>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className="text-2xl font-extrabold text-white">4.8</span>
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de Volume */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Volume do Mês Atual (Agosto/2026)</span>
            <div className="text-2xl font-black text-slate-900">142 avaliações</div>
            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
              ● 100% Tratadas ou Rascunhadas via IA
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Acumulado Histórico Consolidado</span>
            <div className="text-2xl font-black text-slate-900">6.840 avaliações</div>
            <span className="text-[11px] text-slate-400 font-medium">Soma de todas as 27 contas ativas</span>
          </div>
        </div>

        {/* Feed de Avaliações */}
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-4">
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#0f4c81]" /> {r.unidade}
                  </h3>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">{r.autor} • {r.data}</span>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200/60">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-amber-800">{r.nota}.0</span>
                </div>
              </div>

              <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100 italic">
                "{r.comentario}"
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
                <span className="text-xs font-bold text-[#0f4c81] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> Sugestão de Resposta IA
                </span>
                <p className="text-xs text-slate-600 font-medium leading-relaxed italic">"{r.respostaIA}"</p>
              </div>

              <div className="flex justify-end pt-1">
                {r.respondido ? (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1">
                    ✓ Publicado no Google Maps
                  </span>
                ) : (
                  <button
                    onClick={() => handleResponder(r.id)}
                    className="px-5 py-2.5 bg-[#0f4c81] text-white text-xs font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" /> Aprovar e Publicar no Google
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
