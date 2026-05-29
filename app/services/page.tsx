import { Check, ArrowRight, ArrowUpRight, Briefcase, BarChart3, Activity, Clock, Calendar, FileText, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { SectionLabel, EditorialHeading, ButtonPrimary, ButtonGold, EditorialLink, Container, Section } from '@/components/UI';

export const metadata = {
  title: 'Services',
  description: 'Diagnostic 360°, Sprint Stratégie, DAF externalisé : trois portes d\'entrée pour le pilotage financier de votre PME.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 grain">
        <Container>
          <div className="max-w-4xl stagger">
            <SectionLabel className="mb-8">Nos offres · Cabinet NEXUS Intelligence</SectionLabel>
            <EditorialHeading as="h1" className="text-5xl lg:text-7xl xl:text-8xl mb-8">
              Trois portes d'entrée<br />
              vers le <em className="italic text-gold-600">pilotage financier</em>.
            </EditorialHeading>
            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 max-w-3xl leading-relaxed font-light">
              De la mission de diagnostic ponctuelle au DAF externalisé en continu, NEXUS Intelligence propose un cheminement gradué. Adapté à votre maturité, votre budget et vos ambitions.
            </p>
          </div>
        </Container>
      </section>

      {/* DIAGNOSTIC 360° */}
      <section id="diagnostic" className="py-20 lg:py-28 bg-cream-100 border-y border-stone-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-4">Offre 01 · Mission</div>
                <h2 className="font-serif text-5xl lg:text-6xl font-light text-navy-900 leading-[1.05] mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Diagnostic <em className="italic">360°</em>
                </h2>
                <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-stone-200">
                  <div className="font-serif text-4xl text-gold-600 font-medium mag-number">150 000</div>
                  <div className="text-sm text-navy-900">FCFA</div>
                  <div className="ml-auto text-xs text-navy-800/60 tracking-wider uppercase">7 jours</div>
                </div>
                <p className="text-base text-navy-800/80 leading-relaxed mb-6">
                  La porte d'entrée recommandée pour découvrir NEXUS. Une cartographie complète de votre santé financière, livrée en une semaine, à un tarif accessible.
                </p>
                <ButtonPrimary href="/contact?service=diagnostic">Réserver ce diagnostic</ButtonPrimary>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {/* Pour qui */}
              <div>
                <h3 className="font-serif text-2xl text-navy-900 font-medium mb-4">Pour qui ?</h3>
                <ul className="space-y-3 text-navy-800">
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Dirigeants de PME (CA 50M - 5 milliards FCFA) qui veulent une vue claire de leur situation</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Préparation d'un dossier bancaire ou d'une levée de fonds</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Identification de blocages opérationnels invisibles dans le quotidien</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Première collaboration test avant d'envisager un engagement plus long</li>
                </ul>
              </div>

              {/* Méthodologie */}
              <div>
                <h3 className="font-serif text-2xl text-navy-900 font-medium mb-6">Ce qui est analysé</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { titre: 'Rentabilité', items: ['Marges brute, EBITDA, nette', 'Comparaison vs benchmarks sectoriels', 'Évolution sur 3 exercices'] },
                    { titre: 'Trésorerie', items: ['BFR en jours de CA', 'Délais DSO/DPO/DIO', 'Prévisionnel 13 semaines'] },
                    { titre: 'Structure financière', items: ['Autonomie, endettement, ROE', 'Couverture des charges financières', 'Fonds de roulement'] },
                    { titre: 'Pilotage', items: ['Maturité du reporting actuel', 'KPIs suivis vs critiques', 'Recommandations outils'] },
                  ].map((b) => (
                    <div key={b.titre} className="p-5 bg-cream-50 border border-stone-200">
                      <div className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-3">{b.titre}</div>
                      <ul className="space-y-1.5">
                        {b.items.map((it, i) => (
                          <li key={i} className="text-sm text-navy-800 flex gap-2"><span className="text-gold-600">→</span><span>{it}</span></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Livrables */}
              <div>
                <h3 className="font-serif text-2xl text-navy-900 font-medium mb-6">Vos livrables au terme des 7 jours</h3>
                <div className="space-y-3">
                  {[
                    { icon: FileText, titre: 'Rapport complet (30+ pages PDF)', desc: 'Synthèse exécutive, tableau de bord, diagnostic par dimension, plan d\'action 90 jours' },
                    { icon: BarChart3, titre: 'Tableau de bord financier interactif', desc: '20+ ratios calculés, comparés à des benchmarks Afrique Centrale, code couleur excellent/critique' },
                    { icon: TrendingUp, titre: '5 leviers chiffrés prioritaires', desc: 'Chaque levier avec diagnostic, action proposée, impact estimé en FCFA et délai de mise en œuvre' },
                    { icon: Calendar, titre: 'Plan d\'action 90 jours', desc: 'Roadmap mois 1 / mois 2 / mois 3 avec quick wins, structuration, consolidation' },
                    { icon: Briefcase, titre: 'Restitution orale en présentiel ou visio', desc: 'Réunion de 90 minutes avec le dirigeant pour parcourir, questionner, approfondir' },
                  ].map((l, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-cream-50 border border-stone-200">
                      <l.icon className="w-5 h-5 text-gold-600 mt-1 shrink-0" />
                      <div>
                        <div className="font-semibold text-navy-900 mb-1">{l.titre}</div>
                        <div className="text-sm text-navy-800/80">{l.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SPRINT STRATÉGIE */}
      <section id="sprint" className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-4">Offre 02 · Mission</div>
                <h2 className="font-serif text-5xl lg:text-6xl font-light text-navy-900 leading-[1.05] mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Sprint <em className="italic">Stratégie</em>
                </h2>
                <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-stone-200">
                  <div className="font-serif text-4xl text-gold-600 font-medium mag-number">350 000</div>
                  <div className="text-sm text-navy-900">FCFA</div>
                  <div className="ml-auto text-xs text-navy-800/60 tracking-wider uppercase">3 semaines</div>
                </div>
                <p className="text-base text-navy-800/80 leading-relaxed mb-6">
                  Le bond stratégique. Modélisation financière prévisionnelle complète et plan d'attaque commerciale chiffré sur 12-36 mois.
                </p>
                <ButtonPrimary href="/contact?service=sprint">Démarrer un Sprint</ButtonPrimary>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <div>
                <h3 className="font-serif text-2xl text-navy-900 font-medium mb-4">Pour qui ?</h3>
                <ul className="space-y-3 text-navy-800">
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Dirigeants en préparation d'une demande de financement bancaire (BICEC, Afriland, UBA...)</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Projets d'expansion : nouvelle activité, nouveau site, recrutements importants</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Levée de fonds investisseurs ou recherche d'associés</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-600 mt-1 shrink-0" /> Refonte du modèle économique : pricing, mix produits, structure des coûts</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-navy-900 font-medium mb-6">Découpage des 3 semaines</h3>
                <div className="space-y-4">
                  {[
                    { semaine: 'Semaine 1', titre: 'Cartographie & hypothèses', desc: 'Diagnostic existant condensé · Construction des hypothèses de croissance · Validation avec le dirigeant des moteurs (CA, marges, coûts, BFR).' },
                    { semaine: 'Semaine 2', titre: 'Modélisation & scénarios', desc: 'Modèle financier 3 ans construit : compte de résultat, bilan, trésorerie · 3 scénarios (pessimiste/réaliste/optimiste) · Tests de sensibilité.' },
                    { semaine: 'Semaine 3', titre: 'Stratégie & restitution', desc: 'Plan commercial chiffré · Plan de financement · Dossier bancaire ou pitch investisseurs · Restitution finale et coaching à la défense.' },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-cream-100 border border-stone-200">
                      <div className="font-serif text-3xl text-gold-600 font-light mag-number leading-none w-24 shrink-0">{(i + 1).toString().padStart(2, '0')}</div>
                      <div>
                        <div className="text-xs tracking-wider uppercase text-navy-800/60 mb-1">{s.semaine}</div>
                        <div className="font-semibold text-navy-900 mb-2">{s.titre}</div>
                        <div className="text-sm text-navy-800/80 leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* RETAINERS / CFO EXTERNALISÉ */}
      <section id="retainers" className="py-20 lg:py-28 bg-navy-900 text-cream-50 grain">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-500 font-semibold mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <span>Offre 03 · Missions récurrentes</span>
            </div>
            <h2 className="font-serif font-light text-5xl lg:text-7xl leading-[1.05] mb-6" style={{ letterSpacing: '-0.02em' }}>
              DAF <em className="italic text-gold-500">externalisé</em>.<br />
              <span className="text-cream-50/40">À votre rythme.</span>
            </h2>
            <p className="text-lg text-cream-50/70 leading-relaxed">
              Le pilotage financier en continu, sans le coût d'un DAF interne. Trois formules pour s'adapter à votre stade de maturité.
            </p>
          </div>

          <div id="cfo" className="grid lg:grid-cols-3 gap-6">
            {/* STARTER */}
            <div className="bg-navy-800 border border-white/10 p-8 lg:p-10 relative">
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold-500 font-bold mb-3">Formule 1 · Starter</div>
              <h3 className="font-serif text-3xl font-light mb-4" style={{ letterSpacing: '-0.01em' }}>Starter Analytics</h3>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                <div className="font-serif text-4xl text-gold-500 mag-number">180 000</div>
                <div className="text-sm text-cream-50/60">FCFA/mois</div>
              </div>
              <p className="text-sm text-cream-50/70 mb-6 leading-relaxed">
                Pour les PME qui veulent industrialiser leur reporting financier sans avoir besoin d'un accompagnement stratégique lourd.
              </p>
              <ul className="space-y-2.5 text-sm text-cream-50/80 mb-8">
                {[
                  'Tableau de bord mensuel structuré',
                  'Suivi 10 KPIs clés',
                  '1 point téléphonique de 30 min/mois',
                  'Alertes seuils critiques',
                  'Support email illimité',
                ].map((f, i) => (
                  <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" /><span>{f}</span></li>
                ))}
              </ul>
              <Link href="/contact?service=starter" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-500 hover:text-gold-400">
                Souscrire <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* GROWTH — featured */}
            <div className="bg-gold-500 text-navy-900 p-8 lg:p-10 relative lg:scale-105 lg:-my-2">
              <div className="absolute top-0 right-0 bg-navy-900 text-gold-500 px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-bold">
                Le plus choisi
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-navy-900 font-bold mb-3">Formule 2 · Growth</div>
              <h3 className="font-serif text-3xl font-light mb-4" style={{ letterSpacing: '-0.01em' }}>Growth Strategy</h3>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-navy-900/20">
                <div className="font-serif text-4xl text-navy-900 mag-number font-medium">420 000</div>
                <div className="text-sm">FCFA/mois</div>
              </div>
              <p className="text-sm text-navy-900/80 mb-6 leading-relaxed">
                Pour les PME en croissance qui ont besoin d'un partenaire stratégique régulier, en plus d'un reporting structuré.
              </p>
              <ul className="space-y-2.5 text-sm text-navy-900 mb-8">
                {[
                  'Tout Starter inclus',
                  'Tableau de bord analytique détaillé',
                  '1 point stratégique mensuel (90 min)',
                  'Modélisation budgétaire annuelle',
                  'Préparation comités stratégiques',
                  'Conseil ad hoc (jusqu\'à 8h/mois)',
                ].map((f, i) => (
                  <li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /><span>{f}</span></li>
                ))}
              </ul>
              <Link href="/contact?service=growth" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy-900 hover:opacity-80">
                Souscrire <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* PERFORMANCE CFO */}
            <div className="bg-navy-800 border border-white/10 p-8 lg:p-10 relative">
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold-500 font-bold mb-3">Formule 3 · CFO</div>
              <h3 className="font-serif text-3xl font-light mb-4" style={{ letterSpacing: '-0.01em' }}>Performance CFO</h3>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                <div className="font-serif text-4xl text-gold-500 mag-number">900 000</div>
                <div className="text-sm text-cream-50/60">FCFA/mois</div>
              </div>
              <p className="text-sm text-cream-50/70 mb-6 leading-relaxed">
                L'équivalent d'un DAF externe à temps partagé. Pour les PME matures avec enjeux stratégiques élevés (levée, M&A, internationalisation).
              </p>
              <ul className="space-y-2.5 text-sm text-cream-50/80 mb-8">
                {[
                  'Tout Growth inclus',
                  'Présence hebdomadaire en visio',
                  'Reporting COBAC complet',
                  'Pilotage budgétaire trimestriel',
                  'Représentation comités financiers',
                  'Préparation due diligence',
                  'Hotline dirigeant 24/7',
                ].map((f, i) => (
                  <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" /><span>{f}</span></li>
                ))}
              </ul>
              <Link href="/contact?service=cfo" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-500 hover:text-gold-400">
                Souscrire <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-sm text-cream-50/60 italic">
              Tous les retainers démarrent par un Diagnostic 360° offert (valeur 150 000 FCFA) à la signature d'un engagement de 6 mois minimum.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ rapide */}
      <Section className="bg-cream-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionLabel className="mb-6">Questions fréquentes</SectionLabel>
              <EditorialHeading className="text-3xl lg:text-4xl">
                Ce que vous voulez probablement <em className="italic text-gold-600">savoir</em>.
              </EditorialHeading>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {[
                { q: "Quel est le rapport qualité/prix par rapport à un cabinet international ?", r: "Nos tarifs sont 60 à 80 % en dessous d'un cabinet Big Four pour des livrables comparables. La différence : nous sommes ancrés localement, nos outils sont propriétaires, et nous n'avons pas la structure de coûts d'une multinationale." },
                { q: "Travaillez-vous uniquement au Cameroun ?", r: "Nous couvrons toute la zone CEMAC : Cameroun (Yaoundé, Douala), Gabon (Libreville), Congo (Brazzaville, Pointe-Noire), Guinée Équatoriale, RCA, Tchad. Les missions se font en visio ou en présentiel selon les besoins." },
                { q: "Quels sont les délais de démarrage ?", r: "Diagnostic 360° : sous 7 jours à la confirmation. Sprint Stratégie : sous 14 jours. Retainers : nous démarrons par un diagnostic offert puis enclenchons la mission le mois suivant." },
                { q: "Comment garantissez-vous la confidentialité ?", r: "NDA mutuel systématique signé avant tout échange substantiel. Vos données sont stockées sur infrastructure européenne chiffrée. Aucun cas client publié sans votre accord écrit." },
                { q: "Quels modes de paiement acceptez-vous ?", r: "Virement bancaire (BICEC, Afriland, UBA principaux), Mobile Money (Orange Money, MTN Mobile Money), chèque. Paiement par tiers à 50% au démarrage, 50% à la livraison pour les missions. Mensuel à terme échu pour les retainers." },
              ].map((f, i) => (
                <details key={i} className="group border-b border-stone-200 pb-6">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                    <span className="font-serif text-lg lg:text-xl text-navy-900 font-medium pr-4">{f.q}</span>
                    <span className="text-gold-600 text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-navy-800/80 leading-relaxed">{f.r}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-navy-900 text-cream-50 grain">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light leading-[1.1] mb-6" style={{ letterSpacing: '-0.02em' }}>
                Vous hésitez entre <em className="italic text-gold-500">deux formules</em> ?
              </h2>
              <p className="text-lg text-cream-50/70 leading-relaxed">
                Démarrez par un appel découverte gratuit de 30 minutes. Nous identifions ensemble la porte d'entrée la plus pertinente à votre situation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <ButtonGold href="/contact#decouverte">Appel découverte</ButtonGold>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream-50/20 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-cream-50/5">
                Tous les contacts <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
