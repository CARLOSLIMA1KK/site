import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import CTASection from "@/components/CTASection";
import { Reveal } from "@/components/Motion";

export const metadata = {
  title: "KodarEdu para Sistemas de Ensino & Editoras",
  description:
    "Embarque a KodarEdu no seu sistema ou material didático com a sua marca: banco de itens, provas e relatórios sob a sua bandeira. White label como produto.",
  alternates: { canonical: "/para/editoras" },
};

const RECURSOS = [
  { title: "White label como produto", text: "Sua marca em toda a experiência, do login ao relatório." },
  { title: "Banco de itens licenciado", text: "Conteúdo e questões sob a sua bandeira." },
  { title: "Provas e simulados", text: "Avaliação completa embarcada no seu material." },
  { title: "Relatórios sob sua marca", text: "Inteligência de dados com a sua identidade." },
  { title: "Modelo de parceria", text: "Licenciamento e recorrência por aluno ativo." },
  { title: "Sem desenvolver do zero", text: "Tecnologia pronta para acelerar seu time-to-market." },
];

export default function ParaEditorasPage() {
  return (
    <>
      <PageHero
        eyebrow="Para Sistemas de Ensino & Editoras"
        title="Embarque a KodarEdu na"
        highlight="sua bandeira."
        subtitle="Ofereça avaliação, banco de itens, provas e relatórios sob a sua marca. White label como produto, com modelo de parceria e licenciamento."
        pills={["White Label", "Licenciamento", "Banco de itens", "API/Integração"]}
        primary={{ label: "Quero ser parceiro", href: "/contato" }}
        secondary={{ label: "Como funciona o white label", href: "/white-label" }}
      />

      <SectionWrapper
        eyebrow="White label como produto"
        title="Sua marca na frente, nossa tecnologia atrás"
        subtitle="Acelere seu portfólio digital com uma plataforma de avaliação madura — sem montar um time de engenharia."
      >
        <FeatureList items={RECURSOS} columns={3} />
      </SectionWrapper>

      <SectionWrapper soft>
        <Reveal className="rounded-lg surface-dark p-8 text-white sm:p-12">
          <h3 className="font-display text-h3 font-bold">Modelo de parceria</h3>
          <p className="mt-3 max-w-2xl text-white/80">
            Trabalhamos com licenciamento recorrente, normalmente por aluno ativo, com a opção de
            conteúdo e banco de questões licenciados. Você embarca a plataforma no seu sistema ou
            material e leva ao mercado sob a sua marca.
          </p>
          <div className="mt-6 max-w-2xl">
            <FeatureList
              columns={2}
              icon="check"
              items={["Recorrência por aluno ativo", "Conteúdo licenciável", "Personalização completa", "Suporte e evolução contínua"]}
            />
          </div>
        </Reveal>
      </SectionWrapper>

      <CTASection
        title="Vamos construir essa parceria?"
        subtitle="Fale com nosso time e desenhe um modelo de white label sob medida para o seu sistema ou editora."
      />
    </>
  );
}
