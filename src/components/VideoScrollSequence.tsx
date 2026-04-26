"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const sections = [
  {
    title: "Crafted for\nthe Extraordinary",
    subtitle: "Architecture that transcends expectation",
    range: [0.02, 0.28] as [number, number],
  },
  {
    title: "Every Detail,\nIntentional",
    subtitle: "Where precision meets the Pacific horizon",
    range: [0.35, 0.62] as [number, number],
  },
  {
    title: "Your Legacy\nAwaits",
    subtitle: "Discover what living without compromise feels like",
    range: [0.7, 0.95] as [number, number],
  },
];

export default function VideoScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentTimeRef = useRef(0);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number>(0);
  const durationRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Lerp loop — smoothly interpolates video currentTime toward target
  const lerpLoop = useCallback(() => {
    const video = videoRef.current;
    if (!video || durationRef.current === 0) {
      rafRef.current = requestAnimationFrame(lerpLoop);
      return;
    }

    const ease = 0.02;
    currentTimeRef.current +=
      (targetTimeRef.current - currentTimeRef.current) * ease;

    // Only seek if the difference is meaningful (avoids micro-jitter)
    if (Math.abs(video.currentTime - currentTimeRef.current) > 0.04) {
      video.currentTime = currentTimeRef.current;
    }

    rafRef.current = requestAnimationFrame(lerpLoop);
  }, []);

  // Update target time on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      targetTimeRef.current = progress * durationRef.current;
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Set up video and start lerp loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      durationRef.current = video.duration;
      video.currentTime = 0;
    };

    // Handle already-loaded case
    if (video.readyState >= 1) {
      handleLoaded();
    }

    video.addEventListener("loadedmetadata", handleLoaded);
    rafRef.current = requestAnimationFrame(lerpLoop);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      cancelAnimationFrame(rafRef.current);
    };
  }, [lerpLoop]);

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[150vh]">
      {/* Sticky video container */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Video — preloaded, paused, scrubbed via JS */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/house_loscabos_scroll.mp4" type="video/mp4" />
        </video>

        {/* Light overlay for text readability — keeps video bright */}
        <div className="absolute inset-0 bg-background/15" />

        {/* Subtle vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(12,12,12,0.4)_100%)]" />

        {/* Text sections — each fades in/out at their scroll range */}
        {sections.map((section, i) => (
          <ScrollTextOverlay
            key={i}
            title={section.title}
            subtitle={section.subtitle}
            range={section.range}
            scrollProgress={scrollYProgress}
            index={i}
          />
        ))}

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-dim">
          <motion.div
            className="h-full bg-gold origin-left"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Scroll hint at very top */}
        <ScrollHint scrollProgress={scrollYProgress} />
      </div>
    </section>
  );
}

function ScrollTextOverlay({
  title,
  subtitle,
  range,
  scrollProgress,
  index,
}: {
  title: string;
  subtitle: string;
  range: [number, number];
  scrollProgress: MotionValue<number>;
  index: number;
}) {
  const midpoint = (range[0] + range[1]) / 2;
  const fadeInEnd = range[0] + (midpoint - range[0]) * 0.6;
  const fadeOutStart = midpoint + (range[1] - midpoint) * 0.4;

  const opacity = useTransform(
    scrollProgress,
    [range[0], fadeInEnd, fadeOutStart, range[1]],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollProgress,
    [range[0], fadeInEnd, fadeOutStart, range[1]],
    [60, 0, 0, -40]
  );

  // Scale text slightly as it enters
  const scale = useTransform(
    scrollProgress,
    [range[0], fadeInEnd, fadeOutStart, range[1]],
    [0.96, 1, 1, 0.98]
  );

  // Alternate text alignment for visual interest (taste-skill DESIGN_VARIANCE: 8)
  const alignment =
    index % 2 === 0 ? "items-start text-left" : "items-end text-right";

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 ${alignment}`}
    >
      <div className="max-w-[600px]">
        <motion.div
          style={{ opacity }}
          className={`w-12 h-[1px] bg-gold mb-6 ${
            index % 2 !== 0 ? "ml-auto" : ""
          }`}
        />
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-foreground whitespace-pre-line mb-4">
          {title}
        </h2>
        <p className="text-muted text-base md:text-lg tracking-wide max-w-[45ch]">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

function ScrollHint({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollProgress, [0, 0.08], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-muted text-xs tracking-[0.3em] uppercase">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-[1px] h-6 bg-gold/50"
      />
    </motion.div>
  );
}
