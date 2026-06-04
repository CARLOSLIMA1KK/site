const TONES = {
  verde: "bg-verde-100 text-verde-700",
  azul: "bg-azul-100 text-azul-600",
  amarelo: "bg-amarelo-300/60 text-cta-ink",
  light: "bg-white/15 text-white backdrop-blur",
  outline: "border border-line text-slate",
};

export default function Pill({ children, tone = "verde", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
