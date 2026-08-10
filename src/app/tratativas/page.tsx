'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, AlertTriangle, CheckCircle, MessageSquare, Filter, Search } from 'lucide-react';

const mockTratativas = [
  { id: 'TR-101', unidade: 'Posto Beija-flor | Lourdes (Centro)', cliente: 'Carlos Eduardo', tipo: 'Reclamação', assunto: 'Demora no atendimento do caixa', status: 'Atrasada', data: '10/08/2026', prioridade: 'Alta' },
  { id: 'TR-102', unidade: 'Churrascaria Beija-flor | Sabará (KM13)', cliente: 'Mariana Silva', tipo: 'Elogio', assunto: 'Qualidade do buffet e atendimento', status: 'Concluída', data: '09/08/2026', prioridade: 'Baixa' },
  { id: 'TR-103', unidade: 'Posto Beija-flor | Vespasiano (MG-424)', cliente: 'Roberto Souza', tipo: 'Dúvida', assunto: 'Pontuação no Beija-flor Pontua', status: 'Em Andamento', data: '08/08/2026', prioridade: 'Média' },
  { id: 'TR-104', unidade: 'Posto Beija-flor | Igarapé', cliente: 'Fernanda Lima', tipo: 'Sugestão', assunto: 'Melhoria na iluminação da pista', status: 'Pendente', data: '07/08/2026', prioridade: 'Média' },
  { id: 'TR-105', unidade: 'Churrascaria Beija-flor | Jardim Vitória', cliente: 'Lucas Gabriel', tipo: 'Reclamação', assunto: 'Reserva de mesa com atraso', status: 'Atrasada', data: '05/08/2026', prioridade: 'Alta' },
];

export default function TratativasPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockTratativas.filter(t => 
    t.unidade.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.assunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h1 className="text-2xl font-bold text-slate-900">Gestão de Tratativas</h1>
            <p className="text-slate-500 text-sm mt-1">Acompanhamento e resolução de chamados e feedback de clientes.</p>
          </div>
          <button className="bg-[#0f4c81] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-900 transition-all">
            + Nova Tratativa
          </button>
        </div>

        <div className="flex gap-4 items-center justify-between">
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
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Unidade</th>
                <th className="p-4">Cliente / Assunto</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Status</th>
                <th className="p-4">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-medium text-slate-500">{item.id}</td>
                  <td className="p-4 font-semibold text-slate-800">{item.unidade}</td>
                  <td className="p-4">
                    <div className="font-medium text-slate-900">{item.cliente}</div>
                    <div className="text-xs text-slate-500">{item.assunto}</div>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                      {item.tipo}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Atrasada' ? 'bg-red-50 text-red-700 border border-red-200' :
                      item.status === 'Concluída' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400">{item.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
