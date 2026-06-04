// Destaque com risco "à mão" sob uma palavra-chave (estilo marcador).
// Uso: <Highlight color="amarelo">completa</Highlight>
const STROKE = {
  amarelo: "var(--amarelo-500)",
  verde: "var(--verde-500)",
  azul: "var(--azul-600)",
};

export default function Highlight({ children, color = "amarelo", className = "" }) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        className="absolute -bottom-1.5 left-0 h-[0.38em] w-full"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M3 11C40 5 160 4 197 9"
          stroke={STROKE[color]}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
