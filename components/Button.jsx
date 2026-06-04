import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-cta text-cta-ink shadow-card hover:brightness-105 hover:-translate-y-0.5 focus-visible:-translate-y-0.5",
  secondary:
    "border-2 border-verde-700 text-verde-900 hover:bg-verde-100 hover:-translate-y-0.5",
  ghost: "text-verde-700 hover:text-verde-900 px-1 gap-1.5",
  whiteOutline:
    "border-2 border-white/40 text-white hover:bg-white/10 hover:-translate-y-0.5",
};

const SIZES = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  arrow = false,
  external = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 will-change-transform";
  const cls = `${base} ${VARIANTS[variant]} ${variant === "ghost" ? "" : SIZES[size]} ${className}`;

  const content = (
    <>
      {children}
      {(arrow || variant === "ghost") && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={`group ${cls}`} target="_blank" rel="noopener noreferrer" {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${cls}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${cls}`} {...props}>
      {content}
    </button>
  );
}
