import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import WhiteLabelDemo from "@/components/WhiteLabelDemo";
import FeatureList from "@/components/FeatureList";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "White Label — a plataforma com a cara da sua marca",
  description:
    "Personalize a KodarEdu com seu logo, cores, links e domínio próprio. Plataforma white label de avaliação e ENEM, implantada sem precisar de TI.",
  alternates: { canonical: "/white-label" },
};

const PERSONALIZA = [
  { title: "Logo e identidade", text: "Seu logotipo em todas as telas, e-mails e relatórios." },
  { title: "Paleta de cores", text: "A plataforma assume as cores da sua marca por completo." },
  { title: "Domínio próprio", text: "app.suaescola.edu.br — sem qualquer menção à KodarEdu." },
  { title: "Links e menus", text: "Aponte para o seu site, portal do aluno e canais oficiais." },
  { title: "E-mails e certificados", text: "Comunicações e certificados saem com a sua assinatura." },
  { title: "App na sua marca", text: "Opcional: app nas lojas com o nome e ícone da instituição." },
];

const PERSONAS = [
  { title: "Para a direção", text: "Fortalece a marca da escola e a percepção de inovação junto a pais e alunos.", icon: "shield" },
  { title: "Para o marketing", text: "Um produto digital próprio para captação e retenção, sem desenvolver do zero.", icon: "bolt" },
  { title: "Para a TI", text: "Zero infraestrutura: nuvem, segurança e atualizações por nossa conta.", icon: "chip" },
];

export default function WhiteLabelPage() {
  return (
    <>
      <PageHero
        eyebrow="White Label"
        title="Não é a nossa plataforma."
        highlight="É a sua."
        subtitle="A KodarEdu veste a identidade da sua instituição: cores, logo, links, domínio e até um app próprio. Seus alunos veem a sua marca — e a tecnologia roda nos bastidores."
        pills={["Domínio próprio", "App na sua marca", "Sem TI", "Implantação rápida"]}
        secondary={{ label: "Ver a plataforma", href: "/plataforma" }}
      />

      {/* Demo ao vivo */}
      <SectionWrapper soft eyebrow="Veja ao vivo" title="Troque a marca e veja a plataforma se transformar">
        <Reveal>
          <WhiteLabelDemo />
        </Reveal>
      </SectionWrapper>

      {/* O que personaliza */}
      <SectionWrapper
        eyebrow="O que você personaliza"
        title="Tudo o que o aluno vê, com a sua bandeira"
        subtitle="Da tela de login ao certificado de conclusão, cada ponto de contato carrega a identidade da sua instituição."
      >
        <FeatureList items={PERSONALIZA} columns={3} />
      </SectionWrapper>

      {/* Benefícios por persona */}
      <SectionWrapper soft eyebrow="Benefícios" title="Vantagem para cada área da instituição" center>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {PERSONAS.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <Card title={p.title} text={p.text} icon={p.icon} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Implantação + licenciamento */}
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-lg border border-line bg-white p-8 shadow-card">
            <h3 className="font-display text-h3 font-bold text-ink">Implantação sem TI</h3>
            <p className="mt-3 text-slate">
              Cuidamos de tudo: nuvem, segurança, atualizações e a configuração da sua marca. Você só
              traz o logo e as cores — e em poucos dias a plataforma está no ar com suporte humano
              dedicado por WhatsApp, inclusive nos fins de semana.
            </p>
            <ul className="mt-5">
              <FeatureList
                columns={1}
                items={["Onboarding guiado", "Migração assistida de dados", "Treinamento da equipe", "Suporte por WhatsApp"]}
              />
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-lg bg-verde-900 p-8 text-white">
            <h3 className="font-display text-h3 font-bold">Para Sistemas de Ensino & Editoras</h3>
            <p className="mt-3 text-white/80">
              Embarque a KodarEdu no seu sistema ou material didático e ofereça avaliação, banco de
              itens e relatórios sob a <strong className="text-white">sua bandeira</strong>. Modelo de
              parceria e licenciamento — inclusive com conteúdo/banco licenciado.
            </p>
            <div className="mt-6 rounded-md bg-white/10 p-5">
              <p className="text-sm text-white/70">Modelo flexível</p>
              <p className="mt-1 font-display text-xl font-bold">Licenciamento recorrente por aluno ativo</p>
              <p className="mt-2 text-sm text-white/70">
                Com opção de conteúdo e banco de questões licenciados.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <CTASection
        title="Quero a plataforma com a minha marca"
        subtitle="Fale com nosso time e veja, na prática, sua instituição rodando uma plataforma completa de avaliação e ENEM."
      />
    </>
  );
}
