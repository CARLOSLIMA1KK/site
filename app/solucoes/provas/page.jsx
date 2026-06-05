import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import CTASection from "@/components/CTASection";
import LeitorOmrSection from "@/components/sections/LeitorOmrSection";
import RelatoriosConsolidadosSection from "@/components/sections/RelatoriosConsolidadosSection";
import { Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Provas Online e Impressas com IA, leitor OMR e câmera",
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
  { title: "Integração com o ERP", text: "As notas fluem direto para o sistema da instituição.", icon: "chip" },
];

export default function ProvasPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos Pedagógicos · Provas Online e Impressas"
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

      <LeitorOmrSection soft />

      <RelatoriosConsolidadosSection />

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
        title="Quero provas online e impressas com IA"
        subtitle="Fale com nosso time e leve criação por IA, leitor OMR e relatórios na hora para a sua instituição."
      />
    </>
  );
}
