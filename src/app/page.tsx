import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialBar } from "@/components/SocialBar";
import { WorkSection } from "@/components/WorkSection";
import { Testimonial } from "@/components/Testimonial";
import { ServiceSection } from "@/components/ServiceSection";
import { AboutSection } from "@/components/AboutSection";
import { PricingSection } from "@/components/PricingSection";
import { AwardSection } from "@/components/AwardSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <SocialBar />
        <WorkSection />
        <Testimonial />
        <ServiceSection />
        <AboutSection />
        <PricingSection />
        <AwardSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
