import Image from "next/image";
import { RIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Portrait background */}
      <Image
        src="/images/hero-portrait.png"
        alt="Norell"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Side vignette to match the original's dark gradient edges */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_45%,rgba(10,10,10,0.55)_100%)]" />

      {/* Circled R */}
      <RIcon className="absolute right-[8%] top-[34%] z-10 h-[72px] w-[72px] text-white" />

      {/* Giant wordmark */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center">
        <span className="select-none text-[31vw] font-medium leading-[0.9] tracking-[-0.022em] text-white">
          norell
        </span>
      </div>
    </section>
  );
}
