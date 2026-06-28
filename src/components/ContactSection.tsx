import { CONTACT } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
      <div className="relative mx-auto grid max-w-[1296px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Form card */}
        <div className="reveal rounded-3xl bg-white p-8 md:p-10">
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-[#0a0a0a]">
            Got something you want to build?
          </h2>

          <form className="mt-8 flex flex-col gap-5">
            <Field label="Your Name" placeholder="Your name" />
            <Field label="Email Address" placeholder="Email@gmail.com" type="email" />
            <div>
              <label className="text-sm text-[var(--muted-foreground)]">
                Message <span className="text-[#f9452d]">*</span>
              </label>
              <textarea
                placeholder="Your message"
                rows={3}
                className="mt-2 w-full resize-y rounded-xl bg-[#f5f5f5] px-4 py-3.5 text-base text-[#0a0a0a] outline-none placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-[#0a0a0a]/10"
              />
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-full bg-[#0a0a0a] py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="reveal text-white">
          <h3 className="text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Get In Touch
          </h3>
          <div className="mt-10 flex flex-col gap-4 text-[clamp(1rem,1.6vw,1.4rem)] font-medium">
            <a
              href={`https://wa.me/${CONTACT.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit underline-offset-4 hover:underline"
            >
              {CONTACT.phone}
            </a>
            <a
              href={`https://${CONTACT.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit underline-offset-4 hover:underline"
            >
              {CONTACT.site}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="w-fit underline-offset-4 hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4">
            {CONTACT.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-white/20 pt-3 text-base text-white"
              >
                {s.label}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm text-[var(--muted-foreground)]">
        {label} <span className="text-[#f9452d]">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-[#f5f5f5] px-4 py-3.5 text-base text-[#0a0a0a] outline-none placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-[#0a0a0a]/10"
      />
    </div>
  );
}
