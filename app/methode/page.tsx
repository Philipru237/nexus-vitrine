import { Search, Compass, Cpu, Layers, FileText, Repeat, Shield, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionLabel, EditorialHeading, ButtonPrimary, Container, Section } from '@/components/UI';

export const metadata = {
  title: 'Méthode',
  description: 'La méthode propriétaire NEXUS : 5 étapes structurées combinant rigueur cabinet et intelligence augmentée.',
};

const ETAPES = [
  {
    n: '01',
    titre: 'Découverte qualifiée',
    duree: '30 à 60 minutes',
    icon: Search,
    desc: "Échange initial sans engagement où nous validons la pertinence d'une mission. Nous explorons vos enjeux, vos zones d'inconfort financier, vos objectifs à 12 mois.",
    livrables: [
      "Validation du périmètre potentiel de mission",
      "Identification des sujets prioritaires",
      "Recommandation de la porte d'entrée la mieux adaptée",
    ],
  },
  {
    n: '02',
    titre: 'Cadrage contractuel',
    duree: '24 à 48 heures',
    icon: FileText,
    desc: "Signature d'un NDA mutuel, envoi de la proposition formelle et du cahier des charges. Tout est explicite : périmètre, livrables, échéances, conditions de paiement.",
    livrables: [
      "NDA mutuel signé",
      "Proposition commerciale détaillée",
      "Contrat de mission OHADA-conforme",
    ],
  },
  {
    n: '03',
    titre: 'Collecte structurée',
    duree: '60 à 90 minutes',
    icon: Layers,
    desc: "Capture systématique de vos données financières via un protocole en 5 sections : identité, compte de résultat, bilan, pilotage actuel, préoccupations. Aucun fichier qui traîne, tout est centralisé.",
    livrables: [
      "Base de données structurée et confidentielle",
      "Première lecture analytique",
      "Liste de questions complémentaires si nécessaire",
    ],
  },
  {
    n: '04',
    titre: 'Analyse augmentée',
    duree: '3 à 5 jours',
    icon: Cpu,
    desc: "Le cœur de notre différenciation. Calcul automatique de 20+ ratios SYSCOHADA, comparaison à des benchmarks Afrique Centrale, modélisation de scénarios, identification des leviers à fort impact. Le tout vérifié manuellement.",
    livrables: [
      "Tableau de bord financier multi-dimensions",
      "Scénarios projetés (pessimiste/réaliste/optimiste)",
      "5 leviers prioritaires chiffrés en FCFA",
    ],
  },
  {
    n: '05',
    titre: 'Restitution & mise en œuvre',
    duree: 'Restitution 90 min · Suivi 90 jours',
    icon: Compass,
    desc: "Présentation orale en face-à-face (Yaoundé) ou visio HD avec le dirigeant. Plan d'action sur 90 jours co-construit. Suivi régulier pour s'assurer que les actions sont enclenchées.",
    livrables: [
      "Rapport complet (PDF 30+ pages)",
      "Plan d'action 90 jours priorisé",
      "Suivi mensuel de l'exécution (3 mois inclus)",
    ],
  },
];

const PRINCIPES = [
  { titre: "Confidentialité absolue", icon: Shield, desc: "NDA systématique. Vos données sur infrastructure chiffrée. Aucune communication client sans accord écrit." },
  { titre: "Délais tenus", icon: Clock, desc: "Chaque mission a des échéances contractuelles. Si nous prenons du retard, nous l'expliquons et compensons." },
  { titre: "Itérations courtes", icon: Repeat, desc: "Validation à chaque jalon. Vous ne découvrez jamais un livrable au dernier moment qui ne correspond pas." },
];

export default function MethodePage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 grain">
        <Container>
          <div className="max-w-4xl stagger">
            <SectionLabel className="mb-8">Méthode propriétaire</SectionLabel>
            <EditorialHeading as="h1" className="text-5xl lg:text-7xl xl:text-8xl mb-8">
              Cinq étapes.<br />
              <em className="italic text-gold-600">Rigueur cabinet</em>, intelligence augmentée.
            </EditorialHeading>
            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 leading-relaxed font-light">
              Notre processus combine la profondeur méthodologique d'un cabinet financier traditionnel avec des outils propriétaires d'analyse augmentée. Résultat : plus de précision, en moitié moins de temps, à un tarif accessible.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-cream-100 border-y border-stone-200">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {ETAPES.map((e, i) => (
              <div key={e.n} className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:col-span-5">
                  <div className="font-serif text-7xl lg:text-9xl font-light text-gold-600/20 mag-number leading-none mb-4" style={{ letterSpacing: '-0.05em' }}>
                    {e.n}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-navy-900 flex items-center justify-center">
                      <e.icon className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
                    </div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-navy-800/60 font-semibold">
                      Étape {e.n} · {e.duree}
                    </div>
                  </div>
                  <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy-900 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                    {e.titre}
                  </h2>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <p className="text-lg text-navy-800 leading-relaxed">{e.desc}</p>
                  <div className="pt-6 border-t border-stone-300">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-semibold mb-3">Livrables de cette étape</div>
                    <ul className="space-y-2">
                      {e.livrables.map((l, j) => (
                        <li key={j} className="flex gap-3 text-navy-800">
                          <span className="text-gold-600 font-bold">→</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Principes */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionLabel className="mb-6">Nos engagements</SectionLabel>
            <EditorialHeading className="text-4xl lg:text-5xl">
              Trois principes <em className="italic text-gold-600">non négociables</em>.
            </EditorialHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRINCIPES.map((p) => (
              <div key={p.titre} className="bg-cream-100 border border-stone-200 p-8">
                <div className="w-12 h-12 bg-navy-900 flex items-center justify-center mb-6">
                  <p.icon className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-navy-900 mb-3">{p.titre}</h3>
                <p className="text-navy-800/80 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-navy-900 text-cream-50 grain">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl lg:text-6xl font-light leading-[1.05] mb-6" style={{ letterSpacing: '-0.02em' }}>
              Notre méthode vous parle ?<br />
              <em className="italic text-gold-500">Démarrons.</em>
            </h2>
            <p className="text-lg text-cream-50/70 leading-relaxed mb-10">
              Premier échange découverte gratuit, sans engagement. 30 minutes pour valider la pertinence d'une mission ensemble.
            </p>
            <ButtonPrimary href="/contact">Réserver un appel découverte</ButtonPrimary>
          </div>
        </Container>
      </Section>
    </>
  );
}
