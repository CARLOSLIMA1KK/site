import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import Pill from "@/components/Pill";
import CTASection from "@/components/CTASection";
import { Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Na Mídia",
  description:
    "KodarEdu na imprensa: clipping de notícias, prêmios e reconhecimentos do mercado de educação e tecnologia.",
  alternates: { canonical: "/na-midia" },
};

const PRESS = [
  { outlet: "Portal Educação", date: "Mai 2026", title: "Plataformas white label ganham espaço nas escolas brasileiras", tag: "Imprensa" },
  { outlet: "TechEdu Brasil", date: "Abr 2026", title: "Como a TRI está mudando a preparação para o ENEM", tag: "Imprensa" },
  { outlet: "Prêmio Inovação EdTech", date: "Mar 2026", title: "KodarEdu entre as edtechs de destaque do ano", tag: "Prêmio" },
  { outlet: "Aceleração de Impacto", date: "Fev 2026", title: "Selo de Negócio de Impacto para soluções educacionais", tag: "Selo" },
  { outlet: "Gestão Escolar", date: "Jan 2026", title: "IA na correção de redação: o que muda para o professor", tag: "Imprensa" },
  { outlet: "Educação & Dados", date: "Dez 2025", title: "Inteligência de dados na rede pública: cases que funcionam", tag: "Imprensa" },
];

export default function NaMidiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Na Mídia"
        title="A KodarEdu na"
        highlight="imprensa."
        subtitle="Clipping de notícias, prêmios e reconhecimentos. (Conteúdo ilustrativo — substituir pelos veículos e links reais.)"
        pills={["Imprensa", "Prêmios", "Selos"]}
      />

      <SectionWrapper>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRESS.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <a href="#" className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-pop">
                <div className="flex items-center justify-between">
                  <Pill tone="azul">{p.tag}</Pill>
                  <span className="text-xs text-slate">{p.date}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink">{p.title}</h3>
                <span className="mt-auto pt-4 text-sm font-semibold text-verde-700">{p.outlet} →</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
