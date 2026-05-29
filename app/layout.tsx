import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'NEXUS Intelligence — Cabinet de modélisation financière premium · Afrique Centrale',
    template: '%s · NEXUS Intelligence',
  },
  description: "Pilotage financier, modélisation et DAF externalisé pour PME ambitieuses du Cameroun, Gabon, Congo. Diagnostic 360°, Sprint Stratégie, missions récurrentes. Conformité OHADA/SYSCOHADA.",
  keywords: ['cabinet financier Cameroun', 'DAF externalisé Yaoundé', 'modélisation financière PME', 'diagnostic financier', 'OHADA SYSCOHADA', 'conseil PME Afrique Centrale'],
  authors: [{ name: 'Philippe', url: 'https://nexus-intelligence.cm' }],
  openGraph: {
    type: 'website',
    locale: 'fr_CM',
    url: 'https://nexus-intelligence.cm',
    title: 'NEXUS Intelligence — Cabinet de modélisation financière',
    description: 'Pilotage financier premium pour PME d\'Afrique Centrale.',
    siteName: 'NEXUS Intelligence',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-cream-50 text-navy-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
