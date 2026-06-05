import { Fragment } from "react";

// Realça a marca "Edu" com a fonte/cores da logo: E verde, d amarelo, u azul.
// Só atinge "Edu" como marca (ex.: "Edu.IA", "Recursos Edu").
// Ignora "Educacional", "educação", "Eduardo", etc. (negative lookahead).
export default function EduText({ children }) {
  if (typeof children !== "string" || !children.includes("Edu")) return children;
  const parts = children.split(/(Edu)(?![a-zà-ú])/g);
  return parts.map((part, i) =>
    part === "Edu" ? (
      <span key={i} className="font-display">
        <span style={{ color: "var(--verde-500)" }}>E</span>
        <span style={{ color: "var(--amarelo-500)" }}>d</span>
        <span style={{ color: "var(--azul-600)" }}>u</span>
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
