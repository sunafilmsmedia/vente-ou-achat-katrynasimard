"use client";

// Attribution publicitaire — fbclid (Facebook Click ID).
// Capturé depuis l'URL au premier chargement et persisté en localStorage,
// pour qu'il survive même si le visiteur navigue avant de soumettre le
// formulaire (l'URL peut changer, le localStorage reste). Envoyé au webhook
// CRM sur CHAQUE lead, vide si le visiteur n'est jamais venu d'une pub Meta.
const STORAGE_KEY = "fbclid";

export function captureFbclid(): void {
  if (typeof window === "undefined") return;
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("fbclid");
    if (fromUrl) window.localStorage.setItem(STORAGE_KEY, fromUrl);
  } catch {
    // no-op — l'attribution ne doit jamais casser l'app
  }
}

export function getFbclid(): string {
  if (typeof window === "undefined") return "";
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("fbclid");
    return fromUrl ?? window.localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : "";
}

// Cookie _fbp posé par le pixel (identifiant navigateur Meta).
export function getFbp(): string {
  return readCookie("_fbp");
}

// Cookie _fbc, ou reconstruit depuis le fbclid stocké (format fb.1.<ts>.<fbclid>).
export function getFbc(): string {
  const cookie = readCookie("_fbc");
  if (cookie) return cookie;
  const fbclid = getFbclid();
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : "";
}
