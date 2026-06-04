import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import MockupFrame from "@/components/MockupFrame";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Criação e Correção de Provas com IA, leitor OMR e câmera",
  description:
    "Gere questões com IA, monte provas com layout profissional e corrija automaticamente. Leitor de gabarito OMR com identificação automática do aluno, leitura por lote ou pela câmera do celular, e relatórios consolidados na hora.",
  alternates: { canonical: "/solucoes/provas" },
};

const RECURSOS = [
  { title: "Gera questões com IA", text: "Crie itens inéditos e variações em segundos.", icon: "sparkle" },
  { title: "Banco de Itens integrado", text: "Monte a prova puxando do acervo autoral.", icon: "layers" },
  { title: "Layout profissional", text: "Provas bem diagramadas para imprimir ou aplicar online.", icon: "doc" },
  { title: "Aplicação flexível", text: "No papel, online ou nos dois formatos.", icon: "book" },
  { title: "Correção automática", text: "Objetiva e discursiva, sem trabalho manual.", icon: "check" },
  { title: "Integração com o ERP", text: "As notas fluem direto para o sistema da escola.", icon: "chip" },
];

const LEITOR = [
  { title: "Identificação automática do aluno", text: "A plataforma reconhece quem é, sem digitar nome.", icon: "users" },
  { title: "Extração rápida das respostas", text: "Leitura óptica (OMR) das marcações em segundos.", icon: "bolt" },
  { title: "Scanner por lote da turma", text: "Passe a pilha de folhas de uma vez só.", icon: "layers" },
  { title: "App com a câmera do celular", text: "Fotografe a folha e corrija na hora, sem scanner.", icon: "camera" },
  { title: "Correção no ato", text: "Notas e gabarito prontos assim que a folha é lida.", icon: "clock" },
];

const RELATORIOS = [
  { title: "Consolidação automática", text: "Resultados reunidos assim que a turma é lida.", icon: "layers" },
  { title: "Por aluno, turma e questão", text: "Veja onde a turma acerta e onde precisa reforçar.", icon: "chart" },
  { title: "Exportação rápida", text: "Baixe em PDF ou planilha em um clique.", icon: "doc" },
  { title: "Integração com o ERP", text: "Lançamento de notas sem retrabalho.", icon: "chip" },
];

export default function ProvasPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos Edu · Criação e Correção de Provas"
        title="Crie, aplique e corrija provas"
        highlight="com IA do início ao fim."
        subtitle="Gere questões com IA, monte a prova com layout profissional e corrija automaticamente. No papel ou online, com leitor de gabarito OMR e até pela câmera do celular."
        pills={["Gera questões com IA", "Leitor OMR", "App com câmera", "Integra ERP"]}
        mockup={{
          src: "/assets/prints/provas-editor.svg",
          alt: "Editor de prova da KodarEdu gerando questões com IA",
          label: "Criar prova",
        }}
      />

      <SectionWrapper eyebrow="Recursos" title="Da criação à correção, num fluxo só">
        <FeatureList items={RECURSOS} columns={3} />
      </SectionWrapper>

      {/* Leitor / OMR / IA */}
      <SectionWrapper soft eyebrow="Leitor, OMR e IA" title="Corrigir a turma inteira em minutos">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              O aluno responde na folha de gabarito e a KodarEdu cuida do resto. A leitura óptica (OMR)
              identifica o aluno automaticamente e extrai as respostas. Você escaneia a turma por lote
              ou usa o aplicativo com a câmera do celular. A correção sai na hora.
            </p>
            <div className="mt-6">
              <FeatureList columns={1} items={LEITOR} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MockupFrame
              src="/assets/prints/omr-leitor.svg"
              alt="Leitor OMR identificando o aluno e extraindo as respostas, com leitura por lote e por câmera do celular"
              label="Leitor OMR + câmera"
            />
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Relatórios consolidados */}
      <SectionWrapper eyebrow="Relatórios" title="Resultados consolidados na hora">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <p className="text-lg leading-relaxed text-slate">
              Assim que a turma é lida, os dados se consolidam sozinhos. Em poucos segundos você tem o
              desempenho por aluno, por turma e por questão, pronto para exportar e já integrado ao ERP
              da escola.
            </p>
            <div className="mt-6">
              <FeatureList columns={1} items={RELATORIOS} />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <MockupFrame
              src="/assets/prints/secao-relatorios.svg"
              alt="Painel de relatórios consolidados por aluno, turma e questão"
              label="Relatórios consolidados"
            />
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Impacto */}
      <SectionWrapper soft eyebrow="Impacto" title="O que isso muda no dia a dia" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {[
            ["Menos trabalho manual", "A correção que tomava horas acontece em minutos."],
            ["Resultado na hora", "A turma responde, você lê o lote e já tem as notas."],
            ["Sem digitar nada", "O aluno é identificado e as respostas extraídas sozinhas."],
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
        title="Quero criar e corrigir provas com IA"
        subtitle="Fale com nosso time e leve criação por IA, leitor OMR e relatórios na hora para a sua escola."
      />
    </>
  );
}
