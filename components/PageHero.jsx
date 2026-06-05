import Button from "./Button";
import MockupFrame from "./MockupFrame";
import EduText from "./EduText";
import { SITE } from "@/lib/site";

// Hero padrão das páginas internas. Aceita mockup opcional à direita.
// Obs.: as pills (selos) ficam apenas na Home; aqui o prop é ignorado.
export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  primary = { label: SITE.ctaPrimary, href: SITE.ctaPrimaryHref },
  secondary,
  mockup,
  photo,
}) {
  const hasMedia = !!mockup || !!photo;
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-verde-100 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-14 sm:py-20">
        <div className={hasMedia ? "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]" : "max-w-3xl"}>
          <div className="animate-fade-up">
            {eyebrow && <span className="eyebrow"><EduText>{eyebrow}</EduText></span>}
            <h1 className="mt-4 font-display text-display font-extrabold leading-[1.05] text-ink">
              <EduText>{title}</EduText> {highlight && <span className="text-verde-700"><EduText>{highlight}</EduText></span>}
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
          </div>
          {hasMedia && (
            <div className="animate-fade-up [animation-delay:140ms]">
              {mockup ? (
                <MockupFrame src={mockup.src} alt={mockup.alt} label={mockup.label} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/3] w-full rounded-lg border border-line object-cover shadow-pop"
                  loading="eager"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
