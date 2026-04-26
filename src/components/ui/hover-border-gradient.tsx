"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(201,169,110,0.6) 0%, rgba(201,169,110,0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(201,169,110,0.6) 0%, rgba(201,169,110,0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, rgba(201,169,110,0.6) 0%, rgba(201,169,110,0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, rgba(201,169,110,0.6) 0%, rgba(201,169,110,0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.2% at 50% 50%, #c9a96e 0%, rgba(201,169,110,0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex content-center items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit transition duration-500",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto z-10 bg-background px-6 py-3 text-foreground text-sm tracking-wider",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-background absolute z-[1] flex-none inset-[2px]" />
    </Tag>
  );
}
