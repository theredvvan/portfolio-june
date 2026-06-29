"use client";

import { useState } from "react";
import { useMotionValue } from "motion/react";
import { ProjectMosaic } from "@/components/ProjectMosaic";
import { CustomCursor } from "@/components/CustomCursor";

export function WorkSection() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <section
      id="work"
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      onMouseMove={(e) => {
        x.set(e.clientX - 40);
        y.set(e.clientY - 40);
      }}
      style={{ cursor: cursorVisible ? "none" : undefined }}
      className="bg-[#f5f5f5] pt-24 pb-12 md:pt-32 md:pb-16"
    >
      <div className="mx-auto max-w-[1296px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="reveal max-w-[640px] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Projects I&rsquo;m <span className="heading-muted">proud of</span>
          </h2>
          <p className="reveal max-w-[440px] text-balance text-[27px] font-medium leading-snug text-[var(--muted-foreground)] md:text-right">
            This is how I think, how I work, and what I leave behind.
          </p>
        </div>

        {/* One unified mosaic block: rounded + clipped, hairline dividers */}
        <ProjectMosaic />
      </div>
      <CustomCursor x={x} y={y} visible={cursorVisible} />
    </section>
  );
}
