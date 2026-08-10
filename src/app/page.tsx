'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Building2, 
  FileText, 
  Star, 
  ShieldCheck, 
  Lightbulb, 
  BarChart3,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export default function DashboardPage() {
  const menuItems = [
    { name: 'Início', href: '/', icon: Home, active: true },
    { name: 'Unidades (27)', href: '/unidades', icon: Building2 },
    { name: 'Tratativas', href: '/tratativas', icon: FileText },
    { name: 'Avaliações', href: '/avaliacoes', icon: Star },
    { name: 'Aprovações', href: '/aprovacoes', icon: ShieldCheck },
    { name: 'Inteligência', href: '/inteligencia', icon: Lightbulb },
    { name: 'Relatórios', href: '/relatorios', icon: BarChart3 },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      {/* Sidebar Lateral */}
      <aside className="w-72 bg-white border-r border-slate-200/80 min-h-screen p-6 flex flex-col justify-between shrink-0 shadow-sm">
        <div>
          <div className="flex items-center gap-3 px-3 py-2 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-[#0f4c81] text-white flex items-center justify-center font-bold text-base shadow-sm">
              BF
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-base leading-snug">Grupo Beija-flor</h2>
              <span className="text-xs text-slate-500 font-semibold">Local Hub</span>
            </div>
          </div>

          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    item.active
                      ? 'bg-[#0f4c81] text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold">
            <CheckCircle2 className="w-4 h-4" /> API Google Ativa
          </div>
          <p className="text-xs text-slate-500 mt-1">27 Unidades Conectadas</p>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 md:p-10 space-y-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Visão Geral da Rede</h1>
            <p className="text-slate-500 text-sm mt-1">
              Painel executivo de reputação e automação de presença local das 27 contas.
            </p>
          </div>
          <Link
            href="/unidades"
            className="bg-[#0f4c81] text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-blue-900 transition-all shadow-sm text-center"
          >
            Ver Todas as 27 Unidades →
          </Link>
        </div>

        {/* Card Principal da Nota Média Geral do Grupo */}
        <div className="bg-gradient-to-r from-[#0f4c81] via-slate-900 to-slate-900 text-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Reputação Consolidada do Grupo Beija-flor</span>
            <div className="flex items-baseline gap-4 mt-3">
              <span className="text-5xl font-extrabold">4.8</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-blue-200 font-medium">(Média Ponderada das 27 Unidades)</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-5 py-3.5 rounded-2xl border border-white/10 text-sm flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>+0.2 de evolução no último trimestre</span>
          </div>
        </div>

        {/* Métricas Secundárias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/unidades" className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-2">
            <span className="text-sm font-semibold text-slate-500">Total de Unidades</span>
            <div className="text-3xl font-extrabold text-slate-900">27</div>
            <span className="text-xs text-emerald-600 font-bold block">100% Ativas no Google Maps</span>
          </Link>

          <Link href="/tratativas" className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-2">
            <span className="text-sm font-semibold text-slate-500">Tratativas em Aberto</span>
            <div className="text-3xl font-extrabold text-amber-600">3</div>
            <span className="text-xs text-amber-600 font-bold block">Respostas de IA prontas para envio</span>
          </Link>

          <Link href="/avaliacoes" className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-2">
            <span className="text-sm font-semibold text-slate-500">Avaliações Acumuladas</span>
            <div className="text-3xl font-extrabold text-slate-900">6.840</div>
            <span className="text-xs text-slate-500 font-medium block">Consolidado da rede</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
