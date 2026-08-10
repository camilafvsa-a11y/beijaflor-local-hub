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
  AlertTriangle,
  Clock,
  TrendingUp,
  MapPin,
  ExternalLink
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
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Sidebar Lateral Nativas com Links */}
      <aside className="w-64 bg-white border-r border-slate-200/80 min-h-screen p-5 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2.5 px-3 py-2 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#0f4c81] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              BF
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-sm leading-none">Grupo Beija-flor</h2>
              <span className="text-[11px] text-slate-400 font-medium">Local Hub</span>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    item.active
                      ? 'bg-[#0f4c81] text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.active ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" /> Google Maps Conectado
          </div>
          <p className="text-[11px] text-slate-400 mt-1">27 Unidades sincronizadas</p>
        </div>
      </aside>

      {/* Conteúdo do Dashboard */}
      <main className="flex-1 p-8 space-y-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Visão Geral da Rede</h1>
            <p className="text-slate-500 text-sm mt-1">
              Gerenciamento centralizado de presença digital e reputação das 27 unidades.
            </p>
          </div>
          <Link
            href="/unidades"
            className="bg-[#0f4c81] text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-blue-900 transition-all shadow-sm text-center"
          >
            Ver Todas as 27 Unidades →
          </Link>
        </div>

        {/* Métricas Rápidas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link href="/unidades" className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs text-slate-400 font-medium">Unidades Ativas</span>
            <div className="text-2xl font-bold text-slate-900 mt-1">27</div>
            <span className="text-[11px] text-emerald-600 font-medium">● 100% Sincronizadas</span>
          </Link>

          <Link href="/tratativas" className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs text-slate-400 font-medium">Tratativas Pendentes</span>
            <div className="text-2xl font-bold text-amber-600 mt-1">5</div>
            <span className="text-[11px] text-amber-600 font-medium">Aguardando resposta</span>
          </Link>

          <Link href="/avaliacoes" className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs text-slate-400 font-medium">Média de Avaliações</span>
            <div className="text-2xl font-bold text-slate-900 mt-1 flex items-center gap-1">
              4.8 <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">+0.2 este mês</span>
          </Link>

          <Link href="/aprovacoes" className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs text-slate-400 font-medium">Aprovações de Perfil</span>
            <div className="text-2xl font-bold text-blue-600 mt-1">3</div>
            <span className="text-[11px] text-slate-400 font-medium">Edições pendentes</span>
          </Link>
        </div>

        {/* Atalhos para Abas do Sistema */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-4">Acesso Rápido aos Módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/tratativas" className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="text-xs font-bold text-slate-800">Tratativas</h3>
                <p className="text-[11px] text-slate-500">Gerenciar chamados e suporte</p>
              </div>
            </Link>

            <Link href="/avaliacoes" className="p-4 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/30 transition-all flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-500" />
              <div>
                <h3 className="text-xs font-bold text-slate-800">Avaliações</h3>
                <p className="text-[11px] text-slate-500">Respostas do Google Maps</p>
              </div>
            </Link>

            <Link href="/relatorios" className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-emerald-600" />
              <div>
                <h3 className="text-xs font-bold text-slate-800">Relatórios</h3>
                <p className="text-[11px] text-slate-500">Métricas e performance</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
