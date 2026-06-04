import Button from "./Button";
import Pill from "./Pill";
import MockupFrame from "./MockupFrame";
import { SITE } from "@/lib/site";

// Hero padrão das páginas internas. Aceita mockup opcional à direita.
export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  pills = [],
  primary = { label: SITE.ctaPrimary, href: SITE.ctaPrimaryHref },
  secondary,
  mockup,
}) {
  const hasMedia = !!mockup;
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-verde-100 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-14 sm:py-20">
        <div className={hasMedia ? "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]" : "max-w-3xl"}>
          <div className="animate-fade-up">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="mt-4 font-display text-display font-extrabold leading-[1.05] text-ink">
              {title} {highlight && <span className="text-verde-700">{highlight}</span>}
            </h1>
            {subtitle && <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">{subtitle}</p>}
            {(primary || secondary) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primary && (
                  <Button href={primary.href} variant="primary" size="lg" arrow>
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant="secondary" size="lg" external={secondary.external}>
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
            {pills.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {pills.map((p) => (
                  <Pill key={p} tone="outline">{p}</Pill>
                ))}
              </div>
            )}
          </div>
          {hasMedia && (
            <div className="animate-fade-up [animation-delay:140ms]">
              <MockupFrame src={mockup.src} alt={mockup.alt} label={mockup.label} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
