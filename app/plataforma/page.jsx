import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { PLATFORM_CAPABILITIES as CAPACIDADES } from "@/lib/site";

const SECURITY = [
  {
    icon: "shield",
    title: "Segurança",
    text: "Proteção em todas as camadas para os dados da sua escola.",
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

export const metadata = {
  title: "A Plataforma, um hub para todo o ciclo avaliativo",
  description:
    "Plataforma em nuvem, leve, 100% responsiva e acessível. White label, com acessos por perfil, provas híbridas e suporte humano por WhatsApp.",
  alternates: { canonical: "/plataforma" },
};

const PERFIS = [
  { title: "Aluno", text: "Faz avaliações, vê notas, trilhas e evolução.", icon: "rocket", print: "/assets/prints/simulado-andamento.svg" },
  { title: "Professor / Corretor", text: "Cria, aplica e corrige com apoio de IA.", icon: "brush", print: "/assets/prints/redacao-correcao.svg" },
  { title: "Coordenação / Gestor", text: "Acompanha indicadores e decide com dados.", icon: "chart", print: "/assets/prints/relatorio-gestor.svg" },
];

export default function PlataformaPage() {
  return (
    <>
      <PageHero
        eyebrow="A Plataforma"
        title="Uma plataforma completa para todo o"
        highlight="ciclo avaliativo."
        subtitle="Criar, aplicar, corrigir e analisar, provas, simulados, redação e relatórios em uma plataforma em nuvem, acessível e white label, que sua escola adota sem precisar de TI."
        pills={["White Label", "Acessível", "Nuvem", "Híbrida"]}
        secondary={{ label: "Fazer o tour", href: "/plataforma/tour" }}
        mockup={{
          src: "/assets/prints/home-dashboard.svg",
          alt: "Visão inicial da plataforma KodarEdu",
          label: "app.suaescola.edu.br",
        }}
      />

      <SectionWrapper
        eyebrow="Capacidades"
        title="Robusta por dentro, simples por fora"
        subtitle="Os fundamentos que fazem a KodarEdu funcionar para a escola toda, sem complexidade para quem usa."
      >
        <FeatureList items={CAPACIDADES} columns={2} />
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Por perfil" title="Cada usuário, a sua experiência" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {PERFIS.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <Card title={p.title} text={p.text} image={p.print} imageAlt={`Tela do perfil ${p.title}`} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 flex justify-center">
          <Button href="/plataforma/acessos" variant="secondary" arrow>
            Ver acessos e permissões
          </Button>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Segurança & Infraestrutura"
        title="Seus dados seguros, em uma base sólida"
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

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/plataforma/tour" variant="primary" arrow>Fazer o tour</Button>
          <Button href="/plataforma/relatorios" variant="secondary">Ver relatórios</Button>
        </Reveal>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
