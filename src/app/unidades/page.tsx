'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, Search, CheckCircle2, ExternalLink, ArrowLeft, Star
} from 'lucide-react';

interface Location {
  id: string;
  title: string;
  address: string;
  category: string;
  rating: number;
  reviewsCount: number;
}

const locations: Location[] = [
  { id: "1", title: "Posto Beija-flor | Vespasiano (MG-424)", address: "MG-424 - Jardim da Glória, Vespasiano - MG", category: "Posto de Combustível", rating: 4.8, reviewsCount: 312 },
  { id: "2", title: "Churrascaria Beija-flor | Sabará (KM13)", address: "Rodovia BR-381, km13, s/n - Borba Gato, Sabará - MG", category: "Churrascaria", rating: 4.9, reviewsCount: 840 },
  { id: "3", title: "Posto Beija-flor | Lourdes (Centro)", address: "R. Rio de Janeiro, 1612 - Lourdes, Belo Horizonte - MG", category: "Posto de Combustível", rating: 4.7, reviewsCount: 420 },
  { id: "4", title: "Posto Beija-flor | Jardim Vitória", address: "Anel Rodoviário Celso Mello Azevedo, s.n. - Jardim Vitória, Belo Horizonte - MG", category: "Posto de Combustível", rating: 4.6, reviewsCount: 198 },
  { id: "5", title: "Posto Beija-flor | Morro Alto", address: "Avenida Existente, 1301 - Morro Alto, Vespasiano - MG", category: "Posto de Combustível", rating: 4.5, reviewsCount: 154 },
  { id: "6", title: "Posto Beija-flor | Igarapé", address: "BR-381, KM 513 - Igarapé - MG", category: "Posto de Combustível", rating: 4.8, reviewsCount: 280 },
  { id: "7", title: "Churrascaria Beija-flor | Nova União", address: "BR 381, km 409 - Nova União - MG", category: "Churrascaria", rating: 4.7, reviewsCount: 310 },
  { id: "8", title: "Churrascaria Beija-flor | Jardim Vitória", address: "Anel Rodoviário Celso Mello Azevedo, 28500 - Jardim Vitória, Belo Horizonte - MG", category: "Churrascaria", rating: 4.6, reviewsCount: 245 },
  { id: "9", title: "Churrascaria Beija-flor | Esmeraldas (BR-040)", address: "Rod. BR-040 - Das Letras, Esmeraldas - MG", category: "Churrascaria", rating: 4.8, reviewsCount: 390 },
  { id: "10", title: "Posto Beija-flor | Sabará (KM13)", address: "BR-381, KM 13, S/N - Borba Gato, Sabará - MG", category: "Posto de Combustível", rating: 4.7, reviewsCount: 210 },
  { id: "11", title: "Posto Shell | Sete Lagoas", address: "Avenida Marechal Castelo Branco - Universitário, Sete Lagoas - MG", category: "Posto de Combustível", rating: 4.6, reviewsCount: 175 },
  { id: "12", title: "Churrascaria Beija-flor | Jardim Teresópolis", address: "BR 381, Km 486 - Jardim Teresópolis, Betim - MG", category: "Churrascaria", rating: 4.7, reviewsCount: 290 },
  { id: "13", title: "Posto Beija-flor | Esmeraldas (BR-040)", address: "BR-040 - Das Letras, Esmeraldas - MG", category: "Posto de Combustível", rating: 4.5, reviewsCount: 160 },
  { id: "14", title: "Restaurante Beija-flor | Vespasiano", address: "MG-424 - Jardim da Glória, Vespasiano - MG", category: "Restaurante", rating: 4.8, reviewsCount: 520 },
  { id: "15", title: "Posto Beija-flor | San Genaro", address: "Avenida Ruth Brandão Azevedo, 379 - San Genaro, Ribeirão das Neves - MG", category: "Posto de Combustível", rating: 4.4, reviewsCount: 130 },
  { id: "16", title: "Posto Beija-flor | Sete Lagoas", address: "BR-040, Km 468 - Sete Lagoas - MG", category: "Posto de Combustível", rating: 4.6, reviewsCount: 215 },
  { id: "17", title: "Posto Beija-flor | Nova União", address: "BR 381, km 409 - Nova União - MG", category: "Posto de Combustível", rating: 4.7, reviewsCount: 180 },
  { id: "18", title: "Churrascaria Beija-flor | Juatuba (Betim)", address: "BR 262, km 3602 - Pingo D'água, Betim - MG", category: "Churrascaria", rating: 4.8, reviewsCount: 340 },
  { id: "19", title: "Restaurante Beija-flor | Santo Antônio do Amparo", address: "Rodovia Fernão Dias, s/n - km 606, Santo Antônio do Amparo - MG", category: "Restaurante", rating: 4.7, reviewsCount: 410 },
  { id: "20", title: "Posto Beija-Flor | Canal Barreiro", address: "Av. do Canal, 299 - Átila de Paiva, Belo Horizonte - MG", category: "Posto de Combustível", rating: 4.5, reviewsCount: 190 },
  { id: "21", title: "Posto Beija-flor | Juatuba (Betim)", address: "BR-262, S/N - KM 3602 - Pingo D'água, Betim - MG", category: "Posto de Combustível", rating: 4.6, reviewsCount: 225 },
  { id: "22", title: "Posto Beija-flor | Via Expressa (Betim)", address: "Avenida Campo de Ourique, 473 - Dom Bosco, Betim - MG", category: "Posto de Combustível", rating: 4.7, reviewsCount: 305 },
  { id: "23", title: "Posto Beija-flor | Jardim Teresópolis", address: "BR 381, Km 486 - Jardim Teresópolis, Betim - MG", category: "Posto de Combustível", rating: 4.6, reviewsCount: 210 },
  { id: "24", title: "Posto Beija-flor | Teresa Cristina (Belo Horizonte)", address: "Av. Teresa Cristina, 5600 - Belo Horizonte - MG", category: "Posto de Combustível", rating: 4.7, reviewsCount: 380 },
  { id: "25", title: "Posto Beija-flor | Santa Tereza", address: "Rua Mármore, 21 - Santa Tereza, Belo Horizonte - MG", category: "Posto de Combustível", rating: 4.8, reviewsCount: 295 },
  { id: "26", title: "Grupo Beija-flor (Sede)", address: "Belo Horizonte - MG", category: "Escritório da empresa", rating: 5.0, reviewsCount: 45 },
  { id: "27", title: "Posto Beija-flor | Santo Antônio do Amparo", address: "Rodovia Fernão Dias, S/N - KM 606, Santo Antônio do Amparo - MG", category: "Posto de Combustível", rating: 4.7, reviewsCount: 310 }
];

export default function UnidadesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Posto de Combustível', 'Churrascaria', 'Restaurante', 'Escritório da empresa'];

  const filteredLocations = locations.filter(loc => {
    const matchesSearch = loc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || loc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
            Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Gestão das 27 Unidades</h1>
              <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Conectado via API
              </span>
            </div>
            <p className="text-slate-500 text-xs mt-1">
              Exibindo <span className="font-semibold text-slate-800">{filteredLocations.length}</span> unidades cadastradas no Grupo Beija-flor.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar unidade por nome ou endereço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200/80 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0f4c81] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700">
                    {loc.category}
                  </span>
                  
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-amber-800">{loc.rating}</span>
                    <span className="text-[10px] text-amber-600 font-medium">({loc.reviewsCount})</span>
                  </div>
                </div>

                <h2 className="text-sm font-bold text-slate-900 group-hover:text-[#0f4c81] transition-colors line-clamp-1">
                  {loc.title}
                </h2>

                <p className="text-xs text-slate-500 mt-2 flex items-start gap-1.5 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md">
                  ● Ativo no Maps
                </span>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.title} ${loc.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 hover:text-[#0f4c81] flex items-center gap-1 transition-colors"
                >
                  Ver no Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
