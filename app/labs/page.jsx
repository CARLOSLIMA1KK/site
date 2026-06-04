import SectionWrapper from "@/components/SectionWrapper";
import PageHero from "@/components/PageHero";
import FeatureList from "@/components/FeatureList";
import LeadForm from "@/components/LeadForm";
import Button from "@/components/Button";
import { Reveal } from "@/components/Motion";

export const metadata = {
  title: "KodarEdu Labs — crie provas grátis",
  description:
    "Ferramenta gratuita para professores criarem provas bem diagramadas em minutos. Experimente a inteligência da KodarEdu antes de contratar.",
  alternates: { canonical: "/labs" },
};

export default function LabsPage() {
  return (
    <>
      <PageHero
        eyebrow="KodarEdu Labs · Grátis"
        title="Crie provas profissionais"
        highlight="de graça."
        subtitle="O KodarEdu Labs é a ferramenta gratuita para professores montarem e imprimirem provas bem diagramadas em minutos. Sem cartão, sem compromisso."
        pills={["100% grátis", "Sem cartão", "Provas em minutos"]}
        primary={{ label: "Começar agora", href: "#comecar" }}
        secondary={{ label: "Ver a plataforma completa", href: "/plataforma" }}
      />

      <SectionWrapper eyebrow="O que dá para fazer" title="Tudo que um professor precisa para uma boa prova">
        <FeatureList
          columns={3}
          items={[
            { title: "Layout profissional", text: "Provas bem diagramadas e prontas para imprimir." },
            { title: "Cabeçalho personalizado", text: "Inclua os dados da escola e da turma." },
            { title: "Vários tipos de questão", text: "Objetivas e discursivas no mesmo documento." },
            { title: "Gabarito automático", text: "Gere o gabarito junto com a prova." },
            { title: "Exportação em PDF", text: "Baixe e imprima quando quiser." },
            { title: "Sem instalação", text: "Funciona direto no navegador." },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper soft id="comecar">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-h2 font-bold text-ink">Comece em 30 segundos</h2>
            <p className="mt-3 text-lg text-slate">
              Cadastre seu e-mail e receba o acesso ao KodarEdu Labs. Quando quiser ir além — com
              banco de questões, simulados por TRI e correção automática — a plataforma completa está
              a um clique.
            </p>
            <div className="mt-6">
              <Button href="/planos" variant="ghost">Ver planos da plataforma completa</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm cta="Criar prova grátis" />
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
}
