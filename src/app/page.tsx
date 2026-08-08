'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      {/* Menu Lateral */}
      <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo / Header */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-[#0F4C81]">Beija-flor</h1>
            <p className="text-xs text-slate-500">Local Hub — Gestão de Rede</p>
          </div>

          {/* Campo de Busca */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar unidade..."
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Links de Navegação */}
          <nav className="space-y-1">
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-white bg-[#0F4C81] rounded-lg"
            >
              <span>🏠</span>
              <span>Início</span>
            </a>
            <a
              href="/unidades"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>🏢</span>
              <span>Unidades (27)</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>📋</span>
              <span>Tratativas</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>⭐</span>
              <span>Avaliações</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>🛡️</span>
              <span>Aprovações</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>💡</span>
              <span>Inteligência</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>📊</span>
              <span>Relatórios</span>
            </a>
          </nav>
        </div>

        {/* Perfil do Usuário no Roda-pé da Sidebar */}
        <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0F4C81] flex items-center justify-center font-bold text-xs">
            PO
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Product Owner</p>
            <p className="text-[10px] text-slate-500">Administrador</p>
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8">
        <div className="mb-6 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-4 py-2 rounded-lg font-medium">
          ⚠️ AMBIENTE DE TESTE — PRODUCT OWNER EXCLUSIVE (HOMOLOGAÇÃO FASE 0)
        </div>

        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">O que precisa da sua atenção hoje</h2>
            <p className="text-sm text-slate-500">Resumo de pendências da rede</p>
          </div>
          <a
            href="/unidades"
            className="bg-[#0F4C81] hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Ver Todas as Unidades 🏢
          </a>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-2xl font-bold text-red-600">1</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Tratativa Atrasada</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-2xl font-bold text-amber-600">3</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Aprovações Pendentes</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-2xl font-bold text-blue-600">2</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Para Validar</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-2xl font-bold text-emerald-600">96.5%</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">SLA no Prazo</p>
          </div>
        </div>

        {/* Prioridades */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Minhas Prioridades do Dia</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="font-semibold text-sm text-slate-800">Posto Beija-flor | Canal Barreiro</p>
                <p className="text-xs text-slate-500">Reclamação de demora no atendimento do pátio</p>
              </div>
              <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">Vencido há 15 min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="font-semibold text-sm text-slate-800">Churrascaria Beija-flor | Juatuba</p>
                <p className="text-xs text-slate-500">Avaliação 3★ aguardando aprovação de resposta</p>
              </div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">Prazo: Hoje 18:00</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
