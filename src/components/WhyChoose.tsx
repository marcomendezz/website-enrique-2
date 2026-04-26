"use client";

import { motion } from "framer-motion";
import {
  MapTrifold,
  Translate,
  Trophy,
  ChartLineUp,
  Handshake,
  Buildings,
} from "@phosphor-icons/react";

const advantages = [
  {
    icon: MapTrifold,
    title: "Local Expert",
    description:
      "Born and raised in Los Cabos \u2014 deep knowledge no transplant agent can replicate",
  },
  {
    icon: Translate,
    title: "Bilingual Service",
    description:
      "Fluent in English and Spanish for international transactions",
  },
  {
    icon: Trophy,
    title: "Award-Winning",
    description:
      "TOP 20 in BCS, President's Circle, #1 Company GCI Producer",
  },
  {
    icon: ChartLineUp,
    title: "$30M+ Career Sales",
    description:
      "Proven track record across condos, villas, estates, and investment land",
  },
  {
    icon: Handshake,
    title: "Full-Service Approach",
    description:
      "From property search to closing, legal guidance to property management",
  },
  {
    icon: Buildings,
    title: "Oceanside Backed",
    description:
      "Backed by Oceanside Realty Group \u2014 $600M+ in total sales, 600+ properties",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            The Advantage
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter leading-none">
            Why Choose Enrique
          </h2>
        </motion.div>

        {/* 2-column zig-zag instead of 3-equal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.06,
                }}
                className="group flex items-start gap-5 p-8 border-t border-gold-dim hover:bg-surface-light transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-colors">
                  <Icon size={20} weight="light" className="text-gold" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-[45ch]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
