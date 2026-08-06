'use client';

import React, { useEffect, useState } from 'react';

interface Unit {
  id: string;
  code: string;
  status: string;
  name: string;
  brand: string;
  rating: number;
  pending_treatments: number;
}

// Lista das 24 unidades do Grupo Beija-flor
const INITIAL_UNITS: Unit[] = [
  { id: '1', code: 'UBF-01', name: 'Posto Beija-flor | Canal Barreiro', brand: 'Posto Beija-flor', status: 'Atenção', rating: 4.5, pending_treatments: 3 },
  { id: '2', code: 'UBF-02', name: 'Churrascaria Beija-flor | Juatuba', brand: 'Churrascaria Beija-flor', status: 'Operando Normalmente', rating: 4.8, pending_treatments: 1 },
  { id: '3', code: 'UBF-03', name: 'Posto Beija-flor | Contagem Centro', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.7, pending_treatments: 0 },
  { id: '4', code: 'UBF-04', name: 'Restaurante Beija-flor | Betim', brand: 'Restaurante Beija-flor', status: 'Operando Normalmente', rating: 4.9, pending_treatments: 0 },
  { id: '5', code: 'UBF-05', name: 'Posto Beija-flor | Anel Rodoviário', brand: 'Posto Beija-flor', status: 'Atenção', rating: 4.4, pending_treatments: 2 },
  { id: '6', code: 'UBF-06', name: 'Posto Beija-flor | Amazonas', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.6, pending_treatments: 0 },
  { id: '7', code: 'UBF-07', name: 'Churrascaria Beija-flor | Ibirité', brand: 'Churrascaria Beija-flor', status: 'Operando Normalmente', rating: 4.8, pending_treatments: 0 },
  { id: '8', code: 'UBF-08', name: 'Posto Beija-flor | Via Expressa', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.7, pending_treatments: 1 },
  { id: '9', code: 'UBF-09', name: 'Posto Beija-flor | Pampulha', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.9, pending_treatments: 0 },
  { id: '10', code: 'UBF-10', name: 'Restaurante Beija-flor | Sete Lagoas', brand: 'Restaurante Beija-flor', status: 'Atenção', rating: 4.3, pending_treatments: 4 },
  { id: '11', code: 'UBF-11', name: 'Posto Beija-flor | Sabará', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.6, pending_treatments: 0 },
  { id: '12', code: 'UBF-12', name: 'Posto Beija-flor | Santa Luzia', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.5, pending_treatments: 1 },
  { id: '13', code: 'UBF-13', name: 'Churrascaria Beija-flor | Divinópolis', brand: 'Churrascaria Beija-flor', status: 'Operando Normalmente', rating: 4.9, pending_treatments: 0 },
  { id: '14', code: 'UBF-14', name: 'Posto Beija-flor | Ribeirão das Neves', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.4, pending_treatments: 2 },
  { id: '15', code: 'UBF-15', name: 'Posto Beija-flor | Pedro Leopoldo', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.7, pending_treatments: 0 },
  { id: '16', code: 'UBF-16', name: 'Restaurante Beija-flor | Itaúna', brand: 'Restaurante Beija-flor', status: 'Operando Normalmente', rating: 4.8, pending_treatments: 0 },
  { id: '17', code: 'UBF-17', name: 'Posto Beija-flor | Nova Lima', brand: 'Posto Beija-flor', status: 'Atenção', rating: 4.5, pending_treatments: 1 },
  { id: '18', code: 'UBF-18', name: 'Posto Beija-flor | BH Shopping', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.9, pending_treatments: 0 },
  { id: '19', code: 'UBF-19', name: 'Churrascaria Beija-flor | Pará de Minas', brand: 'Churrascaria Beija-flor', status: 'Operando Normalmente', rating: 4.7, pending_treatments: 0 },
  { id: '20', code: 'UBF-20', name: 'Posto Beija-flor | Cristiano Machado', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.6, pending_treatments: 1 },
  { id: '21', code: 'UBF-21', name: 'Posto Beija-flor | Antonio Carlos', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.8, pending_treatments: 0 },
  { id: '22', code: 'UBF-22', name: 'Restaurante Beija-flor | Lagoa Santa', brand: 'Restaurante Beija-flor', status: 'Operando Normalmente', rating: 4.9, pending_treatments: 0 },
  { id: '23', code: 'UBF-23', name: 'Posto Beija-flor | Vespasiano', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.5, pending_treatments: 0 },
  { id: '24', code: 'UBF-24', name: 'Posto Beija-flor | Confins', brand: 'Posto Beija-flor', status: 'Operando Normalmente', rating: 4.8, pending_treatments: 0 },
];

export default function UnidadesPage() {
  const [units, setUnits] = useState<Unit[]>(INITIAL_UNITS);

  useEffect(() => {
    async function fetchUnits() {
      try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (url && key) {
          const res = await fetch(`${url}/rest/v1/units?select=*&order=code.asc`, {
            headers: { apikey: key, Authorization: `Bearer ${key}` },
          });

          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
              setUnits(data);
            }
          }
        }
      } catch (err) {
        console.error('Erro ao conectar Supabase:', err);
      }
    }

    fetchUnits();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      {/* Menu Lateral */}
      <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col justify-between hidden md:flex shrink-0">
        <div>
          <div className="mb-6">
            <h1 className="text-xl font-bold text-[#0F4C81]">Beija-flor</h1>
            <p className="text-xs text-slate-500">Local Hub — Gestão de Rede</p>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar unidade..."
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <nav className="space-y-1">
            <a href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <span>🏠</span><span>Início</span>
            </a>
            <a href="/unidades" className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-white bg-[#0F4C81] rounded-lg">
              <span>🏢</span><span>Unidades</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <span>📋</span><span>Tratativas</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <span>⭐</span><span>Avaliações</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <span>🛡️</span><span>Aprovações</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <span>💡</span><span>Inteligência</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <span>📊</span><span>Relatórios</span>
            </a>
          </nav>
        </div>

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
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-6 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-4 py-2 rounded-lg font-medium">
          ⚠️ AMBIENTE DE TESTE — PRODUCT OWNER EXCLUSIVE (HOMOLOGAÇÃO FASE 0)
        </div>

        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#0F4C81]">Painel das 24 Unidades</h1>
            <p className="text-slate-600 text-sm">Grupo Beija-flor — Rede Integrada</p>
          </div>
          <a href="/" className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
            <span>⬅</span> Voltar ao início
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {units.map((unit) => (
            <div key={unit.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#0F4C81] bg-blue-50 px-2 py-0.5 rounded">
                    {unit.code}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    unit.status === 'Atenção' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {unit.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-base">{unit.name}</h3>
                <p className="text-xs text-slate-400 mb-4">{unit.brand}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>⭐ {unit.rating}</span>
                <span className="font-semibold text-slate-500">
                  {unit.pending_treatments} tratativas
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
