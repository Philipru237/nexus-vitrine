import { ArrowUpRight, BookOpen, Download, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionLabel, EditorialHeading, ButtonPrimary, Container, Section } from '@/components/UI';

export const metadata = {
  title: 'Ressources',
  description: "Articles, guides et études pour les dirigeants de PME d'Afrique Centrale qui veulent piloter au chiffre.",
};

const ARTICLES = [
  {
    cat: 'Trésorerie',
    titre: "BFR : le chiffre que tout dirigeant de PME camerounaise devrait connaître par cœur",
    extrait: "Vous suivez votre chiffre d'affaires. Vous regardez votre résultat. Mais connaissez-vous votre BFR ? Voici pourquoi c'est l'indicateur le plus prédictif de votre santé financière.",
    duree: '8 min',
    date: 'À paraître',
  },
  {
    cat: 'Pilotage',
    titre: "Le tableau de bord minimaliste : 10 KPIs, 10 minutes par jour",
    extrait: "La plupart des dirigeants pensent qu'un bon reporting est complexe. C'est l'inverse. Voici les 10 indicateurs qu'un dirigeant de PME devrait vraiment suivre — et lesquels ignorer.",
    duree: '6 min',
    date: 'À paraître',
  },
  {
    cat: 'Marges',
    titre: "Pourquoi 67% des PME camerounaises vendent à perte sans le savoir",
    extrait: "Une marge brute consolidée à 35% peut cacher des produits vendus à perte. Analyse anonymisée de 12 PME et leur découverte choquante.",
    duree: '10 min',
    date: 'À paraître',
  },
  {
    cat: 'Financement',
    titre: "Préparer un dossier BICEC ou Afriland : ce que les banquiers regardent vraiment",
    extrait: "Au-delà des chiffres, il y a des signaux que les banquiers d'Afrique Centrale traquent dans un dossier de financement. Voici les 7 questions qu'ils se posent en silence.",
    duree: '12 min',
    date: 'À paraître',
  },
  {
    cat: 'OHADA',
    titre: "SYSCOHADA n'est pas un fardeau. C'est un outil de pilotage sous-exploité",
    extrait: "La majorité des dirigeants subissent la conformité OHADA comme une corvée. Pourtant, bien lue, elle révèle des informations stratégiques précieuses.",
    duree: '7 min',
    date: 'À paraître',
  },
  {
    cat: 'Croissance',
    titre: "Quand la croissance asphyxie : 4 signaux d'alerte à reconnaître",
    extrait: "Doubler son chiffre d'affaires peut tuer une PME. Voici comment repérer les signaux qu'une croissance non maîtrisée dévore votre trésorerie.",
    duree: '9 min',
    date: 'À paraître',
  },
];

