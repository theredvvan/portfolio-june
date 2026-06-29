import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "From the journal — O.REDWAN",
  description:
    "Notes on branding, content, funnels, and automation from Redwan Outhouna.",
  openGraph: {
    title: "From the journal — O.REDWAN",
    description:
      "Notes on branding, content, funnels, and automation from Redwan Outhouna.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="bg-[#f5f5f5] pt-[140px] pb-24 md:pt-[160px] md:pb-32">
        <div className="mx-auto max-w-[1296px] px-6">
          <h1 className="reveal text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-none tracking-[-0.03em]">
            From the <span className="heading-muted">journal.</span>
          </h1>
          <BlogIndex />
        </div>
      </main>
      <Footer />
    </>
  );
}
