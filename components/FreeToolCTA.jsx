import Button from "./Button";
import Pill from "./Pill";
import { Reveal } from "./Motion";

// Faixa de captação do KodarEdu Labs (ferramenta gratuita).
export default function FreeToolCTA() {
  return (
    <section className="bg-bg-soft py-16">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg border-2 border-dashed border-verde-500/40 bg-white p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <Pill tone="verde">Grátis para professores</Pill>
              <h2 className="mt-3 font-display text-h3 font-bold text-ink">
                KodarEdu Labs — crie provas bem diagramadas, sem custo
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">
                Monte e imprima provas profissionais em minutos. Experimente a inteligência da
                KodarEdu antes mesmo de contratar.
              </p>
            </div>
            <div className="flex flex-none flex-col gap-3 sm:flex-row">
              <Button href="/labs" variant="primary" arrow>
                Criar prova grátis
              </Button>
              <Button href="/plataforma" variant="secondary">
                Conhecer a plataforma
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
