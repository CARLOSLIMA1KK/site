import SolutionPage from "@/components/SolutionPage";
import SectionWrapper from "@/components/SectionWrapper";
import EduAvatar from "@/components/EduAvatar";
import { Reveal } from "@/components/Motion";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["edu-ia"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/edu-ia" } };

// Exemplos de conversa (professor pede, Edu entrega).
const CHAT = [
  {
    ask: "Crie um plano de aula sobre Revolução Industrial para o 9º ano.",
    reply: "Pronto! Plano alinhado à BNCC, com objetivos, etapas e avaliação. Quer que eu gere a lista de exercícios também?",
  },
  {
    ask: "Gere 5 questões de função quadrática, nível médio, com gabarito.",
    reply: "Aqui estão 5 questões inéditas com gabarito e habilidade BNCC. Posso variar a dificuldade quando quiser.",
  },
  {
    ask: "Resuma o desempenho desta turma na última redação.",
    reply: "A turma evoluiu na Competência 4; o ponto de atenção é coesão. Quero gerar rubricas para a próxima?",
  },
];

function ConhecaOEdu() {
  return (
    <SectionWrapper soft eyebrow="Conheça o Edu" title="Olá, eu sou o Edu">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <EduAvatar size={200} />
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-slate">
            Sou o assistente de IA que acompanha seus professores no dia a dia. Você pede em
            linguagem natural e eu devolvo o material pronto para revisar, sempre alinhado à BNCC e
            com a marca da sua instituição.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4 rounded-lg border border-line bg-white p-5 shadow-card sm:p-6">
            {CHAT.map((c, i) => (
              <div key={i} className="space-y-2">
                {/* Pergunta do professor */}
                <div className="flex justify-end">
                  <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-bg-soft px-4 py-2.5 text-[15px] text-ink">
                    {c.ask}
                  </p>
                </div>
                {/* Resposta do Edu */}
                <div className="flex items-end gap-2.5">
                  <EduAvatar size={36} glow={false} className="mb-0.5" />
                  <p className="max-w-[80%] rounded-2xl rounded-bl-sm bg-verde-100 px-4 py-2.5 text-[15px] leading-relaxed text-verde-900">
                    {c.reply}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
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
