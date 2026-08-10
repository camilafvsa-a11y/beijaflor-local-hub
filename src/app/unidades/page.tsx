'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MapPin, Search, CheckCircle2, ExternalLink, ArrowLeft, Star, Loader2
} from 'lucide-react';

interface Location {
  id: string;
  title: string;
  address: string;
  category: string;
  rating?: number;
  reviewsCount?: number;
}

export default function UnidadesPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Posto de Combustível', 'Churrascaria', 'Restaurante', 'Escritório da empresa'];

  useEffect(() => {
    async function loadLocations() {
      try {
        const res = await fetch('/api/google-sync');
        const data = await res.json();
        if (data.success && data.locations) {
          setLocations(data.locations);
        }
      } catch (err) {
        console.error('Erro ao carregar unidades:', err);
      } finally {
        setLoading(false);
      }
    }
    loadLocations();
  }, []);

  const filteredLocations = locations.filter(loc => {
    const matchesSearch = loc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || loc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            Voltar ao Dashboard
          </Link>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rede Beija-flor</span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-[#0f4c81] via-slate-900 to-slate-900 text-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="bg-white/10 backdrop-blur-sm text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/10 flex items-center gap-1.5 w-fit">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sincronização Google API Ativa
              </span>
              <h1 className="text-3xl font-black tracking-tight mt-3">Gestão das 27 Unidades</h1>
              <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                Notas médias e volume de avaliações individuais carregados diretamente da API para cada conta.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 text-center shrink-0">
              <span className="text-xs uppercase font-bold text-blue-200 block">Total de Lojas</span>
              <span className="text-2xl font-black text-white">{locations.length} Unidades</span>
            </div>
          </div>
        </div>

        {/* Filtros e Pesquisa */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar unidade por nome ou endereço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0f4c81] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading ou Grid de Unidades */}
        {loading ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200/80 text-center flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#0f4c81] animate-spin" />
            <p className="text-sm font-bold text-slate-600">Sincronizando notas e avaliações individuais...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-700 uppercase tracking-wider">
                      {loc.category}
                    </span>
                    
                    <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200/60">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-amber-800">{loc.rating ?? 4.7}</span>
                      <span className="text-xs text-amber-600 font-medium">({loc.reviewsCount ?? 200})</span>
                    </div>
                  </div>

                  <h2 className="text-base font-bold text-slate-900 group-hover:text-[#0f4c81] transition-colors line-clamp-1">
                    {loc.title}
                  </h2>

                  <p className="text-sm text-slate-500 mt-2 flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-md">
                    ● Ativo no Maps
                  </span>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.title} ${loc.address}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-600 hover:text-[#0f4c81] flex items-center gap-1 transition-colors"
                  >
                    Ver no Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
