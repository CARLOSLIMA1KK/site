import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "KodarEdu para Escolas",
  description:
    "Menos burocracia, mais tempo ao professor e melhor desempenho no ENEM. Plataforma de avaliação white label para escolas de Ensino Fundamental e Médio.",
  alternates: { canonical: "/para/escolas" },
};

const DORES = [
  { title: "Correção consome tempo", text: "Correção automática e redação com IA devolvem horas ao professor." },
  { title: "Falta de dados confiáveis", text: "Relatórios por turma, competência e habilidade orientam decisões." },
  { title: "Pressão pelo ENEM", text: "Simulados por TRI antecipam o resultado oficial e guiam a revisão." },
  { title: "Captação e retenção", text: "Uma plataforma própria valoriza a marca e fideliza famílias." },
];

const FORMATOS = [
  { title: "Online", text: "Aplicação digital com correção e relatórios na hora.", icon: "chip" },
  { title: "Impresso", text: "Malote para impressão com leitor de gabarito.", icon: "book" },
  { title: "Híbrido", text: "Combine papel e digital conforme a realidade da escola.", icon: "bolt" },
];

export default function ParaEscolasPage() {
  return (
    <>
      <PageHero
        eyebrow="Para Escolas"
        title="Mais tempo ao professor,"
        highlight="mais resultado no ENEM."
        subtitle="A KodarEdu organiza toda a jornada avaliativa da sua escola — criação, aplicação, correção e análise — com a sua marca e sem precisar de equipe de TI."
        pills={["Ensino Fundamental e Médio", "White Label", "Sem TI"]}
      />

      <SectionWrapper
        eyebrow="Dor → solução"
        title="Os desafios da escola, resolvidos"
        subtitle="Cada recurso da plataforma nasce de uma dor real do dia a dia escolar."
      >
        <FeatureList items={DORES} columns={2} />
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Co-branding" title="A sua marca + a nossa tecnologia">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              Para os alunos e as famílias, a plataforma é da escola: seu logo, suas cores, seu
              domínio. Para a sua equipe, é uma tecnologia robusta de avaliação rodando nos
              bastidores, sempre atualizada e com suporte humano dedicado.
            </p>
            <div className="mt-6">
              <FeatureList
                columns={1}
                items={[
                  "Plataforma com a identidade da escola",
                  "Implantação em poucos dias, sem TI",
                  "Suporte por WhatsApp, inclusive fim de semana",
                  "Garantia de 30 dias",
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="rounded-lg border border-line bg-white p-8 shadow-card">
              <div className="text-5xl leading-none text-verde-500" aria-hidden="true">“</div>
              <blockquote className="font-display text-xl font-semibold leading-snug text-ink">
                Passamos a aplicar simulados com a nossa marca e os professores ganharam horas com a
                correção automática. Os pais notaram a diferença.
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-verde-100 font-display font-bold text-verde-700">RC</span>
                <span>
                  <span className="block font-semibold text-ink">Ricardo Campos</span>
                  <span className="block text-sm text-slate">Diretor · Colégio Patativa</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Flexibilidade" title="Aplique do jeito que a sua escola funciona" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {FORMATOS.map((f) => (
            <StaggerItem key={f.title} className="h-full">
              <Card title={f.title} text={f.text} icon={f.icon} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <CTASection
        title="Quero a KodarEdu na minha escola"
        subtitle="Converse com nosso time e veja um plano sob medida para a realidade da sua instituição."
      />
    </>
  );
}
