"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[1400px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[380px] max-w-full relative shrink-0 border border-gold-dim px-8 py-7 md:w-[450px]"
            key={idx}
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-relaxed text-muted">
                &ldquo;{item.quote}&rdquo;
              </span>
              <div className="relative z-20 mt-5 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gold/40" />
                <div>
                  <span className="text-sm font-medium text-foreground block">
                    {item.name}
                  </span>
                  {item.title && (
                    <span className="text-xs text-muted-dark block mt-0.5">
                      {item.title}
                    </span>
                  )}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
