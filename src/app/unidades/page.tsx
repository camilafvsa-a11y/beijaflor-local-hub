import React from 'react';

export const revalidate = 0;

interface Location {
  id: string;
  title: string;
  address: string;
  category: string;
}

const locations: Location[] = [
  {
    id: "1",
    title: "Posto Beija-flor | Vespasiano (MG-424)",
    address: "MG-424 - Jardim da Glória, Vespasiano - MG",
    category: "Posto de Combustível"
  },
  {
    id: "2",
    title: "Churrascaria Beija-flor | Sabará (KM13)",
    address: "Rodovia BR-381, km13, s/n - Borba Gato, Sabará - MG",
    category: "Churrascaria"
  },
  {
    id: "3",
    title: "Posto Beija-flor | Lourdes (Centro)",
    address: "R. Rio de Janeiro, 1612 - Lourdes, Belo Horizonte - MG",
    category: "Posto de Combustível"
  },
  {
    id: "4",
    title: "Posto Beija-flor | Jardim Vitória",
    address: "Anel Rodoviário Celso Mello Azevedo, s.n. - Jardim Vitória, Belo Horizonte - MG",
    category: "Posto de Combustível"
  },
  {
    id: "5",
    title: "Posto Beija-flor | Morro Alto",
    address: "Avenida Existente, 1301 - Morro Alto, Vespasiano - MG",
    category: "Posto de Combustível"
  },
  {
    id: "6",
    title: "Posto Beija-flor | Igarapé",
    address: "BR-381, KM 513 - Igarapé - MG",
    category: "Posto de Combustível"
  },
  {
    id: "7",
    title: "Churrascaria Beija-flor | Nova União",
    address: "BR 381, km 409 - Nova União - MG",
    category: "Churrascaria"
  },
  {
    id: "8",
    title: "Churrascaria Beija-flor | Jardim Vitória",
    address: "Anel Rodoviário Celso Mello Azevedo, 28500 - Jardim Vitória, Belo Horizonte - MG",
    category: "Churrascaria"
  },
  {
    id: "9",
    title: "Churrascaria Beija-flor | Esmeraldas (BR-040)",
    address: "Rod. BR-040 - Das Letras, Esmeraldas - MG",
    category: "Churrascaria"
  },
  {
    id: "10",
    title: "Posto Beija-flor | Sabará (KM13)",
    address: "BR-381, KM 13, S/N - Borba Gato, Sabará - MG",
    category: "Posto de Combustível"
  },
  {
    id: "11",
    title: "Posto Shell | Sete Lagoas",
    address: "Avenida Marechal Castelo Branco - Universitário, Sete Lagoas - MG",
    category: "Posto de Combustível"
  },
  {
    id: "12",
    title: "Churrascaria Beija-flor | Jardim Teresópolis",
    address: "BR 381, Km 486 - Jardim Teresópolis, Betim - MG",
    category: "Churrascaria"
  },
  {
    id: "13",
    title: "Posto Beija-flor | Esmeraldas (BR-040)",
    address: "BR-040 - Das Letras, Esmeraldas - MG",
    category: "Posto de Combustível"
  },
  {
    id: "14",
    title: "Restaurante Beija-flor | Vespasiano",
    address: "MG-424 - Jardim da Glória, Vespasiano - MG",
    category: "Restaurante"
  },
  {
    id: "15",
    title: "Posto Beija-flor | San Genaro",
    address: "Avenida Ruth Brandão Azevedo, 379 - San Genaro, Ribeirão das Neves - MG",
    category: "Posto de Combustível"
  },
  {
    id: "16",
    title: "Posto Beija-flor | Sete Lagoas",
    address: "BR-040, Km 468 - Sete Lagoas - MG",
    category: "Posto de Combustível"
  },
  {
    id: "17",
    title: "Posto Beija-flor | Nova União",
    address: "BR 381, km 409 - Nova União - MG",
    category: "Posto de Combustível"
  },
  {
    id: "18",
    title: "Churrascaria Beija-flor | Juatuba (Betim)",
    address: "BR 262, km 3602 - Pingo D'água, Betim - MG",
    category: "Churrascaria"
  },
  {
    id: "19",
    title: "Restaurante Beija-flor | Santo Antônio do Amparo",
    address: "Rodovia Fernão Dias, s/n - km 606, Santo Antônio do Amparo - MG",
    category: "Restaurante"
  },
  {
    id: "20",
    title: "Posto Beija-Flor | Canal Barreiro",
    address: "Av. do Canal, 299 - Átila de Paiva, Belo Horizonte - MG",
    category: "Posto de Combustível"
  },
  {
    id: "21",
    title: "Posto Beija-flor | Juatuba (Betim)",
    address: "BR-262, S/N - KM 3602 - Pingo D'água, Betim - MG",
    category: "Posto de Combustível"
  },
  {
    id: "22",
    title: "Posto Beija-flor | Via Expressa (Betim)",
    address: "Avenida Campo de Ourique, 473 - Dom Bosco, Betim - MG",
    category: "Posto de Combustível"
  },
  {
    id: "23",
    title: "Posto Beija-flor | Jardim Teresópolis",
    address: "BR 381, Km 486 - Jardim Teresópolis, Betim - MG",
    category: "Posto de Combustível"
  },
  {
    id: "24",
    title: "Posto Beija-flor | Teresa Cristina (Belo Horizonte)",
    address: "Av. Teresa Cristina, 5600 - Belo Horizonte - MG",
    category: "Posto de Combustível"
  },
  {
    id: "25",
    title: "Posto Beija-flor | Santa Tereza",
    address: "Rua Mármore, 21 - Santa Tereza, Belo Horizonte - MG",
    category: "Posto de Combustível"
  },
  {
    id: "26",
    title: "Grupo Beija-flor (Sede)",
    address: "Belo Horizonte - MG",
    category: "Escritório da empresa"
  },
  {
    id: "27",
    title: "Posto Beija-flor | Santo Antônio do Amparo",
    address: "Rodovia Fernão Dias, S/N - KM 606, Santo Antônio do Amparo - MG",
    category: "Posto de Combustível"
  }
];

export default function UnidadesPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid #eaeaea', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#111', marginBottom: '0.5rem' }}>
          Gestão de Unidades ({locations.length})
        </h1>
        <p style={{ color: '#666', fontSize: '0.95rem' }}>
          Unidades sincronizadas com o Google Meu Negócio do Grupo Beija-flor.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {locations.map((loc) => (
          <div
            key={loc.id}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '1.25rem',
              backgroundColor: '#ffffff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  backgroundColor: '#edf2f7',
                  color: '#2d3748'
                }}>
                  {loc.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#a0aec0' }}>#{loc.id}</span>
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>
                {loc.title}
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: '1.4' }}>
                📍 {loc.address}
              </p>
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #edf2f7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#38a169', fontWeight: '500' }}>
                ● Sincronizado Google
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
