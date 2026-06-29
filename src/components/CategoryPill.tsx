/** Small category pill, styled to match the site's quiet label aesthetic. */
export function CategoryPill({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[#0a0a0a]/[0.06] px-3 py-1 text-xs font-medium text-[#0a0a0a] ${className}`}
    >
      {category}
    </span>
  );
}
