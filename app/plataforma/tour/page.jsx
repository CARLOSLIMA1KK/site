import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import Tabs from "@/components/Tabs";
import MockupFrame from "@/components/MockupFrame";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Tour pela Plataforma",
  description:
    "Conheça a KodarEdu por dentro: telas do aluno, do professor/corretor e da coordenação/gestão, cada uma com seu benefício.",
  alternates: { canonical: "/plataforma/tour" },
};

const GALLERY = {
  Aluno: [
    { src: "/assets/prints/simulado-andamento.svg", title: "Simulado em andamento", text: "Interface limpa e focada para o aluno fazer a prova." },
    { src: "/assets/prints/adaptativa-trilha.svg", title: "Trilha de estudo", text: "Recomendações personalizadas a partir dos resultados." },
    { src: "/assets/prints/app-mobile.svg", title: "App no celular", text: "Estudar e acompanhar a evolução de onde estiver.", type: "mobile" },
  ],
  "Professor / Corretor": [
    { src: "/assets/prints/editor-prova.svg", title: "Editor de prova", text: "Monte provas com banco de questões e IA." },
    { src: "/assets/prints/redacao-correcao.svg", title: "Correção de redação", text: "Marcações no texto e nota por competência." },
    { src: "/assets/prints/correcao-automatica.svg", title: "Correção automática", text: "Leitor de gabarito e correção sem trabalho manual." },
  ],
  "Coordenação / Gestor": [
    { src: "/assets/prints/relatorio-gestor.svg", title: "Dashboard do gestor", text: "Indicadores-chave da instituição em uma tela." },
    { src: "/assets/prints/relatorio-turma.svg", title: "Relatório de turma", text: "Comparativos e ranking por turma." },
    { src: "/assets/prints/relatorio-habilidade.svg", title: "Evolução por habilidade", text: "Onde reforçar, com base em dados." },
  ],
};

function Gallery({ items }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {items.map((it) => (
        <figure key={it.title}>
          <MockupFrame src={it.src} alt={it.title} type={it.type} label={it.type ? undefined : it.title} />
          <figcaption className="mt-4">
            <h3 className="font-display text-lg font-bold text-ink">{it.title}</h3>
            <p className="mt-1 text-[15px] text-slate">{it.text}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function TourPage() {
  const tabs = Object.entries(GALLERY).map(([label, items]) => ({
    label,
    content: <Gallery items={items} />,
  }));

  return (
    <>
      <PageHero
        eyebrow="Tour pela Plataforma"
        title="A KodarEdu"
        highlight="por dentro."
        subtitle="Navegue pelas telas por perfil e veja, na prática, como cada usuário usa a plataforma no dia a dia."
        pills={["Aluno", "Professor", "Gestor"]}
        secondary={{ label: "Ver relatórios", href: "/plataforma/relatorios" }}
      />

      <SectionWrapper eyebrow="Galeria guiada" title="Escolha um perfil e explore">
        <Tabs tabs={tabs} />
      </SectionWrapper>

      <CTASection
        title="Quero ver a KodarEdu com os meus dados"
        subtitle="Agende uma demonstração e navegue pela plataforma com a marca da sua instituição."
      />
    </>
  );
}
