'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, MessageCircle, ThumbsUp, MapPin } from 'lucide-react';

const reviews = [
  { id: 1, unidade: 'Churrascaria Beija-flor | Sabará (KM13)', autor: 'Guilherme Augusto', nota: 5, comentario: 'Excelente atendimento e o famoso pão com linguiça é imbatível! Parada obrigatória.', data: 'Há 2 horas' },
  { id: 2, unidade: 'Posto Beija-flor | Lourdes (Centro)', autor: 'Patrícia Mendes', nota: 4, comentario: 'Posto bem localizado e atendimento rápido na pista. Aplicativo pontuou direitinho.', data: 'Há 1 dia' },
  { id: 3, unidade: 'Posto Beija-flor | Igarapé', autor: 'Marcos Vinícius', nota: 5, comentario: 'Estrutura excelente para caminhoneiros e motoristas. Banheiros limpos.', data: 'Há 2 dias' },
  { id: 4, unidade: 'Posto Beija-flor | Vespasiano (MG-424)', autor: 'Renata Castro', nota: 3, comentario: 'Combustível de qualidade, mas a fila do caixa estava um pouco lenta.', data: 'Há 3 dias' },
];

export default function AvaliacoesPage() {
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
            <h1 className="text-2xl font-bold text-slate-900">Avaliações do Google Maps</h1>
            <p className="text-slate-500 text-sm mt-1">Monitoramento de reputação e notas das 27 unidades.</p>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl text-amber-800 font-bold">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" /> 4.8 / 5.0 Média Geral
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600" /> {r.unidade}
                  </h3>
                  <span className="text-xs text-slate-400">{r.autor} • {r.data}</span>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-amber-800">{r.nota}.0</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">"{r.comentario}"</p>
              <div className="pt-2 flex justify-end">
                <button className="text-xs font-semibold text-[#0f4c81] hover:underline flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" /> Responder no Google
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
