import { Reveal } from "./Motion";

// Seção com fundo alternado e cabeçalho opcional.
export default function SectionWrapper({
  children,
  soft = false,
  dark = false,
  id,
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
  containerClassName = "",
}) {
  const bg = dark ? "bg-verde-900 text-white" : soft ? "bg-bg-soft" : "bg-white";
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${bg} ${className}`}>
      <div className={`container-page ${containerClassName}`}>
        {(eyebrow || title || subtitle) && (
          <Reveal className={`mb-10 sm:mb-14 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
            {eyebrow && (
              <span className={`eyebrow ${dark ? "text-amarelo-300" : ""}`}>{eyebrow}</span>
            )}
            {title && (
              <h2 className={`mt-3 font-display text-h2 font-bold ${dark ? "text-white" : "text-ink"}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/80" : "text-slate"}`}>
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
