"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[28rem] bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0"
          style={{
            background:
              "conic-gradient(from 70deg at 50% 0%, rgba(201,169,110,0.4) 0deg, transparent 120deg, transparent 240deg, rgba(201,169,110,0.1) 360deg)",
          }}
        />
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[28rem]"
          style={{
            background:
              "conic-gradient(from 290deg at 50% 0%, rgba(201,169,110,0.1) 0deg, transparent 120deg, transparent 240deg, rgba(201,169,110,0.4) 360deg)",
          }}
        />

        {/* Glow blur */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Gold line */}
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-[2px] w-[16rem] -translate-y-[7rem] bg-gold/60"
        />

        {/* Background fade */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background" />
      </div>

      <div className="relative z-50 flex -translate-y-48 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
