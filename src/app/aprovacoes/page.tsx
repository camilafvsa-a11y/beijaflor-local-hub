'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Check, X, Clock, ArrowRight } from 'lucide-react';

const mockPendencias = [
  { id: 1, unidade: 'Posto Beija-flor | Lourdes (Centro)', campo: 'Horário de Feriado', atual: '06:00 às 22:00', proposto: '24 Horas (Ininterrupto)', solicitante: 'Operação Local', data: '10/08/2026', aprovado: false },
  { id: 2, unidade: 'Churrascaria Beija-flor | Sabará (KM13)', campo: 'Fotos do Perfil', atual: '12 Fotos', proposto: '+ 5 Novas Fotos do Buffet', solicitante: 'Marketing Grupo Beija-flor', data: '09/08/2026', aprovado: false },
  { id: 3, unidade: 'Posto Beija-flor | Igarapé', campo: 'Telefone do Perfil', atual: '(31) 3567-5002', proposto: '(31) 3567-5000', solicitante: 'Administrativo', data: '08/08/2026', aprovado: false },
];

export default function AprovacoesPage() {
  const [items, setItems] = useState(mockPendencias);

  const handleAprovar = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, aprovado: true } : i));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#0f4c81]" /> Central de Aprovações do Gestor
          </h1>
          <p className="text-slate-500 text-sm mt-1">Validação de alterações de perfil antes da publicação automática no Google Maps.</p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div>
                  <span className="text-xs font-bold text-[#0f4c81] uppercase tracking-wider">{item.campo}</span>
                  <h3 className="font-bold text-slate-900 text-base">{item.unidade}</h3>
                  <span className="text-xs text-slate-400 mt-0.5 block">Solicitado por {item.solicitante} em {item.data}</span>
                </div>
                {item.aprovado ? (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    ✓ Publicado no Google
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                    Pendente
                  </span>
                )}
              </div>

              {/* Visualização Antes vs Depois */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Dado Atual no Google</span>
                  <p className="text-sm font-semibold text-slate-700 mt-1">{item.atual}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold font-semibold text-emerald-600 uppercase">Novo Dado Solicitado</span>
                  <p className="text-sm font-bold text-emerald-700 mt-1">{item.proposto}</p>
                </div>
              </div>

              {!item.aprovado && (
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    onClick={() => handleAprovar(item.id)}
                    className="px-4 py-2 bg-[#0f4c81] text-white text-xs font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4" /> Aprovar e Sincronizar Google
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
