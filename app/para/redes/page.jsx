import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Pill from "@/components/Pill";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "KodarEdu para Redes de Ensino & Secretarias",
  description:
    "Gestão multiunidade centralizada, indicadores SAEB e benchmark nacional, conformidade com LGPD/BNCC e capacitação de professores. Plataforma white label para redes.",
  alternates: { canonical: "/para/redes" },
};

const RECURSOS = [
  { title: "Gestão multiunidade", text: "Visão centralizada de todas as escolas da rede." },
  { title: "Indicadores SAEB", text: "Diagnóstico alinhado à BNCC com benchmark nacional." },
  { title: "Conformidade", text: "Tratamento de dados conforme a LGPD e a BNCC." },
  { title: "Capacitação de professores", text: "Formação apoiada pelos dados da plataforma." },
  { title: "Escala e segurança", text: "Infraestrutura em nuvem com alta disponibilidade." },
  { title: "Impacto social", text: "Educação pública orientada por evidências." },
];

export default function ParaRedesPage() {
  return (
    <>
      <PageHero
        eyebrow="Para Redes de Ensino & Secretarias"
        title="Gestão da rede inteira,"
        highlight="orientada por dados."
        subtitle="Centralize avaliações e indicadores de todas as unidades, acompanhe o SAEB com benchmark nacional e tome decisões de política pública com evidências."
        pills={["Multiunidade", "SAEB", "LGPD", "Benchmark nacional"]}
        primary={{ label: "Falar com o time", href: "/contato" }}
        secondary={{ label: "Ver relatórios", href: "/plataforma/relatorios" }}
      />

      <SectionWrapper
        eyebrow="Para a gestão pública e privada"
        title="Escala, conformidade e impacto"
        subtitle="Uma plataforma pensada para a complexidade de redes e secretarias, sem abrir mão da simplicidade de uso."
      >
        <FeatureList items={RECURSOS} columns={3} />
      </SectionWrapper>

      <SectionWrapper soft>
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-1 rounded-lg bg-verde-900 p-8 text-white">
            <Pill tone="light">Negócio de impacto</Pill>
            <h3 className="mt-4 font-display text-h3 font-bold">Educação com evidências</h3>
            <p className="mt-3 text-white/80">
              Apoiamos secretarias a transformar dados de avaliação em decisões que melhoram a
              aprendizagem em toda a rede.
            </p>
          </Reveal>
          <Stagger className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {[
              ["Visão consolidada", "Compare unidades e acompanhe a evolução da rede."],
              ["Antecipe o oficial", "Réguas SAEB por TRI para previsibilidade real."],
              ["Formação direcionada", "Capacite professores onde os dados apontam."],
              ["Implantação assistida", "Suporte dedicado em toda a rede, sem TI local."],
            ].map(([t, d]) => (
              <StaggerItem key={t} className="h-full">
                <div className="h-full rounded-lg border border-line bg-white p-6 shadow-card">
                  <h4 className="font-display text-lg font-bold text-ink">{t}</h4>
                  <p className="mt-1 text-[15px] text-slate">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </SectionWrapper>

      <CTASection
        title="Quero a KodarEdu na minha rede"
        subtitle="Converse com nosso time sobre uma implementação multiunidade sob medida para a sua secretaria ou rede."
      />
    </>
  );
}
