'use client';
import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, X } from 'lucide-react';

export default function DiscoveryTour() {
  const [activeStep, setActiveStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const steps = [
    {
      title: '🎯 Painel de Ação Imediata',
      description: 'Centraliza todas as pendências que exigem ação imediata da rede Beija-flor.',
      whenToUse: 'Sempre ao iniciar o dia de trabalho ou acessar o sistema.',
      whatToExpect: 'Lista priorizada de ocorrências, aprovações e casos críticos sem excesso de gráficos.'
    },
    {
      title: '🛡️ Central de Aprovações',
      description: 'Local para revisar minutas de resposta sugeridas pelo Assistente Beija-flor para o Google.',
      whenToUse: 'Sempre que houver avaliação de 1 a 3 estrelas pendente de aprovação.',
      whatToExpect: 'Respostas sanitizadas, sem termos técnicos e com nível de confiança da sugestão.'
    },
    {
      title: '📋 Central de Tratativas',
      description: 'Acompanhamento interno de ocorrências com checklists e prazos de SLA por etapa.',
      whenToUse: 'Para registrar relatos de WhatsApp, atendimento presencial ou investigações da unidade.',
      whatToExpect: 'Fluxo em 4 blocos simples: Resumo, O que fazer, Histórico e Encerramento.'
    },
    {
      title: '🤖 Assistente Beija-flor',
      description: 'Inteligência de apoio em segunda plano que analisa tendências e sugere ações.',
      whenToUse: 'Quando precisar criar minutas, resumir crises ou entender um indicador local.',
      whatToExpect: 'Recomendações em português, sem jargões de programação ou modelos técnicos.'
    }
  ];

  if (!isOpen) return null;
  const current = steps[activeStep];

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 bg-white border border-slate-200 shadow-2xl rounded-2xl p-5 text-slate-800 font-sans border-t-4 border-t-[#0F4C81]">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2 text-[#0F4C81] font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" /> 🎓 Modo Descoberta ({activeStep + 1}/{steps.length})
        </div>
        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 space-y-2 text-xs">
        <h4 className="font-bold text-slate-900 text-sm">{current.title}</h4>
        <p className="text-slate-600 leading-relaxed"><strong className="text-slate-800">Para que serve:</strong> {current.description}</p>
        <p className="text-slate-600"><strong className="text-slate-800">Quando usar:</strong> {current.whenToUse}</p>
        <p className="text-slate-600"><strong className="text-slate-800">O que esperar:</strong> {current.whatToExpect}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <button onClick={() => setIsOpen(false)} className="text-[11px] text-slate-400 hover:text-slate-600 font-medium">
          Pular
        </button>
        {activeStep < steps.length - 1 ? (
          <button 
            onClick={() => setActiveStep(activeStep + 1)}
            className="px-3 py-1.5 rounded-lg bg-[#0F4C81] text-white text-xs font-semibold flex items-center gap-1 hover:bg-[#0D3B66] transition"
          >
            Próximo <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button 
            onClick={() => setIsOpen(false)}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1 hover:bg-emerald-500 transition"
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> Iniciar Uso
          </button>
        )}
      </div>
    </div>
  );
}