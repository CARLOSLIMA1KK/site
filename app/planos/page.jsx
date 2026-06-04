import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Pill from "@/components/Pill";
import { Reveal } from "@/components/Motion";
import { PLANS, PLANS_FAQ, SITE } from "@/lib/site";

export const metadata = {
  title: "Planos & Preços",
  description:
    "Três planos white label — Essencial, Profissional e Redes/Enterprise. IA, simulados TRI, redação e relatórios, com garantia de 30 dias e implantação sem TI.",
  alternates: { canonical: "/planos" },
};

export default function PlanosPage() {
  return (
    <>
      <PageHero
        eyebrow="Planos & Preços"
        title="Do essencial ao enterprise —"
        highlight="sempre white label."
        subtitle="Escolha o plano que acompanha o momento da sua instituição. Todos rodam com a sua marca, com garantia de 30 dias e implantação sem precisar de TI."
        pills={["White Label", "Garantia de 30 dias", "Sem TI"]}
        primary={{ label: "Solicitar proposta", href: "/contato" }}
        secondary={{ label: "Falar com especialista", href: SITE.whatsapp, external: true }}
      />

      <SectionWrapper>
        <PricingTable plans={PLANS} />
        <Reveal className="mt-8 text-center">
          <p className="text-sm text-slate">
            Preços sob consulta conforme o número de alunos. Cobrança recorrente com nota fiscal.
          </p>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Cobrança & implantação" title="Perguntas sobre planos" center>
        <FAQ items={PLANS_FAQ} />
        <Reveal className="mt-8 flex justify-center">
          <Pill tone="verde">✦ Garantia de 30 dias em todos os planos</Pill>
        </Reveal>
      </SectionWrapper>

      <CTASection
        title="Pronto para escolher seu plano?"
        subtitle="Fale com um especialista e receba uma proposta sob medida para a sua escola ou rede."
      />
    </>
  );
}
