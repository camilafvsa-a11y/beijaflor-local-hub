'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, MessageCircle, MapPin, Sparkles, Send, Filter, BellRing } from 'lucide-react';

const mockReviews = [
  { id: 1, unidade: 'Churrascaria Beija-flor | Sabará (KM13)', autor: 'Guilherme Augusto', nota: 5, comentario: 'Excelente atendimento e o famoso pão com linguiça é imbatível! Parada obrigatória.', data: '10/08/2026', respostaIA: 'Olá Guilherme! Agradecemos muito o carinho e o reconhecimento. Nosso pão com linguiça é feito com muito cuidado para ser sempre essa parada especial na BR-381. Volte sempre ao Grupo Beija-flor!', respondido: false },
  { id: 2, unidade: 'Posto Beija-flor | Lourdes (Centro)', autor: 'Patrícia Mendes', nota: 4, comentario: 'Posto bem localizado e atendimento rápido na pista. Aplicativo pontuou direitinho.', data: '09/08/2026', respostaIA: 'Ficamos felizes com sua avaliação, Patrícia! Que ótimo saber que aproveitou o Beija-flor Pontua no Posto Lourdes. Conte sempre conosco para abastecer com confiança!', respondido: false },
  { id: 3, unidade: 'Posto Beija-flor | Igarapé', autor: 'Marcos Vinícius', nota: 5, comentario: 'Estrutura excelente para caminhoneiros e motoristas. Banheiros e chuveiros limpos.', data: '08/08/2026', respostaIA: 'Olá Marcos! A comodidade e o conforto de quem vive na estrada são prioridades para nós. Muito obrigado pela avaliação positiva da unidade Igarapé!', respondido: true },
  { id: 4, unidade: 'Posto Beija-flor | Vespasiano (MG-424)', autor: 'Renata Castro', nota: 2, comentario: 'Combustível de excelente qualidade, porém a fila do caixa no horário de pico estava muito demorada.', data: '07/08/2026', respostaIA: 'Olá Renata, pedimos desculpas pelo tempo de espera no caixa do Posto Vespasiano. Já alinhamos internamente para reforçar o atendimento em horários de pico. Agradecemos seu feedback para melhorarmos!', respondido: false },
];

export default function AvaliacoesPage() {
  const [reviews, setReviews] = useState(mockReviews);

  const handleResponder = (id: number) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, respondido: true } : r));
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
              Central de Avaliações (Google Maps)
            </h1>
            <p className="text-slate-500 text-sm mt-1">Gestão centralizada de reputação e respostas geradas por IA nas 27 unidades.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl text-amber-800 font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.8 / 5.0 Média Geral
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-800 flex items-center gap-1.5 text-base">
                    <MapPin className="w-4 h-4 text-[#0f4c81]" /> {r.unidade}
                  </h3>
                  <span className="text-xs text-slate-400 mt-0.5 block">{r.autor} • {r.data}</span>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-amber-800">{r.nota}.0</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 font-medium">"{r.comentario}"</p>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f4c81] mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Sugestão de Resposta IA (Gestor de Contas)
                </div>
                <p className="text-xs text-slate-600 italic">"{r.respostaIA}"</p>
              </div>

              <div className="flex justify-end pt-1">
                {r.respondido ? (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                    ✓ Resposta Publicada no Google
                  </span>
                ) : (
                  <button
                    onClick={() => handleResponder(r.id)}
                    className="px-4 py-2 bg-[#0f4c81] text-white text-xs font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center gap-1.5"
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
