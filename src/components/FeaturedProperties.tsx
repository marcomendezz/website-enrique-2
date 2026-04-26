"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { LampContainer } from "./ui/lamp";

import { PixelImage } from "./ui/pixel-image";

const properties = [
  {
    title: "The Pedregal Estate",
    type: "Estate",
    location: "Cliffside masterpiece with uninterrupted Pacific Ocean views.",
    price: "$12,500,000",
    size: "10,000 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Palmilla Ocean Oasis",
    type: "Villa",
    location: "Direct beach access in the most exclusive community.",
    price: "$8,900,000",
    size: "7,200 sq ft",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Chileno Bay Villa",
    type: "Villa",
    location: "Contemporary design blending indoor and outdoor living.",
    price: "$6,200,000",
    size: "5,800 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "El Dorado Penthouse",
    type: "Penthouse",
    location: "Sky-high luxury overlooking the Sea of Cortez.",
    price: "$4,100,000",
    size: "4,100 sq ft",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="pt-0 pb-24 lg:pb-32">
      {/* Lamp effect header */}
      <LampContainer className="min-h-[320px] lg:min-h-[380px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            Featured Listings
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-6xl tracking-tighter leading-none text-foreground">
            Exclusive Portfolio
          </h2>
        </motion.div>
      </LampContainer>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 -mt-20">
        <div className="flex justify-end mb-10">
          <a
            href="#contact"
            className="text-sm text-muted hover:text-gold transition-colors flex items-center gap-1"
          >
            View All Properties
            <ArrowUpRight size={14} weight="light" />
          </a>
        </div>

        {/* 3D Property Cards — asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.06,
              }}
            >
              <CardContainer containerClassName="w-full">
                <CardBody className="relative group/card w-full h-auto flex flex-col">
                  {/* Image */}
                  <CardItem translateZ="50" className="w-full">
                    <div className="relative w-full h-[250px] sm:h-[300px] xl:h-[350px] overflow-hidden rounded-[2rem] shadow-xl flex-shrink-0">
                      <PixelImage
                        src={property.image}
                        customGrid={{ rows: 6, cols: 8 }}
                      />
                      {/* Type badge */}
                      <CardItem
                        translateZ="80"
                        className="absolute top-4 left-4 px-3 py-1 bg-background/70 backdrop-blur-sm border border-gold-dim rounded-[1rem]"
                      >
                        <span className="text-xs tracking-wider text-gold uppercase">
                          {property.type}
                        </span>
                      </CardItem>

                      {/* Arrow */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-gold flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 rounded-full">
                        <ArrowUpRight
                          size={18}
                          className="text-background"
                          weight="bold"
                        />
                      </div>
                    </div>
                  </CardItem>

                  {/* Info */}
                  <CardItem translateZ="30" className="w-full pt-6 pb-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-foreground font-medium tracking-tight mb-1 group-hover/card:text-gold transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-muted text-sm">
                          {property.location}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-gold font-[family-name:var(--font-geist-mono)] text-sm">
                          {property.price}
                        </p>
                        {property.size && (
                          <p className="text-muted-dark text-xs mt-0.5">
                            {property.size}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
