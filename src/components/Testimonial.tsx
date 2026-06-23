import Image from "next/image";

export function Testimonial() {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <h2 className="reveal text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Journeys that <span className="heading-muted">Inspire us</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="reveal relative aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-2xl">
            <Image
              src="/images/testimonial-portrait.png"
              alt="Ralph Edwards"
              fill
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-cover"
            />
          </div>

          <div className="reveal flex h-full flex-col justify-between">
            <blockquote className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
              &ldquo;Norell completely transformed our brand. From logo to
              messaging, everything finally feels aligned and professional.
              We&apos;ve seen a noticeable increase.
            </blockquote>

            <div className="mt-12">
              <div className="h-px w-full bg-[var(--border)]" />
              <div className="mt-6">
                <p className="text-lg font-semibold text-[#0a0a0a]">Ralph Edwards</p>
                <p className="mt-1 text-base text-[var(--muted-foreground)]">
                  Project manager and founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
