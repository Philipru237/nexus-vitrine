import Link from 'next/link';
import { TrendingUp, TrendingDown, Wallet, BarChart3, Building2, Briefcase, ArrowRight, Quote } from 'lucide-react';
import { SectionLabel, EditorialHeading, ButtonPrimary, Container, Section } from '@/components/UI';

export const metadata = {
  title: 'Cas clients',
  description: "Études de cas anonymisées de missions NEXUS Intelligence : impact chiffré sur la trésorerie, les marges, le pilotage.",
};

const CAS = [
  {
    secteur: 'Distribution alimentaire',
    ville: 'Douala, Cameroun',
    taille: 'PME · 32 employés',
    ca: '480 M FCFA',
    mission: 'Diagnostic 360° + Sprint Stratégie',
    contexte: "Croissance rapide (+30 %/an) accompagnée d'une trésorerie de plus en plus tendue. Le dirigeant ne comprenait pas pourquoi.",
    diagnostic: "Le BFR avait gonflé de 45 à 78 jours en deux ans (stocks en rotation lente + DSO clients passé de 30 à 55 jours). Marge brute consolidée masquait deux gammes à faible rentabilité.",
    actions: [
      "Renégociation des conditions clients (50 % en paiement comptant Mobile Money)",
      "Arrêt des deux gammes les moins rentables (libère 22 M FCFA de stock)",
      "Mise en place d'un tableau de bord hebdomadaire de trésorerie",
    ],
    resultats: [
      { kpi: 'BFR en jours', avant: '78j', apres: '52j' },
      { kpi: 'Trésorerie nette', avant: '−18 M', apres: '+34 M' },
      { kpi: 'Marge nette', avant: '4.2%', apres: '7.8%' },
    ],
    duree: '6 mois',
    verbatim: "Je pensais que ma croissance était saine. Le diagnostic m'a montré qu'elle me dévorait financièrement.",
  },
  {
    secteur: 'BTP / Génie civil',
    ville: 'Yaoundé, Cameroun',
    taille: 'PME · 64 employés',
    ca: '1.2 Md FCFA',
    mission: 'Sprint Stratégie + dossier bancaire',
    contexte: "Demande de crédit d'investissement de 200 M FCFA refusée par deux banques. Le dossier financier n'était pas suffisamment structuré.",
    diagnostic: "Pas de prévisionnel à 3 ans crédible. Pas de scénario démontrant la capacité de remboursement. Documentation OHADA incomplète. Bilan présenté de manière confuse.",
    actions: [
      "Construction d'un modèle financier 3 ans complet (compte de résultat, bilan, trésorerie)",
      "Trois scénarios projetés avec stress tests",
      "Dossier bancaire reformaté aux standards COBAC",
      "Coaching à la défense du dossier",
    ],
    resultats: [
      { kpi: 'Crédit obtenu', avant: '0', apres: '180 M FCFA' },
      { kpi: 'Taux négocié', avant: '—', apres: '11.5%' },
      { kpi: 'Délai d\'obtention', avant: '—', apres: '6 semaines' },
    ],
    duree: '3 semaines',
    verbatim: "BICEC a validé le dossier en première lecture. Sans NEXUS, je n'aurais jamais obtenu ce financement.",
  },
  {
    secteur: 'Industrie agroalimentaire',
    ville: 'Libreville, Gabon',
    taille: 'PME · 18 employés',
    ca: '320 M FCFA',
    mission: 'Performance CFO · Retainer 12 mois',
    contexte: "Dirigeant submergé par l'opérationnel, aucun reporting structuré, décisions stratégiques prises à l'intuition.",
    diagnostic: "L'entreprise gagnait de l'argent mais aucune visibilité sur quoi et comment. 4 produits sur 11 généraient 89 % de la marge.",
    actions: [
      "Mise en place d'un reporting mensuel structuré (10 KPIs critiques)",
      "Analyse de rentabilité par produit (méthode contribution margin)",
      "Refonte du pricing sur 3 produits sous-valorisés",
      "Point stratégique mensuel avec le dirigeant",
    ],
    resultats: [
      { kpi: 'Marge brute moyenne', avant: '32%', apres: '41%' },
      { kpi: 'Visibilité financière', avant: 'Trimestrielle', apres: 'Hebdomadaire' },
      { kpi: 'EBITDA', avant: '28 M', apres: '52 M' },
    ],
    duree: '12 mois',
    verbatim: "Pour la première fois en 8 ans, je sais exactement où je gagne mon argent. Et où j'en perdais.",
  },
];

