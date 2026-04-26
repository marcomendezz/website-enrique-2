"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: { title: string; src: string; subtitle?: string };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer rounded-[2rem]",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-background/60 flex flex-col items-start justify-end p-6 lg:p-8 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl tracking-tight text-foreground">
          {card.title}
        </h3>
        {card.subtitle && (
          <p className="text-muted text-sm mt-1">{card.subtitle}</p>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardType = {
  title: string;
  src: string;
  subtitle?: string;
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
