'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, MessageSquare, AlertTriangle, ArrowRight, Building2, Smartphone, MessageCircle, MapPin } from 'lucide-react';

export default function DashboardHome() {
  const [stats, setStats] = useState({
    totalGoogle: 142,
    totalCanalCliente: 48,
    totalWhatsApp: 19,
    mediaGeral: 4.8
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Principal */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold text-[#0f4c81] uppercase tracking-widest">Grupo Beija-flor</span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Beija-flor Local Hub</h1>
            <p className="text-sm text-slate-500 mt-1">Gestão centralizada de reputação e ocorrências das 27 unidades.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="/avaliacoes" className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-all shadow-sm">
              Ver Avaliações
            </Link>
            <Link href="/tratativas" className="px-4 py-2.5 bg-[#0f4c81] text-white font-bold text-xs rounded-xl hover:bg-blue-900 transition-all shadow-sm">
              Ver Tratativas
            </Link>
          </div>
        </div>

        {/* Métrica Geral */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              Visão Consolidada da Rede
            </span>
            <h2 className="text-2xl font-black mt-3">Reputação e Entrada de Feedbacks</h2>
            <p className="text-slate-300 text-sm mt-1">Compilado geral de entradas registradas no mês atual.</p>
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
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#0f4c81]" /> Compilado de Entradas por Origem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Origem: Google Maps */}
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
                Gerenciar Avaliações <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Origem: Canal do Cliente */}
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
                Ver no SAC <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Origem: WhatsApp / Presencial */}
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
                Ver no SAC <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
