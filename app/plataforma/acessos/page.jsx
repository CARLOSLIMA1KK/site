import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureList from "@/components/FeatureList";
import Icon from "@/components/Icon";
import Pill from "@/components/Pill";
import CTASection from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ACCESS_PROFILES as PROFILES } from "@/lib/site";

export const metadata = {
  title: "Acessos & Perfis — o que cada usuário tem na plataforma",
  description:
    "Veja tudo o que a KodarEdu oferece por perfil: aluno, professor, coordenação, gestor e rede. Acessos por nível, recursos por persona e a tabela completa de permissões.",
  alternates: { canonical: "/plataforma/acessos" },
};

// matriz: cada permissão x perfis [aluno, prof, coord, gestor, rede]
const PERMISSIONS = [
  ["Realizar avaliações", [true, false, false, false, false]],
  ["Ver evolução pessoal", [true, false, false, false, false]],
  ["Criar e aplicar provas", [false, true, false, false, false]],
  ["Corrigir redações", [false, true, false, false, false]],
  ["Relatórios de turma", [false, true, true, true, true]],
  ["Relatórios da escola", [false, false, true, true, true]],
  ["Gestão de usuários", [false, false, true, true, true]],
  ["Visão multiunidade", [false, false, false, false, true]],
  ["Configurar white label", [false, false, false, true, true]],
];

export default function AcessosPage() {
  return (
    <>
      <PageHero
        eyebrow="A Plataforma · Acessos & Perfis"
        title="Cada perfil vê só o"
        highlight="que precisa."
        subtitle="Do aluno ao gestor de rede, a KodarEdu controla acessos por nível — simples para quem usa, seguro para a instituição. Veja tudo o que cada perfil tem."
        pills={["5 perfis", "Permissões por nível", "Multiunidade"]}
      />

      {/* Grid de perfis com as telas (movido da Home) */}
      <SectionWrapper eyebrow="Perfis" title="Cada usuário, a sua experiência">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILES.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <Link href={`#perfil-${p.slug}`} className="block h-full">
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
                    <h3 className="font-display text-lg font-bold text-ink">{p.name}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-slate">{p.desc}</p>
                    <span className="mt-3 text-sm font-semibold text-verde-700">Ver o que oferece →</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Detalhe por perfil (SEO) — todo o potencial de cada um */}
      {PROFILES.map((p, idx) => (
        <SectionWrapper key={p.slug} id={`perfil-${p.slug}`} soft={idx % 2 === 0}>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-verde-100 text-verde-700">
                  <Icon name={p.icon} size={24} />
                </span>
                <Pill tone="azul">Perfil {p.name}</Pill>
              </div>
              <h2 className="mt-4 font-display text-h2 font-bold text-ink">
                O que a KodarEdu oferece para {articleFor(p.name)}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-slate">{p.intro}</p>
            </Reveal>
            <Reveal delay={0.1} className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <div className="rounded-lg border border-line bg-white p-7 shadow-card">
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-verde-700">
                  No perfil {p.name}, você tem:
                </p>
                <FeatureList columns={1} items={p.offers} />
              </div>
            </Reveal>
          </div>
        </SectionWrapper>
      ))}

      {/* Tabela de permissões */}
      <SectionWrapper eyebrow="Permissões" title="Tabela de acessos">
        <Reveal className="overflow-x-auto rounded-lg border border-line bg-white shadow-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-bg-soft">
                <th className="px-5 py-4 font-semibold text-ink">Permissão</th>
                {PROFILES.map((p) => (
                  <th key={p.name} className="px-4 py-4 text-center font-semibold text-ink">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERMISSIONS.map(([label, flags]) => (
                <tr key={label} className="border-b border-line last:border-0">
                  <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                  {flags.map((on, i) => (
                    <td key={i} className="px-4 py-3.5 text-center">
                      {on ? (
                        <span className="inline-flex text-verde-600" aria-label="Sim">
                          <Icon name="check" size={18} />
                        </span>
                      ) : (
                        <span className="text-line" aria-label="Não">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </SectionWrapper>

      <CTASection />
    </>
  );
}

function articleFor(name) {
  // artigo definido adequado para o título de cada perfil
  const map = {
    Aluno: "o aluno",
    Professor: "o professor",
    Coordenação: "a coordenação",
    Gestor: "o gestor",
    Rede: "a rede de ensino",
  };
  return map[name] || `o perfil ${name}`;
}
