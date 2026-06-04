import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Soluções — avaliação, conteúdo e gestão",
  description:
    "Simulados ENEM/SAEB/vestibulares por TRI, redação com IA, banco de questões, plataforma adaptativa e criação/correção de provas. Online, impresso ou híbrido.",
  alternates: { canonical: "/solucoes" },
};

const CATEGORIES = [
  {
    title: "Avaliação & Simulados",
    items: [
      { title: "Simulado ENEM (TRI)", href: "/solucoes/simulado-enem", tag: "TRI", text: "Padrão ENEM com correção por TRI na régua oficial.", icon: "target" },
      { title: "Simulado SAEB", href: "/solucoes/simulado-saeb", tag: "BNCC", text: "Diagnóstico alinhado ao SAEB com benchmark nacional.", icon: "chart" },
      { title: "Simulado de Vestibulares", href: "/solucoes/simulado-vestibulares", tag: "Bancas", text: "Simulados fiéis às principais bancas e vestibulares.", icon: "book" },
      { title: "Avaliação Diagnóstica/Processual", href: "/solucoes/avaliacao", tag: "BNCC", text: "Avaliações diagnósticas e somativas do Fund. ao Médio.", icon: "check" },
    ],
  },
  {
    title: "Conteúdo & Aprendizagem",
    items: [
      { title: "Correção de Redação", href: "/solucoes/redacao", tag: "Com IA", text: "Padrão ENEM com IA + corretor humano.", icon: "brush" },
      { title: "Banco de Questões / Itens", href: "/solucoes/banco-de-questoes", tag: "Autoral", text: "Milhares de itens inéditos com filtros e IA.", icon: "list" },
      { title: "Plataforma Adaptativa", href: "/solucoes/adaptativa", tag: "CAT", text: "Teste adaptativo e trilhas personalizadas.", icon: "bolt" },
      { title: "Material de Revisão", href: "/solucoes/revisa", tag: "Híbrido", text: "Cadernos impressos + app inteligente.", icon: "book" },
    ],
  },
  {
    title: "Gestão Avaliativa",
    items: [
      { title: "Criação & Correção de Provas", href: "/solucoes/provas", tag: "Com IA", text: "Crie, imprima ou aplique online; correção automática.", icon: "chip" },
    ],
  },
];

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Tudo o que sua escola precisa para avaliar,"
        highlight="reunido na sua marca."
        subtitle="Uma plataforma completa: avaliação, conteúdo e gestão em um só lugar — com tag de formato (digital, impresso ou híbrido) em cada solução."
        pills={["Digital", "Impresso", "Híbrido", "White Label"]}
      />

      {CATEGORIES.map((cat, idx) => (
        <SectionWrapper key={cat.title} soft={idx % 2 === 1} eyebrow={`0${idx + 1}`} title={cat.title}>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((s) => (
              <StaggerItem key={s.title} className="h-full">
                <Card title={s.title} text={s.text} href={s.href} tag={s.tag} icon={s.icon} />
              </StaggerItem>
            ))}
          </Stagger>
        </SectionWrapper>
      ))}

      <CTASection />
    </>
  );
}
