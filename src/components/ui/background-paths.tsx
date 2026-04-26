"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedText } from "./animated-shiny-text";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(255,255,255,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.15 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Coastal Real Estate"
                    fill
                    className="object-cover brightness-[0.25]"
                    priority
                />
            </div>
            
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center mt-[-5svh]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mb-2">
                        <span className="text-gold tracking-[0.2em] font-medium uppercase text-sm md:text-base">
                            Enrique Vazquez
                        </span>
                    </div>

                    <AnimatedText 
                      text={title} 
                      gradientColors="linear-gradient(90deg, rgba(212,184,122,0.8), #ffffff, rgba(212,184,122,0.8))"
                      gradientAnimationDuration={3}
                      hoverEffect={true}
                      className="py-0"
                      textClassName="text-4xl max-w-[95vw] mx-auto sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] tracking-tighter leading-tight text-center"
                    />

                    <div
                        className="inline-block group relative bg-gradient-to-b from-white/5 to-white/10 
                        p-px rounded-3xl backdrop-blur-lg mt-8
                        overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(212,184,122,0.15)] transition-all duration-300"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 md:px-10 md:py-8 text-sm md:text-lg tracking-wider font-semibold backdrop-blur-md 
                            bg-background/80 hover:bg-background/95 
                            text-gold transition-all duration-300 
                            border border-gold/20 hover:border-gold/50"
                            onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity uppercase text-xs md:text-sm">
                                Discover Excellence
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none z-0" />
        </div>
    );
}
