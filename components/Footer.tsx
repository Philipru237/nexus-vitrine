import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Send, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-50 relative grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative">
        {/* Top section : marque + CTA */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-500 flex items-center justify-center">
                <span className="font-serif text-navy-900 text-2xl font-light">N</span>
              </div>
              <div>
                <div className="font-serif text-xl tracking-tight">NEXUS</div>
                <div className="text-[10px] tracking-[0.25em] text-gold-500 uppercase">Intelligence</div>
              </div>
            </div>
            <p className="font-serif text-2xl lg:text-3xl font-light leading-snug mb-6" style={{ letterSpacing: '-0.01em' }}>
              Le pilotage financier des PME ambitieuses d'<em className="text-gold-500 italic">Afrique Centrale</em>.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 text-xs font-semibold tracking-wider uppercase hover:bg-gold-400 transition-colors"
            >
              Réserver un échange
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] tracking-[0.25em] text-gold-500 uppercase mb-4 font-semibold">Services</h4>
              <ul className="space-y-2.5 text-sm text-cream-50/80">
                <li><Link href="/services#diagnostic" className="hover:text-gold-500 transition-colors">Diagnostic 360°</Link></li>
                <li><Link href="/services#sprint" className="hover:text-gold-500 transition-colors">Sprint Stratégie</Link></li>
                <li><Link href="/services#retainers" className="hover:text-gold-500 transition-colors">Missions récurrentes</Link></li>
                <li><Link href="/services#cfo" className="hover:text-gold-500 transition-colors">DAF externalisé</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.25em] text-gold-500 uppercase mb-4 font-semibold">Cabinet</h4>
              <ul className="space-y-2.5 text-sm text-cream-50/80">
                <li><Link href="/a-propos" className="hover:text-gold-500 transition-colors">À propos</Link></li>
                <li><Link href="/methode" className="hover:text-gold-500 transition-colors">Notre méthode</Link></li>
                <li><Link href="/cas-clients" className="hover:text-gold-500 transition-colors">Études de cas</Link></li>
                <li><Link href="/ressources" className="hover:text-gold-500 transition-colors">Ressources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.25em] text-gold-500 uppercase mb-4 font-semibold">Contact</h4>
              <ul className="space-y-3 text-sm text-cream-50/80">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-gold-500 shrink-0" />
                  <span>Yaoundé, Cameroun</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 mt-0.5 text-gold-500 shrink-0" />
                  <a href="tel:+237650946342" className="hover:text-gold-500">+237 650 946 342</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 mt-0.5 text-gold-500 shrink-0" />
                  <a href="mailto:contact@nexus-intelligence.cm" className="hover:text-gold-500 break-all">contact@nexus-intelligence.cm</a>
                </li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a href="https://wa.me/237650946342" target="_blank" rel="noopener" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-colors" aria-label="WhatsApp">
                  <Send className="w-3.5 h-3.5" />
                </a>
                <a href="#" target="_blank" rel="noopener" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="#" target="_blank" rel="noopener" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-colors" aria-label="Facebook">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-cream-50/50">
          <div>
            © {new Date().getFullYear()} NEXUS Intelligence · Tous droits réservés
            <span className="hidden md:inline dot-separator">Référentiel OHADA · SYSCOHADA</span>
          </div>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-gold-500">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-gold-500">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
