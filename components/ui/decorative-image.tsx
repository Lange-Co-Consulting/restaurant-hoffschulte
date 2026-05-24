"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Anchor =
  | "top-left"
  | "top-right"
  | "left"
  | "right"
  | "bottom-left"
  | "bottom-right";

const anchorStyles: Record<Anchor, string> = {
  "top-left":     "top-0 left-0 -translate-x-[40%]",
  "top-right":    "top-0 right-0 translate-x-[40%]",
  "left":         "top-1/2 left-0 -translate-x-[42%] -translate-y-1/2",
  "right":        "top-1/2 right-0 translate-x-[42%] -translate-y-1/2",
  "bottom-left":  "bottom-0 left-0 -translate-x-[36%] translate-y-[18%]",
  "bottom-right": "bottom-0 right-0 translate-x-[36%] translate-y-[18%]",
};

const sizeStyles = {
  sm: "w-[180px] h-[180px]",
  md: "w-[260px] h-[260px]",
  lg: "w-[340px] h-[340px]",
  xl: "w-[420px] h-[420px]",
} as const;

/**
 * Editorial deco — ein Speisen-Foto halb am Bildschirmrand, sanfter Scroll-Parallax.
 * - aria-hidden, pointer-events-none
 * - nur ≥md sichtbar (auf Mobile zu wenig Platz)
 * - respektiert prefers-reduced-motion
 */
export function DecorativeImage({
  src,
  alt = "",
  anchor,
  size = "md",
  shape = "circle",
  drift = 120,
  rotate = 0,
  className = "",
}: {
  src: string;
  alt?: string;
  anchor: Anchor;
  size?: keyof typeof sizeStyles;
  shape?: "circle" | "square";
  drift?: number;
  rotate?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: bei Scroll bewegt sich das Element sanft vertikal
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);
  const rot = useTransform(scrollYProgress, [0, 1], [rotate - 6, rotate + 6]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute hidden md:block z-[1] ${anchorStyles[anchor]} ${className}`}
    >
      <motion.div
        style={reduced ? undefined : { y, rotate: rot }}
        className={`relative ${sizeStyles[size]} ${shape === "circle" ? "rounded-full" : "rounded-[6px]"} overflow-hidden shadow-[0_30px_60px_-20px_oklch(0.18_0.012_95_/_0.35)]`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="420px"
          quality={82}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
