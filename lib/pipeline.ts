// Offre NEXUS Pipeline (SaaS) : source unique pour la page Services, la page /pipeline et le formulaire de contact.
// Les plans reprennent le catalogue de la base de NEXUS Pipeline (table billing_plans) ; à garder synchronisés.

export const PIPELINE_APP_URL = (process.env.NEXT_PUBLIC_PIPELINE_APP_URL || 'https://nexus-pipeline-beryl.vercel.app').replace(/\/+$/, '');
export const PIPELINE_LOGIN_URL = `${PIPELINE_APP_URL}/login`;

export type PipelinePlan = {
  code: 'trial' | 'starter' | 'growth' | 'business';
  /** valeur du champ « service » du formulaire de contact */
  service: string;
  name: string;
  tagline: string;
  /** null = tarif communiqué sur demande */
  monthly: number | null;
  annual: number | null;
  priceNote?: string;
  limits: { users: number; contacts: number; companies: number; opportunities: number };
  modules: { crm: boolean; marketing: boolean; ai: boolean; api: boolean };
  featured?: boolean;
  cta: string;
};

export const PIPELINE_PLANS: PipelinePlan[] = [
  {
    code: 'trial', service: 'pipeline-essai', name: 'Essai', tagline: 'Pour découvrir le CRM en conditions réelles.',
    monthly: 0, annual: 0, priceNote: '7 jours',
    limits: { users: 1, contacts: 100, companies: 50, opportunities: 50 },
    modules: { crm: true, marketing: false, ai: false, api: false },
    cta: 'Demander mon essai',
  },
  {
    code: 'starter', service: 'pipeline-starter', name: 'Starter', tagline: 'Pour une petite équipe commerciale qui démarre.',
    monthly: null, annual: null, priceNote: 'Tarif communiqué sur demande',
    limits: { users: 2, contacts: 250, companies: 100, opportunities: 100 },
    modules: { crm: true, marketing: true, ai: true, api: false },
    cta: 'Souscrire',
  },
  {
    code: 'growth', service: 'pipeline-growth', name: 'Growth', tagline: 'Pour structurer et animer une équipe en croissance.',
    monthly: 25000, annual: 250000,
    limits: { users: 5, contacts: 2500, companies: 1000, opportunities: 1000 },
    modules: { crm: true, marketing: true, ai: true, api: true },
    featured: true, cta: 'Souscrire',
  },
  {
    code: 'business', service: 'pipeline-business', name: 'Business', tagline: 'Pour les structures multi-équipes à fort volume.',
    monthly: 75000, annual: 750000,
    limits: { users: 20, contacts: 25000, companies: 10000, opportunities: 10000 },
    modules: { crm: true, marketing: true, ai: true, api: true },
    cta: 'Souscrire',
  },
];

export const PIPELINE_SERVICE_PREFIX = 'pipeline-';

export const fcfa = (n: number) => n.toLocaleString('fr-FR').replace(/ | /g, ' ');

/** Libellés du formulaire de contact (envoyés tels quels à l'équipe via la demande sécurisée). */
export const PIPELINE_SERVICE_OPTIONS = PIPELINE_PLANS.map((p) => ({
  value: p.service,
  label:
    p.code === 'trial'
      ? 'NEXUS Pipeline (SaaS) — Essai 7 jours'
      : p.monthly === null
        ? `NEXUS Pipeline (SaaS) — ${p.name} (tarif sur demande)`
        : `NEXUS Pipeline (SaaS) — ${p.name} (${fcfa(p.monthly)} FCFA/mois)`,
}));