export default function RessourcesPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 grain">
        <Container>
          <div className="max-w-4xl stagger">
            <SectionLabel className="mb-8">Ressources</SectionLabel>
            <EditorialHeading as="h1" className="text-5xl lg:text-7xl xl:text-8xl mb-8">
              Le savoir financier<br />
              des PME, <em className="italic text-gold-600">accessible</em>.
            </EditorialHeading>
            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 leading-relaxed font-light">
              Articles, guides et études dédiés aux dirigeants d'Afrique Centrale qui veulent comprendre, piloter et décider en connaissance de cause. Publications hebdomadaires.
            </p>
          </div>
        </Container>
      </section>

      {/* Lead magnet hero */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-cream-50 grain relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="absolute top-10 right-10 text-[350px] font-serif italic font-light leading-none text-gold-500">G</div>
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-500 font-semibold mb-6">
                <div className="w-8 h-px bg-gold-500" />
                <span>Guide gratuit · Téléchargement</span>
              </div>
              <h2 className="font-serif font-light text-4xl lg:text-6xl leading-[1.05] mb-6" style={{ letterSpacing: '-0.02em' }}>
                Le tableau de bord <em className="italic text-gold-500">essentiel</em> de toute PME camerounaise.
              </h2>
              <p className="text-lg text-cream-50/80 mb-8 leading-relaxed">
                10 KPIs à suivre chaque mois. Modèles Excel inclus. Benchmarks sectoriels Afrique Centrale. Le guide qu'on aurait aimé avoir en démarrant.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-cream-50/80">
                <li className="flex gap-2"><span className="text-gold-500">→</span> 32 pages illustrées (PDF)</li>
                <li className="flex gap-2"><span className="text-gold-500">→</span> Modèles Excel prêts à l'emploi</li>
                <li className="flex gap-2"><span className="text-gold-500">→</span> Benchmarks par secteur</li>
                <li className="flex gap-2"><span className="text-gold-500">→</span> Méthodologie pas-à-pas</li>
              </ul>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="votre@email.cm"
                  className="flex-1 px-4 py-3.5 bg-navy-800 border border-white/20 text-cream-50 placeholder-cream-50/40 text-sm focus:border-gold-500 outline-none"
                />
                <button className="px-6 py-3.5 bg-gold-500 text-navy-900 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold-400 transition-colors inline-flex items-center justify-center gap-2 btn-primary">
                  <Download className="w-3.5 h-3.5" />
                  Télécharger
                </button>
              </form>
              <p className="text-xs text-cream-50/50 mt-3">
                Aucun spam. Désinscription en un clic. Vos données restent chez nous.
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[3/4] bg-cream-50 shadow-2xl relative overflow-hidden -rotate-2">
                <div className="absolute inset-0 grain opacity-10" />
                <div className="p-10 h-full flex flex-col justify-between text-navy-900">
                  <div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-gold-600 mb-3 font-bold">Guide NEXUS Intelligence</div>
                    <h3 className="font-serif text-3xl font-light leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      Le tableau de bord essentiel de toute PME camerounaise
                    </h3>
                  </div>
                  <div className="space-y-1 text-xs opacity-60">
                    <div>10 KPIs critiques · 32 pages · 8 modèles Excel</div>
                    <div>Édition 2026 · Cameroun · Gabon · Congo</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600" />
              </div>
              <div className="absolute -top-4 -right-4 bg-gold-500 text-navy-900 px-4 py-2 text-xs font-bold tracking-wider uppercase rotate-3">
                Gratuit
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Articles */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <SectionLabel className="mb-6">Articles & analyses</SectionLabel>
            <EditorialHeading className="text-4xl lg:text-5xl">
              Le journal <em className="italic text-gold-600">NEXUS</em>.
            </EditorialHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <article key={i} className="group bg-cream-100 border border-stone-200 p-8 hover:border-navy-900 transition-all duration-500 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-bold">{a.cat}</span>
                  <span className="text-[10px] text-navy-800/40 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {a.duree}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-navy-900 font-medium leading-tight mb-4 group-hover:text-gold-600 transition-colors" style={{ letterSpacing: '-0.01em' }}>
                  {a.titre}
                </h3>
                <p className="text-sm text-navy-800/70 leading-relaxed mb-6 flex-1">{a.extrait}</p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <span className="text-xs text-navy-800/50 italic">{a.date}</span>
                  <ArrowUpRight className="w-4 h-4 text-navy-900/60 group-hover:text-gold-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-navy-800/60 italic">
              Nouveau article publié chaque semaine. Recevez-les dans votre boîte mail.
            </p>
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="bg-cream-100 border-y border-stone-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="mb-6">Newsletter NEXUS</SectionLabel>
            <EditorialHeading className="text-4xl lg:text-5xl mb-6">
              Chaque vendredi, une <em className="italic text-gold-600">analyse</em> dans votre boîte.
            </EditorialHeading>
            <p className="text-lg text-navy-800/80 mb-10">
              Un email court (5 minutes de lecture), un sujet par semaine, ancré PME Afrique Centrale. Pas de blabla, pas de pub. Désinscription en un clic.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.cm"
                className="flex-1 px-4 py-3.5 bg-cream-50 border border-stone-300 text-navy-900 placeholder-navy-900/40 text-sm focus:border-gold-500 outline-none"
              />
              <button className="px-6 py-3.5 bg-navy-900 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-navy-800 transition-colors btn-primary">
                S'abonner
              </button>
            </form>
            <p className="text-xs text-navy-800/50 mt-3">
              Rejoignez les dirigeants de PME qui pilotent au chiffre.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
