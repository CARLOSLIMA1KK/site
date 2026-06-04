import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import Pill from "@/components/Pill";
import CTASection from "@/components/CTASection";
import { Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Conteúdo",
  description:
    "Artigos sobre ENEM, redação, TRI, avaliação adaptativa (CAT), gestão escolar, SAEB e white label. O blog da KodarEdu para gestores e professores.",
  alternates: { canonical: "/conteudo" },
};

const POSTS = [
  { title: "O que é TRI e por que ela importa para o ENEM", cat: "TRI", read: "6 min" },
  { title: "Como dar feedback de redação que faz o aluno evoluir", cat: "Redação", read: "5 min" },
  { title: "Avaliação adaptativa (CAT): medir mais em menos tempo", cat: "Adaptativa", read: "7 min" },
  { title: "SAEB na prática: do diagnóstico à ação na rede", cat: "SAEB", read: "8 min" },
  { title: "White label na educação: a marca é da escola", cat: "White Label", read: "4 min" },
  { title: "Gestão escolar orientada por dados: por onde começar", cat: "Gestão", read: "6 min" },
];

export default function ConteudoPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdo"
        title="Ideias para avaliar e"
        highlight="ensinar melhor."
        subtitle="Artigos sobre ENEM, redação, TRI, avaliação adaptativa, SAEB, gestão escolar e white label — para gestores e professores. (Conteúdo ilustrativo.)"
        pills={["ENEM", "Redação", "TRI", "Gestão"]}
      />

      <SectionWrapper>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <a href="#" className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition hover:-translate-y-1 hover:shadow-pop">
                <div className="dot-grid flex h-40 items-center justify-center bg-verde-100">
                  <span className="font-display text-2xl font-extrabold text-verde-700/40">KodarEdu</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <Pill tone="verde">{p.cat}</Pill>
                    <span className="text-xs text-slate">{p.read}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">{p.title}</h3>
                  <span className="mt-auto pt-4 text-sm font-semibold text-verde-700">Ler artigo →</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <CTASection
        title="Quer levar isso para a prática?"
        subtitle="Veja como a KodarEdu aplica essas ideias na avaliação da sua escola."
      />
    </>
  );
}
