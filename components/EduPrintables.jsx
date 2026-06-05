import SectionWrapper from "./SectionWrapper";
import Icon from "./Icon";
import Pill from "./Pill";
import MiniCarousel from "./MiniCarousel";
import { Stagger, StaggerItem } from "./Motion";

// Para trocar pelos prints reais: substitua os arquivos em
// public/assets/printables/<slug>-1 e -2 (ou ajuste os caminhos em `images`).
const ITEMS = [
  {
    icon: "brush",
    title: "Imagem para colorir",
    desc: "Line art gerado a partir da sua descrição.",
    accent: "verde",
    images: ["/assets/printables/colorir-1.svg", "/assets/printables/colorir-2.svg"],
  },
  {
    icon: "pencil",
    title: "Caligrafia",
    desc: "Cursiva, script ou bastão · com texto, imagens ou pré-alfabetização.",
    accent: "azul",
    images: ["/assets/printables/caligrafia-1.svg", "/assets/printables/caligrafia-2.svg"],
  },
  {
    icon: "list",
    title: "Cruzadinha & caça-palavras",
    desc: "Palavras sugeridas por IA, gabarito incluso.",
    accent: "amarelo",
    images: ["/assets/printables/cruzadinha-1.svg", "/assets/printables/cruzadinha-2.svg"],
  },
  {
    icon: "chart",
    title: "Matemática básica",
    desc: "9 formatos: operações, frações, relógio, comparação.",
    accent: "verde",
    images: ["/assets/printables/matematica-1.svg", "/assets/printables/matematica-2.svg"],
  },
  {
    icon: "users",
    title: "Aprendendo Libras",
    desc: "Palavra + alfabeto de sinais. Educação inclusiva por padrão.",
    accent: "azul",
    images: ["/assets/printables/libras-1.svg", "/assets/printables/libras-2.svg"],
  },
  {
    icon: "sparkle",
    title: "Histórias ilustradas",
    desc: "Livro com várias páginas, imagens e narração em áudio.",
    accent: "amarelo",
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

export default function EduPrintables() {
  return (
    <SectionWrapper
      soft
      eyebrow="Materiais imprimíveis"
      title="Folhinhas prontas em segundos, prontas para imprimir"
      subtitle="Recursos visuais e lúdicos para Educação Infantil e Fundamental, com geração local quando possível (sem custo de IA e sem latência)."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <div className="flex h-full flex-col rounded-lg border border-line bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-pop">
              <MiniCarousel
                images={item.images}
                alt={item.title}
                fit={item.carouselFit}
                autoplay={item.autoplay}
              />
              <div className="mt-4 flex items-center gap-3">
                <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${ACCENT[item.accent]}`}>
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-slate">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center">
        <Pill tone="verde">Educação Infantil</Pill>
        <Pill tone="azul">Fundamental I</Pill>
        <Pill tone="outline">Fundamental II</Pill>
      </div>
    </SectionWrapper>
  );
}