export default function CasClientsPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 grain">
        <Container>
          <div className="max-w-4xl stagger">
            <SectionLabel className="mb-8">Études de cas</SectionLabel>
            <EditorialHeading as="h1" className="text-5xl lg:text-7xl xl:text-8xl mb-8">
              Des résultats <em className="italic text-gold-600">chiffrés</em>.<br />
              Pas des promesses.
            </EditorialHeading>
            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 leading-relaxed font-light mb-6">
              Trois missions récentes, anonymisées par contrat de confidentialité, présentées avec leurs résultats financiers réels.
            </p>
            <p className="text-sm text-navy-800/60 italic">
              Les noms d'entreprises et de dirigeants ne sont pas divulgués conformément à nos engagements NDA. Les ordres de grandeur financiers sont préservés, certaines valeurs légèrement arrondies.
            </p>
          </div>
        </Container>
      </section>

      {CAS.map((cas, idx) => (
        <section key={idx} className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-cream-100 border-y border-stone-200' : ''}`}>
          <Container>
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Colonne gauche : info & contexte */}
              <div className="lg:col-span-5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-4">
                  Cas n° {(idx + 1).toString().padStart(2, '0')} · {cas.mission}
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy-900 leading-[1.05] mb-8" style={{ letterSpacing: '-0.02em' }}>
                  {cas.secteur}
                </h2>

                <div className="space-y-2 mb-8 pb-8 border-b border-stone-300 text-sm">
                  <div className="flex justify-between"><span className="text-navy-800/60">Localisation</span><span className="font-medium">{cas.ville}</span></div>
                  <div className="flex justify-between"><span className="text-navy-800/60">Taille</span><span className="font-medium">{cas.taille}</span></div>
                  <div className="flex justify-between"><span className="text-navy-800/60">CA annuel</span><span className="font-medium">{cas.ca}</span></div>
                  <div className="flex justify-between"><span className="text-navy-800/60">Durée mission</span><span className="font-medium">{cas.duree}</span></div>
                </div>

                <Quote className="w-8 h-8 text-gold-500 mb-4" strokeWidth={1.5} />
                <blockquote className="font-serif text-xl lg:text-2xl italic text-navy-900 leading-snug font-light">
                  "{cas.verbatim}"
                </blockquote>
                <div className="mt-3 text-xs text-navy-800/60">— Dirigeant, propos rapportés en restitution finale</div>
              </div>

              {/* Colonne droite : narrative */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-3">Contexte</div>
                  <p className="text-lg text-navy-800 leading-relaxed">{cas.contexte}</p>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-3">Ce que le diagnostic a révélé</div>
                  <p className="text-lg text-navy-800 leading-relaxed">{cas.diagnostic}</p>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-3">Actions mises en œuvre</div>
                  <ul className="space-y-2">
                    {cas.actions.map((a, i) => (
                      <li key={i} className="flex gap-3 text-navy-800">
                        <span className="text-gold-600 font-bold mt-1">→</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Résultats chiffrés */}
                <div className="bg-navy-900 text-cream-50 p-6 lg:p-8">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-bold mb-6">Résultats mesurés</div>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {cas.resultats.map((r, i) => (
                      <div key={i} className="border-l-2 border-gold-500 pl-4">
                        <div className="text-[10px] tracking-wider uppercase text-cream-50/60 mb-2">{r.kpi}</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-cream-50/50 line-through">{r.avant}</span>
                          <ArrowRight className="w-3 h-3 text-gold-500" />
                          <span className="font-serif text-2xl lg:text-3xl text-gold-500 font-light mag-number">{r.apres}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Disclaimer + CTA */}
      <Section className="bg-cream-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-cream-100 border border-stone-200 p-8 lg:p-10 mb-12">
              <p className="text-sm text-navy-800/70 leading-relaxed italic">
                <strong className="not-italic text-navy-900">Note sur la confidentialité :</strong> NEXUS Intelligence ne publie aucun cas client sans autorisation écrite expresse. Les études de cas ci-dessus sont reproduites avec accord, en anonymisant les informations permettant d'identifier les entreprises et leurs dirigeants. Les ratios financiers et les ordres de grandeur sont préservés pour conserver la valeur pédagogique du cas.
              </p>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy-900 leading-[1.1] mb-6" style={{ letterSpacing: '-0.02em' }}>
              Votre cas pourrait être <em className="italic text-gold-600">le suivant</em>.
            </h2>
            <p className="text-lg text-navy-800/80 mb-10">
              Chaque PME a son histoire et ses leviers. Démarrons par un diagnostic ou un échange découverte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonPrimary href="/contact?service=diagnostic">Réserver un Diagnostic 360°</ButtonPrimary>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-navy-900/20 text-navy-900 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-navy-900/5">
                Voir toutes nos offres <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
