import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BarChart3, Users, Workflow, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NEXUS Pipeline — CRM pour PME',
  description: 'Centralisez vos prospects, clients, opportunités et activités commerciales dans un CRM conçu pour les PME francophones d’Afrique.',
};

const features = [
  { icon: Users, title: 'Prospects et clients', text: 'Centralisez les contacts, entreprises et échanges dans un espace commercial organisé.' },
  { icon: Workflow, title: 'Pipeline de vente', text: 'Suivez les opportunités par étape et identifiez les prochaines actions à mener.' },
  { icon: BarChart3, title: 'Pilotage commercial', text: 'Visualisez les activités et les indicateurs utiles à votre suivi commercial.' },
  { icon: ShieldCheck, title: 'Espace de travail séparé', text: 'L’accès aux données doit être contrôlé par compte et par rôle, selon la configuration effective de l’application.' },
];

const appUrl = 'https://nexus-pipeline-beryl.vercel.app';

export default function PipelinePage() {
  return (
    <>
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-28 grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-600 font-semibold mb-8">
              <span className="w-8 h-px bg-gold-600" /> Le CRM NEXUS
            </div>
            <h1 className="font-serif font-light text-navy-900 text-5xl md:text-6xl lg:text-8xl leading-[1.03] tracking-[-0.03em] mb-8">
              Votre activité commerciale, <em className="italic text-gold-600">enfin maîtrisée.</em>
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 leading-relaxed font-light max-w-3xl mb-10">
              NEXUS Pipeline aide les PME à structurer le suivi des prospects, des clients et des opportunités commerciales dans un espace unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={appUrl + '/register'} className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-navy-900 text-cream-50 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-navy-800 transition-colors">
                Créer mon compte <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href={appUrl + '/login'} className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-navy-900/20 text-navy-900 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-navy-900/5 transition-colors">
                Se connecter <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-navy-800/60 mt-5">L’inscription et la disponibilité des fonctions dépendent de l’état actuel de l’application.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-600 font-semibold mb-6">
              <span className="w-8 h-px bg-gold-600" /> Les fonctionnalités
            </div>
            <h2 className="font-serif font-light text-4xl lg:text-6xl text-navy-900 mb-6">Moins de dispersion. <em className="italic text-gold-600">Plus de visibilité.</em></h2>
            <p className="text-lg text-navy-800/80 leading-relaxed">Un point d’entrée clair pour organiser votre relation client et donner de la continuité à votre démarche commerciale.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-cream-50 border border-stone-200 p-7">
                <Icon className="w-7 h-7 text-gold-600 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-navy-900 mb-3">{title}</h3>
                <p className="text-sm text-navy-800/75 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif font-light text-4xl lg:text-6xl text-navy-900 mb-6">Prêt à structurer votre suivi commercial ?</h2>
          <p className="text-lg text-navy-800/80 mb-9">Découvrez l’application et vérifiez les options disponibles pour votre compte.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={appUrl} className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-navy-900 text-cream-50 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-navy-800 transition-colors">
              Ouvrir NEXUS Pipeline <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-navy-900/20 text-navy-900 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-navy-900/5 transition-colors">
              Poser une question <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
