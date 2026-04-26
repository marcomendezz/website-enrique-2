"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const paragraphs = container.current?.querySelectorAll(".philosophy-text");
    
    const ctx = gsap.context(() => {
      paragraphs?.forEach((p) => {
        const text = p.textContent || "";
        p.innerHTML = "";
        const words = text.split(" ");
        words.forEach(word => {
          const span = document.createElement("span");
          span.innerHTML = word + "&nbsp;";
          span.style.opacity = "0.2";
          p.appendChild(span);
        });

        gsap.to(p.children, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
            end: "bottom 50%",
            scrub: true,
          }
        });
      });
      
      gsap.to(".philosophy-bg", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
      
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="about" className="relative py-32 lg:py-48 bg-surface overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-4 lg:mx-10 my-10 border border-gold-dim/30 shadow-2xl">
      {/* Dark parallax background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Real Estate Exclusive Portfolio Los Cabos"
          fill
          className="object-cover brightness-[0.25]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center text-center items-center">
        <h3 className="text-gold tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-12">
          Philosophy
        </h3>

        <h2 className="philosophy-text mx-auto text-center font-[family-name:var(--font-playfair)] text-3xl md:text-5xl lg:text-7xl tracking-tighter leading-tight mb-16 max-w-[18ch] text-foreground">
          Enrique Vazquez is the definitive luxury real estate expert in Los Cabos.
        </h2>

        <p className="philosophy-text mx-auto text-center text-xl md:text-3xl text-muted leading-relaxed font-light mb-16 max-w-[30ch]">
          Born and raised in Cabo San Lucas, combining deep local knowledge with world-class institutional training.
        </p>
        
        <div className="philosophy-text mx-auto text-center text-lg md:text-2xl text-gold/80 leading-relaxed max-w-[40ch] tracking-wide">
          Navigating beachfront estates, ocean-view penthouses, and premier communities. Your legacy is intentional.
        </div>
      </div>
    </section>
  );
}
