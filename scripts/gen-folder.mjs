// Gera o folder comercial em PDF reaproveitando os MESMOS assets, textos e
// cores do site. SVGs e fotos sao embutidos como data-URI (portatil, sem server).
// Saida: public/kodaredu-folder-comercial.pdf
//
// Uso: node scripts/gen-folder.mjs

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import puppeteer from "puppeteer";
import {
  SITE,
  STATS,
  PILLARS,
  PLATFORM_CAPABILITIES,
  ACCESS_PROFILES,
  REPORT_VIEWS,
  AUDIENCES,
  PLANS,
} from "../lib/site.js";
import { SOLUTIONS } from "../lib/solutions.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

// ---- helpers -------------------------------------------------------------
function asset(p) {
  const file = join(PUBLIC, p.replace(/^\//, ""));
  if (!existsSync(file)) {
    console.warn("asset ausente:", p);
    return "";
  }
  const buf = readFileSync(file);
  const ext = p.split(".").pop().toLowerCase();
  const mime =
    ext === "svg" ? "image/svg+xml" : ext === "png" ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

// Realca a marca "Edu" (E verde, d amarelo, u azul) sem afetar "Educacional".
function edu(str) {
  return String(str).replace(
    /(Edu)(?![a-zà-ú])/g,
    '<span class="edu"><span style="color:var(--verde)">E</span><span style="color:var(--amarelo)">d</span><span style="color:var(--azul)">u</span></span>'
  );
}

const img = (p, cls = "") => `<img class="${cls}" src="${asset(p)}" alt="" />`;

// ---- conteudo dos cards de solucao --------------------------------------
const SOLUTION_CARDS = [
  {
    title: "Criação e Correção de Provas",
    tag: "IA · OMR",
    print: "/assets/prints/editor-prova.svg",
    text: "Gere questões com IA, monte provas com layout profissional e corrija por leitor OMR, scanner ou câmera, online ou impresso.",
    bullets: ["Banco de itens + criação com IA", "Itens autorais ou os seus itens", "Correção em lote por scanner (OMR)"],
  },
  {
    title: "Simulados ENEM",
    tag: "TRI",
    print: "/assets/prints/relatorio-tri.svg",
    text: "Simulados no padrão ENEM real com correção por TRI ajustada à régua oficial e relatórios por área e habilidade.",
    bullets: ["Padrão ENEM real", "Correção por TRI", "Ranking e gabarito comentado"],
  },
  {
    title: "Simulados SAEB",
    tag: "BNCC",
    print: "/assets/prints/relatorio-gestor.svg",
    text: SOLUTIONS["simulado-saeb"].hero.subtitle,
    bullets: ["Alinhado ao SAEB/BNCC", "Benchmark nacional", "Visão por escola e rede"],
  },
  {
    title: "Produção Textual",
    tag: "IA + Especialista",
    print: "/assets/prints/redacao-correcao.svg",
    text: "Correção de redação no padrão ENEM com IA + corretor humano, OCR de manuscritos e evolução por competência.",
    bullets: ["Vários gêneros textuais", "OCR de manuscritos", "IA + especialista humano"],
  },
  {
    title: "Cursos EAD",
    tag: "Formação continuada",
    print: "/assets/prints/cursos-ead.svg",
    text: "Crie cursos com a sua marca, para professores e estudantes: vídeos, videoaulas, questões, quiz, podcasts e certificados, com acompanhamento de progresso.",
    bullets: ["Vídeos, videoaulas, quiz e podcasts", "Certificados e progresso por curso", "Ideal para formação de professores"],
  },
  {
    title: "Trilha adaptativa (CAT)",
    tag: "CAT",
    print: "/assets/prints/adaptativa-trilha.svg",
    text: SOLUTIONS["adaptativa"].hero.subtitle,
    bullets: ["Teste adaptativo (CAT)", "Menos tempo, mesma precisão", "Trilhas personalizadas"],
  },
  {
    title: "Integração físico-digital",
    tag: "Híbrido",
    print: "/assets/prints/correcao-automatica.svg",
    text: SOLUTIONS["integracao"].hero.subtitle,
    bullets: ["Aplicação híbrida", "Leitor de gabarito", "Dados sincronizados"],
  },
  {
    title: "Edu.IA para professores",
    tag: "IA",
    print: "/assets/prints/edu-ia-professor.svg",
    mascot: "/assets/mascots/edu-ia.png",
    text: SOLUTIONS["edu-ia"].hero.subtitle,
    bullets: ["Planos de aula e atividades", "Elaboração de questões", "Feedback e rubricas"],
  },
];

const PLATFORM_GROUPS = [
  {
    title: "Avaliações & Ferramentas",
    items: ["Criação e Correção de Provas", "Simulados ENEM", "Simulados SAEB", "Produção Textual"],
  },
  {
    title: "Recursos Edu",
    items: ["Cursos EAD", "Trilha adaptativa (CAT)", "Integração físico-digital"],
  },
  {
    title: "Edu.IA",
    items: ["Assistente de IA para o dia a dia do professor"],
  },
];

const WHITE_LABEL = [
  { title: "Logo e identidade", text: "Sua marca em todas as telas, e-mails e materiais." },
  { title: "Paleta de cores", text: "A interface assume as cores da sua instituição." },
  { title: "Domínio próprio", text: "Acesso no seu endereço, não no da KodarEdu." },
  { title: "Links e menus", text: "Navegação e atalhos configurados para você." },
  { title: "E-mails e certificados", text: "Comunicações e documentos na sua marca." },
  { title: "App na sua marca", text: "Aplicativo do aluno publicado com a sua identidade." },
];

const INCLUSO = [
  ["Sustentação completa", "Infra em nuvem, atualizações e manutenção por nossa conta."],
  ["Evolução contínua", "Novas funcionalidades e melhorias, sem cobrança extra."],
  ["Suporte 24/7", "Atendimento humano todos os dias, inclusive fins de semana."],
  ["SLA com tempo de resposta", "Prioridades e prazos definidos em contrato."],
  ["Auxílio no embarque", "Onboarding guiado, migração de dados e configuração da marca."],
  ["Atendimento aos professores", "Equipe técnica da Kodar apoia os professores no uso."],
  ["Segurança e LGPD", "Conformidade desde a arquitetura; dados protegidos."],
  ["White label completo", "A plataforma inteira com a marca da sua instituição."],
];

const SLA = [
  ["Crítico (P1)", "≤ 4 horas", "Plataforma indisponível"],
  ["Alto (P2)", "≤ 8 horas", "Função essencial afetada"],
  ["Padrão (P3)", "≤ 24h úteis", "Dúvidas e ajustes"],
];

const DUO = [
  ["Itens autorais ou os seus itens", "Desenvolvemos as provas com <b>itens autorais</b> da KodarEdu ou <b>cadastramos as provas e os itens da sua instituição</b>, respeitando a metodologia aplicada. Você escolhe o caminho."],
  ["Leitor de gabarito em lote (scanner)", "Correção em lote: digitalize as folhas de resposta no <b>scanner</b> e o leitor faz a leitura automática dos gabaritos, reduzindo o trabalho de inserção da sua equipe em <b>até 80%</b>."],
];

// Tabela de preços (versão com valores: 30% de desconto, por = de x 0,70).
const PRICING30 = [
  { faixa: "Até 2.000 estudantes", de: "R$ 3,00", por: "R$ 2,10" },
  { faixa: "2.001 a 6.000 estudantes", de: "R$ 2,29", por: "R$ 1,60" },
  { faixa: "6.001 a 12.000 estudantes", de: "R$ 1,86", por: "R$ 1,30" },
  { faixa: "12.001 a 20.000 estudantes", de: "R$ 1,43", por: "R$ 1,00" },
  { faixa: "Acima de 20.000 estudantes", consulta: true },
];

// Perfis de acesso (de /plataforma/acessos) + cor da inicial.
const PERFIL_COLORS = { aluno: "var(--verde)", professor: "var(--azul)", gestao: "var(--ink)", rede: "var(--verde-700)" };
const PERFIS = ACCESS_PROFILES.map((p) => ({ name: p.name, desc: p.desc, color: PERFIL_COLORS[p.slug] || "var(--verde)" }));
const PERFIL_HEADERS = ["Aluno", "Professor", "Gestor/Coord.", "Rede"];
const PERMISSIONS = [
  ["Realizar avaliações e simulados", [1, 0, 0, 0]],
  ["Trilha e evolução pessoal", [1, 0, 0, 0]],
  ["Criar e aplicar provas (IA)", [0, 1, 1, 0]],
  ["Corrigir redações (IA + OCR)", [0, 1, 1, 0]],
  ["Leitor OMR e correção por câmera", [0, 1, 1, 0]],
  ["Criar Cursos EAD", [0, 1, 1, 0]],
  ["Edu.IA (assistente do professor)", [0, 1, 1, 0]],
  ["Relatórios de turma", [0, 1, 1, 1]],
  ["Relatórios da instituição/rede", [0, 0, 1, 1]],
  ["Gestão de usuários", [0, 0, 1, 1]],
  ["Visão multiunidade", [0, 0, 0, 1]],
  ["Configurar white label", [0, 0, 1, 1]],
];

const card = (s) => `
  <div class="sol-card">
    <div class="sol-thumb">${img(s.print)}${s.mascot ? `<img class="sol-mascot" src="${asset(s.mascot)}" alt="" />` : ""}</div>
    <div class="sol-body">
      <div class="sol-head">
        <h3>${edu(s.title)}</h3>
        <span class="tag">${edu(s.tag)}</span>
      </div>
      <p>${edu(s.text)}</p>
      <ul>${s.bullets.map((b) => `<li>${edu(b)}</li>`).join("")}</ul>
    </div>
  </div>`;

const profile = (p) => `
  <div class="profile">
    <div class="profile-thumb">${img(p.print)}</div>
    <div class="profile-body">
      <h3>${p.name}</h3>
      <p>${p.intro}</p>
      <ul>${p.offers.slice(0, 4).map((o) => `<li>${edu(o)}</li>`).join("")}</ul>
    </div>
  </div>`;

const stars = "★★★★★";

// ---- HTML ----------------------------------------------------------------
const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --verde:#1ba559; --verde-700:#0a6e36; --verde-100:#e4f6ec;
  --azul:#1e50e0; --amarelo:#ffc400; --amarelo-300:#ffd84d;
  --ink:#0b1033; --slate:#4a5170; --line:#e6e8f0; --soft:#f6f7fb;
  --display:'Sora',system-ui,sans-serif; --body:'Public Sans',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
@page{size:A4;margin:0;}
html,body{font-family:var(--body);color:var(--ink);}
.page{
  position:relative;width:210mm;height:297mm;overflow:hidden;
  page-break-after:always;padding:16mm 15mm;display:flex;flex-direction:column;
}
.page:last-child{page-break-after:auto;}
.surface-dark{
  background:linear-gradient(135deg,#0b1033 0%,#0e1e4d 52%,#15327a 100%);color:#fff;
}
h1,h2,h3,.display{font-family:var(--display);}
.eyebrow{display:inline-block;font-family:var(--display);font-weight:700;font-size:10pt;
  letter-spacing:.12em;text-transform:uppercase;color:var(--verde-700);margin-bottom:6mm;}
.surface-dark .eyebrow{color:var(--amarelo-300);}
.edu{font-family:var(--display);font-weight:800;}
.slate{color:var(--slate);}
.kicker-line{width:18mm;height:3px;background:var(--amarelo);border-radius:2px;margin:5mm 0;}

/* ---- Capa ---- */
.cover{justify-content:space-between;}
.brand{font-family:var(--display);font-weight:800;font-size:24pt;letter-spacing:-.01em;}
.cover h1{font-size:34pt;line-height:1.06;font-weight:800;margin-top:6mm;max-width:170mm;}
.cover .sub{font-size:12.5pt;line-height:1.55;color:#dfe4ff;margin-top:7mm;max-width:150mm;}
.cover-hero{position:relative;margin-top:8mm;border:1px solid rgba(255,255,255,.18);border-radius:10px;
  overflow:hidden;background:#fff;box-shadow:0 18px 50px rgba(0,0,0,.35);}
.cover-hero img:not(.cover-mascot){width:100%;display:block;}
.cover-mascot{position:absolute;top:5mm;right:5mm;width:26mm;height:26mm;object-fit:contain;
  border-radius:50%;background:#fff;border:3px solid #fff;box-shadow:0 8px 22px rgba(11,16,51,.28);}
.cover-foot{display:flex;gap:8mm;flex-wrap:wrap;font-size:10.5pt;color:#cfd6ff;
  border-top:1px solid rgba(255,255,255,.16);padding-top:6mm;}
.cover-foot b{color:#fff;font-weight:600;}
.pills{display:flex;gap:3mm;flex-wrap:wrap;margin-top:6mm;}
.pill{font-size:9.5pt;font-weight:600;padding:2mm 4mm;border-radius:999px;
  background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);}

/* ---- Headings de pagina ---- */
.h2{font-size:22pt;font-weight:800;line-height:1.1;max-width:165mm;}
.lead{font-size:11.5pt;line-height:1.6;color:var(--slate);max-width:165mm;margin-top:4mm;}

/* ---- Stats ---- */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:5mm;margin-top:9mm;}
.stat{background:var(--soft);border:1px solid var(--line);border-radius:10px;padding:6mm 5mm;}
.stat .num{font-family:var(--display);font-weight:800;font-size:21pt;color:var(--ink);}
.stat .lbl{font-size:9.5pt;color:var(--slate);margin-top:1mm;}
.stat .st{color:var(--amarelo);font-size:11pt;letter-spacing:1px;}

/* ---- Pilares ---- */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin-top:9mm;}
.pillar{border:1px solid var(--line);border-radius:10px;padding:6mm 5mm;background:#fff;}
.pillar .dot{width:9mm;height:9mm;border-radius:8px;background:var(--verde-100);
  display:flex;align-items:center;justify-content:center;color:var(--verde-700);
  font-family:var(--display);font-weight:800;margin-bottom:4mm;}
.pillar h3{font-size:12.5pt;margin-bottom:2mm;}
.pillar p{font-size:10pt;color:var(--slate);line-height:1.5;}

/* ---- Grupos de plataforma ---- */
.groups{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin-top:8mm;}
.group{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff;}
.group .gh{background:var(--ink);color:#fff;padding:4mm 5mm;font-family:var(--display);
  font-weight:700;font-size:11.5pt;}
.group ul{list-style:none;padding:4mm 5mm;}
.group li{font-size:10.5pt;color:var(--slate);padding:2mm 0 2mm 6mm;position:relative;}
.group li::before{content:"";position:absolute;left:0;top:3.4mm;width:3mm;height:3mm;
  border-radius:50%;background:var(--verde);}

/* ---- Capacidades ---- */
.caps{display:grid;grid-template-columns:repeat(2,1fr);gap:3mm 6mm;margin-top:8mm;}
.cap{display:flex;gap:3mm;align-items:flex-start;}
.cap .ck{color:var(--verde);font-weight:800;font-size:12pt;line-height:1.3;}
.cap b{font-size:10.5pt;}
.cap span{font-size:9.5pt;color:var(--slate);}

/* ---- Cards de solucao ---- */
.sol-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:5mm;margin-top:7mm;}
.sol-card{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff;
  display:flex;flex-direction:column;}
.sol-thumb{position:relative;background:var(--soft);border-bottom:1px solid var(--line);padding:3mm;}
.sol-thumb > img{width:100%;height:38mm;object-fit:cover;object-position:top;border-radius:6px;}
.sol-mascot{position:absolute;right:5mm;bottom:5mm;width:18mm;height:18mm;object-fit:contain;
  border-radius:50%;background:#fff;border:2px solid var(--line);box-shadow:0 6px 16px rgba(11,16,51,.18);}
.sol-body{padding:4mm 5mm 5mm;}
.sol-head{display:flex;align-items:center;justify-content:space-between;gap:3mm;}
.sol-head h3{font-size:12.5pt;}
.tag{font-size:8.5pt;font-weight:700;color:var(--azul);background:#eaf0ff;
  border-radius:999px;padding:1.4mm 3mm;white-space:nowrap;}
.sol-body p{font-size:9.8pt;color:var(--slate);line-height:1.5;margin-top:2mm;}
.sol-body ul{list-style:none;margin-top:3mm;}
.sol-body li{font-size:9.5pt;padding:1mm 0 1mm 6mm;position:relative;color:var(--ink);}
.sol-body li::before{content:"✓";position:absolute;left:0;color:var(--verde);font-weight:800;}

/* ---- Relatorios ---- */
.report-hero{margin-top:7mm;border:1px solid var(--line);border-radius:10px;overflow:hidden;
  background:var(--soft);}
.report-hero img{width:100%;display:block;}
.views{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm;margin-top:7mm;}
.view{border:1px solid var(--line);border-radius:9px;padding:5mm;background:#fff;}
.view h3{font-size:11.5pt;margin-bottom:1.5mm;}
.view p{font-size:9.5pt;color:var(--slate);line-height:1.45;}

/* ---- Acessos & Perfis ---- */
.perfis{display:grid;grid-template-columns:repeat(4,1fr);gap:4mm;margin-top:7mm;}
.perfil{border:1px solid var(--line);border-radius:10px;padding:5mm 4mm;background:#fff;}
.perfil .pb{width:10mm;height:10mm;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:13pt;color:#fff;margin-bottom:3mm;}
.perfil h3{font-size:11pt;}
.perfil p{font-size:8.8pt;color:var(--slate);line-height:1.4;margin-top:1.5mm;}
.matrix{width:100%;border-collapse:separate;border-spacing:0;margin-top:7mm;border:1px solid var(--line);border-radius:12px;overflow:hidden;font-size:9.2pt;}
.matrix th{background:var(--ink);color:#fff;font-family:var(--display);font-weight:700;padding:3.5mm 2mm;text-align:center;font-size:9pt;}
.matrix th:first-child{text-align:left;padding-left:5mm;}
.matrix td{padding:2.6mm 2mm;border-top:1px solid var(--line);text-align:center;}
.matrix td:first-child{text-align:left;padding-left:5mm;color:var(--ink);font-weight:500;}
.matrix tr:nth-child(even) td{background:var(--soft);}
.matrix .yes{color:var(--verde);font-weight:800;font-size:11pt;}
.matrix .no{color:#c7ccdd;}

/* ---- Perfis (legado) ---- */
.profiles{display:flex;flex-direction:column;gap:5mm;margin-top:7mm;}
.profile{display:grid;grid-template-columns:62mm 1fr;gap:6mm;border:1px solid var(--line);
  border-radius:10px;overflow:hidden;background:#fff;}
.profile-thumb{background:var(--soft);border-right:1px solid var(--line);padding:3mm;display:flex;align-items:center;}
.profile-thumb img{width:100%;border-radius:6px;}
.profile-body{padding:5mm 6mm 5mm 0;}
.profile-body h3{font-size:13pt;margin-bottom:2mm;}
.profile-body p{font-size:9.8pt;color:var(--slate);line-height:1.5;}
.profile-body ul{list-style:none;margin-top:3mm;display:grid;grid-template-columns:1fr 1fr;gap:1mm 4mm;}
.profile-body li{font-size:9.3pt;padding-left:6mm;position:relative;color:var(--ink);}
.profile-body li::before{content:"✓";position:absolute;left:0;color:var(--verde);font-weight:800;}

/* ---- White label ---- */
.wl-hero{margin-top:7mm;border:1px solid var(--line);border-radius:10px;overflow:hidden;}
.wl-hero img{width:100%;display:block;}
.wl-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:4mm 6mm;margin-top:7mm;}
.wl{display:flex;gap:3mm;align-items:flex-start;}
.wl .ck{color:var(--azul);font-weight:800;font-size:12pt;}
.wl b{font-size:11pt;}
.wl span{font-size:9.6pt;color:var(--slate);}

/* ---- Para quem ---- */
.aud-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:5mm;margin-top:7mm;}
.aud{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff;}
.aud img{width:100%;height:46mm;object-fit:cover;display:block;}
.aud .ab{padding:4mm 5mm 5mm;}
.aud h3{font-size:13pt;margin-bottom:1.5mm;}
.aud p{font-size:10pt;color:var(--slate);line-height:1.45;}

/* ---- CTA final ---- */
.cta{justify-content:center;}
.cta .eyebrow{color:var(--amarelo-300);}
.cta h1{font-size:30pt;font-weight:800;line-height:1.1;max-width:160mm;}
.cta .sub{font-size:12.5pt;color:#dfe4ff;margin-top:6mm;line-height:1.55;max-width:155mm;}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-top:12mm;max-width:165mm;}
.contact .ci{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);
  border-radius:10px;padding:5mm 6mm;}
.contact .ci .k{font-size:9pt;text-transform:uppercase;letter-spacing:.1em;color:var(--amarelo-300);font-weight:700;}
.contact .ci .v{font-size:13pt;font-weight:600;margin-top:2mm;color:#fff;font-family:var(--display);}
.guarantee{display:flex;gap:8mm;margin-top:11mm;flex-wrap:wrap;font-size:10.5pt;color:#cfd6ff;}
.guarantee b{color:#fff;}
.footer-brand{margin-top:auto;padding-top:8mm;border-top:1px solid rgba(255,255,255,.16);
  display:flex;justify-content:space-between;align-items:center;font-size:10pt;color:#cfd6ff;}
.footer-brand .brand{font-size:15pt;}
.cover-foot a{color:#cfd6ff;text-decoration:none;}
.cover-foot a b{color:#fff;}
.contact .ci a{color:#fff;text-decoration:none;}
/* ---- Tudo incluso ---- */
.incluso{display:grid;grid-template-columns:1fr 1fr;gap:3.5mm 6mm;margin-top:7mm;}
.inc{display:flex;gap:3mm;align-items:flex-start;}
.inc .ck{flex:none;width:7mm;height:7mm;border-radius:50%;background:var(--verde-100);color:var(--verde-700);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:10pt;}
.inc b{font-size:10.5pt;}
.inc span{font-size:9.5pt;color:var(--slate);}
.sla{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm;margin-top:8mm;}
.sla .s{border:1px solid var(--line);border-radius:9px;padding:5mm;background:var(--soft);}
.sla .lvl{font-family:var(--display);font-weight:800;font-size:11pt;color:var(--ink);}
.sla .tm{color:var(--verde-700);font-weight:800;font-size:14pt;margin-top:1mm;}
.sla .ds{font-size:8.5pt;color:var(--slate);margin-top:1mm;}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-top:7mm;}
.duo-card{border:1px solid var(--line);border-left:3px solid var(--verde);border-radius:10px;padding:5mm;background:var(--soft);}
.duo-h{font-family:var(--display);font-weight:800;font-size:11pt;color:var(--ink);margin-bottom:2mm;}
.duo-card p{font-size:9.6pt;line-height:1.5;color:var(--slate);}
.duo-card b{color:var(--ink);}
/* ---- Passos + botao WhatsApp ---- */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin-top:9mm;}
.step{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:5mm;}
.step .n{font-family:var(--display);font-weight:800;color:var(--amarelo-300);font-size:13pt;}
.step .tt{color:#fff;font-weight:600;margin-top:1.5mm;font-size:11pt;}
.step .ds{color:#cfd6ff;font-size:9pt;margin-top:1mm;}
.btn-wpp{display:inline-flex;align-items:center;gap:3mm;margin-top:9mm;background:var(--amarelo);color:var(--ink);font-family:var(--display);font-weight:800;font-size:13pt;padding:4.5mm 9mm;border-radius:999px;text-decoration:none;box-shadow:0 10px 26px rgba(255,196,0,.3);}
.btn-wpp svg{width:18px;height:18px;}
/* ---- Investimento / precos ---- */
.special{display:inline-flex;align-items:center;gap:2mm;background:var(--amarelo);color:var(--ink);font-family:var(--display);font-weight:800;font-size:11pt;padding:2.5mm 5mm;border-radius:999px;margin-top:2mm;}
.ptable{width:100%;border-collapse:separate;border-spacing:0;margin-top:8mm;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.ptable th{background:var(--ink);color:#fff;font-family:var(--display);font-size:10pt;text-align:left;padding:4.5mm 6mm;letter-spacing:.04em;}
.ptable td{padding:6mm;border-top:1px solid var(--line);vertical-align:middle;}
.ptable .faixa{font-family:var(--display);font-weight:700;font-size:12pt;color:var(--ink);}
.ptable .de{color:var(--slate);text-decoration:line-through;font-size:12pt;}
.ptable .por{font-family:var(--display);font-weight:800;font-size:18pt;color:var(--verde-700);}
.ptable .por small{display:block;font-size:8.5pt;color:var(--slate);font-weight:600;letter-spacing:.02em;}
.ptable tr:nth-child(even) td{background:var(--soft);}
.recap{margin-top:8mm;border:1px dashed var(--verde);background:var(--verde-100);border-radius:10px;padding:5mm 6mm;}
.recap b{color:var(--verde-700);}
.recap p{font-size:10pt;color:var(--ink);line-height:1.5;}
.valid{display:flex;gap:8mm;margin-top:7mm;flex-wrap:wrap;font-size:10pt;color:var(--slate);}
.valid b{color:var(--ink);}
.note{margin-top:5mm;font-size:8.5pt;color:var(--slate);line-height:1.5;}
</style></head>
<body>

<!-- 1. CAPA -->
<section class="page surface-dark cover">
  <div>
    <div class="brand">Kodar${edu("Edu")}</div>
    <div class="pills">
      <span class="pill">Simulados TRI</span>
      <span class="pill">Produção Textual com IA</span>
      <span class="pill">Cursos EAD</span>
      <span class="pill">${edu("Edu.IA")}</span>
      <span class="pill">White Label</span>
    </div>
    <h1>A plataforma educacional completa.<br/>Com a sua marca.</h1>
    <p class="sub">${SITE.description}</p>
  </div>
  <div class="cover-hero">${img("/assets/prints/home-dashboard.svg")}<img class="cover-mascot" src="${asset("/assets/mascots/edu-ia.png")}" alt="" /></div>
  <div class="cover-foot">
    <a href="https://kodaredu.com.br"><b>Site</b> &nbsp;kodaredu.com.br</a>
    <a href="mailto:${SITE.email}"><b>E-mail</b> &nbsp;${SITE.email}</a>
  </div>
</section>

<!-- 2. O QUE E + NUMEROS -->
<section class="page">
  <span class="eyebrow">Quem somos</span>
  <h2 class="h2">Uma plataforma ${edu("educacional")} completa e white label</h2>
  <div class="kicker-line"></div>
  <p class="lead">A KodarEdu reúne, em um só lugar e com a marca da sua instituição, tudo o que uma avaliação de qualidade precisa: simulados ENEM e SAEB por TRI, Produção Textual com IA, provas com leitor OMR, banco de itens, Cursos EAD, ${edu("Edu.IA")} para professores e relatórios acionáveis. Da criação à análise, sem depender de equipe de TI.</p>
  <div class="stats">
    ${STATS.map((s) => `<div class="stat"><div class="num">${s.value}${s.suffix}</div>${s.stars ? `<div class="st">${stars}</div>` : ""}<div class="lbl">${s.label}</div></div>`).join("")}
  </div>
  <div style="margin-top:11mm"><span class="eyebrow" style="margin-bottom:0">Por que a KodarEdu</span></div>
  <div class="pillars">
    ${PILLARS.map((p, i) => `<div class="pillar"><div class="dot">0${i + 1}</div><h3>${p.title}</h3><p>${p.text}</p></div>`).join("")}
  </div>
</section>

<!-- 3. VISAO GERAL -->
<section class="page">
  <span class="eyebrow">A plataforma</span>
  <h2 class="h2">Robusta por dentro, simples por fora</h2>
  <p class="lead">Uma plataforma completa, organizada em três frentes que cobrem todo o ciclo avaliativo, do preparo da prova à inteligência de dados.</p>
  <div class="groups">
    ${PLATFORM_GROUPS.map((g) => `<div class="group"><div class="gh">${edu(g.title)}</div><ul>${g.items.map((i) => `<li>${edu(i)}</li>`).join("")}</ul></div>`).join("")}
  </div>
  <div style="margin-top:11mm"><span class="eyebrow" style="margin-bottom:0">Feita para o dia a dia</span></div>
  <div class="caps">
    ${PLATFORM_CAPABILITIES.map((c) => `<div class="cap"><span class="ck">✓</span><div><b>${c.title}.</b> <span>${c.text}</span></div></div>`).join("")}
  </div>
</section>

<!-- 4. SOLUCOES I -->
<section class="page">
  <span class="eyebrow">Soluções</span>
  <h2 class="h2">Avaliações & Ferramentas</h2>
  <p class="lead">Crie, aplique e corrija no formato que a instituição precisar, com correção objetiva, discursiva e por TRI.</p>
  <div class="sol-grid">${SOLUTION_CARDS.slice(0, 4).map(card).join("")}</div>
</section>

<!-- 5. SOLUCOES II -->
<section class="page">
  <span class="eyebrow">Soluções</span>
  <h2 class="h2">${edu("Recursos Edu")}</h2>
  <p class="lead">Cursos EAD, trilhas adaptativas, integração físico-digital e um assistente de IA que devolve horas ao professor.</p>
  <div class="sol-grid">${SOLUTION_CARDS.slice(4).map(card).join("")}</div>
</section>

<!-- 6. RELATORIOS -->
<section class="page">
  <span class="eyebrow">Relatórios & Inteligência de Dados</span>
  <h2 class="h2">Decisões pedagógicas guiadas por dados precisos</h2>
  <p class="lead">Transforme cada avaliação em inteligência acionável: visão por aluno, turma, competência e habilidade, com réguas ENEM/SAEB por TRI e integração ao ERP escolar.</p>
  <div class="report-hero">${img("/assets/prints/relatorios-consolidado.svg")}</div>
  <div class="views">
    ${REPORT_VIEWS.map((v) => `<div class="view"><h3>${v.title}</h3><p>${v.text}</p></div>`).join("")}
  </div>
</section>

<!-- 7. ACESSOS E PERFIS -->
<section class="page">
  <span class="eyebrow">Acessos & Perfis</span>
  <h2 class="h2">Para quem é, e o que cada um acessa</h2>
  <p class="lead">A plataforma controla acessos por nível: cada perfil vê só o que precisa, simples para quem usa e seguro para a instituição.</p>
  <div class="perfis">
    ${PERFIS.map((p) => `<div class="perfil"><div class="pb" style="background:${p.color}">${p.name[0]}</div><h3>${p.name}</h3><p>${p.desc}</p></div>`).join("")}
  </div>
  <div style="margin-top:9mm"><span class="eyebrow" style="margin-bottom:0">O que cada perfil acessa</span></div>
  <table class="matrix">
    <thead><tr><th>Permissão</th>${PERFIL_HEADERS.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
    <tbody>
      ${PERMISSIONS.map(([label, flags]) => `<tr><td>${edu(label)}</td>${flags.map((on) => `<td>${on ? '<span class="yes">✓</span>' : '<span class="no">—</span>'}</td>`).join("")}</tr>`).join("")}
    </tbody>
  </table>
</section>

<!-- 8. WHITE LABEL -->
<section class="page">
  <span class="eyebrow">White Label / Personalização</span>
  <h2 class="h2">A plataforma com a cara da sua marca</h2>
  <p class="lead">Os alunos veem a sua instituição, não a KodarEdu: cores, logo, links, domínio e até um app na sua marca. Personalização real, sem custo de desenvolvimento.</p>
  <div class="wl-hero">${img("/assets/photos/white-label-devices.jpg")}</div>
  <div class="wl-grid">
    ${WHITE_LABEL.map((w) => `<div class="wl"><span class="ck">◆</span><div><b>${w.title}.</b> <span>${w.text}</span></div></div>`).join("")}
  </div>
</section>

<!-- 8b. TUDO INCLUSO -->
<section class="page">
  <span class="eyebrow">Tudo incluso</span>
  <h2 class="h2">Mais que uma plataforma: um parceiro de operação</h2>
  <p class="lead">Você não leva só um software: leva uma operação completa, no ar e evoluindo, com suporte humano de verdade, sem custos ocultos.</p>
  <div class="duo">
    ${DUO.map(([h, d]) => `<div class="duo-card"><div class="duo-h">${h}</div><p>${d}</p></div>`).join("")}
  </div>
  <div class="incluso">
    ${INCLUSO.map(([b, d]) => `<div class="inc"><span class="ck">✓</span><div><b>${edu(b)}.</b> <span>${edu(d)}</span></div></div>`).join("")}
  </div>
  <div style="margin-top:10mm"><span class="eyebrow" style="margin-bottom:0">SLA · tempo de resposta</span></div>
  <div class="sla">
    ${SLA.map(([l, tm, d]) => `<div class="s"><div class="lvl">${l}</div><div class="tm">${tm}</div><div class="ds">${d}</div></div>`).join("")}
  </div>
</section>

<!-- 9. PARA QUEM -->
<section class="page">
  <span class="eyebrow">Para quem</span>
  <h2 class="h2">Feita para quem aplica avaliação de verdade</h2>
  <div class="aud-grid">
    ${[
      { ...AUDIENCES[0], photo: "/assets/photos/para-escolas-hero.jpg" },
      { ...AUDIENCES[1], photo: "/assets/photos/para-cursinhos-hero.jpg" },
      { ...AUDIENCES[2], photo: "/assets/photos/para-redes-hero.jpg" },
      { ...AUDIENCES[3], photo: "/assets/photos/para-editoras-hero.jpg" },
    ]
      .map((a) => `<div class="aud">${img(a.photo)}<div class="ab"><h3>${a.title}</h3><p>${a.text}</p></div></div>`)
      .join("")}
  </div>
</section>

<!--PRICING_PAGE-->
<!-- 10. CTA / PROXIMOS PASSOS -->
<section class="page surface-dark cta">
  <span class="eyebrow">Próximos passos</span>
  <h1>Leve a plataforma educacional completa para a sua instituição.</h1>
  <p class="sub">Veja a KodarEdu funcionando com a sua marca. Implantação em poucos dias, sem equipe de TI, com suporte humano dedicado.</p>
  <div class="steps">
    <div class="step"><div class="n">01</div><div class="tt">Demonstração</div><div class="ds">Conheça a plataforma com a marca da sua instituição.</div></div>
    <div class="step"><div class="n">02</div><div class="tt">Implantação</div><div class="ds">Embarque de dados, infraestrutura e branding white label.</div></div>
    <div class="step"><div class="n">03</div><div class="tt">Operação</div><div class="ds">No ar, com suporte 24/7 e atendimento aos professores.</div></div>
  </div>
  <a class="btn-wpp" href="${SITE.whatsapp}">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 1.8a8.2 8.2 0 11-4.2 15.2l-.3-.2-2.8.9.9-2.7-.2-.3A8.2 8.2 0 0112 3.8zm4.7 10.3c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-2-1.2 7.5 7.5 0 01-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2c0 1.3.9 2.5 1.1 2.7s1.9 2.9 4.6 4c1.6.7 2.2.7 3 .6.5 0 1.5-.6 1.7-1.2s.2-1.1.1-1.2l-.4-.2z"/></svg>
    Fale com um especialista
  </a>
  <div class="contact">
    <div class="ci"><div class="k">E-mail</div><div class="v"><a href="mailto:${SITE.email}">${SITE.email}</a></div></div>
    <div class="ci"><div class="k">Site</div><div class="v"><a href="https://kodaredu.com.br">kodaredu.com.br</a></div></div>
  </div>
  <div class="footer-brand">
    <div class="brand">Kodar${edu("Edu")}</div>
    <span>Plataforma educacional completa e white label</span>
  </div>
</section>

</body></html>`;

// ---- página de preço (30%) ----------------------------------------------
const pricingPage = `
<!-- PRECOS (30%) -->
<section class="page">
  <span class="eyebrow">Investimento</span>
  <h2 class="h2">Condição especial para a sua instituição</h2>
  <div><span class="special">★ Oferta especial · 30% de desconto em todas as assinaturas</span></div>
  <p class="lead">Condição exclusiva desta proposta: <b>30% de desconto</b> em todas as faixas. Quanto maior a base de estudantes, menor o valor por estudante, chegando a <b>R$ 1,00</b>.</p>
  <table class="ptable">
    <thead><tr><th>Faixa de estudantes</th><th>De</th><th>Por (−30%)</th></tr></thead>
    <tbody>
      ${PRICING30.map((p) =>
        p.consulta
          ? `<tr><td class="faixa">${p.faixa}</td><td class="de">—</td><td><span class="por" style="font-size:13pt">Sob consulta</span></td></tr>`
          : `<tr><td class="faixa">${p.faixa}</td><td class="de">${p.de}</td><td><span class="por">${p.por}<small>por estudante / mês</small></span></td></tr>`
      ).join("")}
    </tbody>
  </table>
  <div class="recap">
    <p><b>Tudo incluso na mensalidade:</b> sustentação, evolução contínua, suporte 24/7, SLA com tempo de resposta e atendimento técnico aos professores. White label completo. <b>Implantação (embarque de avaliações, usuários e conteúdos, infraestrutura dedicada e branding): prazo e valor a negociar conforme o plano.</b></p>
  </div>
  <div class="valid">
    <span><b>Proposta válida por 30 dias.</b></span>
    <span><b>Garantia de 30 dias</b> sem risco.</span>
    <span><b>Implantação:</b> prazo conforme o plano.</span>
  </div>
  <p class="note">Valores mensais por estudante ativo, já com 30% de desconto da oferta especial. A faixa é definida pelo total de estudantes; acima de 20.000, valores sob consulta. Cobrança recorrente com nota fiscal.</p>
</section>`;

// ---- render (dois PDFs: sem preços e com preços 30%) ---------------------
const VARIANTS = [
  { out: "kodaredu-folder-comercial.pdf", html: html.replace("<!--PRICING_PAGE-->", ""), prev: "folder" },
  { out: "kodaredu-plataforma-completa-precos.pdf", html: html.replace("<!--PRICING_PAGE-->", pricingPage), prev: "precos" },
];

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
for (const v of VARIANTS) {
  const page = await browser.newPage();
  await page.setContent(v.html, { waitUntil: "networkidle0" });
  await page.evaluateHandle("document.fonts.ready");
  await page.pdf({ path: join(PUBLIC, v.out), format: "A4", printBackground: true, preferCSSPageSize: true });
  if (process.env.PREVIEW === "1") {
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.4 });
    const secs = await page.$$("section.page");
    for (let i = 0; i < secs.length; i++) {
      await secs[i].screenshot({ path: `/tmp/folder-preview/${v.prev}-p${i + 1}.png` });
    }
    console.log(`Previews ${v.prev}:`, secs.length);
  }
  await page.close();
  console.log("Gerado:", v.out);
}
await browser.close();
