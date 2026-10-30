// Offre NEXUS Pipeline (SaaS) : source unique pour la page Services, la page /pipeline et le formulaire de contact.
// Les offres et tarifs reprennent ceux de la page publique de NEXUS Pipeline (components/NexusPipeline.tsx) ; à garder synchronisés.

export const PIPELINE_APP_URL = (process.env.NEXT_PUBLIC_PIPELINE_APP_URL || 'https://nexus-pipeline-beryl.vercel.app').replace(/\/+$/, '');
export const PIPELINE_LOGIN_URL = `${PIPELINE_APP_URL}/login`;
/** Création de compte NEXUS Pipeline avec l'offre choisie (essai de 7 jours, puis confirmation de l'offre dans le SaaS). */
export const pipelineRegisterUrl = (code: PipelinePlan['code']) => `${PIPELINE_APP_URL}/register?plan=${code}`;

export type PipelinePlan = {
  code: 'starter' | 'growth' | 'business';
  /** valeur du champ « service » du formulaire de contact */
  service: string;
  name: string;
  tagline: string;
  monthly: number;
  /** tarif annuel (équivaut à 10 mois : 2 mois offerts) */
  annual: number;
  features: string[];
  featured?: boolean;
};

export const PIPELINE_PLANS: PipelinePlan[] = [
  {
    code: 'starter', service: 'pipeline-starter', name: 'Starter PME', monthly: 14900, annual: 149000,
    tagline: 'Pour l’entrepreneur ou la TPE qui démarre sa prospection.',
    features: ['1 utilisateur', 'Jusqu’à 500 prospects', 'Pipeline CRM visuel', 'Relances par email', 'Tableau de bord de base'],
  },
  {
    code: 'growth', service: 'pipeline-growth', name: 'Growth Performance', monthly: 34900, annual: 349000, featured: true,
    tagline: 'Pour la PME qui veut structurer ses ventes et accélérer.',
    features: ['Jusqu’à 5 utilisateurs', 'Prospects illimités', 'Scoring intelligent par IA', 'Relances email + WhatsApp', 'Tableaux de bord avancés', 'Génération de prospects gérée'],
  },
  {
    code: 'business', service: 'pipeline-business', name: 'Business Entreprise', monthly: 79900, annual: 799000,
    tagline: 'Pour les équipes commerciales et structures multi-sites.',
    features: ['Utilisateurs illimités', 'Multi-équipes & rôles', 'Intégrations sur mesure', 'Accompagnement stratégique NEXUS', 'Support prioritaire dédié'],
  },
];

export const PIPELINE_SERVICE_PREFIX = 'pipeline-';

export const fcfa = (n: number) => n.toLocaleString('fr-FR').replace(/ | /g, ' ');

/** Mois offerts par le paiement annuel, calculés (jamais saisis en dur). */
export const annualMonthsFree = (p: PipelinePlan) => Math.round(12 - p.annual / p.monthly);

/** Libellés du formulaire de contact (envoyés tels quels à l'équipe via la demande sécurisée). */
export const PIPELINE_SERVICE_OPTIONS = PIPELINE_PLANS.map((p) => ({
  value: p.service,
  label: `NEXUS Pipeline (SaaS) — ${p.name} (${fcfa(p.monthly)} FCFA/mois ou ${fcfa(p.annual)} FCFA/an)`,
}));
