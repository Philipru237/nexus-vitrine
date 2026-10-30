import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { PIPELINE_PLANS, PIPELINE_LOGIN_URL, annualMonthsFree, fcfa, pipelineRegisterUrl } from '@/lib/pipeline';

export function PipelinePlans() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {PIPELINE_PLANS.map((p) => (
          <article
            key={p.code}
            className={`relative flex flex-col p-8 border ${p.featured ? 'bg-navy-900 text-cream-50 border-navy-900' : 'bg-cream-50 border-stone-200'}`}
          >
            {p.featured && (
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-bold">Le plus populaire</div>
            )}
            <h3 className="font-serif text-3xl font-light mb-2" style={{ letterSpacing: '-0.01em' }}>{p.name}</h3>
            <p className={`text-sm mb-6 ${p.featured ? 'text-cream-50/70' : 'text-navy-800/70'}`}>{p.tagline}</p>

            <div className={`mb-6 pb-6 border-b ${p.featured ? 'border-white/10' : 'border-stone-200'}`}>
              <div className="flex items-baseline gap-2">
                <span className={`font-serif text-4xl font-medium ${p.featured ? 'text-gold-500' : 'text-gold-600'}`}>{fcfa(p.monthly)}</span>
                <span className="text-sm opacity-60">FCFA / mois</span>
              </div>
              <p className={`mt-2 text-sm ${p.featured ? 'text-cream-50/80' : 'text-navy-800/80'}`}>
                ou <strong className="font-semibold">{fcfa(p.annual)} FCFA / an</strong>{annualMonthsFree(p) > 0 && <span className="text-gold-600"> · {annualMonthsFree(p)} mois offerts</span>}
              </p>
            </div>

            <ul className="space-y-2.5 text-sm mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href={pipelineRegisterUrl(p.code)}
                className={`inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                  p.featured ? 'bg-gold-500 text-navy-900 hover:bg-gold-400' : 'bg-navy-900 text-cream-50 hover:bg-navy-800'
                }`}
              >
                Souscrire <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link href={`/contact?service=${p.service}`} className="mt-3 block text-center text-xs underline underline-offset-4 opacity-70 hover:opacity-100">
                Être accompagné pour souscrire
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-6">
        <div className="p-6 bg-cream-100 border border-stone-200">
          <h4 className="font-serif text-xl text-navy-900 mb-2">Comment souscrire ?</h4>
          <ol className="text-sm text-navy-800/80 space-y-1.5 list-decimal pl-5">
            <li>Choisissez votre offre et créez votre compte NEXUS Pipeline.</li>
            <li>Votre essai de 7 jours démarre aussitôt : vous accédez au CRM.</li>
            <li>Confirmez votre offre depuis votre espace, avant la fin de l'essai.</li>
          </ol>
          <p className="text-xs text-navy-800/60 mt-3">Règlement en FCFA par Mobile Money (Orange Money, MTN MoMo) ou virement, sans engagement. Le paiement en ligne n'est pas encore disponible : la confirmation de votre offre est finalisée avec notre équipe.</p>
        </div>
        <div className="p-6 bg-cream-100 border border-stone-200 flex flex-col justify-between gap-4">
          <div>
            <h4 className="font-serif text-xl text-navy-900 mb-2">Offre déjà souscrite ?</h4>
            <p className="text-sm text-navy-800/80">Connectez-vous directement à votre espace NEXUS Pipeline pour accéder à votre CRM.</p>
          </div>
          <a href={PIPELINE_LOGIN_URL} className="inline-flex items-center gap-2 self-start text-xs font-semibold tracking-wider uppercase text-navy-900 hover:text-gold-600">
            Accéder à NEXUS Pipeline <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
