// ─────────────────────────────────────────────────────────────────────────
//  CONFIG DE MARQUE — WHITE LABEL
//  Le SEUL fichier à éditer pour rebrander l'app à un nouveau client.
//  (+ lib/regions.ts pour la liste des secteurs, + les images dans /public,
//   + les variables d'environnement : voir .env.local.example)
//
//  Palette : bleu marine / blanc / or (demandée telle quelle par le client).
//  Reprend les couleurs du template Jimmy Beaulieu (navy #0c1341, or #dcb169).
//  Les couleurs se règlent dans app/globals.css (bloc @theme) — cherche les
//  variables --color-brand-* et --color-gold.
//
//  Branding : Katryna Simard, courtier immobilier résidentiel Royal LePage
//  Humania / Les Immeubles Mont-Tremblant, à Mont-Tremblant (Laurentides).
//  Logo d'équipe (public/les-immeubles-mont-tremblant-logo.png, fond retiré)
//  et logo officiel Royal LePage (public/royal-lepage-logo.jpg, sur fond
//  blanc — voir TopLogos.tsx pour le traitement en pastille) récupérés
//  depuis katrynasimard.com. Photo de la courtière récupérée aussi
//  (public/katryna-simard.jpg) mais pas encore affichée : le badge flottant
//  du template reste retiré, comme chez Jimmy Beaulieu / Max Bacon.
// ─────────────────────────────────────────────────────────────────────────

export interface BrokerConfig {
  name: string;
  title: string;
  /** Chemin de la photo dans /public (ex. "/broker-1.jpg") */
  photo: string;
  /** Cadrage de la photo dans le rond du badge (ex. "50% 18%") */
  objectPosition: string;
  /** Téléphone affiché (ex. "514 000-0000") */
  phoneDisplay: string;
  /** Téléphone au format tel: (ex. "+15140000000") */
  phoneTel: string;
}

export interface BrandConfig {
  /** Identifiant court du déploiement — sert de "source" au CRM et de projet Clarity Scanner par défaut. */
  slug: string;

  /** Nom de l'équipe (affiché en filigrane dans le formulaire, le footer, le consentement). */
  teamName: string;

  /** Région / territoire couvert (textes marketing, rapport de repli, footer). */
  region: string;
  /** Ville centrale (utilisée dans les textes du rapport de repli). */
  city: string;

  /** Textes du hero. */
  hero: {
    chip: string;
    title: string;
    /** Segment exact du titre en rouge shimmer + police douce (serif italique). Optionnel. */
    titleHighlight?: string;
    /** Quelle occurrence de `titleHighlight` styler (1 = la première). Défaut : 1. */
    titleHighlightOccurrence?: number;
    /** Segment exact du titre en police douce rouge (serif italique). Optionnel. */
    titleSoft?: string;
    /** Quelle occurrence de `titleSoft` styler (1 = la première). Défaut : 1. */
    titleSoftOccurrence?: number;
    subtitle: string;
    signature: string; // "Boosté par l'IA"
    cta: string;
    ctaHint: string;
    scrollHint: string;
  };

  /** Logos fixes en haut (équipe à gauche, bannière à droite). */
  logos: {
    team: { src: string; alt: string; width: number; height: number };
    banner: { src: string; alt: string; width: number; height: number };
  };

  /** Courtier(s). Les noms servent aux textes du rapport (le badge flottant a été retiré). */
  brokers: BrokerConfig[];
}

export const BRAND: BrandConfig = {
  slug: "vente-ou-achat-katrynasimard",

  teamName: "Katryna Simard",

  region: "les Laurentides",
  city: "Mont-Tremblant",

  hero: {
    chip: "Mont-Tremblant · Laurentides",
    title: "Vendre avant d'acheter… ou acheter avant de vendre ?",
    titleHighlight: "Vendre",
    titleSoft: "acheter",
    // La 2e occurrence : "ou acheter avant de vendre" — pas "d'acheter" au début.
    titleSoftOccurrence: 2,
    subtitle:
      "Découvre en 60 secondes quelle stratégie immobilière pourrait être la plus avantageuse selon ta situation.",
    signature: "Boosté par l'IA",
    cta: "Découvrir ma meilleure stratégie",
    ctaHint: "60 secondes — gratuit et confidentiel",
    scrollHint: "Confidentiel · Sans engagement",
  },

  logos: {
    team: {
      src: "/les-immeubles-mont-tremblant-logo.png",
      alt: "Les Immeubles Mont-Tremblant — Real Estate",
      width: 300,
      height: 300,
    },
    banner: {
      // Logo officiel Royal LePage — rendu dans une pastille blanche par TopLogos
      // (fond blanc/rouge/noir d'origine, conservé tel quel sur fond marine).
      src: "/royal-lepage-logo.jpg",
      alt: "Royal LePage Humania — Agence immobilière",
      width: 300,
      height: 110,
    },
  },

  brokers: [
    {
      name: "Katryna Simard",
      title: "Courtier immobilier résidentiel · Royal LePage",
      photo: "/katryna-simard.jpg",
      objectPosition: "50% 15%",
      phoneDisplay: "819 425-9324",
      phoneTel: "+18194259324",
    },
  ],
};

/** "Prénom ou Prénom" — utilisé dans les textes qui nomment l'équipe. */
export function brokersInlineNames(): string {
  const firsts = BRAND.brokers.map((b) => b.name.split(/\s+/)[0]).filter(Boolean);
  if (firsts.length === 0) return "un courtier";
  if (firsts.length === 1) return firsts[0];
  return `${firsts.slice(0, -1).join(", ")} ou ${firsts[firsts.length - 1]}`;
}
