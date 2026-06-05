import SectionWrapper from "../SectionWrapper";
import FeatureList from "../FeatureList";
import Icon from "../Icon";
import { Stagger, StaggerItem } from "../Motion";

const DIGITAL = [
  { title: "Cronômetro e controle de tempo", text: "Tempo definido por avaliação, com salvamento automático.", icon: "clock" },
  { title: "Acompanhamento em tempo real", text: "Veja quem está fazendo e o progresso, ao vivo.", icon: "chart" },
  { title: "Cronograma e janelas de aplicação", text: "Agende a abertura e o fechamento do simulado.", icon: "flag" },
  { title: "Correção e nota na hora", text: "Resultado por TRI assim que o aluno finaliza.", icon: "bolt" },
  { title: "Antifraude", text: "Questões e alternativas embaralhadas, modo tela cheia.", icon: "shield" },
  { title: "Qualquer dispositivo", text: "Computador, tablet ou celular, sem instalar nada.", icon: "chip" },
];

const IMPRESSA = [
  { title: "Diagramação profissional", text: "Prova bem formatada, pronta para imprimir.", icon: "doc" },
  { title: "Folha de respostas padronizada", text: "Gabarito óptico (OMR) para leitura automática.", icon: "list" },
  { title: "Malote para impressão", text: "Geração automática do lote por turma.", icon: "layers" },
  { title: "Logística de envio e retorno", text: "Organização da distribuição e da coleta.", icon: "network" },
  { title: "Coleta automatizada pelo leitor OMR", text: "Os gabaritos são lidos por scanner ou pela câmera.", icon: "camera" },
  { title: "Correção sem digitar", text: "Notas e relatórios consolidados na hora.", icon: "check" },
];

function Coluna({ icon, tone, kicker, title, img, alt, items }) {
  return (
    <StaggerItem className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt} loading="lazy" className="aspect-[16/10] w-full border-b border-line bg-bg-soft object-cover object-top" />
        <div className="flex flex-1 flex-col p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className={`flex h-12 w-12 items-center justify-center rounded-md ${tone}`}>
              <Icon name={icon} size={24} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate">{kicker}</p>
              <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
            </div>
          </div>
          <FeatureList columns={1} items={items} />
        </div>
      </div>
    </StaggerItem>
  );
}

// Seção reutilizável: como aplicar (digital x impresso).
export default function AplicacaoSection({ soft = false }) {
  return (
    <SectionWrapper
      soft={soft}
      eyebrow="Como aplicar"
      title="Digital ou impresso, do seu jeito"
      subtitle="Aplique o simulado online, com controle total, ou no papel, com toda a logística e a leitura automática dos gabaritos."
    >
      <Stagger className="grid gap-6 lg:grid-cols-2">
        <Coluna
          icon="chip"
          tone="bg-azul-100 text-azul-600"
          kicker="Online"
          title="Aplicação Digital"
          img="/assets/prints/aplicacao-digital.svg"
          alt="Simulado online com cronômetro e acompanhamento ao vivo"
          items={DIGITAL}
        />
        <Coluna
          icon="book"
          tone="bg-verde-100 text-verde-700"
          kicker="Papel"
          title="Aplicação Impressa"
          img="/assets/prints/aplicacao-impressa.svg"
          alt="Aplicação impressa com caderno, folha de respostas, malote e leitor OMR"
          items={IMPRESSA}
        />
      </Stagger>
    </SectionWrapper>
  );
}
