'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/pipeline', label: 'NEXUS Pipeline' },
  { href: '/services', label: 'Services' },
  { href: '/methode', label: 'Méthode' },
  { href: '/cas-clients', label: 'Cas clients' },
  { href: '/ressources', label: 'Ressources' },
  { href: '/a-propos', label: 'À propos' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream-50/95 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-navy-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/30" />
              <span className="font-serif text-gold-500 text-xl font-light relative">N</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-navy-900 text-lg tracking-tight" style={{ letterSpacing: '0.02em' }}>NEXUS</div>
              <div className="text-[9px] tracking-[0.25em] text-gold-600 uppercase font-medium">Intelligence</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium link-underline transition-colors ${
                  pathname === item.href ? 'text-gold-600' : 'text-navy-900 hover:text-gold-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-cream-50 text-xs font-semibold tracking-wider uppercase hover:bg-navy-800 transition-colors btn-primary"
            >
              Réserver un diagnostic
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-navy-900"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-stone-200 animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-base font-medium border-b border-stone-100 ${
                  pathname === item.href ? 'text-gold-600' : 'text-navy-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy-900 text-cream-50 text-sm font-semibold tracking-wider uppercase"
            >
              Réserver un diagnostic <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
