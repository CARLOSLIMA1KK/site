import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import StatBand from "@/components/StatBand";
import LogoWall from "@/components/LogoWall";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { STATS, PARTNER_LOGOS } from "@/lib/site";

export const metadata = {
  title: "Resultados & Impacto",
  description:
    "Números de impacto, precisão dos dados e cases de escolas que evoluíram com a KodarEdu. Veja o resultado de uma jornada avaliativa bem feita.",
  alternates: { canonical: "/resultados" },
};

const CASES = [
  {
    school: "Colégio Aurora",
    problem: "Correção manual consumia horas e faltavam dados por habilidade.",
    action: "Adotou simulados por TRI e correção automática com a própria marca.",
    result: "+38% de alunos acima da média no simulado ENEM em um ano.",
  },
  {
    school: "Rede Horizonte",
    problem: "Dificuldade de comparar desempenho entre unidades.",
    action: "Centralizou avaliações e relatórios multiunidade na plataforma.",
    result: "Visão única de rede e indicadores SAEB por escola.",
  },
  {
    school: "Pré-Vest Nação",
    problem: "Alunos sem previsibilidade de nota no ENEM.",
    action: "Aplicou simulados TRI com ranking e gabarito comentado.",
    result: "Previsão de nota próxima do resultado oficial e mais engajamento.",
  },
];

export default function ResultadosPage() {
  return (
    <>
      <PageHero
        eyebrow="Resultados & Impacto"
        title="Autoridade que vira"
        highlight="resultado real."
        subtitle="Números de presença nacional, precisão dos dados e cases de instituições que transformaram a jornada avaliativa com a KodarEdu."
        pills={["Presença nacional", "99,7% de precisão", "Cases reais"]}
        secondary={{ label: "Ver depoimentos", href: "/depoimentos" }}
      />

      <StatBand stats={STATS} />

      <SectionWrapper eyebrow="Cases" title="Problema → implementação → resultado">
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <StaggerItem key={c.school} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-card">
                <h3 className="font-display text-xl font-bold text-ink">{c.school}</h3>
                <dl className="mt-4 space-y-4 text-[15px]">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate/70">Problema</dt>
                    <dd className="mt-1 text-slate">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate/70">Implementação</dt>
                    <dd className="mt-1 text-slate">{c.action}</dd>
                  </div>
                  <div className="rounded-md bg-verde-100 p-4">
                    <dt className="text-xs font-bold uppercase tracking-wider text-verde-700">Resultado</dt>
                    <dd className="mt-1 font-semibold text-verde-900">{c.result}</dd>
                  </div>
                </dl>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <SectionWrapper soft>
        <LogoWall logos={PARTNER_LOGOS} title="Instituições que confiam na KodarEdu" />
        <Reveal className="mt-10 flex justify-center">
          <Button href="/depoimentos" variant="secondary" arrow>Ver depoimentos completos</Button>
        </Reveal>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
