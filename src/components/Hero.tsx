import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Portrait background */}
      <Image
        src="/images/hero-image-01.png"
        alt="O.REDWAN portrait"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Side vignette to match the original's dark gradient edges */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_45%,rgba(10,10,10,0.55)_100%)]" />

      {/* Giant wordmark */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-10 flex items-center justify-center px-5 md:top-auto md:items-end md:px-[3vw]">
        <Image
          src="/images/o-redwan-logo.svg"
          alt="O.REDWAN"
          width={511}
          height={77}
          priority
          className="h-auto w-full select-none [filter:brightness(0)_invert(1)]"
        />
      </div>
    </section>
  );
}
