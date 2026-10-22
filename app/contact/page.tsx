'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Calendar, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PIPELINE_LOGIN_URL, PIPELINE_SERVICE_OPTIONS, PIPELINE_SERVICE_PREFIX } from '@/lib/pipeline';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove?: (widgetId: string) => void;
    };
  }
}

const SECTION_LABEL = 'inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold-600 font-semibold';

const SERVICES = [
  { value: 'diagnostic', label: 'Diagnostic 360° (150 000 FCFA)' },
  { value: 'sprint', label: 'Sprint Stratégie (350 000 FCFA)' },
  { value: 'starter', label: 'Retainer Starter (180 000 FCFA/mois)' },
  { value: 'growth', label: 'Retainer Growth (420 000 FCFA/mois)' },
  { value: 'cfo', label: 'Performance CFO (900 000 FCFA/mois)' },
  ...PIPELINE_SERVICE_OPTIONS,
  { value: 'decouverte', label: "Appel découverte gratuit (30 min)" },
  { value: 'autre', label: 'Autre / je ne sais pas encore' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: '', entreprise: '', email: '', telephone: '', ville: '', service: 'diagnostic', message: '', website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [fallbackSent, setFallbackSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [consent, setConsent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) return;
    let cancelled = false;
    const renderWidget = () => {
      if (cancelled || !window.turnstile || !turnstileRef.current || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
        theme: 'light',
      });
    };
    if (window.turnstile) {
      renderWidget();
    } else {
      let script = document.querySelector<HTMLScriptElement>('script[data-nexus-turnstile]');
      if (!script) {
        script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.dataset.nexusTurnstile = 'true';
        document.head.appendChild(script);
      }
      script.addEventListener('load', renderWidget);
      return () => {
        cancelled = true;
        script?.removeEventListener('load', renderWidget);
        if (widgetIdRef.current && window.turnstile?.remove) window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      };
    }
    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile?.remove) window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [turnstileSiteKey]);

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  // Préselection de l'offre via /contact?service=... (liens des pages Services et NEXUS Pipeline)
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('service');
    if (requested && SERVICES.some((o) => o.value === requested)) {
      setForm((f) => ({ ...f, service: requested }));
    }
  }, []);

  const buildWhatsApp = () => {
    const serviceLabel = SERVICES.find((s) => s.value === form.service)?.label || form.service;
    const text = `Bonjour NEXUS Intelligence,

Je souhaite vous contacter via votre site.

Nom : ${form.nom || '—'}
Entreprise : ${form.entreprise || '—'}
Ville : ${form.ville || '—'}
Email : ${form.email || '—'}
Intérêt : ${serviceLabel}

Message :
${form.message || '—'}`;
    return `https://wa.me/237650946342?text=${encodeURIComponent(text)}`;
  };

  const buildEmail = () => {
    const serviceLabel = SERVICES.find((s) => s.value === form.service)?.label || form.service;
    const subject = `Demande de contact — ${serviceLabel}`;
    const body = `Nom : ${form.nom}\nEntreprise : ${form.entreprise}\nVille : ${form.ville}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\nIntérêt : ${serviceLabel}\n\nMessage :\n${form.message}`;
    return `mailto:contact@nexus-intelligence.cm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    if (!turnstileSiteKey) {
      setFallbackSent(true);
      setSubmitted(true);
      window.open(buildWhatsApp(), '_blank', 'noopener,noreferrer');
      return;
    }
    if (!turnstileToken) {
      setSubmitError('Veuillez terminer la vérification anti-robot.');
      return;
    }
    if (!consent) {
      setSubmitError('Veuillez confirmer votre consentement au traitement de votre demande.');
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          company: form.entreprise,
          service: SERVICES.find((s) => s.value === form.service)?.label || form.service,
          message: form.message,
          consent: true,
          turnstileToken,
          website: form.website,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(typeof result.error === 'string' ? result.error : 'La demande n’a pas pu être transmise.');
      }
      setSubmitted(true);
      setTurnstileToken('');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erreur inattendue. Réessayez ou contactez-nous directement.');
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove?.(widgetIdRef.current);
        widgetIdRef.current = null;
        setTurnstileToken('');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl stagger">
            <div className={SECTION_LABEL + ' mb-8'}>
              <div className="w-8 h-px bg-gold-600" />
              <span>Contact</span>
            </div>
            <h1 className="font-serif font-light text-navy-900 text-5xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-[-0.02em] mb-8">
              Démarrons la <em className="italic text-gold-600">conversation</em>.
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-navy-800/80 leading-relaxed font-light">
              Réservez un Diagnostic 360°, souscrivez à NEXUS Pipeline, planifiez un appel découverte gratuit, ou posez simplement votre question. Réponse sous 24 heures ouvrées.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Formulaire */}
            <div className="lg:col-span-7">
              <div className="bg-cream-100 border border-stone-200 p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold-500 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-navy-900" />
                    </div>
                    <h2 className="font-serif text-3xl font-light text-navy-900 mb-4">Votre demande a été transmise</h2>
                    <p className="text-navy-800/80 mb-8 max-w-md mx-auto">
                      {fallbackSent
                        ? "La transmission automatique au CRM n’est pas encore configurée. WhatsApp s’est ouvert avec votre message pré-rempli : vérifiez puis envoyez-le pour nous contacter."
                        : "Votre demande a été enregistrée. Notre équipe vous recontactera sous 24 heures ouvrées. Vous pouvez aussi choisir un canal de contact direct ci-dessous."}
                    </p>
                    {form.service.startsWith(PIPELINE_SERVICE_PREFIX) && (
                      <div className="max-w-md mx-auto mb-8 p-5 bg-cream-50 border border-stone-200 text-left">
                        <div className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-2">Prochaine étape : NEXUS Pipeline</div>
                        <p className="text-sm text-navy-800/80 mb-4">
                          Notre équipe confirme et active votre offre sous 24 heures ouvrées. Une fois votre offre souscrite, accédez à votre espace NEXUS Pipeline.
                        </p>
                        <a href={PIPELINE_LOGIN_URL} className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy-900 hover:text-gold-600">
                          Accéder à NEXUS Pipeline <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href={buildWhatsApp()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white text-xs font-semibold tracking-wider uppercase hover:bg-emerald-500">
                        <MessageCircle className="w-4 h-4" /> Envoyer via WhatsApp
                      </a>
                      <a href={buildEmail()} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-cream-50 text-xs font-semibold tracking-wider uppercase hover:bg-navy-800">
                        <Mail className="w-4 h-4" /> Envoyer par email
                      </a>
                    </div>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-navy-800/60 hover:text-navy-900 underline">
                      Modifier mon message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-3xl font-light text-navy-900 mb-2">Formulaire de contact</h2>
                    <p className="text-sm text-navy-800/60 mb-8">Les champs marqués d'un * sont requis.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                        <label>Ne pas remplir ce champ<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} /></label>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold mb-2">Nom complet *</label>
                          <input required value={form.nom} onChange={(e) => update('nom', e.target.value)} placeholder="Marie Tchamba" className="w-full px-4 py-3 bg-cream-50 border border-stone-300 text-navy-900 text-sm focus:border-gold-500 outline-none" />
                        </div>
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold mb-2">Entreprise *</label>
                          <input required value={form.entreprise} onChange={(e) => update('entreprise', e.target.value)} placeholder="Tchamba Distribution SARL" className="w-full px-4 py-3 bg-cream-50 border border-stone-300 text-navy-900 text-sm focus:border-gold-500 outline-none" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold mb-2">Email *</label>
                          <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="marie@entreprise.cm" className="w-full px-4 py-3 bg-cream-50 border border-stone-300 text-navy-900 text-sm focus:border-gold-500 outline-none" />
                        </div>
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold mb-2">Téléphone / WhatsApp</label>
                          <input value={form.telephone} onChange={(e) => update('telephone', e.target.value)} placeholder="+237 6XX XXX XXX" className="w-full px-4 py-3 bg-cream-50 border border-stone-300 text-navy-900 text-sm focus:border-gold-500 outline-none" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold mb-2">Ville</label>
                          <input value={form.ville} onChange={(e) => update('ville', e.target.value)} placeholder="Douala, Cameroun" className="w-full px-4 py-3 bg-cream-50 border border-stone-300 text-navy-900 text-sm focus:border-gold-500 outline-none" />
                        </div>
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold mb-2">Votre intérêt *</label>
                          <select value={form.service} onChange={(e) => update('service', e.target.value)} className="w-full px-4 py-3 bg-cream-50 border border-stone-300 text-navy-900 text-sm focus:border-gold-500 outline-none">
                            {SERVICES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold mb-2">Votre message</label>
                        <textarea required minLength={10} maxLength={5000} value={form.message} onChange={(e) => update('message', e.target.value)} rows={4} placeholder="Décrivez brièvement votre situation, vos enjeux ou vos questions..." className="w-full px-4 py-3 bg-cream-50 border border-stone-300 text-navy-900 text-sm focus:border-gold-500 outline-none resize-none" />
                      </div>

                      <div>
                        <div ref={turnstileRef} className="min-h-[65px]" />
                        {!turnstileSiteKey && <p className="text-xs text-amber-800">Le formulaire CRM sécurisé est en cours de configuration. L’envoi basculera temporairement vers WhatsApp.</p>}
                      </div>
                      <label className="flex items-start gap-3 text-xs text-navy-800/70">
                        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-0.5" />
                        <span>J’accepte que les informations transmises soient utilisées pour répondre à ma demande de contact. *</span>
                      </label>
                      {submitError && <p role="alert" className="rounded border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{submitError}</p>}
                      <button type="submit" disabled={submitting} className="w-full px-6 py-4 bg-navy-900 text-cream-50 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-navy-800 transition-colors btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50">
                        <Send className="w-4 h-4" />
                        {submitting ? 'Transmission en cours…' : 'Envoyer ma demande'}
                      </button>
                      <p className="text-xs text-navy-800/50 text-center">
                        Votre demande est transmise de manière sécurisée à notre équipe. Les champs marqués d’un * sont requis.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Coordonnées + canaux directs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Canaux rapides */}
              <div className="bg-navy-900 text-cream-50 p-8 grain">
                <h3 className="font-serif text-2xl font-light mb-6">Contact direct</h3>
                <div className="space-y-5">
                  <a href="https://wa.me/237650946342" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 transition-colors shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-cream-50/60">WhatsApp Business</div>
                      <div className="font-medium group-hover:text-gold-500 transition-colors">+237 650 946 342</div>
                    </div>
                  </a>
                  <a href="tel:+237650946342" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 bg-navy-800 border border-white/10 flex items-center justify-center group-hover:border-gold-500 transition-colors shrink-0">
                      <Phone className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-cream-50/60">Téléphone</div>
                      <div className="font-medium group-hover:text-gold-500 transition-colors">+237 650 946 342</div>
                    </div>
                  </a>
                  <a href="mailto:contact@nexus-intelligence.cm" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 bg-navy-800 border border-white/10 flex items-center justify-center group-hover:border-gold-500 transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-cream-50/60">Email</div>
                      <div className="font-medium group-hover:text-gold-500 transition-colors break-all">contact@nexus-intelligence.cm</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-navy-800 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-cream-50/60">Localisation</div>
                      <div className="font-medium">Yaoundé, Cameroun</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appel découverte */}
              <div id="decouverte" className="bg-gold-500 text-navy-900 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Gratuit · Sans engagement</span>
                </div>
                <h3 className="font-serif text-2xl font-light mb-3">Appel découverte 30 min</h3>
                <p className="text-sm text-navy-900/80 mb-6 leading-relaxed">
                  Pas encore décidé ? Réservez un échange gratuit. Nous validons ensemble la pertinence d'une mission et la formule la mieux adaptée à votre situation.
                </p>
                <a href="https://wa.me/237650946342?text=Bonjour,%20je%20souhaite%20réserver%20un%20appel%20découverte%20de%2030%20minutes." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-navy-900 text-cream-50 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-navy-800 transition-colors">
                  Réserver mon créneau
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Horaires */}
              <div className="bg-cream-100 border border-stone-200 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gold-600" />
                  <h3 className="text-[10px] tracking-[0.2em] uppercase text-navy-800/60 font-semibold">Disponibilités</h3>
                </div>
                <div className="space-y-2 text-sm text-navy-800">
                  <div className="flex justify-between"><span>Lundi — Vendredi</span><span className="font-medium">8h — 18h</span></div>
                  <div className="flex justify-between"><span>Samedi</span><span className="font-medium">9h — 13h</span></div>
                  <div className="flex justify-between text-navy-800/50"><span>Dimanche</span><span>Fermé</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-navy-800/60">
                  Heure du Cameroun (GMT+1). Réponse aux messages sous 24h ouvrées.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
