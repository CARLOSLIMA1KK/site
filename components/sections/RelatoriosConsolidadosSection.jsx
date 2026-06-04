import SectionWrapper from "../SectionWrapper";
import FeatureList from "../FeatureList";
import MockupFrame from "../MockupFrame";
import { Reveal } from "../Motion";

const RELATORIOS = [
  { title: "Consolidação automática", text: "Resultados reunidos assim que a turma é lida.", icon: "layers" },
  { title: "Por aluno, turma e questão", text: "Veja onde a turma acerta e onde precisa reforçar.", icon: "chart" },
  { title: "Exportação rápida", text: "Baixe em PDF ou planilha em um clique.", icon: "doc" },
  { title: "Integração com o ERP", text: "Lançamento de notas sem retrabalho.", icon: "chip" },
];

// Seção reutilizável: relatórios consolidados na hora (mockup à esquerda).
export default function RelatoriosConsolidadosSection({ soft = false }) {
  return (
    <SectionWrapper soft={soft} eyebrow="Relatórios" title="Resultados consolidados na hora">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="lg:order-2">
          <p className="text-lg leading-relaxed text-slate">
            Assim que a turma é lida, os dados se consolidam sozinhos. Em poucos segundos você tem o
            desempenho por aluno, por turma e por questão, pronto para exportar e já integrado ao ERP da
            escola.
          </p>
          <div className="mt-6">
            <FeatureList columns={1} items={RELATORIOS} />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:order-1">
          <MockupFrame
            src="/assets/prints/secao-relatorios.svg"
            alt="Painel de relatórios consolidados por aluno, turma e questão"
            label="Relatórios consolidados"
          />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
