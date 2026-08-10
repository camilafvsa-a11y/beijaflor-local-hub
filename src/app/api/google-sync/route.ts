import { NextResponse } from 'next/server';

export async function GET() {
  const locations = [
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

  return NextResponse.json({
    success: true,
    totalLocations: locations.length,
    locations: locations
  });
}
