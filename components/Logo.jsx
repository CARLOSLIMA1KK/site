import Link from "next/link";

// Logo da KodarEdu (SVG inline, escala com a cor de texto).
export default function Logo({ variant = "dark", className = "" }) {
  const wordColor = variant === "light" ? "#FFFFFF" : "#0B3D2E";
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="KodarEdu — página inicial">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-verde-700">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* "K" estilizado com fio amarelo (ação) */}
          <path d="M6 3v18M6 12l9-9M6 12l9 9" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18.5" cy="5.5" r="2" fill="#FFC400" />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight" style={{ color: wordColor }}>
        Kodar<span style={{ color: "#1B9E6B" }}>Edu</span>
      </span>
    </Link>
  );
}
