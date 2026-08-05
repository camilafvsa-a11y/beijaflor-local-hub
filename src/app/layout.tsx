import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Beija-flor Local Hub — Versão Piloto 1.0',
  description: 'Sistema Operacional e Gestão da Rede Grupo Beija-flor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="bg-amber-500 text-slate-900 text-xs font-bold py-1.5 px-4 text-center border-b border-amber-600 shadow-sm flex items-center justify-center gap-2">
          <span>⚠️ AMBIENTE DE TESTE — PRODUCT OWNER EXCLUSIVE (HOMOLOGAÇÃO FASE 0)</span>
        </div>
        {children}
      </body>
    </html>
  )
}