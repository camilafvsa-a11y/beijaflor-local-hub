'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Check, X, Clock } from 'lucide-react';

const pendencias = [
  { id: 1, unidade: 'Posto Beija-flor | Lourdes (Centro)', alteracao: 'Atualização do horário de funcionamento de feriado', solicitante: 'Gerência Operacional', data: '10/08/2026' },
  { id: 2, unidade: 'Churrascaria Beija-flor | Sabará (KM13)', alteracao: 'Adição de novas fotos do buffet e fachada', solicitante: 'Marketing Grupo Beija-flor', data: '09/08/2026' },
  { id: 3, unidade: 'Posto Beija-flor | Igarapé', alteracao: 'Atualização do telefone principal no perfil do Google', solicitante: 'Administrativo', data: '08/08/2026' },
];

export default function AprovacoesPage() {
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
            <ShieldCheck className="w-6 h-6 text-blue-600" /> Central de Aprovações
          </h1>
          <p className="text-slate-500 text-sm mt-1">Aprove edições de informações das unidades antes da publicação no Google.</p>
        </div>

        <div className="space-y-4">
          {pendencias.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-md">Pendente de Aprovação</span>
                <h3 className="font-bold text-slate-800 text-base mt-2">{item.unidade}</h3>
                <p className="text-sm text-slate-600 mt-0.5">{item.alteracao}</p>
                <span className="text-xs text-slate-400 mt-1 block">Solicitado por {item.solicitante} em {item.data}</span>
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-xl hover:bg-emerald-700 flex items-center justify-center gap-1">
                  <Check className="w-4 h-4" /> Aprovar
                </button>
                <button className="flex-1 md:flex-none px-4 py-2 bg-slate-100 text-slate-600 text-xs font-semibold rounded-xl hover:bg-slate-200 flex items-center justify-center gap-1">
                  <X className="w-4 h-4" /> Recusar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
