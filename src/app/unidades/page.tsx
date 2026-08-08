'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Search, 
  Fuel, 
  UtensilsCrossed, 
  Building2, 
  CheckCircle2, 
  ExternalLink,
  Store,
  ArrowLeft,
  LayoutDashboard
} from 'lucide-react';

interface Location {
  id: string;
  title: string;
  address: string;
  category: string;
}

const locations: Location[] = [
  { id: "1", title: "Posto Beija-flor | Vespasiano (MG-424)", address: "MG-424 - Jardim da Glória, Vespasiano - MG", category: "Posto de Combustível" },
  { id: "2", title: "Churrascaria Beija-flor | Sabará (KM13)", address: "Rodovia BR-381, km13, s/n - Borba Gato, Sabará - MG", category: "Churrascaria" },
  { id: "3", title: "Posto Beija-flor | Lourdes (Centro)", address: "R. Rio de Janeiro, 1612 - Lourdes, Belo Horizonte - MG", category: "Posto de Combustível" },
  { id: "4", title: "Posto Beija-flor | Jardim Vitória", address: "Anel Rodoviário Celso Mello Azevedo, s.n. - Jardim Vitória, Belo Horizonte - MG", category: "Posto de Combustível" },
  { id: "5", title: "Posto Beija-flor | Morro Alto", address: "Avenida Existente, 1301 - Morro Alto, Vespasiano - MG", category: "Posto de Combustível" },
  { id: "6", title: "Posto Beija-flor | Igarapé", address: "BR-381, KM 513 - Igarapé - MG", category: "Posto de Combustível" },
  { id: "7", title: "Churrascaria Beija-flor | Nova União", address: "BR 381, km 409 - Nova União - MG", category: "Churrascaria" },
  { id: "8", title: "Churrascaria Beija-flor | Jardim Vitória", address: "Anel Rodoviário Celso Mello Azevedo, 28500 - Jardim Vitória, Belo Horizonte - MG", category: "Churrascaria" },
  { id: "9", title: "Churrascaria Beija-flor | Esmeraldas (BR-040)", address: "Rod. BR-040 - Das Letras, Esmeraldas - MG", category: "Churrascaria" },
  { id: "10", title: "Posto Beija-flor | Sabará (KM13)", address: "BR-381, KM 13, S/N - Borba Gato, Sabará - MG", category: "Posto de Combustível" },
  { id: "11", title: "Posto Shell | Sete Lagoas", address: "Avenida Marechal Castelo Branco - Universitário, Sete Lagoas - MG", category: "Posto de Combustível" },
  { id: "12", title: "Churrascaria Beija-flor | Jardim Teresópolis", address: "BR 381, Km 486 - Jardim Teresópolis, Betim - MG", category: "Churrascaria" },
  { id: "13", title: "Posto Beija-flor | Esmeraldas (BR-040)", address: "BR-040 - Das Letras, Esmeraldas - MG", category: "Posto de Combustível" },
  { id: "14", title: "Restaurante Beija-flor | Vespasiano", address: "MG-424 - Jardim da Glória, Vespasiano - MG", category: "Restaurante" },
  { id: "15", title: "Posto Beija-flor | San Genaro", address: "Avenida Ruth Brandão Azevedo, 379 - San Genaro, Ribeirão das Neves - MG", category: "Posto de Combustível" },
  { id: "16", title: "Posto Beija-flor | Sete Lagoas", address: "BR-040, Km 468 - Sete Lagoas - MG", category: "Posto de Combustível" },
  { id: "17", title: "Posto Beija-flor | Nova União", address: "BR 381, km 409 - Nova União - MG", category: "Posto de Combustível" },
  { id: "18", title: "Churrascaria Beija-flor | Juatuba (Betim)", address: "BR 262, km 3602 - Pingo D'água, Betim - MG", category: "Churrascaria" },
  { id: "19", title: "Restaurante Beija-flor | Santo Antônio do Amparo", address: "Rodovia Fernão Dias, s/n - km 606, Santo Antônio do Amparo - MG", category: "Restaurante" },
  { id: "20", title: "Posto Beija-Flor | Canal Barreiro", address: "Av. do Canal, 299 - Átila de Paiva, Belo Horizonte - MG", category: "Posto de Combustível" },
  { id: "21", title: "Posto Beija-flor | Juatuba (Betim)", address: "BR-262, S/N - KM 3602 - Pingo D'água, Betim - MG", category: "Posto de Combustível" },
  { id: "22", title: "Posto Beija-flor | Via Expressa (Betim)", address: "Avenida Campo de Ourique, 473 - Dom Bosco, Betim - MG", category: "Posto de Combustível" },
  { id: "23", title: "Posto Beija-flor | Jardim Teresópolis", address: "BR 381, Km 486 - Jardim Teresópolis, Betim - MG", category: "Posto de Combustível" },
  { id: "24", title: "Posto Beija-flor | Teresa Cristina (Belo Horizonte)", address: "Av. Teresa Cristina, 5600 - Belo Horizonte - MG", category: "Posto de Combustível" },
  { id: "25", title: "Posto Beija-flor | Santa Tereza", address: "Rua Mármore, 21 - Santa Tereza, Belo Horizonte - MG", category: "Posto de Combustível" },
  { id: "26", title: "Grupo Beija-flor (Sede)", address: "Belo Horizonte - MG", category: "Escritório da empresa" },
  { id: "27", title: "Posto Beija-flor | Santo Antônio do Amparo", address: "Rodovia Fernão Dias, S/N - KM 606, Santo Antônio do Amparo - MG", category: "Posto de Combustível" }
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Posto de Combustível':
        return <Fuel className="w-4 h-4 text-amber-500" />;
      case 'Churrascaria':
      case 'Restaurante':
        return <UtensilsCrossed className="w-4 h-4 text-orange-500" />;
      case 'Escritório da empresa':
        return <Building2 className="w-4 h-4 text-blue-500" />;
      default:
        return <Store className="w-4 h-4 text-gray-500" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Posto de Combustível':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Churrascaria':
      case 'Restaurante':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Escritório da empresa':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Navigation Bar / Return Link */}
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm transition-all hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            Voltar ao Dashboard
          </Link>

          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            Beija-flor Local Hub
          </Link>
        </div>

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">Gestão de Unidades</h1>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Google Meu Negócio
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-1">
              Exibindo <span className="font-semibold text-slate-800">{filteredLocations.length}</span> de <span className="font-semibold text-slate-800">{locations.length}</span> unidades cadastradas no Grupo Beija-flor.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar unidade por nome ou endereço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${getCategoryBadgeClass(loc.category)}`}>
                    {getCategoryIcon(loc.category)}
                    {loc.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-medium">#{loc.id.padStart(2, '0')}</span>
                </div>

                <h2 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {loc.title}
                </h2>

                <p className="text-xs text-slate-500 mt-2 flex items-start gap-1.5 leading-relaxed">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1.5 bg-emerald-50/60 px-2 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Sincronizado
                </span>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.title} ${loc.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
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
