import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import MockupFrame from "@/components/MockupFrame";
import Pill from "@/components/Pill";
import CTASection from "@/components/CTASection";
import AplicacaoSection from "@/components/sections/AplicacaoSection";
import LeitorOmrSection from "@/components/sections/LeitorOmrSection";
import RelatoriosConsolidadosSection from "@/components/sections/RelatoriosConsolidadosSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Simulado ENEM com correção por TRI",
  description:
    "Simulados no padrão ENEM com correção por TRI ajustada à régua oficial, ranking, gabarito comentado e relatório por área e habilidade. White label para a sua instituição.",
  alternates: { canonical: "/solucoes/simulado-enem" },
};

const RECURSOS = [
  { title: "Padrão ENEM real", text: "Estrutura, áreas e tempo fiéis à prova oficial." },
  { title: "Correção por TRI", text: "Ajustada à régua oficial, nota com previsibilidade." },
  { title: "Ranking e gabarito comentado", text: "Engajamento dos alunos e estudo guiado." },
  { title: "Relatório por área e habilidade", text: "A coordenação enxerge onde reforçar." },
  { title: "Simulado personalizado", text: "Conteúdos definidos pela sua equipe pedagógica." },
  { title: "Online, impresso ou híbrido", text: "Aplique do jeito que sua instituição precisa." },
];

const BENEFITS = [
  ["Para o aluno", "Sabe exatamente sua nota TRI e onde focar a revisão."],
  ["Para o professor", "Recebe o desempenho pronto, sem corrigir manualmente."],
  ["Para a coordenação", "Antecipa o resultado oficial e planeja intervenções."],
];

export default function SimuladoEnemPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliações & Ferramentas"
        title="Simulados ENEM com correção por"
        highlight="TRI de verdade."
        subtitle="Aplique simulados no padrão ENEM e entregue notas por TRI ajustadas à régua oficial, com ranking, gabarito comentado e relatórios por área e habilidade."
        pills={["TRI", "Padrão ENEM", "Ranking", "White Label"]}
        mockup={{
          src: "/assets/prints/relatorio-tri.svg",
          alt: "Relatório de resultado por TRI na régua ENEM",
          label: "Resultado TRI · ENEM",
        }}
      />

      <SectionWrapper eyebrow="Recursos" title="Tudo que um bom simulado ENEM precisa ter">
        <FeatureList items={RECURSOS} columns={3} />
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Como funciona" title="Do simulado à nota TRI, sem trabalho manual">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              O aluno faz o simulado online ou em papel; a correção por TRI processa as respostas
              considerando a dificuldade de cada item e devolve uma nota{" "}
              <strong className="text-ink">comparável à do ENEM</strong>. A instituição recebe relatórios
              prontos por área de conhecimento e habilidade.
            </p>
            <div className="mt-6">
              <FeatureList
                columns={1}
                items={[
                  "Itens calibrados por dificuldade",
                  "Nota TRI na régua oficial",
                  "Relatório por área e habilidade",
                  "Gabarito comentado para revisão",
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MockupFrame
              src="/assets/prints/simulado-andamento.svg"
              alt="Tela de simulado ENEM em andamento"
              label="Simulado em andamento"
            />
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Benefícios" title="Valor para cada perfil" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map(([who, text]) => (
            <StaggerItem key={who} className="h-full">
              <div className="h-full rounded-lg border border-line bg-white p-7 shadow-card">
                <Pill tone="azul">{who}</Pill>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <AplicacaoSection soft />

      <LeitorOmrSection soft={false} />

      <RelatoriosConsolidadosSection soft />

      <CTASection
        title="Quero o Simulado ENEM na minha instituição"
        subtitle="Leve simulados por TRI no padrão ENEM para seus alunos, com a marca da sua instituição."
      />
    </>
  );
}
