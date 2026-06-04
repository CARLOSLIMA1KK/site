import Link from "next/link";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import SectionWrapper from "@/components/SectionWrapper";
import StatBand from "@/components/StatBand";
import LogoWall from "@/components/LogoWall";
import MockupFrame from "@/components/MockupFrame";
import WhiteLabelDemo from "@/components/WhiteLabelDemo";
import FreeToolCTA from "@/components/FreeToolCTA";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  SITE,
  STATS,
  JOURNEY,
  FEATURED_SOLUTIONS,
  PILLARS,
  AUDIENCES,
  FAQ_HOME,
  PARTNER_LOGOS,
} from "@/lib/site";

const SEALS = ["White Label", "IA", "TRI", "LGPD", "Acessível"];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Prova social — LogoWall */}
      <section className="border-y border-line bg-white py-12">
        <div className="container-page">
          <LogoWall logos={PARTNER_LOGOS} title="Escolas e redes que já têm a sua plataforma" />
        </div>
      </section>

      {/* Impacto */}
      <StatBand
        stats={STATS}
        title="Autoridade que vira resultado"
        subtitle="Dados precisos, presença nacional e a confiança de instituições que querem estar entre as melhores."
      />

      {/* Jornada avaliativa em 4 passos */}
      <SectionWrapper
        soft
        eyebrow="Ciclo avaliativo completo"
        title="Da criação à decisão pedagógica, em uma só plataforma"
        subtitle="A KodarEdu cuida de toda a jornada avaliativa — com IA onde acelera e especialista humano onde importa."
      >
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((j) => (
            <StaggerItem key={j.step}>
              <div className="h-full rounded-lg border border-line bg-white p-6 shadow-card">
                <span className="font-display text-3xl font-extrabold text-verde-100">{j.step}</span>
                <h3 className="-mt-2 font-display text-xl font-bold text-ink">{j.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{j.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Soluções em destaque */}
      <SectionWrapper
        eyebrow="Soluções"
        title="Tudo o que sua escola precisa — reunido"
        subtitle="Simulados por TRI, redação com IA, banco de questões, plataforma adaptativa e relatórios. O melhor das melhores plataformas, em uma marca: a sua."
      >
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SOLUTIONS.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <Card
                title={s.title}
                text={s.text}
                href={s.href}
                tag={s.tag}
                image={s.print}
                imageAlt={`Prévia: ${s.title}`}
              />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full">
            <Link
              href="/solucoes"
              className="flex h-full flex-col justify-center rounded-lg border-2 border-dashed border-verde-500/40 bg-verde-100/40 p-6 text-center transition hover:border-verde-500"
            >
              <span className="font-display text-xl font-bold text-verde-900">Ver todas as soluções</span>
              <span className="mt-1 text-sm text-slate">Avaliação · Conteúdo · Gestão</span>
            </Link>
          </StaggerItem>
        </Stagger>
      </SectionWrapper>

      {/* White Label em destaque */}
      <SectionWrapper soft eyebrow="White Label" title="A cara da sua marca — de verdade">
        <Reveal>
          <WhiteLabelDemo />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <Button href="/white-label" variant="secondary" arrow>
            Conhecer a personalização
          </Button>
        </Reveal>
      </SectionWrapper>

      {/* 3 pilares de autoridade */}
      <SectionWrapper
        eyebrow="Por que confiar"
        title="Três pilares que sustentam cada avaliação"
        center
      >
        <Stagger className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="h-full rounded-lg border border-line bg-white p-7 text-center shadow-card">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-verde-100 text-verde-700">
                  <Icon name={p.icon} size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Para quem */}
      <SectionWrapper soft eyebrow="Para quem" title="Feita para cada etapa da educação">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <StaggerItem key={a.title} className="h-full">
              <Link
                href={a.href}
                className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-pop"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-azul-100 text-azul-600">
                  <Icon name={a.icon} size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">{a.text}</p>
                <span className="mt-auto pt-4 text-sm font-semibold text-verde-700">Ver detalhes →</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Depoimento + case */}
      <Testimonial />

      {/* KodarEdu Labs — captação */}
      <FreeToolCTA />

      {/* FAQ */}
      <SectionWrapper eyebrow="Dúvidas frequentes" title="Perguntas que toda escola faz" center>
        <FAQ items={FAQ_HOME} />
      </SectionWrapper>

      {/* CTA final */}
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-verde-100 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-azul-100/70 blur-3xl" aria-hidden="true" />

      <div className="container-page relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <Pill tone="verde">
              <span className="h-1.5 w-1.5 rounded-full bg-verde-500" /> Plataforma educacional white label
            </Pill>
            <h1 className="mt-5 font-display text-display font-extrabold text-ink">
              A plataforma de avaliação e ENEM da sua escola.{" "}
              <span className="text-verde-700">Com a sua marca.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Simulados por TRI, redação com IA + especialista, banco de questões e relatórios de
              inteligência de dados — tudo white label, sem precisar de equipe de TI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={SITE.ctaPrimaryHref} variant="primary" size="lg" arrow>
                {SITE.ctaPrimary}
              </Button>
              <Button href="/plataforma" variant="secondary" size="lg">
                Conhecer a plataforma
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {SEALS.map((s) => (
                <Pill key={s} tone="outline">
                  {s}
                </Pill>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:160ms]">
            <MockupFrame
              src="/assets/prints/relatorio-gestor.svg"
              alt="Painel de relatórios da KodarEdu com indicadores de desempenho"
              label="app.suaescola.edu.br"
            />
            <div className="absolute -bottom-6 -left-4 hidden w-44 sm:block">
              <MockupFrame
                src="/assets/prints/app-mobile.svg"
                alt="App da plataforma no celular, com a marca da escola"
                type="mobile"
                placeholder={false}
                className="!w-44"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <figure className="rounded-lg border border-line bg-white p-8 shadow-card">
            <div className="text-5xl leading-none text-verde-500" aria-hidden="true">
              “
            </div>
            <blockquote className="font-display text-2xl font-semibold leading-snug text-ink">
              Em um ano, organizamos toda a jornada avaliativa e nossos alunos passaram a enxergar a
              evolução real no ENEM. E tudo com a cara do nosso colégio.
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-verde-100 font-display font-bold text-verde-700">
                MA
              </span>
              <span>
                <span className="block font-semibold text-ink">Marina Alves</span>
                <span className="block text-sm text-slate">Coordenadora pedagógica · Colégio Aurora</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg bg-verde-900 p-8 text-white">
            <p className="eyebrow text-amarelo-300">Case em números</p>
            <div className="mt-5 grid grid-cols-2 gap-6">
              {[
                { v: "+38%", k: "alunos acima da média no simulado ENEM" },
                { v: "12h", k: "economizadas por professor a cada ciclo" },
                { v: "100%", k: "das turmas com relatório por habilidade" },
                { v: "30 dias", k: "para implantação completa, sem TI" },
              ].map((m) => (
                <div key={m.k}>
                  <div className="font-display text-3xl font-extrabold text-amarelo-500">{m.v}</div>
                  <p className="mt-1 text-sm text-white/75">{m.k}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Button href="/depoimentos" variant="whiteOutline">
                Ver mais cases
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
