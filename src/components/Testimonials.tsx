"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Very knowledgeable and thorough. Highly recommend Enrique for anyone looking to buy or sell in Los Cabos.",
    name: "Mark P.",
    title: "",
  },
  {
    quote:
      "Purchased a 2BR condo at Marea-Golondrina-505. Enrique is truly 'The Most Interesting Realtor in Cabo.' His knowledge and dedication made our purchase effortless.",
    name: "Leslie P.",
    title: "Marea Golondrina 505",
  },
  {
    quote:
      "Found our dream beachfront property at Copala/Quivira in just 3 weeks. Enrique's knowledge of the area is unmatched. He went above and beyond.",
    name: "Robert & Diana M.",
    title: "Copala at Quivira",
  },
  {
    quote:
      "First-time international buyer \u2014 Enrique guided us through every step. Secured our Vista Mare unit under asking price. Professional, responsive, and genuinely cares.",
    name: "James K.",
    title: "Vista Mare",
  },
  {
    quote:
      "Sold our Pedregal home in just 45 days at 97% of asking price. Enrique's marketing strategy and negotiation skills are exceptional.",
    name: "Sarah & Tom W.",
    title: "Pedregal",
  },
  {
    quote:
      "15 years investing in Cabo real estate \u2014 Enrique is the best agent I've worked with. Closed on land in El Tule with remarkable efficiency and market insight.",
    name: "Carlos R.",
    title: "El Tule",
  },
  {
    quote:
      "Investment condo at Vento Coromuel has been generating consistent rental income. Enrique's advice on the investment potential was spot-on.",
    name: "Michelle & David L.",
    title: "Vento Coromuel",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter leading-none">
            What Our Clients Say
          </h2>
        </motion.div>
      </div>

      {/* Infinite scrolling testimonials */}
      <div className="flex flex-col gap-6">
        <InfiniteMovingCards
          items={testimonials.slice(0, 4)}
          direction="left"
          speed="slow"
          className="mx-auto"
        />
        <InfiniteMovingCards
          items={testimonials.slice(3)}
          direction="right"
          speed="slow"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
