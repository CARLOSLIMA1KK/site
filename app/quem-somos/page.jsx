import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Quem Somos",
  description:
    "A KodarEdu nasceu para resolver toda a jornada avaliativa das instituições com tecnologia, rigor pedagógico e a marca de cada escola. Conheça nossa missão.",
  alternates: { canonical: "/quem-somos" },
};

const VALUES = [
  { title: "Pedagogia em primeiro lugar", text: "Tecnologia a serviço da aprendizagem, não o contrário." },
  { title: "Dados confiáveis", text: "Rigor metodológico e TRI ajustada às réguas oficiais." },
  { title: "A marca é da escola", text: "White label de verdade, do login ao certificado." },
  { title: "Próximos de quem usa", text: "Suporte humano e implantação sem fricção." },
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="Tecnologia educacional"
        highlight="com alma pedagógica."
        subtitle="A KodarEdu nasceu para reunir, em uma só plataforma white label, o melhor da avaliação educacional — com rigor metodológico e a marca de cada instituição."
        pills={["Missão", "Tecnologia", "Conformidade"]}
      />

      <SectionWrapper eyebrow="Nossa missão" title="Transformar avaliação em aprendizagem">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              Acreditamos que avaliar bem é o primeiro passo para ensinar melhor. Por isso construímos
              uma plataforma que cuida de toda a jornada avaliativa — criar, aplicar, corrigir e
              analisar — com inteligência de dados acionável e a identidade de cada escola.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Reunimos o melhor das principais soluções do mercado em um único produto white label,
              para que escolas, cursinhos, redes e editoras ofereçam excelência sob a sua marca.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureList columns={1} items={VALUES} />
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Tecnologia & conformidade" title="Sólida por dentro" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {[
            ["Infraestrutura em nuvem", "Alta disponibilidade, backups e atualizações contínuas."],
            ["Segurança e LGPD", "Dados protegidos e tratamento em conformidade com a lei."],
            ["Acessibilidade AA", "Recursos para baixa visão, daltonismo e teclado."],
          ].map(([t, d]) => (
            <StaggerItem key={t} className="h-full">
              <div className="h-full rounded-lg border border-line bg-white p-7 shadow-card">
                <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
                <p className="mt-2 text-[15px] text-slate">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <CTASection
        title="Quer fazer parte dessa história?"
        subtitle="Leve a KodarEdu para a sua instituição ou torne-se um parceiro white label."
      />
    </>
  );
}
