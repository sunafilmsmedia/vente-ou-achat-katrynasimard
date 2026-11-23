// Fond décoratif du hero — Katryna Simard (Royal LePage Humania / Les
// Immeubles Mont-Tremblant). Pas de photo du secteur pour l'instant : un
// dégradé marine (même palette que le reste de l'app), surmonté d'une
// silhouette SVG de montagne (Mont-Tremblant), très discrète, sous le
// dégradé — à remplacer par une vraie photo du secteur (ex. le sommet ou
// le village piétonnier) dès qu'on en a une.
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-[42vh] min-h-[280px] opacity-[0.16]"
        aria-hidden
      >
        <svg
          viewBox="0 0 1200 260"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-full"
          fill="none"
        >
          {/* Silhouette de chaîne de montagnes (Mont-Tremblant) */}
          <g fill="#ffffff">
            <polygon points="0,260 0,210 110,70 190,150 260,90 360,210 430,120 520,210 600,40 700,180 760,130 860,230 940,100 1040,200 1120,150 1200,220 1200,260" />
          </g>
        </svg>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% -5%, #1a2458 0%, #0f173d 45%, #050821 100%)",
        }}
      />
      <div className="absolute -top-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-white/[0.09] blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-white/[0.06] blur-3xl" />
    </div>
  );
}
