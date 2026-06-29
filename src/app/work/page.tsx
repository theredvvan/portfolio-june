import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ProjectMosaic } from "@/components/ProjectMosaic";

export const metadata: Metadata = {
  title: "Work — O.REDWAN",
  description:
    "Selected branding, content, funnel, and automation projects by Redwan Outhouna.",
  openGraph: {
    title: "Work — O.REDWAN",
    description:
      "Selected branding, content, funnel, and automation projects by Redwan Outhouna.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="bg-[#f5f5f5] pt-[140px] pb-24 md:pt-[160px] md:pb-32">
        <div className="mx-auto max-w-[1296px] px-6">
          <h1 className="reveal text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-none tracking-[-0.03em]">
            All <span className="heading-muted">Work.</span>
          </h1>
          <ProjectMosaic />
        </div>
      </main>
      <Footer />
    </>
  );
}
