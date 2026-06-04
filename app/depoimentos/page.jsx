import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import LogoWall from "@/components/LogoWall";
import CTASection from "@/components/CTASection";
import { Stagger, StaggerItem } from "@/components/Motion";
import { PARTNER_LOGOS } from "@/lib/site";

export const metadata = {
  title: "Cases & Depoimentos",
  description:
    "O que coordenadores, diretores e professores dizem sobre a KodarEdu. Depoimentos reais de escolas, cursinhos e redes parceiras.",
  alternates: { canonical: "/depoimentos" },
};

const TESTIMONIALS = [
  { quote: "Organizamos toda a jornada avaliativa e os alunos passaram a enxergar a evolução real no ENEM. Tudo com a cara do nosso colégio.", name: "Marina Alves", role: "Coordenadora pedagógica · Colégio Aurora", initials: "MA" },
  { quote: "A correção automática devolveu horas aos professores. O que era um gargalo virou rotina simples.", name: "Ricardo Campos", role: "Diretor · Colégio Patativa", initials: "RC" },
  { quote: "Conseguimos comparar o desempenho entre as unidades da rede pela primeira vez. A gestão ficou orientada por dados.", name: "Helena Souza", role: "Secretária de Educação · Rede Horizonte", initials: "HS" },
  { quote: "A redação com IA + especialista deu consistência ao feedback em todas as turmas. Os alunos evoluíram visivelmente.", name: "Paulo Nantes", role: "Professor de redação · Pré-Vest Nação", initials: "PN" },
  { quote: "Implantação rápida e suporte de verdade pelo WhatsApp, inclusive no fim de semana. Fez diferença.", name: "Beatriz Lima", role: "Coordenadora · Instituto Cedro", initials: "BL" },
  { quote: "Os simulados por TRI anteciparam a nota do ENEM com uma precisão que impressionou nossa equipe.", name: "André Tavares", role: "Gestor · Sistema Aprova", initials: "AT" },
];

export default function DepoimentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases & Depoimentos"
        title="Quem usa,"
        highlight="recomenda."
        subtitle="Coordenadores, diretores e professores contam como a KodarEdu transformou a avaliação em suas instituições."
        pills={["Escolas", "Cursinhos", "Redes"]}
        secondary={{ label: "Ver resultados em números", href: "/resultados" }}
      />

      <SectionWrapper>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-card">
                <div className="text-4xl leading-none text-verde-500" aria-hidden="true">“</div>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-ink">{t.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-verde-100 font-display font-bold text-verde-700">{t.initials}</span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-slate">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      <SectionWrapper soft>
        <LogoWall logos={PARTNER_LOGOS} title="Instituições parceiras" />
      </SectionWrapper>

      <CTASection />
    </>
  );
}
