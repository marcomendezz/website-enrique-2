"use client";

import React, { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !glareRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      // Glare follows cursor
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(201,169,110,0.15) 0%, transparent 60%)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !glareRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    glareRef.current.style.background = "transparent";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden transition-transform duration-300 ease-out",
        className
      )}
    >
      {children}
      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
      />
      {/* Subtle inner border refraction */}
      <div className="absolute inset-0 z-10 pointer-events-none border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
    </div>
  );
};
