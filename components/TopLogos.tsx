"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BRAND } from "@/lib/brand";

export default function TopLogos() {
  const { team, banner } = BRAND.logos;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-30 pointer-events-none rounded-lg bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]"
        aria-hidden
      >
        {/* Logo Les Immeubles Mont-Tremblant — pastille blanche pour rester lisible sur le marine */}
        <Image
          src={team.src}
          alt={team.alt}
          width={team.width}
          height={team.height}
          priority
          className="h-10 sm:h-12 w-auto"
        />
      </motion.div>

      {/* Logo Royal LePage — artwork d'origine sur fond blanc (pas de version
          inversée dispo) : pastille blanche arrondie pour rester lisible sur le marine. */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30 pointer-events-none rounded-lg bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]"
        aria-hidden
      >
        <Image
          src={banner.src}
          alt={banner.alt}
          width={banner.width}
          height={banner.height}
          priority
          className="h-6 sm:h-8 w-auto"
        />
      </motion.div>
    </>
  );
}
