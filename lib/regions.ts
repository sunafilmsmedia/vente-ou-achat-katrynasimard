import type { Region } from "./types";

// ─────────────────────────────────────────────────────────────────────────
//  SECTEURS COUVERTS — Mont-Tremblant et les Hautes-Laurentides.
//
//  Utilisé par les champs de recherche de ville/secteur :
//  - recherche insensible aux accents et à la casse
//  - si la ville tapée n'y figure pas, l'utilisateur peut toujours saisir
//    du texte libre (« Ajouter "…" ») — donc la liste n'a pas besoin d'être
//    exhaustive, mais couvrir toutes les municipalités du territoire améliore
//    l'expérience.
//  Aucune coordonnée (lat/lng) n'est requise : seul `name` est affiché.
// ─────────────────────────────────────────────────────────────────────────
export const REGIONS: Region[] = [
  // ── Mont-Tremblant et ses secteurs ────────────────────────────────────────
  { id: "mont-tremblant", name: "Mont-Tremblant" },
  { id: "saint-jovite", name: "Saint-Jovite (secteur de Mont-Tremblant)" },
  { id: "village-mont-tremblant", name: "Village (secteur de Mont-Tremblant)" },
  { id: "station-mont-tremblant", name: "Station Mont Tremblant" },
  { id: "lac-tremblant-nord", name: "Lac-Tremblant-Nord" },

  // ── MRC des Laurentides (autour de Mont-Tremblant) ───────────────────────
  { id: "la-conception", name: "La Conception" },
  { id: "lac-superieur", name: "Lac-Supérieur" },
  { id: "huberdeau", name: "Huberdeau" },
  { id: "brebeuf", name: "Brébeuf" },
  { id: "montcalm", name: "Montcalm" },
  { id: "amherst", name: "Amherst" },
  { id: "arundel", name: "Arundel" },
  { id: "la-minerve", name: "La Minerve" },
  { id: "labelle", name: "Labelle" },
  { id: "ivry-sur-le-lac", name: "Ivry-sur-le-Lac" },
  { id: "sainte-agathe-des-monts", name: "Sainte-Agathe-des-Monts" },
  { id: "sainte-lucie-des-laurentides", name: "Sainte-Lucie-des-Laurentides" },
  { id: "val-des-lacs", name: "Val-des-Lacs" },
  { id: "saint-faustin-lac-carre", name: "Saint-Faustin–Lac-Carré" },
  { id: "mont-blanc", name: "Mont-Blanc" },

  // ── MRC Antoine-Labelle (plus au nord) ───────────────────────────────────
  { id: "rivière-rouge", name: "Rivière-Rouge" },
  { id: "l-annonciation", name: "L'Annonciation (secteur de Rivière-Rouge)" },
  { id: "nominingue", name: "Nominingue" },
  { id: "lac-saguay", name: "Lac-Saguay" },

  // ── MRC des Pays-d'en-Haut (plus au sud) ─────────────────────────────────
  { id: "saint-sauveur", name: "Saint-Sauveur" },
  { id: "sainte-adele", name: "Sainte-Adèle" },
  { id: "morin-heights", name: "Morin-Heights" },
  { id: "piedmont", name: "Piedmont" },
  { id: "saint-adolphe-d-howard", name: "Saint-Adolphe-d'Howard" },
  { id: "wentworth-nord", name: "Wentworth-Nord" },
  { id: "estérel", name: "Estérel" },
];
