"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (current < 0.02) {
        setVisible(true);
        setAtTop(true);
      } else {
        setAtTop(false);
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[5000] items-center justify-center gap-1 px-2 py-2",
          atTop
            ? "bg-transparent border-transparent shadow-none"
            : "border border-gold-dim bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center gap-1.5 px-4 py-2 text-sm text-muted hover:text-gold transition-colors duration-200"
            )}
          >
            {navItem.icon && <span className="block">{navItem.icon}</span>}
            <span className="text-sm tracking-wide">{navItem.name}</span>
          </a>
        ))}
        <a
          href="#contact"
          className="px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm tracking-wide hover:bg-gold/20 transition-all duration-300 ml-1"
        >
          Contact
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
