import SolutionPage from "@/components/SolutionPage";
import SectionWrapper from "@/components/SectionWrapper";
import EduAvatar from "@/components/EduAvatar";
import EduShowcase from "@/components/EduShowcase";
import { Reveal } from "@/components/Motion";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["edu-ia"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/edu-ia" } };

function ConhecaOEdu() {
  return (
    <SectionWrapper soft eyebrow="Conheça o Edu" title="O Edu em ação">
      <Reveal className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <EduAvatar size={88} />
        <p className="max-w-2xl text-lg leading-relaxed text-slate">
          Sou o assistente de IA que acompanha seus professores no dia a dia. Você pede em linguagem
          natural e eu devolvo o material pronto para revisar, sempre alinhado à BNCC e com a marca
          da sua instituição. Veja alguns exemplos:
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <EduShowcase />
      </Reveal>
    </SectionWrapper>
  );
}

export default function Page() {
  return (
    <SolutionPage data={data}>
      <ConhecaOEdu />
    </SolutionPage>
  );
}
