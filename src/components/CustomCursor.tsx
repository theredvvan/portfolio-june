"use client";

import Image from "next/image";
import { motion, useSpring, type MotionValue } from "motion/react";

const SIZE = 80;

export function CustomCursor({
  x,
  y,
  visible,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  visible: boolean;
}) {
  const springX = useSpring(x, { stiffness: 300, damping: 28 });
  const springY = useSpring(y, { stiffness: 300, damping: 28 });

  return (
    <>
      {/* Hidden SVG displacement filters */}
      <svg aria-hidden style={{ display: "none" }}>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.02" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="77"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/*
          btn-glass: paste your reference filter here (primitiveUnits="objectBoundingBox",
          including the feImage base64 PNG, feGaussianBlur, and feDisplacementMap),
          then change the ::after layer's filter to url(#btn-glass) below.
          It wasn't included in the prompt, so the layer currently uses #container-glass.
        */}
      </svg>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
        style={{ x: springX, y: springY, width: SIZE, height: SIZE }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* ::before layer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "inset 2px 2px 0px -2px rgba(255,255,255,0.7), inset 0 0 3px 1px rgba(255,255,255,0.7)",
            backgroundColor: "rgb(255 255 255 / 10%)",
          }}
        />
        {/* ::after layer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backdropFilter: "blur(4px)",
            filter: "url(#container-glass)",
            isolation: "isolate",
          }}
        />
        <Image
          src="/images/misc-3.svg"
          alt=""
          width={26}
          height={27}
          aria-hidden
          className="relative select-none [filter:brightness(0)_invert(1)]"
        />
      </motion.div>
    </>
  );
}
