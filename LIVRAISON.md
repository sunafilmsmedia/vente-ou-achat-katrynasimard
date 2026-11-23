# Vendre avant d'acheter… ou acheter avant de vendre ?

App one-page de qualification de leads pour **Katryna Simard**, courtier
immobilier résidentiel **Royal LePage Humania** (Les Immeubles Mont-Tremblant)
à Mont-Tremblant (Laurentides). Clonée de l'architecture
`vente-ou-achat-jimmybeaulieu` (elle-même clonée de `vente-ou-achat-maxbacon`).
Next.js 15 (App Router, TS) · Tailwind v4 · Framer Motion · déploiement
Vercel. Thème **bleu marine / or / blanc** (demandé tel quel par le client),
mobile-first, français (tutoiement).

## Concept

Le logiciel ne donne jamais un chiffre : il recommande une **stratégie**
(vendre avant d'acheter / acheter avant de vendre / coordonner les deux en
parallèle), déterminée par un scoring bipolaire (`lib/scoring.ts`, -100 à
+100) basé sur les 3 facteurs financiers qui comptent vraiment (besoin de
l'argent de la vente, capacité à porter deux hypothèques, économies
indépendantes), affinés par l'équité accumulée et la priorité de la personne.

## Parcours (machine à états, un seul écran)

`hero → formulaire (12 à 13 questions selon le parcours, 4 étapes) → chargement (~2 s, IA) → résultats`

- 4 étapes : Ton projet → Ta propriété actuelle → Ta situation financière →
  Tes priorités, puis coordonnées (nom/courriel/tél.).
- Auto-avance sur les choix (~220 ms). Barre de progression, bouton Précédent,
  transitions slide.
- Ville actuelle = champ de recherche filtrée (insensible aux accents/casse)
  + saisie libre, jamais de « pas trouvé ».
- Les coordonnées sont collectées À LA FIN du formulaire — le lead est soumis
  au CRM en même temps que le calcul, pas après un volet séparé.
- `/api/analyze` : rapport via Claude (repli déterministe sans clé) — le
  verdict n'est jamais décidé par l'IA, seulement mis en mots.
- `/api/lead` : webhook CRM (GHL), payload aplati.

## Ce qui a été fait pour ce déploiement

- **Logos récupérés depuis katrynasimard.com** : le logo d'équipe « Les
  Immeubles Mont-Tremblant » (`public/les-immeubles-mont-tremblant-logo.png`,
  fond blanc retiré pour poser directement sur le marine — logo maison, donc
  recoloration/fond acceptable) et le logo officiel **Royal LePage**
  (`public/royal-lepage-logo.jpg`, artwork d'origine non modifié — posé dans
  une pastille blanche arrondie par `TopLogos.tsx` plutôt que recoloré, pour
  ne pas toucher à une marque de commerce nationale).
- **Photo de Katryna récupérée** (`public/katryna-simard.jpg`) mais PAS
  affichée : comme chez Jimmy Beaulieu / Max Bacon, le badge flottant du
  template a été retiré — le champ `brokers[0].photo` reste donc vestigial
  (prêt si un `BrokerCard` est ajouté plus tard, voir le template `eval-*`).
- **Fond du hero** : la silhouette d'horizon urbain générique du template a
  été remplacée par une silhouette de montagne (`HeroBackground.tsx`) — plus
  cohérente avec Mont-Tremblant. Reste un dégradé + silhouette SVG, pas une
  vraie photo.
- **`lib/regions.ts`** : secteurs de Mont-Tremblant + MRC des Laurentides
  (Sainte-Agathe-des-Monts, Saint-Faustin–Lac-Carré, La Conception, Labelle…),
  MRC Antoine-Labelle (Rivière-Rouge, Nominingue…) et MRC des Pays-d'en-Haut
  (Saint-Sauveur, Sainte-Adèle, Morin-Heights…) en bordure du territoire.
- **Coordonnées** : téléphone `819 425-9324` (ligne bureau affichée sur son
  site ; son cellulaire `819 325-2989` existe aussi mais n'est pas repris ici
  — à confirmer avec elle si elle préfère le cellulaire).

## Ce qui reste à faire pour ce déploiement

1. **Meta Pixel** — vide par défaut dans `components/MetaPixel.tsx`
   (`PIXEL_ID`), à remplir au déploiement (jamais réutiliser l'ID d'une autre
   app).
2. **Clarity Project** — vide par défaut dans `components/Clarity.tsx`.
3. **`.env.local`** — `ANTHROPIC_API_KEY`, `CRM_WEBHOOK_URL`,
   `NEXT_PUBLIC_SITE_URL` à renseigner (voir `.env.local.example`).
4. **Logo « Les Immeubles Mont-Tremblant »** : seule une version basse
   résolution (150×150 à l'origine, ré-échantillonnée à 300×300) était
   disponible sur son site — à remplacer par un fichier source plus net si
   elle en a un.
5. **Confirmer le téléphone à afficher** (bureau vs cellulaire, voir
   ci-dessus).

## Pour rebrander à un courtier précis — 4 endroits

1. **`lib/brand.ts`** — LE fichier central : nom, région/ville, textes du
   hero, le ou les courtiers, logos.
2. **`lib/regions.ts`** — la liste des villes/secteurs couverts (actuellement :
   Mont-Tremblant et les Hautes-Laurentides).
3. **`public/`** — `les-immeubles-mont-tremblant-logo.png` (logo d'équipe),
   `royal-lepage-logo.jpg` (logo officiel Royal LePage), `katryna-simard.jpg`
   (photo, pas encore affichée).
4. **`.env.local`** (voir `.env.local.example`) — clés propres au déploiement :
   `ANTHROPIC_API_KEY`, `CRM_WEBHOOK_URL`, `NEXT_PUBLIC_SITE_URL`.

## Développement

```bash
npm install
cp .env.local.example .env.local   # remplir au besoin
npm run dev
```

## Déploiement Vercel

1. `git push` vers le repo GitHub du projet (à créer — en attente du lien
   GitHub de l'utilisateur).
2. Sur vercel.com → New Project → importer ce repo (Next.js détecté
   automatiquement, aucune config requise).
3. Renseigner les variables d'environnement de `.env.local.example` dans
   Vercel → Settings → Environment Variables.
4. Déployer.
