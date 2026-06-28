"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";

type BlurRevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
};

/** An image that fades + un-blurs + settles from a slight zoom when scrolled into view. */
export function BlurRevealImage({
  src,
  alt,
  className,
  style,
  width,
  height,
}: BlurRevealImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      initial={{ opacity: 0, filter: "blur(12px)", scale: 1.08 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    />
  );
}
