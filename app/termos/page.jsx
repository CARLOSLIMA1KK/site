import SectionWrapper from "@/components/SectionWrapper";
import Pill from "@/components/Pill";

export const metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da plataforma KodarEdu.",
  alternates: { canonical: "/termos" },
};

const SECTIONS = [
  { h: "1. Aceitação dos termos", p: "Ao utilizar a plataforma KodarEdu, a instituição parceira e seus usuários concordam com estes Termos de Uso. Caso não concorde, não utilize a plataforma." },
  { h: "2. Descrição do serviço", p: "A KodarEdu oferece uma plataforma white label de gestão e inteligência avaliativa, incluindo criação, aplicação, correção e análise de avaliações e simulados." },
  { h: "3. Cadastro e acesso", p: "O acesso é feito por perfis (aluno, professor, coordenação, gestor e rede). O usuário é responsável por manter a confidencialidade de suas credenciais." },
  { h: "4. Uso adequado", p: "É vedado o uso da plataforma para fins ilícitos, violação de direitos de terceiros ou tentativas de comprometer a segurança do serviço." },
  { h: "5. Propriedade intelectual", p: "O conteúdo, a tecnologia e as marcas da KodarEdu são protegidos. O conteúdo gerado pela instituição permanece de sua titularidade, conforme o contrato." },
  { h: "6. Planos e pagamentos", p: "Os planos contratados, valores e condições de cobrança são definidos em proposta comercial específica, com nota fiscal." },
  { h: "7. Limitação de responsabilidade", p: "A KodarEdu empenha-se em manter a disponibilidade e a precisão do serviço, observadas as limitações técnicas inerentes a sistemas em nuvem." },
  { h: "8. Vigência e alterações", p: "Estes termos podem ser atualizados. Alterações relevantes serão comunicadas às instituições parceiras." },
];

export default function TermosPage() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <Pill tone="verde">Termos</Pill>
        <h1 className="mt-4 font-display text-h2 font-bold text-ink">Termos de Uso</h1>
        <p className="mt-3 text-sm text-slate">
          Última atualização: junho de 2026 ·{" "}
          <span className="font-medium">Documento modelo, revisar com o jurídico antes da publicação.</span>
        </p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl font-bold text-ink">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-slate">{s.p}</p>
            </section>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
