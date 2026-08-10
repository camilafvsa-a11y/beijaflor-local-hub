'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Check, X } from 'lucide-react';

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
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-sm hover:bg-slate-50 transition-all">
            <ArrowLeft className="w-4 h-4 text-slate-500" /> Voltar ao Dashboard
          </Link>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Governança & Controle</span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-[#0f4c81] via-slate-900 to-slate-900 text-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="bg-white/10 backdrop-blur-sm text-blue-200 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/10">
                Aprovação de Edições
              </span>
              <h1 className="text-3xl font-black tracking-tight mt-3">Central de Aprovações</h1>
              <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                Validação prévia das alterações solicitadas para as fichas do Google Maps antes da sincronização oficial.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 text-center shrink-0">
              <span className="text-xs uppercase font-bold text-blue-200 block">Pendentes</span>
              <span className="text-2xl font-black text-amber-300">{items.filter(i => !i.aprovado).length} Edições</span>
            </div>
          </div>
        </div>

        {/* Lista de Solicitações */}
        <div className="space-y-5">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-extrabold text-[#0f4c81] uppercase tracking-wider block mb-1">{item.campo}</span>
                  <h3 className="font-bold text-slate-900 text-base">{item.unidade}</h3>
                  <span className="text-xs text-slate-500 mt-1 block font-medium">Solicitado por {item.solicitante} em {item.data}</span>
                </div>
                {item.aprovado ? (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                    ✓ Publicado no Google
                  </span>
                ) : (
                  <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                    Pendente
                  </span>
                )}
              </div>

              {/* Antes vs Depois */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Dado Atual no Google</span>
                  <p className="text-sm font-bold text-slate-700 mt-1">{item.atual}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Novo Dado Solicitado</span>
                  <p className="text-sm font-extrabold text-emerald-700 mt-1">{item.proposto}</p>
                </div>
              </div>

              {!item.aprovado && (
                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => handleAprovar(item.id)}
                    className="px-5 py-3 bg-[#0f4c81] text-white text-xs font-bold rounded-2xl hover:bg-blue-900 transition-all flex items-center gap-2 shadow-sm"
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
