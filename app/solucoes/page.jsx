import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Soluções, avaliações, recursos e Edu.IA",
  description:
    "Simulados ENEM e SAEB, trilha adaptativa (CAT), Produção Textual com IA, Banco de Itens, criação e correção de provas, integração físico-digital e o assistente Edu.IA.",
  alternates: { canonical: "/solucoes" },
};

const CATEGORIES = [
  {
    title: "Avaliações & Ferramentas",
    items: [
      { title: "Criação e Correção de Provas", href: "/solucoes/provas", tag: "Com IA", text: "Gere questões com IA, aplique e corrija automaticamente.", icon: "chip" },
      { title: "Simulados ENEM", href: "/solucoes/simulado-enem", tag: "TRI", text: "Padrão ENEM com correção por TRI na régua oficial.", icon: "target" },
      { title: "Simulados SAEB", href: "/solucoes/simulado-saeb", tag: "BNCC", text: "Diagnóstico alinhado ao SAEB com benchmark nacional.", icon: "chart" },
      { title: "Produção Textual", href: "/solucoes/redacao", tag: "Com IA", text: "Redação no padrão ENEM com IA + corretor humano.", icon: "brush" },
    ],
  },
  {
    title: "Recursos Edu",
    items: [
      { title: "Banco de Itens", href: "/solucoes/banco-de-questoes", tag: "Autoral", text: "Milhares de itens inéditos com filtros e IA.", icon: "list" },
      { title: "Trilha adaptativa (CAT)", href: "/solucoes/adaptativa", tag: "CAT", text: "Teste adaptativo e trilhas personalizadas.", icon: "bolt" },
      { title: "Integração físico-digital", href: "/solucoes/integracao", tag: "Híbrido", text: "Impresso e online integrados, com dados num só lugar.", icon: "book" },
    ],
  },
  {
    title: "Edu.IA",
    items: [
      { title: "Edu.IA para professores", href: "/solucoes/edu-ia", tag: "IA", text: "Assistente de IA com várias ferramentas para o professor.", icon: "bolt" },
    ],
  },
];

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Tudo o que você precisa para avaliar,"
        highlight="reunido na sua marca."
        subtitle="Uma plataforma completa em três frentes: Avaliações & Ferramentas, Recursos Edu e Edu.IA, com tag de formato (digital, impresso ou híbrido) em cada solução."
        pills={["Avaliações", "Recursos Edu", "Edu.IA", "White Label"]}
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
