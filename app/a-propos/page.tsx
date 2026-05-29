import { Award, Globe, Target, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionLabel, EditorialHeading, ButtonPrimary, Container, Section } from '@/components/UI';

export const metadata = {
  title: 'À propos',
  description: "L'histoire et la philosophie de NEXUS Intelligence, cabinet de modélisation financière fondé à Yaoundé.",
};

const VALEURS = [
  { icon: Target, titre: "Précision", desc: "Chaque chiffre est vérifié. Chaque recommandation est chiffrée. Nous refusons le conseil approximatif." },
  { icon: Globe, titre: "Ancrage local", desc: "Nous comprenons le tissu bancaire, fiscal et économique de la zone CEMAC. Pas de copier-coller de modèles étrangers." },
  { icon: Heart, titre: "Honnêteté", desc: "Nous disons ce qui est, pas ce qui rassure. Un Diagnostic NEXUS dérange parfois — mais il fait avancer." },
  { icon: Award, titre: "Confidentialité", desc: "NDA systématique. Vos données restent vos données. Nous n'évoquons jamais un cas client sans autorisation écrite." },
];

export default function AProposPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 grain">
        <Container>
          <div className="max-w-4xl stagger">
            <SectionLabel className="mb-8">À propos</SectionLabel>
            <EditorialHeading as="h1" className="text-5xl lg:text-7xl xl:text-8xl mb-8">
              Construire le <em className="italic text-gold-600">cabinet financier</em> que les PME camerounaises méritent.
            </EditorialHeading>
            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 leading-relaxed font-light">
              NEXUS Intelligence est né d'une conviction simple : les PME d'Afrique Centrale ont besoin d'un partenaire financier rigoureux, accessible et résolument local. Ni l'arrogance des cabinets internationaux, ni l'à-peu-près des conseils improvisés.
            </p>
          </div>
        </Container>
      </section>

      {/* Manifeste */}
      <Section className="bg-cream-100 border-y border-stone-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionLabel className="mb-6">Notre manifeste</SectionLabel>
              <EditorialHeading className="text-4xl lg:text-5xl">
                Pourquoi <em className="italic text-gold-600">NEXUS</em> existe.
              </EditorialHeading>
            </div>
            <div className="lg:col-span-7 space-y-6 text-navy-800 text-lg leading-relaxed">
              <p>
                Pendant des années, nous avons observé un paradoxe. Les PME camerounaises portent une part majeure de l'économie nationale — elles emploient, elles innovent, elles exportent — mais elles pilotent encore largement à l'aveugle.
              </p>
              <p>
                Les dirigeants connaissent leur métier sur le bout des doigts. Mais quand il s'agit de modéliser une croissance, de défendre un dossier devant BICEC, d'arbitrer entre deux investissements, ou simplement de savoir si telle gamme de produits est rentable — les outils manquent, les données dorment dans des classeurs Excel, les décisions se prennent à l'instinct.
              </p>
              <p>
                Les grands cabinets internationaux sont hors de prix et déconnectés du terrain. Les comptables locaux excellent dans la conformité, mais rarement dans la stratégie. Entre les deux : un vide. Un vide qui coûte cher aux PME.
              </p>
              <p className="font-serif italic text-gold-700 text-xl">
                NEXUS Intelligence est là pour combler ce vide.
              </p>
              <p>
                Nous offrons aux dirigeants de PME ambitieuses du Cameroun, du Gabon, du Congo, ce que seuls les grands groupes pouvaient s'offrir : un partenaire financier qui comprend leurs chiffres, parle leur langue, respecte leur culture entrepreneuriale, et leur donne les outils pour décider en connaissance de cause.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Fondateur */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <SectionLabel className="mb-6">Le fondateur</SectionLabel>
              <EditorialHeading className="text-4xl lg:text-5xl mb-8">
                Philippe
              </EditorialHeading>
              <div className="text-sm tracking-[0.2em] uppercase text-navy-800/60 mb-6">
                Directeur Stratégique · Fondateur
              </div>

              {/* Photo placeholder — silhouette éditoriale */}
              <div className="aspect-[3/4] bg-gradient-to-br from-navy-900 to-navy-800 mb-6 relative overflow-hidden grain">
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <div className="font-serif text-7xl text-gold-500 font-light italic leading-none">P</div>
                    <div className="font-serif text-lg text-cream-50/60 mt-2">Yaoundé</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-navy-800 leading-relaxed">
              <p className="text-lg">
                Philippe a passé près d'une décennie à observer, accompagner et structurer la croissance de PME camerounaises et de la sous-région. Issu d'une formation en finance et modélisation, il a évolué dans des fonctions stratégiques avant de faire le choix d'un cabinet 100 % dédié aux PME.
              </p>
              <p>
                Sa conviction : <em className="font-serif text-navy-900">il ne suffit pas de produire des chiffres pour les actionnaires ou les banques. Il faut donner aux dirigeants les outils pour piloter leur entreprise au quotidien.</em>
              </p>

              <div className="pt-6 border-t border-stone-200 space-y-4">
                <h3 className="font-serif text-2xl text-navy-900 font-medium mb-4">Expertises</h3>
                <ul className="space-y-2 text-navy-800">
                  {[
                    "Modélisation financière (compte de résultat, bilan, trésorerie prévisionnelle)",
                    "Pilotage stratégique commercial pour PME en croissance",
                    "Externalisation de la fonction DAF / RAF",
                    "Préparation de dossiers de financement bancaire (BICEC, Afriland, UBA)",
                    "Diagnostic et restructuration de PME en difficulté",
                    "Conformité OHADA / SYSCOHADA / reporting COBAC",
                  ].map((e, i) => (
                    <li key={i} className="flex gap-2"><span className="text-gold-600">→</span><span>{e}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Valeurs */}
      <Section className="bg-navy-900 text-cream-50 grain">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-500 font-semibold mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <span>Nos valeurs</span>
            </div>
            <h2 className="font-serif font-light text-4xl lg:text-6xl leading-[1.05]" style={{ letterSpacing: '-0.02em' }}>
              Quatre engagements qui guident <em className="italic text-gold-500">chaque mission</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALEURS.map((v) => (
              <div key={v.titre} className="border border-white/10 p-8 hover:border-gold-500/50 transition-colors">
                <div className="w-12 h-12 bg-gold-500 flex items-center justify-center mb-6">
                  <v.icon className="w-5 h-5 text-navy-900" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3">{v.titre}</h3>
                <p className="text-cream-50/70 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Couverture géographique */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="mb-6">Couverture géographique</SectionLabel>
              <EditorialHeading className="text-4xl lg:text-5xl mb-6">
                Une <em className="italic text-gold-600">zone CEMAC</em> tout entière.
              </EditorialHeading>
              <p className="text-lg text-navy-800/80 leading-relaxed mb-8">
                Basé à Yaoundé, NEXUS Intelligence intervient dans toute la Communauté Économique et Monétaire de l'Afrique Centrale. Les missions se font en visio (haute définition, ligne dédiée) ou en présentiel selon les enjeux et la localisation.
              </p>
              <ButtonPrimary href="/contact">Réserver un échange</ButtonPrimary>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { pays: 'Cameroun', villes: ['Yaoundé', 'Douala'], primary: true },
                { pays: 'Gabon', villes: ['Libreville', 'Port-Gentil'] },
                { pays: 'Congo', villes: ['Brazzaville', 'Pointe-Noire'] },
                { pays: 'Guinée Équatoriale', villes: ['Malabo'] },
                { pays: 'Tchad', villes: ['N\'Djaména'] },
                { pays: 'RCA', villes: ['Bangui'] },
              ].map((p) => (
                <div key={p.pays} className={`p-5 border ${p.primary ? 'bg-navy-900 text-cream-50 border-navy-900' : 'bg-cream-100 border-stone-200 text-navy-900'}`}>
                  <div className={`text-xs tracking-wider uppercase font-semibold mb-2 ${p.primary ? 'text-gold-500' : 'text-gold-600'}`}>{p.pays}</div>
                  <div className="text-sm">{p.villes.join(' · ')}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-cream-100">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-navy-900 leading-[1.1] mb-6" style={{ letterSpacing: '-0.02em' }}>
              Travaillons <em className="italic text-gold-600">ensemble</em>.
            </h2>
            <p className="text-lg text-navy-800/80 mb-10">
              Premier échange gratuit, sans engagement, à votre convenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonPrimary href="/contact">Démarrer un échange</ButtonPrimary>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-navy-900/20 text-navy-900 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-navy-900/5">
                Découvrir nos services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
