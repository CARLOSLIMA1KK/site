import PageHero from "./PageHero";
import SectionWrapper from "./SectionWrapper";
import FeatureList from "./FeatureList";
import MockupFrame from "./MockupFrame";
import Pill from "./Pill";
import CTASection from "./CTASection";
import { Reveal, Stagger, StaggerItem } from "./Motion";

// Template de página de solução, dirigido por dados (lib/solutions.js).
export default function SolutionPage({ data }) {
  const { hero, features, split, benefits, cta } = data;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
        pills={hero.pills}
        secondary={hero.secondary}
        mockup={hero.mockup}
      />

      {features && (
        <SectionWrapper eyebrow="Recursos" title={features.title}>
          <FeatureList items={features.items} columns={3} />
        </SectionWrapper>
      )}

      {split && (
        <SectionWrapper soft eyebrow={split.eyebrow} title={split.title}>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-lg leading-relaxed text-slate">{split.text}</p>
              {split.items && (
                <div className="mt-6">
                  <FeatureList columns={1} items={split.items} />
                </div>
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <MockupFrame src={split.mockup.src} alt={split.mockup.alt} label={split.mockup.label} />
            </Reveal>
          </div>
        </SectionWrapper>
      )}

      {benefits && (
        <SectionWrapper eyebrow="Benefícios" title={benefits.title} center>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {benefits.items.map(([who, text]) => (
              <StaggerItem key={who} className="h-full">
                <div className="h-full rounded-lg border border-line bg-white p-7 shadow-card">
                  <Pill tone="azul">{who}</Pill>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </SectionWrapper>
      )}

      <CTASection title={cta?.title} subtitle={cta?.subtitle} />
    </>
  );
}
