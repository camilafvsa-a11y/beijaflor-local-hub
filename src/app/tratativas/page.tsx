'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Send, Copy, Check, Search, PlusCircle, AlertCircle, Loader2, Wand2, Edit3 } from 'lucide-react';

interface Tratativa {
  id?: string;
  codigo: string;
  origem: string;
  unidade: string;
  cliente: string;
  mensagem: string;
  resposta_ia: string;
  status: string;
}

export default function TratativasPage() {
  const [tratativas, setTratativas] = useState<Tratativa[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Estados para edição manual do texto
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState('');

  // Estados para controle do Prompt Customizado da IA
  const [customPrompt, setCustomPrompt] = useState<{ [key: string]: string }>({});
  const [loadingAi, setLoadingAi] = useState<{ [key: string]: boolean }>({});

  // Modal de nova ocorrência manual
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [unidade, setUnidade] = useState('Posto Beija-flor | Vespasiano (MG-424)');
  const [cliente, setCliente] = useState('');
  const [origem, setOrigem] = useState('Canal do Cliente');
  const [mensagem, setMensagem] = useState('');

  const loadTratativas = async () => {
    try {
      const res = await fetch('/api/tratativas');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setTratativas(data);
        }
      }
    } catch (err) {
      console.error('Erro ao carregar tratativas:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTratativas();
  }, []);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleEdit = (id: string, currentText: string) => {
    setEditingId(id);
    setEditedText(currentText);
  };

  const handleSaveText = (id: string) => {
    setTratativas(tratativas.map(t => (t.id === id || t.codigo === id) ? { ...t, resposta_ia: editedText } : t));
    setEditingId(null);
  };

  const handleRegenerateWithAi = async (t: Tratativa, indexKey: string) => {
    const instrucao = customPrompt[indexKey] || '';
    setLoadingAi(prev => ({ ...prev, [indexKey]: true }));

    try {
      const res = await fetch('/api/ai-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cliente: t.cliente,
          mensagem: t.mensagem,
          unidade: t.unidade,
          instrucao
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.resposta) {
          setTratativas(prev => prev.map((item, idx) => 
            (item.id === t.id || `${idx}` === indexKey) ? { ...item, resposta_ia: data.resposta } : item
          ));
        }
      }
    } catch (err) {
      console.error('Erro ao chamar IA:', err);
    } finally {
      setLoadingAi(prev => ({ ...prev, [indexKey]: false }));
    }
  };

  const handleFinalizar = (id?: string) => {
    if (!id) return;
    setTratativas(tratativas.map(t => (t.id === id || t.codigo === id) ? { ...t, status: 'Concluída' } : t));
  };

  const handleCriarTratativa = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliente || !mensagem) return;

    setSaving(true);

    const novaTratativa: Tratativa = {
      id: `manual-${Date.now()}`,
      codigo: `TR-${Math.floor(100 + Math.random() * 900)}`,
      origem,
      unidade,
      cliente,
      mensagem,
      resposta_ia: `Olá ${cliente}, recebemos sua manifestação referente ao ${unidade}. Nossa equipe de gestão já foi notificada para averiguar o ocorrido e tomar as devidas providências. Agradecemos por nos ajudar a melhorar nossos serviços!`,
      status: 'Pendente'
    };

    // Fixa na tela na hora
    setTratativas(prev => [novaTratativa, ...prev]);
    setSearchTerm('');
    setShowModal(false);
    setCliente('');
    setMensagem('');

    try {
      await fetch('/api/tratativas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaTratativa)
      });
    } catch (err) {
      console.error('Erro ao salvar no banco:', err);
    } finally {
      setSaving(false);
    }
  };

  const filtered = tratativas.filter(t => 
    (t.unidade && t.unidade.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (t.cliente && t.cliente.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (t.mensagem && t.mensagem.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Topbar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-sm hover:bg-slate-50 transition-all">
            <ArrowLeft className="w-4 h-4 text-slate-500" /> Voltar ao Dashboard
          </Link>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Central de Ocorrências</span>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#0f4c81] text-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              Banco de Dados Supabase Ativo
            </span>
            <h1 className="text-3xl font-black tracking-tight mt-3">Tratativa de Chamados e Feedback</h1>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
              Gestão de ocorrências internas, SAC e feedbacks críticos das 27 unidades registrados no banco de dados.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" /> Registrar Ocorrência
          </button>
        </div>

        {/* Busca */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm relative">
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por cliente, unidade ou conteúdo da mensagem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2 bg-slate-50 rounded-xl text-sm font-medium border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20"
          />
        </div>

        {/* Lista de Chamados */}
        {loading ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200/80 text-center flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#0f4c81] animate-spin" />
            <p className="text-sm font-bold text-slate-600">Conectando ao banco Supabase e buscando chamados...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200/80 text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">Nenhuma ocorrência registrada</h3>
            <p className="text-xs text-slate-400">Clique em "Registrar Ocorrência" para inserir o primeiro chamado real.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((t, idx) => {
              const itemKey = t.id || t.codigo || `${idx}`;
              const isAiLoading = loadingAi[itemKey] || false;

              return (
                <div key={itemKey} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
                  <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-400">{t.codigo}</span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">{t.origem}</span>
                        <h3 className="font-bold text-slate-900 text-sm">{t.unidade}</h3>
                      </div>
                      <p className="text-xs font-bold text-slate-700">{t.cliente}</p>
                    </div>

                    <span className={`px-3 py-1 rounded-xl text-xs font-bold ${
                      t.status === 'Concluída' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {t.status}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 font-medium italic bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    "{t.mensagem}"
                  </p>

                  {/* Resposta Recomendada por IA */}
                  <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#0f4c81] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> Resposta Recomendada por IA
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleCopy(itemKey, t.resposta_ia)}
                          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
                        >
                          {copiedId === itemKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedId === itemKey ? 'Copiado' : 'Copiar'}
                        </button>

                        {editingId !== itemKey && t.status !== 'Concluída' && (
                          <button
                            onClick={() => handleEdit(itemKey, t.resposta_ia)}
                            className="text-xs text-[#0f4c81] hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Edit3 className="w-3.5 h-3.5" /> Editar Texto
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Edição Direta do Texto */}
                    {editingId === itemKey ? (
                      <div className="space-y-3">
                        <textarea
                          rows={3}
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                          className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/30"
                        />
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setEditingId(null)} className="text-xs px-3 py-1.5 font-semibold text-slate-500">Cancelar</button>
                          <button onClick={() => handleSaveText(itemKey)} className="text-xs px-3.5 py-1.5 bg-[#0f4c81] text-white font-semibold rounded-xl shadow-sm">Salvar Alteração</button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-600 font-medium italic leading-relaxed">"{t.resposta_ia}"</p>
                    )}

                    {/* Campo de Comando para Reescrever com IA */}
                    {t.status !== 'Concluída' && editingId !== itemKey && (
                      <div className="pt-2 border-t border-slate-200/60 flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                        <input
                          type="text"
                          placeholder="Instrua a IA (ex: 'Torne mais formal', 'Ofereça o WhatsApp da gerência')..."
                          value={customPrompt[itemKey] || ''}
                          onChange={(e) => setCustomPrompt({ ...customPrompt, [itemKey]: e.target.value })}
                          className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20"
                        />
                        <button
                          onClick={() => handleRegenerateWithAi(t, itemKey)}
                          disabled={isAiLoading}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-50"
                        >
                          {isAiLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Wand2 className="w-3.5 h-3.5 text-amber-400" />}
                          {isAiLoading ? 'Gerando...' : 'Reescrever com IA'}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    {t.status === 'Concluída' ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">✓ Chamado Encerrado</span>
                    ) : (
                      <button
                        onClick={() => handleFinalizar(itemKey)}
                        className="px-4 py-2 bg-[#0f4c81] text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition-all flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" /> Enviar Resposta e Finalizar
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Novo Chamado Manual */}
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl border border-slate-200">
              <h2 className="text-lg font-black text-slate-900">Registrar Nova Ocorrência</h2>
              
              <form onSubmit={handleCriarTratativa} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Unidade Beija-flor</label>
                  <select
                    value={unidade}
                    onChange={(e) => setUnidade(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  >
                    <option>Posto Beija-flor | Vespasiano (MG-424)</option>
                    <option>Posto Beija-flor | Lourdes (Centro)</option>
                    <option>Churrascaria Beija-flor | Sabará (KM13)</option>
                    <option>Posto Beija-flor | Igarapé</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Origem da Manifestação</label>
                  <select
                    value={origem}
                    onChange={(e) => setOrigem(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  >
                    <option>Canal do Cliente</option>
                    <option>WhatsApp Presencial</option>
                    <option>Google Maps (Crítico)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Nome do Cliente</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Camila Aguiar"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Relato / Reclamação</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Descreva o ocorrido..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2 bg-[#0f4c81] text-white text-xs font-bold rounded-xl shadow-sm hover:bg-blue-900 disabled:opacity-50 flex items-center gap-1.5"
                  >
                    {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    {saving ? 'Salvando...' : 'Salvar no Supabase'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
