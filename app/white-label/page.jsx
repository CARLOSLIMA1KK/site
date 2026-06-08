import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import WhiteLabelDemo from "@/components/WhiteLabelDemo";
import FeatureList from "@/components/FeatureList";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "White Label, a plataforma com a cara da sua marca",
  description:
    "Personalize a KodarEdu com seu logo, cores, links e domínio próprio. Plataforma educacional completa e white label, implantada sem precisar de TI.",
  alternates: { canonical: "/white-label" },
};

const PERSONALIZA = [
  { title: "Logo e identidade", text: "Seu logotipo em todas as telas, e-mails e relatórios." },
  { title: "Paleta de cores", text: "A plataforma assume as cores da sua marca por completo." },
  { title: "Domínio próprio", text: "app.suaescola.edu.br, sem qualquer menção à KodarEdu." },
  { title: "Links e menus", text: "Aponte para o seu site, portal do aluno e canais oficiais." },
  { title: "E-mails e certificados", text: "Comunicações e certificados saem com a sua assinatura." },
  { title: "App na sua marca", text: "Opcional: app nas lojas com o nome e ícone da instituição." },
];

const PERSONAS = [
  { title: "Para a direção", text: "Fortalece a marca da instituição e a percepção de inovação junto a pais e alunos.", icon: "shield" },
  { title: "Para o marketing", text: "Um produto digital próprio para captação e retenção, sem desenvolver do zero.", icon: "bolt" },
  { title: "Para a TI", text: "Zero infraestrutura: nuvem, segurança e atualizações por nossa conta.", icon: "chip" },
];

// O que a instituição enxerga × o que a KodarEdu faz acontecer nos bastidores.
const SEES = [
  ["A própria marca em cada tela e e-mail", "Toda a arquitetura tecnológica rodando em nuvem"],
  ["Relatórios com o nome e o logo da escola", "Motor de cálculo TRI calibrado ao ENEM e SAEB"],
  ["Um aplicativo com a identidade da instituição", "Plataforma responsiva, acessível e segura"],
  ["Suporte que atende como extensão da escola", "Equipe técnica e pedagógica disponível 7 dias"],
  ["Resultados que constroem reputação no mercado", "Dados granulares que orientam cada decisão de ensino"],
];

export default function WhiteLabelPage() {
  return (
    <>
      <PageHero
        eyebrow="White Label"
        title="Não é a nossa plataforma."
        highlight="É a sua."
        subtitle="A KodarEdu veste a identidade da sua instituição: cores, logo, links, domínio e até um app próprio. Seus alunos veem a sua marca, e a tecnologia roda nos bastidores."
        pills={["Domínio próprio", "App na sua marca", "Sem TI", "Implantação rápida"]}
        secondary={{ label: "Ver acessos & perfis", href: "/plataforma/acessos" }}
        photo={{
          src: "/assets/photos/white-label-devices.jpg",
          alt: "Notebook, tablet e celular com a plataforma personalizada em cores de marcas diferentes",
        }}
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

      {/* A instituição vê × a KodarEdu faz acontecer */}
      <SectionWrapper
        soft
        eyebrow="Nos bastidores"
        title="A sua marca na frente, a nossa tecnologia por trás"
        subtitle="Para o aluno e o professor, é como se a instituição tivesse construído tudo. Por trás de cada tela, a KodarEdu opera como a espinha dorsal tecnológica, invisível e indispensável."
      >
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-line shadow-card">
            <div className="grid sm:grid-cols-2">
              <div className="bg-verde-100 px-5 py-3.5 font-display text-[15px] font-bold text-verde-900 sm:px-6">
                O que a instituição enxerga
              </div>
              <div className="surface-dark px-5 py-3.5 font-display text-[15px] font-bold text-white sm:px-6">
                O que a KodarEdu faz acontecer
              </div>
            </div>
            {SEES.map(([sees, does]) => (
              <div key={sees} className="grid border-t border-line sm:grid-cols-2">
                <div className="flex items-start gap-2.5 bg-white px-5 py-4 text-[15px] text-ink sm:px-6">
                  <span className="mt-0.5 flex-none text-verde-700"><Icon name="check" size={18} /></span>
                  {sees}
                </div>
                <div className="flex items-start gap-2.5 bg-bg-soft px-5 py-4 text-[15px] text-slate sm:px-6">
                  <span className="mt-0.5 flex-none text-azul-600"><Icon name="chip" size={18} /></span>
                  {does}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionWrapper>

      {/* Benefícios por persona */}
      <SectionWrapper eyebrow="Benefícios" title="Vantagem para cada área da instituição" center>
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
              traz o logo e as cores, e em poucos dias a plataforma está no ar com suporte humano
              dedicado por WhatsApp, inclusive nos fins de semana.
            </p>
            <ul className="mt-5">
              <FeatureList
                columns={1}
                items={["Onboarding guiado", "Migração assistida de dados", "Treinamento da equipe", "Suporte por WhatsApp"]}
              />
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-lg surface-dark p-8 text-white">
            <h3 className="font-display text-h3 font-bold">Para Sistemas de Ensino & Editoras</h3>
            <p className="mt-3 text-white/80">
              Embarque a KodarEdu no seu sistema ou material didático e ofereça avaliação, banco de
              itens e relatórios sob a <strong className="text-white">sua bandeira</strong>. Modelo de
              parceria e licenciamento, inclusive com conteúdo/banco licenciado.
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
        subtitle="Fale com nosso time e veja, na prática, sua instituição rodando uma plataforma educacional completa."
      />
    </>
  );
}
