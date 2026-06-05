import SectionWrapper from "./SectionWrapper";
import Icon from "./Icon";
import Pill from "./Pill";
import MiniCarousel from "./MiniCarousel";
import { Reveal } from "./Motion";

// Para trocar pelos prints reais: substitua os arquivos em
// public/assets/printables/<slug>-1, -2... (ou ajuste os caminhos em `images`).
const ITEMS = [
  {
    icon: "brush",
    eyebrow: "Educação Infantil · Fundamental I",
    title: "Imagem para colorir",
    desc:
      "O professor descreve em linguagem natural e o Edu.IA gera uma ilustração em line art pronta para imprimir e colorir em sala.",
    accent: "verde",
    bullets: [
      "Descrição livre (\"maçã com folhas\", \"casa com cerca\")",
      "Estilo cartoon, alto contraste para impressão",
      "PNG sem fundo, pronto para A4 ou A5",
    ],
    images: [
      "/assets/printables/colorir-1.svg",
      "/assets/printables/colorir-2.svg",
    ],
  },
  {
    icon: "pencil",
    eyebrow: "Alfabetização · Coordenação motora",
    title: "Caligrafia",
    desc:
      "Quatro formatos pedagógicos em um só lugar, com tipo de letra, tamanho da folha e número de linhas configuráveis.",
    accent: "azul",
    bullets: [
      "Cursiva, script ou bastão",
      "Texto, letras com imagens ou pré-alfabetização",
      "Folha pequena, média ou grande · 2 a 10 linhas",
    ],
    images: [
      "/assets/printables/caligrafia-1.svg",
      "/assets/printables/caligrafia-2.svg",
    ],
  },
  {
    icon: "list",
    eyebrow: "Vocabulário · Ortografia · Revisão",
    title: "Cruzadinha & caça-palavras",
    desc:
      "Atividades visuais de vocabulário com palavras sugeridas pela IA a partir do tema da aula, geração local e gabarito incluso.",
    accent: "amarelo",
    bullets: [
      "Palavras + dicas sugeridas por tema",
      "3 níveis (horizontal, + diagonal, + invertidas)",
      "PDF com grade + folha de respostas",
    ],
    images: [
      "/assets/printables/cruzadinha-1.svg",
      "/assets/printables/cruzadinha-2.svg",
    ],
  },
  {
    icon: "chart",
    eyebrow: "Educação Infantil · Anos iniciais",
    title: "Matemática básica",
    desc:
      "Nove formatos diferentes para variar o repertório de exercícios, com controle por operação e nível de dificuldade.",
    accent: "verde",
    bullets: [
      "Operações, frações, relógio, comparação, números faltantes",
      "Soma, subtração, multiplicação e divisão (combináveis)",
      "Dificuldade ajustada (1–10, 1–50, 1–100)",
    ],
    images: [
      "/assets/printables/matematica-1.svg",
      "/assets/printables/matematica-2.svg",
    ],
  },
  {
    icon: "users",
    eyebrow: "Acessibilidade · Educação inclusiva",
    title: "Aprendendo Libras",
    desc:
      "Atividade visual com a palavra, a imagem do objeto e as letras correspondentes em Libras — leva a inclusão para a sala de aula.",
    accent: "azul",
    bullets: [
      "10 temas (animais, cores, números, escola, família…)",
      "Alfabeto de sinais para cada letra da palavra",
      "Atividade de ligar imagem ↔ sinal incluída",
    ],
    images: [
      "/assets/printables/libras-1.svg",
      "/assets/printables/libras-2.svg",
    ],
  },
  {
    icon: "sparkle",
    eyebrow: "Educação Infantil · Letramento literário",
    title: "Histórias ilustradas",
    desc:
      "Livro infantil pedagógico com até 10 páginas, ilustrações geradas pela IA e narração em áudio, criado a partir do tema da aula e do objetivo pedagógico.",
    accent: "amarelo",
    bullets: [
      "Tema, nível escolar, objetivo e tom narrativo",
      "Ilustrações coerentes em todas as páginas",
      "Narração em voz feminina ou masculina (TTS)",
    ],
    images: [
      "/assets/printables/historias-1.jpg",
      "/assets/printables/historias-2.jpg",
      "/assets/printables/historias-3.jpg",
      "/assets/printables/historias-4.jpg",
      "/assets/printables/historias-5.jpg",
      "/assets/printables/historias-6.jpg",
    ],
    carouselFit: "contain",
    autoplay: true,
  },
];

const ACCENT = {
  verde: "bg-verde-100 text-verde-700",
  azul: "bg-[#eaf0ff] text-azul-600",
  amarelo: "bg-[#fff5d6] text-[#8a6a00]",
};

function PrintableRow({ item, reverse }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal className={reverse ? "lg:order-2" : undefined}>
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-md ${ACCENT[item.accent]}`}>
          <Icon name={item.icon} size={24} />
        </span>
        {item.eyebrow && (
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-wider text-slate">
            {item.eyebrow}
          </p>
        )}
        <h3 className="mt-1.5 font-display text-h3 font-extrabold leading-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate">
          {item.desc}
        </p>
        {item.bullets && (
          <ul className="mt-5 space-y-2">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-[14px] leading-snug text-ink">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-verde-100 text-verde-700">
                  <Icon name="check" size={13} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
      <Reveal delay={0.1} className={reverse ? "lg:order-1" : undefined}>
        <MiniCarousel
          images={item.images}
          alt={item.title}
          fit={item.carouselFit}
          autoplay={item.autoplay}
        />
      </Reveal>
    </div>
  );
}

export default function EduPrintables() {
  return (
    <SectionWrapper
      soft
      eyebrow="Materiais imprimíveis"
      title="Folhinhas prontas em segundos, prontas para imprimir"
      subtitle="Recursos visuais e lúdicos para Educação Infantil e Fundamental, com geração local quando possível (sem custo de IA e sem latência)."
    >
      <div className="space-y-16 lg:space-y-24">
        {ITEMS.map((item, idx) => (
          <PrintableRow key={item.title} item={item} reverse={idx % 2 === 1} />
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-2 text-center">
        <Pill tone="verde">Educação Infantil</Pill>
        <Pill tone="azul">Fundamental I</Pill>
        <Pill tone="outline">Fundamental II</Pill>
      </div>
    </SectionWrapper>
  );
}
