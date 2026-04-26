"use client";

import { TextHoverEffect } from "./ui/text-hover-effect";

export default function TextDivider() {
  return (
    <section className="py-8 lg:py-12 overflow-hidden">
      <div className="h-[12rem] md:h-[16rem] flex items-center justify-center max-w-[1400px] mx-auto">
        <TextHoverEffect text="LOS CABOS" />
      </div>
    </section>
  );
}
