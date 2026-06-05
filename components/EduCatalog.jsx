import SectionWrapper from "./SectionWrapper";
import Icon from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const CATEGORIES = [
  {
    icon: "flag",
    title: "Planejamento",
    tools: [
      "Sequência didática",
      "Projeto de vida",
    ],
  },
  {
    icon: "book",
    title: "Preparar aulas",
    tools: [
      "Resumo inteligente",
      "Mapa mental",
      "Resumo de vídeo (YouTube)",
      "Slides com tema visual",
    ],
  },
  {
    icon: "doc",
    title: "Atividades",
    tools: [
      "Lista de exercícios",
      "Questões objetivas e discursivas",
      "Gabarito e habilidade BNCC",
      "Notas pedagógicas de correção",
    ],
  },
  {
    icon: "brush",
    title: "Folhinhas e materiais lúdicos",
    tools: [
      "Imagem para colorir",
      "Caligrafia (cursiva, script, bastão)",
      "Palavras cruzadas e caça-palavras",
      "Ortografia e alfabeto",
      "Complete as lacunas e vocabulário",
      "Matemática básica (9 formatos)",
      "Jogos educativos",
      "Aprendendo Libras",
      "Histórias ilustradas com narração",
    ],
  },
];

export default function EduCatalog() {
  return (
    <SectionWrapper
      eyebrow="Catálogo de ferramentas"
      title="Mais de 20 ferramentas, organizadas para o trabalho do professor"
      subtitle="Da Educação Infantil ao Ensino Médio, cada ferramenta resolve uma frente específica do dia a dia."
    >
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <StaggerItem key={cat.title} className="h-full">
            <div className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-verde-100 text-verde-700">
                <Icon name={cat.icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{cat.title}</h3>
              <ul className="mt-4 space-y-2">
                {cat.tools.map((t) => (
                  <li key={t} className="flex gap-2 text-[14px] leading-snug text-ink">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-verde-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.15} className="mt-8 flex items-center justify-center gap-2 text-[13px] text-slate">
        <Icon name="sparkle" size={16} className="text-amarelo-500" />
        <span>
          Inclui geração com IA, edição em texto rico, exportação em PDF/Word e histórico salvo por professor.
        </span>
      </Reveal>
    </SectionWrapper>
  );
}
