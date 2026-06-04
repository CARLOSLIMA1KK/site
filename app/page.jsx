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
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import FeatureList from "@/components/FeatureList";
import Highlight from "@/components/Highlight";
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
  PLATFORM_CAPABILITIES,
  ACCESS_PROFILES,
  REPORT_VIEWS,
} from "@/lib/site";

const SEALS = ["Simulados por TRI", "Redação com IA", "Banco de questões", "Adaptativa", "Relatórios"];

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

      {/* A Plataforma — capacidades (resumo de /plataforma) */}
      <SectionWrapper
        id="a-plataforma"
        eyebrow="A Plataforma"
        title="Um hub completo para o ciclo avaliativo"
        subtitle="Robusta por dentro, simples por fora: tudo o que a escola precisa para avaliar, sem complexidade para quem usa."
      >
        <FeatureList items={PLATFORM_CAPABILITIES} columns={4} icon="check" />
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <Button href="/plataforma" variant="secondary" arrow>
            Conhecer a plataforma
          </Button>
          <Button href="/plataforma/tour" variant="ghost">
            Fazer o tour pelas telas
          </Button>
        </Reveal>
      </SectionWrapper>

      {/* Soluções em destaque */}
      <SectionWrapper
        soft
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
      <SectionWrapper eyebrow="White Label" title="A cara da sua marca — de verdade">
        <Reveal>
          <WhiteLabelDemo />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <Button href="/white-label" variant="secondary" arrow>
            Conhecer a personalização
          </Button>
        </Reveal>
      </SectionWrapper>

      {/* Inteligência de dados & acessos — showcase visual */}
      <DataAndAccess />

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

      {/* FAQ */}
      <SectionWrapper eyebrow="Dúvidas frequentes" title="Perguntas que toda escola faz" center>
        <FAQ items={FAQ_HOME} />
      </SectionWrapper>

      {/* CTA final */}
      <CTASection />
    </>
  );
}

function DataAndAccess() {
  return (
    <section className="relative overflow-hidden bg-bg-soft py-16 sm:py-20 lg:py-24">
      <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-azul-100/60 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-verde-100 blur-3xl" aria-hidden="true" />

      <div className="container-page relative">
        <Reveal className="mb-12 max-w-3xl">
          <span className="eyebrow">Inteligência de dados & acessos</span>
          <h2 className="mt-3 font-display text-h2 font-bold text-ink">
            Dados que viram decisão. Acessos que organizam.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Cada avaliação gera inteligência acionável — e cada perfil enxerga exatamente o que precisa.
          </p>
        </Reveal>

        {/* Relatórios — mockup com chips flutuantes */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Pill tone="verde">Relatórios</Pill>
            <h3 className="mt-3 font-display text-h3 font-bold text-ink">
              Relatórios que viram decisão pedagógica
            </h3>
            <p className="mt-3 text-slate">
              A mesma avaliação, lida em vários níveis — com réguas ENEM/SAEB por TRI e integração ao
              ERP escolar.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {REPORT_VIEWS.map((v) => (
                <li key={v.title}>
                  <Pill tone="verde">{v.title}</Pill>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button href="/plataforma/relatorios" variant="secondary" arrow>
                Ver relatórios & inteligência de dados
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <MockupFrame
              src="/assets/prints/relatorio-gestor.svg"
              alt="Painel de relatórios da KodarEdu com indicadores de desempenho"
              label="app.suaescola.edu.br/relatorios"
            />
            {/* chip flutuante: nota TRI */}
            <div className="absolute -left-4 top-10 hidden rounded-xl border border-line bg-white p-3.5 shadow-pop sm:block">
              <p className="text-[11px] font-medium text-slate">Nota TRI média</p>
              <div className="flex items-end gap-1.5">
                <span className="font-display text-2xl font-extrabold text-ink">742</span>
                <span className="mb-0.5 text-xs font-bold text-verde-700">▲ 18%</span>
              </div>
            </div>
            {/* chip flutuante: aprovação */}
            <div className="absolute -bottom-5 right-6 hidden items-center gap-2.5 rounded-xl border border-line bg-white p-3.5 shadow-pop sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-verde-100 text-verde-700">
                <Icon name="chart" size={18} />
              </span>
              <span>
                <span className="block font-display text-lg font-extrabold leading-none text-ink">+38%</span>
                <span className="block text-[11px] text-slate">acima da média no ENEM</span>
              </span>
            </div>
          </Reveal>
        </div>

        {/* Acessos & Perfis — cards com miniatura de tela */}
        <div className="mt-20">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Pill tone="azul">Acessos & perfis</Pill>
              <h3 className="mt-3 font-display text-h3 font-bold text-ink">Cada perfil vê só o que precisa</h3>
              <p className="mt-2 text-slate">
                Acessos por nível, do aluno ao gestor de rede — simples para quem usa, seguro para a instituição.
              </p>
            </div>
            <Button href="/plataforma/acessos" variant="secondary" arrow className="hidden sm:inline-flex">
              Ver acessos & permissões
            </Button>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACCESS_PROFILES.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-pop">
                  <div className="relative overflow-hidden border-b border-line bg-bg-soft">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.print}
                      alt={`Tela do perfil ${p.name}`}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-azul-600 shadow-card backdrop-blur">
                      <Icon name={p.icon} size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="font-display text-lg font-bold text-ink">{p.name}</h4>
                    <p className="mt-1 text-[14px] leading-relaxed text-slate">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
            {/* card-CTA fechando a grade */}
            <StaggerItem className="h-full">
              <Link
                href="/plataforma/acessos"
                className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-azul-600/30 bg-azul-100/40 p-6 text-center transition hover:border-azul-600/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-azul-600 shadow-card">
                  <Icon name="shield" size={24} />
                </span>
                <span className="mt-3 font-display text-lg font-bold text-ink">Permissões por nível</span>
                <span className="mt-1 text-sm font-semibold text-azul-600">Ver tabela completa →</span>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
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
              <span className="h-1.5 w-1.5 rounded-full bg-verde-500" /> Plataforma completa de avaliação · White label
            </Pill>
            <h1 className="mt-5 font-display text-display font-extrabold text-ink">
              A plataforma <Highlight color="amarelo">completa</Highlight> de avaliação da sua escola.{" "}
              <span className="text-verde-700">Com a sua marca.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Crie, aplique, corrija e analise avaliações com tecnologia inteligente — de provas e
              simulados por TRI à redação com IA e relatórios. Tudo white label, sem precisar de equipe
              de TI.
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
              <Button href="/contato" variant="whiteOutline">
                Quero resultados assim
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
