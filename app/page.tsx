import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Briefcase, BarChart3, Activity, Award, Quote, TrendingUp, Shield, Building2 } from 'lucide-react';
import { SectionLabel, EditorialHeading, ButtonPrimary, ButtonGold, EditorialLink, ServiceCard, StatBlock, Container, Section } from '@/components/UI';

export default function HomePage() {
  return (
    <>
      {/* ===========================================
          HERO — éditorial, asymétrique, mémorable
      ============================================ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 lg:pt-32 pb-16 overflow-hidden grain">
        {/* Lignes décoratives en arrière-plan */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gold-500/30" />
          <div className="absolute bottom-1/4 right-0 w-48 h-px bg-navy-900/10" />
          <div className="absolute top-1/3 right-12 text-[200px] lg:text-[300px] font-serif italic font-light text-navy-900/[0.025] leading-none select-none pointer-events-none">N</div>
        </div>

        <Container>
          <div className="stagger max-w-5xl">
            <SectionLabel className="mb-8">
              Cabinet de modélisation financière · Yaoundé
            </SectionLabel>

            <EditorialHeading as="h1" className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl mb-8">
              Pilotez votre PME<br />
              comme une <em className="italic text-gold-600 font-normal">grande entreprise</em>.<br />
              <span className="text-navy-900/40">Sans en payer le prix.</span>
            </EditorialHeading>

            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 max-w-2xl leading-relaxed font-light mb-10">
              Diagnostic financier, modélisation, tableau de bord, DAF externalisé pour PME ambitieuses du Cameroun, Gabon et Congo. Conformité OHADA/SYSCOHADA · Méthode propriétaire augmentée par l'IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <ButtonPrimary href="/contact">Réserver un Diagnostic 360°</ButtonPrimary>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase text-navy-900 hover:text-gold-600 transition-colors">
                Découvrir nos services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats accrocheuses */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-stone-200">
              <StatBlock value="7j" label="Diagnostic 360°" sub="Livrable en une semaine" />
              <StatBlock value="20+" label="Ratios analysés" sub="Référentiel SYSCOHADA" />
              <StatBlock value="3" label="Pays couverts" sub="Cameroun · Gabon · Congo" />
              <StatBlock value="100%" label="Ancrage local" sub="OHADA · COBAC · FCFA" />
            </div>
          </div>
        </Container>
      </section>

      {/* ===========================================
          PROMESSE — Pourquoi NEXUS
      ============================================ */}
      <Section className="bg-cream-100 border-y border-stone-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <SectionLabel className="mb-6">Notre conviction</SectionLabel>
              <EditorialHeading className="text-4xl lg:text-5xl">
                La majorité des PME d'<em className="italic text-gold-600">Afrique Centrale</em> ne savent pas où elles gagnent vraiment de l'argent.
              </EditorialHeading>
            </div>

            <div className="lg:col-span-7 space-y-6 text-navy-800">
              <p className="text-lg leading-relaxed">
                Vous connaissez votre chiffre d'affaires. Vous suivez (parfois) votre résultat net. Mais sauriez-vous dire <strong className="text-navy-900">combien vous aurez en banque dans 90 jours</strong> ? Quelle est la marge réelle de votre produit phare ? Quel client mange votre rentabilité sans que vous le sachiez ?
              </p>
              <p className="text-lg leading-relaxed">
                Les grands groupes pilotent au chiffre. Ils ont des DAF, des contrôleurs de gestion, des tableaux de bord. Les PME du Cameroun, du Gabon, du Congo n'ont pas ces moyens — et pourtant elles affrontent les mêmes vents contraires : trésorerie tendue, marges sous pression, financement complexe, conformité OHADA exigeante.
              </p>
              <p className="text-lg leading-relaxed font-serif italic text-gold-700">
                C'est exactement ce vide que comble NEXUS Intelligence.
              </p>

              <div className="pt-4">
                <EditorialLink href="/a-propos">Notre histoire et notre engagement</EditorialLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===========================================
          SERVICES — Aperçu premium
      ============================================ */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionLabel className="mb-6">Nos offres</SectionLabel>
            <EditorialHeading className="text-4xl lg:text-6xl mb-6">
              Trois portes d'entrée. <em className="italic text-gold-600">Une seule exigence</em>.
            </EditorialHeading>
            <p className="text-lg text-navy-800/80 leading-relaxed">
              Chaque mission NEXUS produit des chiffres exploitables — pas des PowerPoints qui finissent dans un tiroir. Choisissez votre niveau d'engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <ServiceCard
              numero="01 · Diagnostic"
              titre="Diagnostic 360°"
              prix="150 000 FCFA"
              duree="Mission · 7 jours"
              description="Audit financier complet : ratios SYSCOHADA, benchmarks sectoriels, identification des leviers d'optimisation, plan d'action 90 jours."
              features={[
                'Analyse de votre compte de résultat & bilan',
                'Cycle d\'exploitation (BFR, DSO, DPO)',
                '5 leviers prioritaires chiffrés',
                'Rapport PDF restitution 30+ pages',
              ]}
              href="/services#diagnostic"
            />
            <ServiceCard
              numero="02 · Sprint"
              titre="Sprint Stratégie"
              prix="350 000 FCFA"
              duree="Mission · 3 semaines"
              description="Modélisation financière prévisionnelle, scénarios de croissance, stratégie commerciale chiffrée, préparation dossier bancaire."
              features={[
                'Modèle financier 3 ans multi-scénarios',
                'Plan commercial et de production',
                'Préparation dossier BICEC/Afriland/UBA',
                'Coaching dirigeant sur 3 semaines',
              ]}
              href="/services#sprint"
            />
            <ServiceCard
              numero="03 · Récurrent"
              titre="Performance CFO"
              prix="dès 180 000 FCFA/mois"
              duree="Mission récurrente"
              description="DAF externalisé : tableau de bord mensuel, pilotage budgétaire, reporting bancaire COBAC, conseil stratégique en continu."
              features={[
                '3 formules : Starter · Growth · CFO',
                'Reporting mensuel structuré',
                'Point hebdomadaire dirigeant',
                'Préparation comités stratégiques',
              ]}
              href="/services#retainers"
            />
          </div>

          <div className="mt-16 text-center">
            <EditorialLink href="/services">Voir tous les services en détail</EditorialLink>
          </div>
        </Container>
      </Section>

      {/* ===========================================
          PRODUIT — NEXUS PIPELINE
      ============================================ */}
      <Section className="bg-cream-100 border-y border-stone-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionLabel className="mb-6">Notre outil commercial</SectionLabel>
              <EditorialHeading className="text-4xl lg:text-6xl mb-6">
                Découvrez <em className="italic text-gold-600">NEXUS Pipeline</em>.
              </EditorialHeading>
              <p className="text-lg text-navy-800/80 leading-relaxed max-w-2xl">
                Un CRM conçu pour structurer le suivi des prospects, des clients et des opportunités commerciales de votre PME.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-start">
              <Link href="/pipeline" className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-navy-900 text-cream-50 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-navy-800 transition-colors">
                Découvrir le CRM <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/pipeline" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors">
                Fonctionnalités et accès <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===========================================
          MÉTHODE — Aperçu
      ============================================ */}
      <Section dark className="grain">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-500 font-semibold mb-6">
                <div className="w-8 h-px bg-gold-500" />
                <span>Méthode propriétaire</span>
              </div>
              <h2 className="font-serif font-light text-4xl lg:text-6xl leading-[1.05] mb-6" style={{ letterSpacing: '-0.02em' }}>
                Une méthode <em className="italic text-gold-500">augmentée par l'IA</em>, ancrée dans le terrain africain.
              </h2>
              <p className="text-lg text-cream-50/70 leading-relaxed mb-8">
                NEXUS combine la rigueur d'un cabinet financier traditionnel avec des outils propriétaires d'analyse augmentée. Résultat : plus de profondeur, en moins de temps, à un prix accessible.
              </p>
              <Link href="/methode" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors">
                <span className="link-underline">Découvrir notre processus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                { n: '01', titre: 'Collecte structurée', desc: 'Vos données financières capturées via un protocole en 5 sections, en 90 minutes maximum.' },
                { n: '02', titre: 'Analyse augmentée', desc: 'Calcul automatique de 20+ ratios SYSCOHADA, benchmark sectoriel Afrique Centrale, identification IA des leviers.' },
                { n: '03', titre: 'Restitution stratégique', desc: 'Présentation orale en face-à-face, rapport écrit complet, plan d\'action priorisé sur 90 jours.' },
                { n: '04', titre: 'Mise en œuvre & suivi', desc: 'Accompagnement à l\'exécution, ajustements en continu, indicateurs de réussite suivis.' },
              ].map((step) => (
                <div key={step.n} className="flex gap-6 pb-6 border-b border-white/10 last:border-b-0">
                  <div className="font-serif text-4xl lg:text-5xl text-gold-500 font-light mag-number leading-none shrink-0 w-20">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl lg:text-2xl mb-2 font-medium">{step.titre}</h3>
                    <p className="text-cream-50/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ===========================================
          TÉMOIGNAGES / Pain points (verbatims clients)
      ============================================ */}
      <Section className="bg-cream-100">
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionLabel className="mb-6">Voix de dirigeants</SectionLabel>
            <EditorialHeading className="text-4xl lg:text-5xl">
              Ce que nous entendons chaque semaine en <em className="italic text-gold-600">salle de réunion</em>.
            </EditorialHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Mon CA a doublé en 18 mois, mais ma trésorerie est de plus en plus tendue. Je ne comprends pas.",
                author: "Dirigeante PME Distribution",
                ville: "Douala",
              },
              {
                quote: "Je vends 12 produits. Je ne sais pas lequel est vraiment rentable. Mon comptable non plus.",
                author: "Fondateur, Industrie agro",
                ville: "Yaoundé",
              },
              {
                quote: "La banque m'a refusé un crédit. Mon dossier n'était pas suffisamment structuré, m'ont-ils dit.",
                author: "Directeur Général, BTP",
                ville: "Libreville",
              },
            ].map((t, i) => (
              <div key={i} className="bg-cream-50 border border-stone-200 p-8 lg:p-10 relative">
                <Quote className="w-8 h-8 text-gold-500 mb-6" strokeWidth={1.5} />
                <p className="font-serif text-xl lg:text-2xl leading-snug text-navy-900 mb-8 font-light italic">
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-stone-200">
                  <div className="text-sm font-semibold text-navy-900">{t.author}</div>
                  <div className="text-xs text-navy-800/60">{t.ville}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-navy-800/60 italic max-w-2xl mx-auto">
              Verbatims anonymisés de dirigeants rencontrés en consultations exploratoires. Les noms et entreprises sont protégés par notre engagement de confidentialité.
            </p>
          </div>
        </Container>
      </Section>

      {/* ===========================================
          PILIERS — Pourquoi nous choisir
      ============================================ */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionLabel className="mb-6">Ce qui nous distingue</SectionLabel>
              <EditorialHeading className="text-4xl lg:text-5xl mb-8">
                Quatre engagements que d'autres ne tiennent pas.
              </EditorialHeading>
              <p className="text-lg text-navy-800/80 leading-relaxed mb-8">
                Beaucoup de cabinets vendent du conseil générique copié-collé sur des modèles européens. NEXUS est conçu spécifiquement pour la réalité des PME d'Afrique Centrale — son tissu bancaire, son cadre réglementaire, ses contraintes opérationnelles.
              </p>
              <ButtonPrimary href="/a-propos">Notre philosophie</ButtonPrimary>
            </div>

            <div className="space-y-8">
              {[
                { icon: Shield, titre: "Conformité OHADA stricte", desc: "Tous nos livrables respectent le référentiel SYSCOHADA et anticipent les exigences COBAC pour vos dossiers bancaires." },
                { icon: Building2, titre: "Ancrage local profond", desc: "BICEC, Afriland First Bank, UBA, Mobile Money, fiscalité camerounaise/gabonaise/congolaise : nous parlons votre langue financière." },
                { icon: TrendingUp, titre: "Résultats chiffrés", desc: "Chaque levier identifié est quantifié en FCFA. Chaque plan d'action a des indicateurs de réussite mesurables." },
                { icon: Award, titre: "Confidentialité absolue", desc: "Vos données restent vos données. NDA systématique avant tout échange substantiel. Stockage chiffré." },
              ].map((p, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 bg-navy-900 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-navy-900 mb-2 font-medium">{p.titre}</h3>
                    <p className="text-sm text-navy-800/80 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ===========================================
          CTA FINAL — Conversion
      ============================================ */}
      <Section className="relative grain bg-gradient-to-br from-navy-900 to-navy-800 text-cream-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-10 right-10 text-[400px] font-serif italic font-light leading-none text-gold-500">N</div>
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <SectionLabel className="mb-8 text-gold-500">
              Prochaine étape
            </SectionLabel>
            <h2 className="font-serif font-light text-4xl lg:text-6xl xl:text-7xl leading-[1.05] mb-8" style={{ letterSpacing: '-0.02em' }}>
              Cartographions ensemble votre <em className="italic text-gold-500">situation financière</em>.
            </h2>
            <p className="text-xl text-cream-50/80 leading-relaxed mb-10 font-light">
              Un Diagnostic 360° révèle en 7 jours ce que vos chiffres cachent depuis des années. Premier échange gratuit, sans engagement, en visio ou à Yaoundé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonGold href="/contact">Réserver un Diagnostic 360°</ButtonGold>
              <Link href="/contact#decouverte" className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream-50/20 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-cream-50/5 transition-colors">
                Ou un appel découverte (30 min)
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
