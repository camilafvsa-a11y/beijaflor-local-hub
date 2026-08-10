'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RelatoriosPage() {
  const [periodo, setPeriodo] = useState('30d');

  const keywords = [
    { termo: 'posto beija flor', buscas: '14.200', crescimento: '+18%' },
    { termo: 'churrascaria br 381', buscas: '8.900', crescimento: '+12%' },
    { termo: 'melhor pão com linguiça', buscas: '6.400', crescimento: '+25%' },
    { termo: 'posto 24 horas vespasiano', buscas: '4.100', crescimento: '+8%' },
    { termo: 'beija flor pontua app', buscas: '3.800', crescimento: '+34%' }
  ];

  const temasIA = [
    { tema: 'Qualidade da Alimentação & Pão com Linguiça', percentual: '38%', sentimento: 'Muito Positivo', cor: 'bg-emerald-50 text-emerald-700' },
    { tema: 'Agilidade e Atendimento nos Caixas', percentual: '24%', sentimento: 'Atenção / Neutro', cor: 'bg-amber-50 text-amber-700' },
    { tema: 'Uso do App Beija-flor Pontua', percentual: '19%', sentimento: 'Positivo', cor: 'bg-blue-50 text-blue-700' },
    { tema: 'Estrutura e Limpeza dos Banheiros', percentual: '12%', sentimento: 'Muito Positivo', cor: 'bg-emerald-50 text-emerald-700' },
    { tema: 'Tempo de Espera em Horário de Pico', percentual: '7%', sentimento: 'Crítico', cor: 'bg-rose-50 text-rose-700' }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* Menu Superior */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0f4c81] flex items-center justify-center text-white font-black text-xs">
              BF
            </div>
            <span className="font-extrabold text-slate-900 text-sm">Beija-flor Local Hub</span>
          </div>

          <nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <Link href="/" className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900">
              📊 Dashboard
            </Link>
            <Link href="/avaliacoes" className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900">
              ⭐ Avaliações
            </Link>
            <Link href="/tratativas" className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900">
              🚨 Tratativas
            </Link>
            <Link href="/relatorios" className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-[#0f4c81] shadow-sm">
              📈 Relatórios & Insights
            </Link>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#0f4c81] uppercase tracking-wider">Google Insights & IA</span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Relatórios Inteligentes e Palavras-chave</h1>
            <p className="text-xs text-slate-500 mt-1">Métricas de busca no Google, comportamento do consumidor e temas extraídos por IA nas 27 unidades.</p>
          </div>

          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-sm focus:outline-none"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
          </select>
        </div>

        {/* Métricas do Google Business Profile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Solicitações de Rota (GPS)</span>
            <div className="text-3xl font-black text-slate-900">42.850</div>
            <span className="text-xs font-bold text-emerald-600">▲ +14% no período</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Visualizações nas Buscas</span>
            <div className="text-3xl font-black text-slate-900">186.400</div>
            <span className="text-xs font-bold text-emerald-600">▲ +8% no período</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Chamadas Telefônicas</span>
            <div className="text-3xl font-black text-slate-900">3.120</div>
            <span className="text-xs font-bold text-slate-500">• Estável</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase">Cliques para o Site/App</span>
            <div className="text-3xl font-black text-slate-900">12.490</div>
            <span className="text-xs font-bold text-emerald-600">▲ +22% no período</span>
          </div>
        </div>

        {/* Tabela de Palavras-chave e Análise de Temas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Palavras-chave do Google */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-black text-slate-900">🔍 Termos Mais Buscados no Google</h2>
              <span className="text-xs font-bold text-slate-400">Google Search Console</span>
            </div>

            <div className="space-y-3">
              {keywords.map((kw, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{kw.termo}</p>
                    <span className="text-[10px] text-slate-400">Intenção Direta e Local</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-slate-800">{kw.buscas}</span>
                    <span className="text-[10px] font-bold text-emerald-600 block">{kw.crescimento}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Temas Detectados pela IA */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-black text-slate-900">🧠 Temas Recorrentes (Extração via IA)</h2>
              <span className="text-xs font-bold text-[#0f4c81]">Análise de Sentimento</span>
            </div>

            <div className="space-y-3">
              {temasIA.map((tema, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-900">{tema.tema}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${tema.cor}`}>
                      {tema.sentimento}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-[#0f4c81] h-2 rounded-full" 
                      style={{ width: tema.percentual }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 text-right block">{tema.percentual} dos relatos</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Recomendação Estratégica da IA */}
        <div className="bg-gradient-to-r from-slate-900 to-[#0f4c81] text-white p-8 rounded-3xl shadow-sm space-y-3">
          <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
            Recomendação Operacional da IA
          </span>
          <h3 className="text-lg font-black">Reforço Operacional nos Caixas (Horário de Pico)</h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
            A análise preditiva indicou um aumento de 25% nas buscas por "posto beija flor" nos finais de semana entre 17h e 20h. O tempo de fila nos caixas do Posto Lourdes e Sabará foi o único ponto recorrente com sentimento de atenção. Recomendamos alocar reforço de equipe nesses horários para manter a nota em 4.9.
          </p>
        </div>

      </main>
    </div>
  );
}
