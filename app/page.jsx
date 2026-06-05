import Link from "next/link";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import SectionWrapper from "@/components/SectionWrapper";
import StatBand from "@/components/StatBand";
import MockupFrame from "@/components/MockupFrame";
import WhiteLabelDemo from "@/components/WhiteLabelDemo";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import FeatureList from "@/components/FeatureList";
import TypingHeadline from "@/components/TypingHeadline";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  SITE,
  STATS,
  JOURNEY,
  FEATURED_SOLUTIONS,
  PILLARS,
  AUDIENCES,
  FAQ_HOME,
  PLATFORM_CAPABILITIES,
  ACCESS_PROFILES,
} from "@/lib/site";

const SEALS = ["Simulados ENEM/SAEB", "Trilha adaptativa", "Produção Textual", "Banco de Itens", "Edu.IA"];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Impacto */}
      <StatBand
        stats={STATS}
        title="Números que comprovam o impacto"
        subtitle="Estudantes impactados, avaliações aplicadas e produções textuais corrigidas, com a confiança de instituições por todo o país."
      />

      {/* Jornada avaliativa em 4 passos */}
      <SectionWrapper
        soft
        eyebrow="Ciclo avaliativo completo"
        title="Da criação à decisão pedagógica, em uma só plataforma"
        subtitle="A KodarEdu cuida de toda a jornada avaliativa, com IA onde acelera e especialista humano onde importa."
      >
        <div className="relative">
          {/* Linha conectora tracejada (apenas desktop, alinhada com o centro dos círculos) */}
          <div 
            className="absolute left-[8%] right-[8%] top-0 h-[2px] border-t-2 border-dashed border-verde-500/20 hidden lg:block" 
            aria-hidden="true" 
          />
          
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((j) => {
              const getIconName = (step) => {
                switch (step) {
                  case "01": return "pencil";
                  case "02": return "doc";
                  case "03": return "check";
                  case "04": return "chart";
                  default: return "check";
                }
              };
              return (
                <StaggerItem key={j.step} className="h-full">
                  <div className="group relative h-full rounded-2xl border border-line bg-white p-6 pt-10 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-verde-500/40 hover:shadow-pop">
                    {/* Badge do Passo com Degradê */}
                    <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-verde-500 to-azul-600 text-white font-display text-base font-extrabold shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                      {j.step}
                    </div>
                    
                    {/* Cabeçalho do Card */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-ink">{j.title}</h3>
                      <span className="text-slate/30 transition-colors duration-300 group-hover:text-verde-500">
                        <Icon name={getIconName(j.step)} size={22} />
                      </span>
                    </div>
                    
                    {/* Descrição */}
                    <p className="mt-3 text-[14px] leading-relaxed text-slate">{j.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </SectionWrapper>

      {/* A Plataforma, capacidades (resumo de /plataforma) */}
      <SectionWrapper
        id="a-plataforma"
        eyebrow="A Plataforma"
        title="Robusta por dentro, simples por fora"
        subtitle="Nuvem, acessibilidade, acessos por nível e white label: a base que faz tudo funcionar, sem complexidade para quem usa."
      >
        <FeatureList items={PLATFORM_CAPABILITIES} columns={4} icon="check" />
      </SectionWrapper>

      {/* Soluções em destaque */}
      <SectionWrapper
        soft
        eyebrow="Soluções"
        title="Tudo o que você precisa, reunido"
        subtitle="Simulados ENEM e SAEB, trilha adaptativa, Produção Textual, Banco de Itens, provas com IA e o Edu.IA. Uma plataforma completa, com a sua marca."
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
      <SectionWrapper eyebrow="White Label" title="A cara da sua marca, de verdade">
        <Reveal>
          <WhiteLabelDemo />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <Button href="/white-label" variant="secondary" arrow>
            Conhecer a personalização
          </Button>
        </Reveal>
      </SectionWrapper>

      {/* Inteligência de dados & acessos, showcase visual */}
      <DataAndAccess />

      {/* CTA de conversão no meio */}
      <MidCTA />

      {/* 3 pilares de autoridade */}
      <SectionWrapper dark id="por-que-confiar">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
          {/* Coluna Esquerda: Texto de Introdução */}
          <Reveal className="max-w-xl">
            <span className="eyebrow text-amarelo-300">Por que confiar</span>
            <h2 className="mt-3 font-display text-h2 font-extrabold leading-[1.15] text-white">
              Três pilares que sustentam cada avaliação
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Mais do que entregar tecnologia, garantimos o rigor pedagógico, conformidade e o suporte que sua instituição precisa para crescer com segurança e qualidade.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-amarelo-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amarelo-500/20 text-amarelo-500">
                  <Icon name="check" size={14} />
                </span>
                Alinhamento BNCC
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-amarelo-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amarelo-500/20 text-amarelo-500">
                  <Icon name="check" size={14} />
                </span>
                Conformidade LGPD
              </div>
            </div>
          </Reveal>

          {/* Coluna Direita: Os Pilares de Autoridade */}
          <Stagger className="grid gap-6">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="group flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-amarelo-500 to-amarelo-300 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon name={p.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amarelo-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                      {p.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
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
      <SectionWrapper soft eyebrow="Dúvidas frequentes" title="Perguntas que toda instituição faz" center>
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
            Cada avaliação gera inteligência acionável, e cada perfil enxerga exatamente o que precisa.
          </p>
        </Reveal>

        {/* Relatórios, mockup com chips flutuantes */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h3 className="mt-3 font-display text-h3 font-bold text-ink">
              Relatórios que viram decisão pedagógica
            </h3>
            <p className="mt-3 text-slate">
              A mesma avaliação, lida em vários níveis, com réguas ENEM/SAEB por TRI e integração ao
              ERP escolar.
            </p>
            <div className="mt-7">
              <Button href="/plataforma/relatorios" variant="secondary" arrow>
                Ver relatórios & inteligência de dados
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <MockupFrame
              src="/assets/prints/secao-relatorios.svg"
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

        {/* Acessos & Perfis, cards com miniatura de tela */}
        <div className="mt-20">
          <Reveal className="mb-8 max-w-2xl">
            <h3 className="mt-3 font-display text-h3 font-bold text-ink">Cada perfil vê só o que precisa</h3>
            <p className="mt-2 text-slate">
              Acessos por nível, do aluno ao gestor de rede, simples para quem usa, seguro para a instituição.
            </p>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACCESS_PROFILES.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <Link href="/plataforma/acessos" className="block h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-pop">
                    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-verde-100 to-azul-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.photo}
                        alt={`Perfil ${p.name} usando a KodarEdu`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h4 className="font-display text-base font-bold text-ink">{p.name}</h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate">{p.desc}</p>
                      <span className="mt-2 text-[13px] font-semibold text-verde-700">Ver mais →</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
            {/* card-CTA fechando a grade */}
            <StaggerItem className="h-full">
              <Link
                href="/plataforma/acessos"
                className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-azul-600/30 bg-azul-100/40 p-5 text-center transition hover:border-azul-600/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-azul-600 shadow-card">
                  <Icon name="shield" size={22} />
                </span>
                <span className="mt-3 font-display text-base font-bold text-ink">Permissões por nível</span>
                <span className="mt-1 text-[13px] font-semibold text-azul-600">Ver tabela completa →</span>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-5 rounded-lg border border-verde-500/30 bg-verde-100/50 p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left">
          <div>
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Pronto para ver com os seus dados?
            </h2>
            <p className="mt-1 text-slate">
              Agende uma demonstração e navegue pela plataforma com a marca da sua instituição.
            </p>
          </div>
          <div className="flex flex-none flex-col gap-3 sm:flex-row">
            <Button href={SITE.ctaPrimaryHref} variant="primary" arrow>
              {SITE.ctaPrimary}
            </Button>
            <Button href={SITE.whatsapp} external variant="secondary">
              Falar no WhatsApp
            </Button>
          </div>
        </Reveal>
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

      <div className="container-page relative pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <TypingHeadline />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Crie, aplique, corrija e analise avaliações com tecnologia inteligente, de provas e
              simulados por TRI à Produção Textual com IA e relatórios. Tudo white label, sem precisar
              de equipe de TI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={SITE.ctaPrimaryHref} variant="primary" size="lg" arrow>
                {SITE.ctaPrimary}
              </Button>
              <Button href="/solucoes" variant="secondary" size="lg">
                Conhecer as soluções
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
              src="/assets/prints/painel-escola.svg"
              alt="Painel inicial da KodarEdu com a visão geral da instituição"
              label="app.suaescola.edu.br"
            />
            <div className="absolute -bottom-8 -left-6 hidden w-44 sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/photos/home-hero-mobile.jpg"
                alt="Aluna sorrindo enquanto usa o app da plataforma no celular"
                loading="eager"
                className="aspect-square w-44 rounded-lg border border-line object-cover shadow-pop"
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
                <span className="block text-sm text-slate">Coordenadora pedagógica</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg surface-dark p-8 text-white">
            <p className="eyebrow text-amarelo-300">Case em números</p>
            <div className="mt-5 grid grid-cols-2 gap-6">
              {[
                { v: "+38%", k: "alunos acima da média no simulado ENEM" },
                { v: "12h", k: "economizadas por professor a cada ciclo" },
                { v: "−70%", k: "no tempo de correção das avaliações" },
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

      <Stagger className="mt-6 grid gap-6 sm:grid-cols-2">
        {MORE_TESTIMONIALS.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <figure className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card">
              <blockquote className="flex-1 text-[15px] leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-verde-100 font-display text-sm font-bold text-verde-700">
                  {t.initials}
                </span>
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
  );
}

const MORE_TESTIMONIALS = [
  {
    quote:
      "A correção automática devolveu horas aos professores. O que era um gargalo virou rotina simples.",
    name: "Ricardo Campos",
    role: "Diretor",
    initials: "RC",
  },
  {
    quote:
      "Conseguimos comparar o desempenho entre as unidades da rede pela primeira vez. Decisão por dados.",
    name: "Helena Souza",
    role: "Secretária de Educação",
    initials: "HS",
  },
];
