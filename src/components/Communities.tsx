"use client";

import { motion } from "framer-motion";
import { FocusCards } from "./ui/focus-cards";

const communities = [
  {
    title: "Pedregal",
    subtitle: "Cabo's most prestigious address",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Quivira",
    subtitle: "Where the desert meets the Pacific",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Diamante",
    subtitle: "World-class golf and oceanfront living",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Palmilla",
    subtitle: "The jewel of the Corridor",
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cabo Bello",
    subtitle: "Gated tranquility on the Corridor",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "San Jose del Cabo",
    subtitle: "Art, culture, and coastal charm",
    src: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Communities() {
  return (
    <section id="communities" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            Explore
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter leading-none">
            Premier Communities
          </h2>
          <p className="text-muted text-base mt-4 max-w-[50ch]">
            Hover over a community to focus. Each location offers a distinct
            lifestyle across the Los Cabos corridor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.15,
          }}
        >
          <FocusCards cards={communities} />
        </motion.div>
      </div>
    </section>
  );
}
