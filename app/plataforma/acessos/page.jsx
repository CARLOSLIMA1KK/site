import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { Reveal } from "@/components/Motion";
import { ACCESS_PROFILES as PROFILES } from "@/lib/site";

export const metadata = {
  title: "Acessos & Perfis",
  description:
    "Cada perfil vê e faz exatamente o que precisa: aluno, professor/corretor, coordenação, gestor e rede (multiunidade). Veja a tabela de permissões.",
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
        eyebrow="Acessos & Perfis"
        title="Cada perfil vê só o"
        highlight="que precisa."
        subtitle="Do aluno ao gestor de rede, a KodarEdu controla acessos por nível — simples para quem usa, seguro para a instituição."
        pills={["5 perfis", "Permissões por nível", "Multiunidade"]}
      />

      <SectionWrapper eyebrow="Perfis" title="Quem é quem na plataforma">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILES.map((p) => (
            <Reveal key={p.name} className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-ink">{p.name}</h3>
              <p className="mt-1 text-[15px] text-slate">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper soft eyebrow="Permissões" title="Tabela de acessos">
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
