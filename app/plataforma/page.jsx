import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Card from "@/components/Card";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { PLATFORM_CAPABILITIES as CAPACIDADES } from "@/lib/site";

export const metadata = {
  title: "A Plataforma — um hub para todo o ciclo avaliativo",
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
        subtitle="Criar, aplicar, corrigir e analisar — provas, simulados, redação e relatórios em uma plataforma em nuvem, acessível e white label, que sua escola adota sem precisar de TI."
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
        subtitle="Os fundamentos que fazem a KodarEdu funcionar para a escola toda — sem complexidade para quem usa."
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

      <SectionWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="rounded-lg surface-dark p-8 text-white">
            <h3 className="font-display text-h3 font-bold">Infraestrutura & segurança</h3>
            <p className="mt-3 text-white/80">
              Hospedagem em nuvem com alta disponibilidade, backups e tratamento de dados em
              conformidade com a LGPD. Atualizações e manutenção por nossa conta.
            </p>
            <div className="mt-6">
              <FeatureList
                columns={1}
                icon="shield"
                items={["Dados protegidos e criptografados", "Conformidade com a LGPD", "Alta disponibilidade em nuvem"]}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-h3 font-bold text-ink">Pronto para conhecer por dentro?</h3>
            <p className="mt-3 text-slate">
              Faça o tour guiado pelas telas da plataforma ou veja como a inteligência de dados
              transforma cada avaliação em decisão pedagógica.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/plataforma/tour" variant="primary" arrow>Fazer o tour</Button>
              <Button href="/plataforma/relatorios" variant="secondary">Ver relatórios</Button>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
