import Link from 'next/link';
import { Check, Minus, ArrowUpRight } from 'lucide-react';
import { PIPELINE_PLANS, PIPELINE_LOGIN_URL, fcfa } from '@/lib/pipeline';

const MODULES: { key: 'crm' | 'marketing' | 'ai' | 'api'; label: string }[] = [
  { key: 'crm', label: 'CRM : prospects, contacts, pipeline' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'ai', label: 'Assistant IA' },
  { key: 'api', label: 'API' },
];

export function PipelinePlans() {
  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {PIPELINE_PLANS.map((p) => (
          <article
            key={p.code}
            className={`relative flex flex-col p-8 border ${p.featured ? 'bg-navy-900 text-cream-50 border-navy-900' : 'bg-cream-50 border-stone-200'}`}
          >
            {p.featured && (
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-bold">Recommandé</div>
            )}
            <h3 className="font-serif text-3xl font-light mb-2" style={{ letterSpacing: '-0.01em' }}>{p.name}</h3>
            <p className={`text-sm mb-6 ${p.featured ? 'text-cream-50/70' : 'text-navy-800/70'}`}>{p.tagline}</p>

            <div className={`mb-6 pb-6 border-b ${p.featured ? 'border-white/10' : 'border-stone-200'}`}>
              {p.code === 'trial' ? (
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-gold-600 font-medium">Gratuit</span>
                  <span className="text-sm opacity-60">{p.priceNote}</span>
                </div>
              ) : p.monthly === null ? (
                <div className="font-serif text-xl text-gold-600 font-medium leading-snug">{p.priceNote}</div>
              ) : (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-serif text-4xl font-medium ${p.featured ? 'text-gold-500' : 'text-gold-600'}`}>{fcfa(p.monthly)}</span>
                    <span className="text-sm opacity-60">FCFA / mois</span>
                  </div>
                  {p.annual ? <div className="text-xs opacity-60 mt-2">ou {fcfa(p.annual)} FCFA / an</div> : null}
                </>
              )}
            </div>

            <ul className="space-y-2 text-sm mb-6">
              <li>{p.limits.users} utilisateur{p.limits.users > 1 ? 's' : ''}</li>
              <li>{fcfa(p.limits.contacts)} contacts</li>
              <li>{fcfa(p.limits.companies)} entreprises</li>
              <li>{fcfa(p.limits.opportunities)} opportunités</li>
            </ul>

            <ul className={`space-y-2 text-sm mb-8 pt-6 border-t ${p.featured ? 'border-white/10' : 'border-stone-200'}`}>
              {MODULES.map((m) => (
                <li key={m.key} className={`flex gap-2 ${p.modules[m.key] ? '' : 'opacity-45'}`}>
                  {p.modules[m.key]
                    ? <Check className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" aria-label="Inclus" />
                    : <Minus className="w-4 h-4 mt-0.5 shrink-0" aria-label="Non inclus" />}
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                href={`/contact?service=${p.service}`}
                className={`inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                  p.featured ? 'bg-gold-500 text-navy-900 hover:bg-gold-400' : 'bg-navy-900 text-cream-50 hover:bg-navy-800'
                }`}
              >
                {p.cta} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-6">
        <div className="p-6 bg-cream-100 border border-stone-200">
          <h4 className="font-serif text-xl text-navy-900 mb-2">Comment souscrire ?</h4>
          <ol className="text-sm text-navy-800/80 space-y-1.5 list-decimal pl-5">
            <li>Choisissez votre offre et envoyez votre demande de souscription.</li>
            <li>Notre équipe confirme et active votre offre sous 24 heures ouvrées.</li>
            <li>Vous accédez ensuite à votre espace NEXUS Pipeline avec votre compte.</li>
          </ol>
          <p className="text-xs text-navy-800/60 mt-3">Le paiement en ligne n'est pas encore disponible : l'activation et le règlement se font avec notre équipe (virement, Mobile Money).</p>
        </div>
        <div className="p-6 bg-cream-100 border border-stone-200 flex flex-col justify-between gap-4">
          <div>
            <h4 className="font-serif text-xl text-navy-900 mb-2">Offre déjà souscrite ?</h4>
            <p className="text-sm text-navy-800/80">Connectez-vous directement à votre espace NEXUS Pipeline.</p>
          </div>
          <a href={PIPELINE_LOGIN_URL} className="inline-flex items-center gap-2 self-start text-xs font-semibold tracking-wider uppercase text-navy-900 hover:text-gold-600">
            Accéder à NEXUS Pipeline <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
