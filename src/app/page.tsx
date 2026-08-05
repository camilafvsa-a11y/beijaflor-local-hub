'use client';
import React, { useState } from 'react';
import DiscoveryTour from '@/components/DiscoveryTour';
import { 
  Home, ClipboardList, MessageSquare, Building2, ShieldCheck, 
  Lightbulb, FileText, Settings, Search, Bell, User, AlertCircle, Clock, CheckCircle2, ChevronRight, Bot
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isBotOpen, setIsBotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* HEADER INSTITUCIONAL */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-[#0F4C81] text-white font-black text-xl px-3 py-1 rounded-lg tracking-wider">
            🕊️ BEIJA-FLOR
          </div>
          <span className="text-slate-400 text-sm font-light">|</span>
          <span className="text-slate-700 font-semibold text-sm">Local Hub — Gestão de Rede</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar unidade ou cliente..." 
              className="w-full bg-slate-100 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>
          <button className="relative p-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
            <div className="w-8 h-8 rounded-full bg-[#0F4C81] text-white flex items-center justify-center font-bold text-xs">
              PO
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">Product Owner</p>
              <p className="text-[10px] text-slate-500">Administrador</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* NAVEGAÇÃO LATERAL SIMPLIFICADA */}
        <aside className="w-60 bg-white border-r border-slate-200 p-4 flex flex-col justify-between">
          <nav className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Menu Principal</p>
            {[
              { id: 'inicio', label: 'Início', icon: Home },
              { id: 'tratativas', label: 'Tratativas', icon: ClipboardList },
              { id: 'avaliacoes', label: 'Avaliações', icon: MessageSquare },
              { id: 'unidades', label: 'Unidades', icon: Building2 },
              { id: 'aprovacoes', label: 'Aprovações', icon: ShieldCheck },
              { id: 'inteligencia', label: 'Inteligência', icon: Lightbulb },
              { id: 'relatorios', label: 'Relatórios', icon: FileText },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                    isActive 
                      ? 'bg-[#EBF3FA] text-[#0F4C81] font-bold' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#0F4C81]' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100">
            <button 
              onClick={() => setActiveTab('configuracoes')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100"
            >
              <Settings className="w-4 h-4 text-slate-400" />
              Configurações
            </button>
          </div>
        </aside>

        {/* CONTEÚDO PRINCIPAL (DASHBOARD AÇÕES) */}
        <main className="flex-1 p-8 space-y-6 max-w-6xl">
          {/* BANNER ATENÇÃO IMEDIATA */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" /> O que precisa da sua atenção hoje
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                <p className="text-red-700 font-bold text-lg">1</p>
                <p className="text-red-600 text-xs font-medium">Tratativa Atrasada</p>
              </div>
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <p className="text-amber-700 font-bold text-lg">3</p>
                <p className="text-amber-600 text-xs font-medium">Aprovações Pendentes</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                <p className="text-blue-700 font-bold text-lg">2</p>
                <p className="text-blue-600 text-xs font-medium">Para Validar</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg">
                <p className="text-emerald-700 font-bold text-lg">96.5%</p>
                <p className="text-emerald-600 text-xs font-medium">SLA no Prazo</p>
              </div>
            </div>
          </div>

          {/* LISTA DE PRIORIDADES */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Minhas Prioridades do Dia</h3>
              <button className="bg-[#0F4C81] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#0D3B66]">
                + Nova Tratativa
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="py-3 flex justify-between items-center hover:bg-slate-50 px-2 rounded-lg transition">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Posto Beija-flor | Canal Barreiro</p>
                    <p className="text-xs text-slate-500">Reclamação de demora no atendimento do pátio</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-red-600 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Vencido há 15 min
                  </span>
                  <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3 py-1 rounded-md">
                    Tratar
                  </button>
                </div>
              </div>

              <div className="py-3 flex justify-between items-center hover:bg-slate-50 px-2 rounded-lg transition">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Churrascaria Beija-flor | Juatuba</p>
                    <p className="text-xs text-slate-500">Avaliação 3★ aguardando aprovação de resposta</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-amber-600 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Prazo: Hoje 18:00
                  </span>
                  <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3 py-1 rounded-md">
                    Revisar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RESUMO DA REDE (24 UNIDADES) */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 font-medium">Nota Média da Rede</p>
              <p className="text-xl font-black text-slate-900 mt-1">4.75 ★ <span className="text-xs font-normal text-emerald-600">(Excelente)</span></p>
            </div>
            <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 font-medium">Avaliações no Mês</p>
              <p className="text-xl font-black text-slate-900 mt-1">1.842 <span className="text-xs font-normal text-slate-500">recebidas</span></p>
            </div>
            <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 font-medium">Índice de Saúde da Rede</p>
              <p className="text-xl font-black text-emerald-600 mt-1">91 / 100 🟢</p>
            </div>
          </div>
        </main>
      </div>

      {/* BOTÃO FLUTUANTE DO ASSISTENTE BEIJA-FLOR */}
      <button 
        onClick={() => setIsBotOpen(!isBotOpen)}
        className="fixed bottom-6 right-6 bg-[#0F4C81] text-white px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#0D3B66] text-xs font-bold transition z-40"
      >
        <Bot className="w-4 h-4" /> Assistente Beija-flor
      </button>

      {/* MODAL MODO DESCOBERTA */}
      <DiscoveryTour />
    </div>
  );
}