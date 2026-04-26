"use client";

import { motion } from "framer-motion";
import { MapPin } from "@phosphor-icons/react";
import { Tooltip } from "./ui/tooltip-card";

const areas = [
  {
    name: "Pedregal de Cabo San Lucas",
    description: "Exclusive oceanfront estates and hillside villas",
    tooltip: "The original luxury community of Cabo. Gated, private, with dramatic cliffside homes overlooking the Pacific. Prices from $1.5M to $15M+.",
  },
  {
    name: "Quivira Los Cabos",
    description: "Resort-style living with Jack Nicklaus golf",
    tooltip: "Master-planned resort community with world-class golf, beach club, and panoramic ocean views. Condos from $400K, villas from $2M+.",
  },
  {
    name: "Diamante Cabo San Lucas",
    description: "Luxury condos, villas, and Tiger Woods-designed golf",
    tooltip: "Home to The Tiger Woods-designed El Cardonal course and Dunes course. Beachfront condos and custom estate lots available.",
  },
  {
    name: "Cabo Bello",
    description: "Gated ocean-view residences on the Tourist Corridor",
    tooltip: "Secure gated community between Cabo San Lucas and San Jose del Cabo. Modern architecture with sweeping Sea of Cortez views.",
  },
  {
    name: "Vista Mare",
    description: "Modern beachfront condominiums",
    tooltip: "Newer development featuring contemporary design, direct beach access, and resort amenities. Strong rental income potential.",
  },
  {
    name: "San Jose del Cabo",
    description: "Historic downtown, art district, and emerging luxury developments",
    tooltip: "The cultural heart of Los Cabos. Art Walk, colonial architecture, and a growing luxury market with great investment upside.",
  },
  {
    name: "Tourist Corridor",
    description:
      "Oceanfront estates between Cabo San Lucas and San Jose del Cabo",
    tooltip: "20 miles of prime coastline connecting both towns. Home to top resorts, championship golf, and the most sought-after addresses in Baja.",
  },
];

export default function MarketExpertise() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            Market Expertise
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter leading-none max-w-[20ch]">
            Deep Knowledge Across Los Cabos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.06,
              }}
              className="group border-t border-gold-dim py-7 px-2 flex items-start gap-4 hover:bg-surface-light transition-colors duration-300"
            >
              <MapPin
                size={20}
                weight="light"
                className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
              />
              <div>
                <Tooltip
                  content={area.tooltip}
                  containerClassName="cursor-default"
                >
                  <h3 className="text-foreground font-medium mb-1 tracking-tight border-b border-dashed border-gold/20 pb-0.5">
                    {area.name}
                  </h3>
                </Tooltip>
                <p className="text-muted text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
