import Image from "next/image";
import { PlayIcon } from "@/components/icons";

export function VideoSection() {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="relative h-svh max-h-[720px] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/video-poster.png"
          alt="Watch the showreel"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <button
          type="button"
          className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5"
          aria-label="Watch now"
        >
          <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
            <PlayIcon className="ml-1 h-7 w-7 text-[#0a0a0a]" />
          </span>
          <span className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-white drop-shadow">
            Watch now
          </span>
        </button>
      </div>
    </section>
  );
}
