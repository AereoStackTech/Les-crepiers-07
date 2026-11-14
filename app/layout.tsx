import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Les crepiers 07 — Crêperie Sucrée & Salée à Safi',
  description:
    "Crêperie artisanale à Quartier l'hôpital, Safi (dès 16h00). Crêpe Oreo & Pistache, Crevettes & Fromage, Poulet & Champignons. Commande directe sur WhatsApp.",
  openGraph: {
    title: 'Les crepiers 07 — Crêperie Sucrée & Salée à Safi',
    description:
      "Crêpes sucrées & salées à emporter, en Service Drive ou sur place à Quartier l'hôpital, Safi.",
    type: 'website',
    locale: 'fr_MA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les crepiers 07 — Crêperie Safi',
    description:
      "Crêpes gourmandes sucrées & salées dès 16h00 à Quartier l'hôpital, Safi.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-cream-batter text-espresso-dark antialiased">
        {children}
      </body>
    </html>
  );
}
