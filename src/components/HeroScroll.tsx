"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScroll() {
  return (
    <section className="flex flex-col overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-light text-foreground/80 mb-2 font-[family-name:var(--font-playfair)]">
              Experience the true meaning of
            </h2>
            <h1 className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#d4b87a] via-gold to-[#c9a96e] pb-4">
              Unrivaled Elegance
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
          alt="Luxury Real Estate Exclusive Mansion"
          className="mx-auto rounded-[2rem] object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
