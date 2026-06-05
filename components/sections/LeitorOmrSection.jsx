import SectionWrapper from "../SectionWrapper";
import FeatureList from "../FeatureList";
import { Reveal } from "../Motion";

const LEITOR = [
  { title: "Identificação automática do aluno", text: "A plataforma reconhece quem é, sem digitar nome.", icon: "users" },
  { title: "Extração rápida das respostas", text: "Leitura óptica (OMR) das marcações em segundos.", icon: "bolt" },
  { title: "Scanner por lote da turma", text: "Passe a pilha de folhas de uma vez só.", icon: "layers" },
  { title: "App com a câmera do celular", text: "Fotografe a folha e corrija na hora, sem scanner.", icon: "camera" },
  { title: "Correção no ato", text: "Notas e gabarito prontos assim que a folha é lida.", icon: "clock" },
];

// Seção reutilizável: Leitor de gabarito / OMR / IA.
export default function LeitorOmrSection({ soft = true }) {
  return (
    <SectionWrapper soft={soft} eyebrow="Leitor, OMR e IA" title="Corrigir a turma inteira em minutos">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate">
            O aluno responde na folha de gabarito e a KodarEdu cuida do resto. A leitura óptica (OMR)
            identifica o aluno automaticamente e extrai as respostas. Você escaneia a turma por lote ou
            usa o aplicativo com a câmera do celular. A correção sai na hora.
          </p>
          <div className="mt-6">
            <FeatureList columns={1} items={LEITOR} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/photos/provas-omr-real.jpg"
            alt="Mãos segurando folha de gabarito enquanto o celular escaneia as respostas pelo app"
            loading="lazy"
            className="aspect-square w-full rounded-lg border border-line object-cover shadow-pop"
          />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
