import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import MockupFrame from "@/components/MockupFrame";
import StatBand from "@/components/StatBand";
import Pill from "@/components/Pill";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Produção Textual — escrita com IA, OCR e especialista",
  description:
    "Desenvolvimento da escrita do Fundamental ao ENEM, em diversos gêneros. Temas definidos por você ou do banco com 5.000+ temas, correção IA + especialista e OCR para redações manuscritas.",
  alternates: { canonical: "/solucoes/redacao" },
};

// Números desta solução (placeholders editáveis)
const STATS = [
  { value: 800, suffix: "+", label: "Correções realizadas" },
  { value: 5000, suffix: "+", label: "Temas no banco" },
  { value: 12, suffix: "+", label: "Gêneros textuais" },
  { value: 5, label: "Competências avaliadas" },
];

const GENEROS = [
  { title: "Dissertativo-argumentativo", text: "Padrão ENEM e vestibulares." },
  { title: "Artigo de opinião", text: "Posicionamento e argumentação." },
  { title: "Carta argumentativa", text: "Carta do leitor e carta aberta." },
  { title: "Narrativa e crônica", text: "Criatividade e coesão narrativa." },
  { title: "Relato e descrição", text: "Gêneros do Ensino Fundamental." },
  { title: "Resenha e resumo", text: "Leitura crítica e síntese." },
];

const COMPETENCIAS = [
  "Domínio da norma culta",
  "Compreensão do tema e do gênero",
  "Seleção e organização de argumentos",
  "Mecanismos de coesão",
  "Proposta de intervenção / fechamento",
];

const DETECCOES = ["Plágio", "Fuga ao tema", "Fuga ao gênero", "Texto insuficiente", "Cópia da coletânea"];

const JORNADA = [
  { step: "01", title: "Preparação", text: "Coletânea, textos de apoio e atividades de pré-escrita." },
  { step: "02", title: "Produção", text: "O aluno escreve online ou entrega manuscrito (OCR)." },
  { step: "03", title: "Devolutiva", text: "Correção IA + especialista, trecho a trecho." },
  { step: "04", title: "Evolução", text: "Reescrita guiada e acompanhamento da nota." },
];

export default function RedacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliações & Ferramentas · Produção Textual"
        title="Produção Textual com IA,"
        highlight="do Fundamental ao ENEM."
        subtitle="Muito além da redação do ENEM: desenvolva a escrita em diversos gêneros, do Ensino Fundamental ao Médio — com correção que une IA e especialista, OCR para textos manuscritos e temas definidos por você."
        pills={["Com IA", "OCR manuscrito", "5.000+ temas", "Diversos gêneros"]}
        mockup={{
          src: "/assets/prints/redacao-correcao.svg",
          alt: "Tela de correção de produção textual com marcações e notas por competência",
          label: "Produção Textual",
        }}
      />

      <StatBand stats={STATS} title="Escrita que evolui de verdade" subtitle="Tecnologia e especialistas a serviço do desenvolvimento da escrita — com a marca da sua escola." />

      {/* Muito além do ENEM */}
      <SectionWrapper
        eyebrow="Diversos gêneros · Fund. → Médio"
        title="Muito além da redação do ENEM"
        subtitle="Desenvolva a escrita em vários gêneros e em todas as etapas — do Ensino Fundamental ao Médio — com critérios adaptados a cada tipo de texto."
      >
        <FeatureList items={GENEROS} columns={3} icon="brush" />
      </SectionWrapper>

      {/* Temas: cliente define + banco */}
      <SectionWrapper soft eyebrow="Temas" title="Você define os temas — ou usa o nosso banco">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              A sua escola cria os próprios temas, do jeito que a equipe pedagógica quiser — ou escolhe
              no nosso <strong className="text-ink">banco com mais de 5.000 temas</strong> prontos, com
              coletâneas e textos de apoio, alinhados ao ENEM e à BNCC.
            </p>
            <div className="mt-6">
              <FeatureList
                columns={1}
                items={[
                  "Crie temas próprios da sua instituição",
                  "Banco com 5.000+ temas prontos para usar",
                  "Coletâneas e textos de apoio inclusos",
                  "Temas por etapa, gênero e nível de dificuldade",
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MockupFrame src="/assets/prints/banco-questoes.svg" alt="Banco de temas de redação com filtros" label="Banco de temas" />
          </Reveal>
        </div>
      </SectionWrapper>

      {/* OCR + tecnologia */}
      <SectionWrapper eyebrow="Tecnologia & IA" title="Da foto do caderno à correção, com OCR">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              O aluno escreve no papel e <strong className="text-ink">fotografa a redação</strong>: nosso
              OCR extrai o texto manuscrito da imagem e a IA faz a correção. Nada de digitar tudo de
              novo — o manuscrito entra direto no fluxo.
            </p>
            <div className="mt-6">
              <FeatureList
                columns={1}
                icon="chip"
                items={[
                  "OCR lê a redação manuscrita pela foto",
                  "IA com PLN: feedback trecho a trecho",
                  "Nota por competência com justificativa",
                  "Sugestões de reescrita e próximos passos",
                ]}
              />
            </div>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-slate">Detecção automática:</p>
              <div className="flex flex-wrap gap-2">
                {DETECCOES.map((d) => (
                  <Pill key={d} tone="outline">{d}</Pill>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MockupFrame src="/assets/prints/redacao-ocr.svg" alt="OCR: redação manuscrita digitalizada e corrigida" label="OCR · manuscrito → correção" />
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Nível de detalhamento / competências */}
      <SectionWrapper soft eyebrow="Nível de detalhamento" title="Feedback detalhado, como o de um especialista">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              Cada texto recebe nota e comentários por competência, com marcações no próprio texto. O
              aluno entende <strong className="text-ink">o que fez bem e o que ajustar</strong> — e o
              professor recupera horas que iam para a correção manual.
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
            <MockupFrame src="/assets/prints/redacao-evolucao.svg" alt="Gráfico de evolução da nota de redação por aluno" label="Evolução da nota" />
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Jornada de escrita */}
      <SectionWrapper eyebrow="Jornada de escrita" title="Da preparação à reescrita" center>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {JORNADA.map((j) => (
            <StaggerItem key={j.step}>
              <div className="h-full rounded-lg border border-line bg-white p-6 shadow-card">
                <span className="font-display text-3xl font-extrabold text-verde-100">{j.step}</span>
                <h3 className="-mt-2 font-display text-xl font-bold text-ink">{j.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{j.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Impacto */}
      <SectionWrapper soft eyebrow="Impacto" title="Recurso que vira benefício" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {[
            ["IA + corretor humano", "A velocidade da IA com o olhar de um especialista — não só automático."],
            ["Mais escrita por ciclo", "A escola produz e corrige mais sem sobrecarregar a equipe."],
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
        title="Quero Produção Textual na minha escola"
        subtitle="Ofereça desenvolvimento da escrita em diversos gêneros, com IA, OCR e devolutiva detalhada — e devolva horas aos seus professores."
      />
    </>
  );
}
