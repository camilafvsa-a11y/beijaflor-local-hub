'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Building2, Smartphone, MessageCircle, MapPin, LayoutDashboard, MessageSquareText, ShieldAlert } from 'lucide-react';

export default function DashboardHome() {
  const [stats] = useState({
    totalGoogle: 142,
    totalCanalCliente: 48,
    totalWhatsApp: 19,
    mediaGeral: 4.8
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* Top Navigation Bar com Abas */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0f4c81] flex items-center justify-center text-white font-black text-xs shadow-sm">
              BF
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-sm">Beija-flor Local Hub</span>
          </div>

          {/* Abas do Sistema */}
          <nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-[#0f4c81] shadow-sm transition-all"
            >
              <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
            </Link>
            <Link 
              href="/avaliacoes" 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-all"
            >
              <MessageSquareText className="w-3.5 h-3.5" /> Avaliações
            </Link>
            <Link 
              href="/tratativas" 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-all"
            >
              <ShieldAlert className="w-3.5 h-3.5" /> Tratativas
            </Link>
          </nav>
        </div>
      </header>

      {/* Conteúdo do Dashboard */}
      <main className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
        
        {/* Banner Geral */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              Visão Consolidada da Rede
            </span>
            <h1 className="text-2xl font-black mt-3">Reputação e Entrada de Feedbacks</h1>
            <p className="text-slate-300 text-sm mt-1">Compilado geral de entradas registradas nas 27 unidades do Grupo Beija-flor.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 text-center shrink-0">
            <span className="text-xs uppercase font-bold text-blue-200 block">Satisfação Média</span>
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <span className="text-3xl font-extrabold text-white">{stats.mediaGeral}</span>
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Compilado por Origem de Entrada */}
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#0f4c81]" /> Compilado de Entradas por Origem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Google Maps */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-blue-50 rounded-2xl text-[#0f4c81]">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">API Ativa</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Google Maps Reviews</span>
                <div className="text-3xl font-black text-slate-900 mt-1">{stats.totalGoogle} <span className="text-xs font-medium text-slate-500">registros</span></div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Avaliações públicas consolidadas das 27 fichas com resposta automatizada via IA.</p>
              <Link href="/avaliacoes" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4c81] hover:underline pt-2">
                Ir para Avaliações <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Canal do Cliente */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">QR Code / Web</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Canal do Cliente</span>
                <div className="text-3xl font-black text-slate-900 mt-1">{stats.totalCanalCliente} <span className="text-xs font-medium text-slate-500">registros</span></div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Pesquisas diretas de satisfação enviadas por clientes nas lojas e postos.</p>
              <Link href="/tratativas" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4c81] hover:underline pt-2">
                Ir para Tratativas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* WhatsApp / Presencial */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">Manual / Gerência</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">WhatsApp & Presencial</span>
                <div className="text-3xl font-black text-slate-900 mt-1">{stats.totalWhatsApp} <span className="text-xs font-medium text-slate-500">registros</span></div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Ocorrências registradas internamente pelas equipes e gerentes de unidade.</p>
              <Link href="/tratativas" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4c81] hover:underline pt-2">
                Ir para Tratativas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
