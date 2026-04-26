"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Search",
    description:
      "Share your vision \u2014 budget, lifestyle preferences, must-haves. I curate a personalized selection of properties that match your criteria.",
  },
  {
    number: "02",
    title: "Property Tours & Due Diligence",
    description:
      "Private viewings of shortlisted properties. I provide market analysis, comparable sales data, and full disclosure on each property.",
  },
  {
    number: "03",
    title: "Offer & Negotiation",
    description:
      "I negotiate on your behalf to secure the best terms. For foreign buyers, I guide you through the fideicomiso (bank trust) process required for coastal properties.",
  },
  {
    number: "04",
    title: "Closing & Beyond",
    description:
      "Coordinate with notarios, banks, and attorneys for a smooth closing. After purchase, I connect you with property management, rentals, and local services.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            Protocol
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter leading-none max-w-[22ch]">
            Your Path to
            <br />
            Los Cabos Living
          </h2>
        </div>

        <div className="relative space-y-4 lg:space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="sticky flex flex-col md:flex-row gap-8 items-start md:items-center bg-surface border border-gold-dim p-10 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
              style={{
                top: `calc(10vh + ${i * 2}rem)`,
                zIndex: i,
              }}
            >
              <div className="font-[family-name:var(--font-geist-mono)] text-gold text-6xl md:text-8xl opacity-30 font-bold shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-foreground font-[family-name:var(--font-playfair)] text-2xl lg:text-4xl tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-muted text-lg lg:text-xl leading-relaxed max-w-[45ch] font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
