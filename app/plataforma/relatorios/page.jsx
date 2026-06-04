import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import MockupFrame from "@/components/MockupFrame";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { REPORT_VIEWS as VISOES } from "@/lib/site";

export const metadata = {
  title: "Relatórios & Inteligência de Dados",
  description:
    "Relatórios por aluno, turma, disciplina, competência e habilidade. Réguas ENEM/SAEB por TRI, comparativos de evolução e integração com ERP escolar.",
  alternates: { canonical: "/plataforma/relatorios" },
};

const PRINTS = [
  { src: "/assets/prints/relatorio-gestor.svg", title: "Dashboard do gestor", text: "Indicadores-chave em uma só tela.", alt: "Painel do gestor com indicadores" },
  { src: "/assets/prints/relatorio-turma.svg", title: "Relatório de turma", text: "Comparativo e ranking por turma.", alt: "Relatório de desempenho por turma" },
  { src: "/assets/prints/relatorio-habilidade.svg", title: "Evolução por habilidade", text: "Progresso ao longo dos ciclos.", alt: "Gráfico de evolução por habilidade" },
];

export default function RelatoriosPage() {
  return (
    <>
      <PageHero
        eyebrow="Relatórios & Inteligência de Dados"
        title="Decisões pedagógicas guiadas por"
        highlight="dados precisos."
        subtitle="Transforme cada avaliação em inteligência acionável: visão por aluno, turma, competência e habilidade, com réguas ENEM/SAEB por TRI e integração ao ERP escolar."
        pills={["TRI", "Réguas ENEM/SAEB", "Exportável", "Integra com ERP"]}
        mockup={{
          src: "/assets/prints/relatorios-hero.svg",
          alt: "Painel de relatórios da KodarEdu com evolução por competência",
          label: "app.suaescola.edu.br/relatorios",
        }}
      />

      <SectionWrapper
        eyebrow="Visões de análise"
        title="Do panorama da rede ao detalhe de cada habilidade"
        subtitle="A mesma avaliação, lida em vários níveis, para que cada perfil encontre exatamente a informação que precisa."
      >
        <FeatureList items={VISOES} columns={3} />
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Previsibilidade real" title="TRI ajustada às réguas oficiais">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              Nossa Teoria de Resposta ao Item é calibrada às réguas do ENEM e do SAEB. Isso significa
              que a nota do simulado <strong className="text-ink">antecipa o desempenho oficial</strong>{" "}
              com alta precisão, e a escola planeja com confiança.
            </p>
            <div className="mt-6">
              <FeatureList
                columns={1}
                items={[
                  "Comparação com benchmark nacional",
                  "Relatórios exportáveis (PDF/planilha)",
                  "Histórico de evolução por ciclo",
                  "Integração com o ERP escolar",
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MockupFrame
              src="/assets/prints/relatorio-tri.svg"
              alt="Resultado por TRI na régua ENEM/SAEB"
              label="Resultado TRI"
            />
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Por dentro" title="Os relatórios que sua equipe vai usar todo dia" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {PRINTS.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <Card title={p.title} text={p.text} image={p.src} imageAlt={p.alt} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <CTASection
        title="Quero inteligência de dados na minha escola"
        subtitle="Veja os relatórios da KodarEdu com dados de exemplo e descubra o que sua equipe pedagógica pode decidir com eles."
      />
    </>
  );
}
