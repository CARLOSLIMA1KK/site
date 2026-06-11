import SectionWrapper from "@/components/SectionWrapper";
import Pill from "@/components/Pill";

export const metadata = {
  title: "Política de Privacidade (LGPD)",
  description: "Política de Privacidade da KodarEdu e tratamento de dados pessoais conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    h: "1. Quem somos",
    p: "A KodarEdu é uma plataforma educacional white label de gestão e inteligência avaliativa. Esta política descreve como tratamos dados pessoais de instituições parceiras e de seus usuários (alunos, professores, coordenação e gestão).",
  },
  {
    h: "2. Dados que coletamos",
    p: "Coletamos dados de cadastro e contato (nome, e-mail, instituição, telefone), dados de uso da plataforma e dados gerados em avaliações. A instituição parceira é, em regra, a controladora dos dados dos seus alunos; a KodarEdu atua como operadora.",
  },
  {
    h: "3. Como usamos os dados",
    p: "Utilizamos os dados para operar a plataforma, gerar relatórios pedagógicos, prestar suporte e cumprir obrigações legais. Não vendemos dados pessoais.",
  },
  {
    h: "4. Base legal",
    p: "O tratamento se baseia na execução de contrato, no legítimo interesse, no consentimento (quando aplicável) e no cumprimento de obrigação legal ou regulatória, nos termos da Lei nº 13.709/2018 (LGPD).",
  },
  {
    h: "5. Compartilhamento",
    p: "Compartilhamos dados apenas com a instituição parceira e com operadores necessários à prestação do serviço (ex.: infraestrutura em nuvem), sempre com salvaguardas contratuais.",
  },
  {
    h: "6. Segurança",
    p: "Adotamos medidas técnicas e organizacionais para proteger os dados, incluindo criptografia, controle de acesso por perfil e backups.",
  },
  {
    h: "7. Direitos do titular",
    p: "O titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade e eliminação de dados, além de revogar consentimento, conforme a LGPD.",
  },
  {
    h: "8. Contato do Encarregado (DPO)",
    p: "Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento dos seus dados, entre em contato com o nosso Encarregado pelo e-mail ",
    email: "contato@kodartech.com.br",
  },
];

export default function PrivacidadePage() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <Pill tone="verde">LGPD</Pill>
        <h1 className="mt-4 font-display text-h2 font-bold text-ink">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-slate">Última atualização: junho de 2026.</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl font-bold text-ink">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-slate">
                {s.p}
                {s.email && (
                  <>
                    <a href={`mailto:${s.email}`} className="font-semibold text-verde-700 underline">
                      {s.email}
                    </a>
                    .
                  </>
                )}
              </p>
            </section>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
