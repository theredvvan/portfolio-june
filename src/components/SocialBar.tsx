export function SocialBar() {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto flex max-w-[1296px] items-center justify-between px-6 py-5 text-base font-medium text-[#0a0a0a]">
        <span>Available For Work</span>
        <div className="hidden gap-1 sm:flex">
          <a href="https://www.linkedin.com/in/redwanouthouna" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">In,</a>
          <a href="https://x.com/redwanouthouna" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">X,</a>
          <a href="https://instagram.com/redwan.outh" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">Ig</a>
        </div>
        <span className="hidden items-center gap-2 md:flex">
          Scroll To View More <span aria-hidden>↓</span>
        </span>
        <span>@2026</span>
      </div>
    </section>
  );
}
