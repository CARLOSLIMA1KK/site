import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Quem Somos",
  description:
    "A KodarEdu nasceu para resolver toda a jornada avaliativa das instituições com tecnologia, rigor pedagógico e a marca de cada instituição. Conheça nossa missão.",
  alternates: { canonical: "/quem-somos" },
};

const SECURITY = [
  {
    icon: "shield",
    title: "Segurança",
    text: "Proteção em todas as camadas para os dados da sua instituição.",
    items: [
      "Criptografia em trânsito e em repouso",
      "Controle de acesso por perfil",
      "Backups automáticos",
      "Monitoramento contínuo",
    ],
  },
  {
    icon: "lock",
    title: "Conformidade com a LGPD",
    text: "Tratamento de dados de acordo com a legislação brasileira.",
    items: [
      "Bases legais e finalidade definidas",
      "Gestão de consentimento",
      "A escola é a controladora dos dados",
      "Contrato de operador e canal do DPO",
    ],
  },
  {
    icon: "globe",
    title: "Infraestrutura escalável",
    text: "Nuvem de alta disponibilidade que cresce com a sua rede.",
    items: [
      "Hospedagem em nuvem AWS",
      "Alta disponibilidade e escala",
      "Atualizações sem interrupção",
      "Especialistas dedicados",
    ],
    partner: true,
  },
];

const VALUES = [
  { title: "Pedagogia em primeiro lugar", text: "Tecnologia a serviço da aprendizagem, não o contrário." },
  { title: "Dados confiáveis", text: "Rigor metodológico e TRI ajustada às réguas oficiais." },
  { title: "A marca é da instituição", text: "White label de verdade, do login ao certificado." },
  { title: "Próximos de quem usa", text: "Suporte humano e implantação sem fricção." },
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="Tecnologia educacional"
        highlight="com alma pedagógica."
        subtitle="A KodarEdu nasceu para reunir, em uma só plataforma white label, o melhor da avaliação educacional, com rigor metodológico e a marca de cada instituição."
        pills={["Missão", "Tecnologia", "Conformidade"]}
      />

      <SectionWrapper eyebrow="Nossa missão" title="Transformar avaliação em aprendizagem">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate">
              Acreditamos que avaliar bem é o primeiro passo para ensinar melhor. Por isso construímos
              uma plataforma que cuida de toda a jornada avaliativa, criar, aplicar, corrigir e
              analisar, com inteligência de dados acionável e a identidade de cada instituição.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Reunimos o melhor das principais soluções do mercado em um único produto white label,
              para que instituições, cursinhos, redes e editoras ofereçam excelência sob a sua marca.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureList columns={1} items={VALUES} />
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/photos/quem-somos-time.jpg"
            alt="Time KodarEdu em conversa colaborativa em torno da mesa de trabalho"
            loading="lazy"
            className="aspect-[16/9] w-full rounded-lg border border-line object-cover shadow-pop"
          />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper
        soft
        eyebrow="Segurança & Infraestrutura"
        title="Sólida por dentro, segura por fora"
        subtitle="Segurança em camadas, conformidade com a LGPD e uma infraestrutura em nuvem que escala com a sua rede, mantida por especialistas."
      >
        <Stagger className="grid gap-6 md:grid-cols-3">
          {SECURITY.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-verde-100 text-verde-700">
                  <Icon name={card.icon} size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{card.text}</p>
                <div className="mt-5">
                  <FeatureList columns={1} items={card.items} />
                </div>
                {card.partner && (
                  <div className="mt-auto flex items-center gap-3 rounded-md border border-line bg-bg-soft p-3 pt-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/logos/aws.svg" alt="Amazon Web Services" className="h-7 w-auto flex-none" />
                    <span className="text-[13px] leading-snug text-slate">
                      Parceiro de nuvem. Time de tecnologia com mais de 15 anos de experiência.
                    </span>
                  </div>
                )}
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
