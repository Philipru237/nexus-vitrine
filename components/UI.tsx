import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Étiquette de section (petite, gold, tracking large)
export function SectionLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-600 font-semibold ${className}`}>
      <div className="w-8 h-px bg-gold-600" />
      <span>{children}</span>
    </div>
  );
}

// Titre éditorial
export function EditorialHeading({ children, className = '', as: As = 'h2' }: { children: React.ReactNode; className?: string; as?: any }) {
  return (
    <As className={`font-serif font-light text-navy-900 leading-[1.05] tracking-[-0.02em] ${className}`}>
      {children}
    </As>
  );
}

// Bouton primaire (navy)
export function ButtonPrimary({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Link
      href={href}
      {...props}
      className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-navy-800 transition-colors"
    >
      {children}
      <ArrowUpRight className="w-4 h-4" />
    </Link>
  );
}

// Bouton secondaire (or)
export function ButtonGold({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Link
      href={href}
      {...props}
      className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold-400 transition-colors"
    >
      {children}
      <ArrowUpRight className="w-4 h-4" />
    </Link>
  );
}

// Lien éditorial
export function EditorialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 group"
    >
      <span className="link-underline">{children}</span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

// Carte service avec hover refined
export function ServiceCard({
  numero, titre, prix, duree, description, features, href,
}: {
  numero: string;
  titre: string;
  prix: string;
  duree: string;
  description: string;
  features: string[];
  href: string;
}) {
  return (
    <Link href={href} className="group block relative bg-cream-50 border border-stone-200 p-8 lg:p-10 hover:border-navy-900 transition-all duration-500 overflow-hidden">
      <div className="absolute -top-px -right-px bg-navy-900 text-cream-50 px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-semibold group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
        {numero}
      </div>

      <div className="mb-6 pt-2">
        <div className="font-serif text-3xl lg:text-4xl text-navy-900 font-light leading-tight" style={{ letterSpacing: '-0.02em' }}>
          {titre}
        </div>
      </div>

      <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-stone-200">
        <div className="font-serif text-2xl text-gold-600 font-medium">{prix}</div>
        <div className="text-[10px] tracking-[0.2em] uppercase text-navy-900/60">{duree}</div>
      </div>

      <p className="text-sm text-navy-800/80 leading-relaxed mb-6">{description}</p>

      <ul className="space-y-2 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2 text-xs text-navy-800">
            <span className="text-gold-600">→</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-navy-900 group-hover:text-gold-600 transition-colors">
        Découvrir
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}

// Statistique éditoriale
export function StatBlock({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="border-l-2 border-gold-500 pl-5">
      <div className="font-serif text-5xl lg:text-6xl font-light text-navy-900 leading-none mag-number" style={{ letterSpacing: '-0.03em' }}>
        {value}
      </div>
      <div className="mt-3 text-sm font-semibold text-navy-900 uppercase tracking-wider">{label}</div>
      {sub && <div className="mt-1 text-xs text-navy-800/60">{sub}</div>}
    </div>
  );
}

// Container standard
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-6 lg:px-12 ${className}`}>{children}</div>;
}

// Section avec padding standard
export function Section({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <section className={`py-20 lg:py-32 ${dark ? 'bg-navy-900 text-cream-50' : ''} ${className}`}>
      {children}
    </section>
  );
}
