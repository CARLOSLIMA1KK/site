import SectionWrapper from "./SectionWrapper";
import Icon from "./Icon";
import { Stagger, StaggerItem } from "./Motion";

const ITEMS = [
  {
    icon: "layers",
    title: "Meus Materiais",
    desc:
      "Tudo que o professor gera fica salvo, com filtros por tipo, disciplina e ano. Buscar, duplicar para outra turma e editar depois.",
  },
  {
    icon: "book",
    title: "Minhas Aulas",
    desc:
      "Agrupe materiais em aulas estruturadas, com nome, disciplina e ano. Reaproveite a mesma aula em várias turmas com um clique.",
  },
  {
    icon: "doc",
    title: "Editor + multi-export",
    desc:
      "Refine o conteúdo gerado em editor de texto rico e exporte em PDF, Word ou Markdown na hora.",
  },
];

export default function EduOrganization() {
  return (
    <SectionWrapper
      eyebrow="Mais que gerar"
      title="Organize, edite e exporte sem sair do Edu.IA"
      subtitle="A IA acelera, o professor mantém o controle. Tudo o que é criado fica salvo, editável e reaproveitável."
    >
      <Stagger className="grid gap-6 md:grid-cols-3">
        {ITEMS.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <div className="flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-card">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-verde-100 text-verde-700">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
