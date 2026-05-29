# 🌐 NEXUS Intelligence — Site vitrine

Site web public de présentation commerciale du cabinet NEXUS Intelligence.
**Build de production validé** ✓ · 7 pages statiques ultra-rapides, optimisées SEO.

---

## 📄 Pages incluses

| Page | URL | Rôle |
|------|-----|------|
| Accueil | `/` | Hero + promesse + aperçu services + preuve sociale + CTA |
| Services | `/services` | Diagnostic 360°, Sprint Stratégie, 3 retainers + FAQ |
| Méthode | `/methode` | Processus en 5 étapes + engagements |
| Cas clients | `/cas-clients` | 3 études de cas chiffrées (anonymisées) |
| À propos | `/a-propos` | Manifeste, fondateur, valeurs, couverture CEMAC |
| Ressources | `/ressources` | Articles + lead magnet + newsletter |
| Contact | `/contact` | Formulaire → WhatsApp + appel découverte + coordonnées |

---

## 🚀 Déploiement (identique à ton outil interne)

C'est exactement la même procédure que tu connais déjà avec l'app interne. **15 minutes.**

### 1. Pousser sur GitHub

Ouvre un terminal dans ce dossier `nexus-vitrine` et tape :

```bash
git init
git add .
git commit -m "Site vitrine NEXUS"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/nexus-vitrine.git
git push -u origin main
```

⚠️ **Crée d'abord un nouveau repo** `nexus-vitrine` sur GitHub (différent de `nexus-app`).
⚠️ Pense à utiliser le **bon email Git** (celui de ton compte GitHub) pour éviter l'erreur "could not associate committer" :
```bash
git config --global user.email "ton-email-github@exemple.com"
```

### 2. Déployer sur Vercel

1. https://vercel.com → **Add New** → **Project**
2. Importe `nexus-vitrine`
3. **Aucune variable d'environnement nécessaire** (site 100% statique, pas d'IA, pas de base de données)
4. Clique **Deploy**

Ce site n'a besoin **d'aucune clé** — il est purement vitrine. Déploiement immédiat.

---

## 🌍 Architecture des domaines recommandée

Tu as maintenant **2 projets** :

| Projet | Contenu | Domaine recommandé |
|--------|---------|--------------------|
| `nexus-vitrine` | Site public commercial | **`nexus-intelligence.cm`** (domaine principal) |
| `nexus-app` | Tes 4 agents internes | **`app.nexus-intelligence.cm`** (sous-domaine) |

### Configurer les domaines sur Vercel

**Pour la vitrine (domaine principal)** :
1. Projet `nexus-vitrine` → Settings → Domains
2. Ajoute `nexus-intelligence.cm` ET `www.nexus-intelligence.cm`
3. Suis les instructions DNS de Vercel chez ton registrar

**Pour l'app interne (sous-domaine)** :
1. Projet `nexus-app` → Settings → Domains
2. Ajoute `app.nexus-intelligence.cm`
3. Ajoute l'enregistrement CNAME indiqué chez ton registrar

Résultat :
- Tes **prospects** vont sur `nexus-intelligence.cm` → voient le beau site vitrine
- **Toi** vas sur `app.nexus-intelligence.cm` → accèdes à tes agents (protégés par login)

---

## ✏️ Personnaliser le contenu

Tout le texte est dans les fichiers `app/*/page.tsx`. Pour modifier :

1. Ouvre le fichier de la page (ex: `app/page.tsx` pour l'accueil)
2. Modifie le texte directement
3. Sauvegarde
4. `git add . && git commit -m "maj texte" && git push`
5. Vercel redéploie automatiquement

### Éléments à personnaliser en priorité

- **Cas clients** (`app/cas-clients/page.tsx`) : remplace les 3 cas par tes vrais cas quand tu en auras (avec accord clients)
- **Articles** (`app/ressources/page.tsx`) : les 6 articles sont "À paraître" — publie-les au fur et à mesure
- **Photo fondateur** (`app/a-propos/page.tsx`) : actuellement une lettre stylisée "P", tu peux mettre ta vraie photo
- **Réseaux sociaux** (`components/Footer.tsx`) : les liens LinkedIn/Facebook sont en `#`, mets tes vraies URLs

### Connecter le formulaire de contact à un vrai envoi

Actuellement le formulaire de contact ouvre WhatsApp pré-rempli (fonctionne parfaitement, zéro config). Si tu veux plus tard recevoir les demandes par email automatiquement, on pourra brancher un service comme Formspree ou Resend (gratuit). Reviens me voir pour ça.

### Le lead magnet (guide téléchargeable)

Le formulaire de téléchargement du guide est visuel pour l'instant. Quand tu auras créé le PDF du guide, on branchera le téléchargement réel + capture email. Demande-moi.

---

## 🎨 Identité visuelle

- **Couleurs** : navy `#0A1628`, or `#F59E0B`, crème `#FAF8F3`
- **Typographie** : Fraunces (titres, serif élégant) + Manrope (corps)
- **Style** : éditorial premium, cabinet financier haut de gamme

Cohérent avec tes agents internes et ton branding NEXUS.

---

## 🏃 Tester en local (optionnel)

```bash
npm install
npm run dev
```
Puis ouvre http://localhost:3000

---

**NEXUS Intelligence** · Yaoundé, Cameroun
Philippe — Directeur Stratégique
+237 650 946 342 · contact@nexus-intelligence.cm
