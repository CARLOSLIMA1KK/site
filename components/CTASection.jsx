import Button from "./Button";
import { SITE } from "@/lib/site";
import { Reveal } from "./Motion";

// Bloco de CTA final reutilizável (presente ao fim de cada página).
export default function CTASection({
  title = "Quero a KodarEdu na minha escola",
  subtitle = "Em poucos dias sua instituição tem uma plataforma completa de avaliação e ENEM, com a sua marca, sem precisar de TI.",
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="surface-dark relative overflow-hidden rounded-lg px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-verde-700/40 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-azul-600/30 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-h2 font-bold text-white">{title}</h2>
              <p className="mt-4 text-lg text-white/80">{subtitle}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={SITE.ctaPrimaryHref} variant="primary" size="lg" arrow>
                  {SITE.ctaPrimary}
                </Button>
                <Button href={SITE.whatsapp} external variant="whiteOutline" size="lg">
                  {SITE.whatsappLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
