import { BlurRevealImage } from "@/components/BlurRevealImage";
import { PlusCircle } from "@/components/icons";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1296px] px-10 py-20">
        {/* Image (left) + label & heading (right), top-aligned */}
        <div className="reveal flex flex-col items-start gap-10 md:flex-row">
          <div className="relative aspect-[592/520] w-full overflow-hidden rounded-2xl md:w-[45%]">
            <BlurRevealImage
              src="/images/redwan.png"
              alt="Redwan Outhouna, brand and marketing designer in Marrakech"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="self-start md:w-[55%]">
            {/* Label row */}
            <div className="flex items-center gap-3 text-[14px] font-medium text-[#0a0a0a]">
              <PlusCircle className="h-5 w-5 text-[#0a0a0a]" />
              <span>About me</span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-[420px] text-[clamp(20px,2.5vw,28px)] font-medium leading-[1.4] text-[#0a0a0a]">
              Hello, I&apos;m Redwan. I help brands and growing businesses stand
              out, get noticed, and sell more through strategic branding and
              marketing.
            </h2>

            {/* Secondary body text — directly under the heading */}
            <p className="mt-10 max-w-[320px] text-[15px] leading-[1.6] text-[#555]">
              Branding, content, funnels, automation. I handle the creative and
              the systems behind it, so your brand looks sharp and actually moves
              the numbers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
