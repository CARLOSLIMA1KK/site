import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    title: "Plataforma",
    links: [
      { label: "Tour", href: "/plataforma/tour" },
      { label: "White Label", href: "/white-label" },
      { label: "Relatórios", href: "/plataforma/relatorios" },
      { label: "Acessos & Perfis", href: "/plataforma/acessos" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Simulados ENEM", href: "/solucoes/simulado-enem" },
      { label: "Simulados SAEB", href: "/solucoes/simulado-saeb" },
      { label: "Trilha adaptativa", href: "/solucoes/adaptativa" },
      { label: "Produção Textual", href: "/solucoes/redacao" },
      { label: "Banco de Itens", href: "/solucoes/banco-de-questoes" },
      { label: "Criação de Provas", href: "/solucoes/provas" },
      { label: "Integração físico-digital", href: "/solucoes/integracao" },
      { label: "Edu.IA", href: "/solucoes/edu-ia" },
    ],
  },
  {
    title: "Para quem",
    links: [
      { label: "Escolas", href: "/para/escolas" },
      { label: "Cursinhos", href: "/para/cursinhos" },
      { label: "Redes & Secretarias", href: "/para/redes" },
      { label: "Editoras", href: "/para/editoras" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "Conteúdo", href: "/conteudo" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="surface-dark text-white">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{SITE.description}</p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white/80 transition hover:text-white">
                <Icon name="mail" size={16} />
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="flex items-center gap-2 text-white/80 transition hover:text-white">
                <Icon name="phone" size={16} />
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 transition hover:text-white"
              >
                <Icon name="chat" size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-amarelo-300">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/75 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} KodarEdu · Plataforma white label de avaliação e ENEM.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
            <Link href="/termos" className="hover:text-white">Termos</Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
            <a href={SITE.login} target="_blank" rel="noopener noreferrer" className="hover:text-white">Entrar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
