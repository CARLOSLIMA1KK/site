import Link from "next/link";

// Wordmark da KodarEdu, fiel à logo: "kodar" (navy) + E (verde) + d (amarelo) + u (azul).
// variant="light" usa branco no "kodar" para fundos escuros (footer).
export default function Logo({ variant = "dark", className = "" }) {
  const base = variant === "light" ? "#FFFFFF" : "var(--ink)";
  return (
    <Link
      href="/"
      aria-label="KodarEdu, página inicial"
      className={`inline-flex items-baseline font-display text-2xl font-extrabold leading-none tracking-tight ${className}`}
    >
      <span style={{ color: base }}>kodar</span>
      <span style={{ color: "var(--verde-500)" }}>E</span>
      <span style={{ color: "var(--amarelo-500)" }}>d</span>
      <span style={{ color: "var(--azul-600)" }}>u</span>
    </Link>
  );
}
