import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import MockupFrame from "@/components/MockupFrame";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Produção Textual — redação com IA + especialista",
  description:
    "Produção Textual: correção de redação no padrão ENEM combinando IA e corretor humano — grade de competências, devolutiva detalhada, banco de temas e evolução por aluno e turma.",
  alternates: { canonical: "/solucoes/redacao" },
};

const COMPETENCIAS = [
  "Domínio da norma culta",
  "Compreensão do tema e tipo textual",
  "Seleção e organização de argumentos",
  "Mecanismos de coesão",
  "Proposta de intervenção",
];

const RECURSOS = [
  { title: "IA + corretor humano", text: "Velocidade da IA com o olhar de um especialista." },
  { title: "Grade por competência", text: "Nota detalhada nas 5 competências do ENEM." },
  { title: "Devolutiva com marcações", text: "O aluno vê exatamente o que melhorar no texto." },
  { title: "Banco de temas e jornadas", text: "Temas atuais e trilhas temáticas de escrita." },
  { title: "Evolução por aluno e turma", text: "Acompanhe o progresso ao longo do tempo." },
  { title: "Economia de tempo do professor", text: "Horas de correção devolvidas à equipe." },
];

export default function RedacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliações & Ferramentas · Produção Textual"
        title="Produção Textual no padrão ENEM:"
        highlight="IA + especialista."
        subtitle="Una a velocidade da inteligência artificial ao olhar de um corretor humano. Devolutiva por competência, marcações no texto e evolução acompanhada por aluno e turma."
        pills={["Com IA", "Padrão ENEM", "5 competências", "White Label"]}
        mockup={{
          src: "/assets/prints/redacao-correcao.svg",
          alt: "Tela de correção de redação com marcações e notas por competência",
          label: "Correção de redação",
        }}
      />

      <SectionWrapper eyebrow="Recursos" title="Correção completa, do envio à devolutiva">
        <FeatureList items={RECURSOS} columns={3} />
      </SectionWrapper>

      <SectionWrapper soft eyebrow="As 5 competências" title="Nota detalhada como na prova oficial">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              Cada redação é avaliada nas cinco competências do ENEM, com comentários específicos e
              marcações no próprio texto. O aluno entende{" "}
              <strong className="text-ink">o que fez bem e o que ajustar</strong> — e o professor
              recupera horas que iam para a correção manual.
            </p>
            <ol className="mt-6 space-y-3">
              {COMPETENCIAS.map((c, i) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-verde-700 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-medium text-ink">{c}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <MockupFrame
              src="/assets/prints/redacao-evolucao.svg"
              alt="Gráfico de evolução da nota de redação por aluno"
              label="Evolução da nota"
            />
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Impacto" title="Recurso que vira benefício" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {[
            ["Mais redações por ciclo", "A escola aplica e corrige mais sem sobrecarregar a equipe."],
            ["Devolutiva mais rica", "Feedback consistente e padronizado em todas as turmas."],
            ["Evolução visível", "Pais e alunos enxergam o progresso da nota ao longo do ano."],
          ].map(([t, d]) => (
            <StaggerItem key={t} className="h-full">
              <div className="h-full rounded-lg surface-dark p-7 text-white">
                <h3 className="font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-[15px] text-white/80">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <CTASection
        title="Quero correção de redação com IA na minha escola"
        subtitle="Ofereça correção no padrão ENEM com devolutiva detalhada — e devolva horas de trabalho aos seus professores."
      />
    </>
  );
}
