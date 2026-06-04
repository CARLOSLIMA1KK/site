import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "KodarEdu para Cursinhos",
  description:
    "Foco em aprovação: simulados ENEM/vestibulares por TRI, correção de redação com IA, ranking e marca própria do cursinho. Plataforma white label.",
  alternates: { canonical: "/para/cursinhos" },
};

const FOCOS = [
  { title: "Aprovação em primeiro lugar", text: "Simulados por TRI que antecipam a nota do ENEM e dos vestibulares." },
  { title: "Redação que evolui", text: "Correção com IA + especialista e acompanhamento por aluno." },
  { title: "Ranking e engajamento", text: "Competição saudável que mantém o aluno estudando." },
  { title: "Marca própria do cursinho", text: "Plataforma e app com a identidade do seu cursinho." },
];

const DESTAQUES = [
  { title: "Simulados TRI", text: "Padrão ENEM e principais bancas.", icon: "target" },
  { title: "Redação com IA", text: "Devolutiva detalhada nas 5 competências.", icon: "brush" },
  { title: "Trilhas adaptativas", text: "Estudo personalizado por aluno.", icon: "bolt" },
];

export default function ParaCursinhosPage() {
  return (
    <>
      <PageHero
        eyebrow="Para Cursinhos"
        title="Mais aprovações,"
        highlight="com a sua marca."
        subtitle="A KodarEdu dá ao seu cursinho simulados por TRI, redação com IA, ranking e trilhas adaptativas, tudo white label, do jeito que seus alunos esperam."
        pills={["TRI", "Redação", "Ranking", "White Label"]}
      />

      <SectionWrapper eyebrow="Foco" title="O que move um cursinho, resolvido">
        <FeatureList items={FOCOS} columns={2} />
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Destaques" title="As soluções que mais impactam aprovação" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {DESTAQUES.map((d) => (
            <StaggerItem key={d.title} className="h-full">
              <Card title={d.title} text={d.text} icon={d.icon} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <CTASection
        title="Quero a KodarEdu no meu cursinho"
        subtitle="Aumente as aprovações com simulados por TRI e redação com IA, sob a marca do seu cursinho."
      />
    </>
  );
}
