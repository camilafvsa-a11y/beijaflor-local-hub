import React from 'react';

export const metadata = {
  title: 'Beija-flor Local Hub',
  description: 'Gestão de Rede Grupo Beija-flor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-100 text-slate-800 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
