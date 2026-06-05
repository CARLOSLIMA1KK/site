import SectionWrapper from "@/components/SectionWrapper";
import QualifierForm from "@/components/QualifierForm";
import FeatureList from "@/components/FeatureList";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Motion";

export const metadata = {
  title: "Quero a KodarEdu na minha instituição",
  description:
    "Fale com um especialista da KodarEdu. Receba uma proposta sob medida de plataforma educacional completa e white label para a sua instituição ou rede.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <SectionWrapper>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <span className="eyebrow">Contato</span>
          <h1 className="mt-4 font-display text-display font-extrabold leading-[1.05] text-ink">
            Quero a KodarEdu <span className="text-verde-700">na minha instituição</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
            Conte um pouco sobre a sua instituição e um especialista entra em contato com uma proposta
            sob medida, incluindo a personalização da sua marca.
          </p>
          <div className="mt-8">
            <FeatureList
              columns={1}
              items={[
                "Demonstração com dados de exemplo",
                "Proposta sob medida por nº de alunos",
                "Implantação sem TI, em poucos dias",
                "Garantia de 30 dias",
              ]}
            />
          </div>
          <div className="mt-8 rounded-lg border border-line bg-bg-soft p-6">
            <p className="font-semibold text-ink">Prefere conversar agora?</p>
            <p className="mt-1 text-[15px] text-slate">Fale com nosso time pelo WhatsApp, inclusive nos fins de semana.</p>
            <div className="mt-4">
              <Button href={SITE.whatsapp} external variant="secondary">{SITE.whatsappLabel}</Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <QualifierForm />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
