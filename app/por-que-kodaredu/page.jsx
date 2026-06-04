import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { Reveal } from "@/components/Motion";
import { DIFFERENTIATORS } from "@/lib/site";

export const metadata = {
  title: "Por que a KodarEdu",
  description:
    "Tudo em uma só plataforma white label: simulados TRI, redação com IA, banco de questões, adaptativa e relatórios. Veja por que a KodarEdu é diferente.",
  alternates: { canonical: "/por-que-kodaredu" },
};

const COMPARISON = [
  ["White label de verdade (cores, logo, links, domínio, app)", true, false],
  ["Simulados ENEM/SAEB com TRI na régua oficial", true, false],
  ["Redação com IA + especialista humano", true, false],
  ["Banco de questões autoral com criação por IA", true, false],
  ["Plataforma adaptativa (CAT) e trilhas", true, false],
  ["Relatórios por competência e habilidade", true, true],
  ["Online, impresso e híbrido", true, false],
  ["Implantação sem TI + suporte humano (WhatsApp)", true, false],
  ["Integração com ERP escolar", true, false],
];

export default function PorQuePage() {
  return (
    <>
      <PageHero
        eyebrow="Diferenciais"
        title="Por que a"
        highlight="KodarEdu?"
        subtitle="Reunimos em uma só plataforma white label o melhor das principais soluções de avaliação do mercado — e fomos além."
        pills={["Tudo em uma", "White Label", "IA + humano", "TRI"]}
      />

      <SectionWrapper eyebrow="O que nos torna diferentes" title="Diferenciais que viram benefício">
        <FeatureList items={DIFFERENTIATORS} columns={2} />
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Comparativo" title="KodarEdu vs. plataforma comum">
        <Reveal className="overflow-x-auto rounded-lg border border-line bg-white shadow-card">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-bg-soft">
                <th className="px-5 py-4 font-semibold text-ink">Recurso</th>
                <th className="px-5 py-4 text-center font-semibold text-verde-700">KodarEdu</th>
                <th className="px-5 py-4 text-center font-semibold text-slate">Plataforma comum</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([label, k, c]) => (
                <tr key={label} className="border-b border-line last:border-0">
                  <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                  <td className="px-5 py-3.5 text-center">
                    <Mark on={k} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Mark on={c} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-4 text-sm text-slate">Comparativo ilustrativo, sem citar marcas específicas.</p>
      </SectionWrapper>

      <CTASection />
    </>
  );
}

function Mark({ on }) {
  return on ? (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-verde-100 text-verde-600" aria-label="Sim">
      <Icon name="check" size={16} />
    </span>
  ) : (
    <span className="text-line" aria-label="Não">—</span>
  );
}
