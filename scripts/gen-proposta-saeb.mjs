// Gera a PROPOSTA COMERCIAL em PDF focada no SAEB (sem ENEM), a partir do
// folder comercial. Reaproveita assets, cores e fontes do site.
// Saida: public/kodaredu-proposta-saeb.pdf
//
// Uso: node scripts/gen-proposta-saeb.mjs   (PREVIEW=1 gera PNGs em /tmp/proposta-preview)

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import puppeteer from "puppeteer";
import { SITE, STATS, PILLARS, PLATFORM_CAPABILITIES, ACCESS_PROFILES } from "../lib/site.js";
import { SOLUTIONS } from "../lib/solutions.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

// Cliente desta proposta (edite aqui).
const CLIENT = "a sua editora";
const VALIDADE = "30 dias";

// ---- helpers -------------------------------------------------------------
function asset(p) {
  const file = join(PUBLIC, p.replace(/^\//, ""));
  if (!existsSync(file)) {
    console.warn("asset ausente:", p);
    return "";
  }
  const buf = readFileSync(file);
  const ext = p.split(".").pop().toLowerCase();
  const mime = ext === "svg" ? "image/svg+xml" : ext === "png" ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

// Remove qualquer menção a ENEM (a proposta é só SAEB).
function noEnem(str) {
  return String(str)
    .replace(/\s+e\s+ao\s+enem/gi, "")
    .replace(/\s+ao\s+enem/gi, "")
    .replace(/simulados?\s+enem\s+e\s+saeb/gi, "Simulados SAEB")
    .replace(/enem\s+e\s+saeb/gi, "SAEB")
    .replace(/saeb\s+e\s+enem/gi, "SAEB")
    .replace(/r[ée]guas?\s+enem\s*\/\s*saeb/gi, "régua oficial do SAEB")
    .replace(/enem\s*\/\s*saeb/gi, "SAEB")
    .replace(/padr[ãa]o\s+enem\s+real/gi, "padrão oficial")
    .replace(/no\s+padr[ãa]o\s+enem/gi, "no padrão oficial")
    .replace(/padr[ãa]o\s+enem/gi, "padrão oficial")
    .replace(/\s*\(?\s*enem\s*\)?/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

// Realca a marca "Edu" (E verde, d amarelo, u azul) sem afetar "Educacional".
function edu(str) {
  return String(str).replace(
    /(Edu)(?![a-zà-ú])/g,
    '<span class="edu"><span style="color:var(--verde)">E</span><span style="color:var(--amarelo)">d</span><span style="color:var(--azul)">u</span></span>'
  );
}
const t = (s) => edu(noEnem(s)); // texto seguro: sem ENEM + marca Edu
const img = (p, cls = "") => `<img class="${cls}" src="${asset(p)}" alt="" />`;

// ---- conteudo -----------------------------------------------------------
// Recursos inclusos (sem ENEM; SAEB tem pagina propria de destaque).
const SOLUTION_CARDS = [
  {
    title: "Criação e Correção de Provas",
    tag: "IA · OMR",
    print: "/assets/prints/editor-prova.svg",
    text: "Monte provas com layout profissional e corrija por leitor OMR ou câmera, online ou impresso. Inclui banco de itens para montar atividades.",
    bullets: ["Banco de itens para atividades", "Itens autorais ou cadastro dos seus itens", "Correção automática (OMR/câmera)"],
  },
  {
    title: "Produção Textual",
    tag: "IA + Especialista",
    print: "/assets/prints/redacao-correcao.svg",
    text: "Correção de redação por competências com IA + corretor humano, OCR de manuscritos e evolução por habilidade.",
    bullets: ["Vários gêneros textuais", "OCR de manuscritos", "IA + especialista humano"],
  },
  {
    title: "Cursos EAD",
    tag: "Formação continuada",
    print: "/assets/prints/cursos-ead.svg",
    text: "O cliente cria seus próprios cursos, com a sua marca, para professores e estudantes: vídeos, videoaulas, questões, quiz, podcasts e certificados, com acompanhamento de progresso. Ideal para a formação continuada dos professores.",
    bullets: ["Vídeos, videoaulas, quiz e podcasts", "Certificados e progresso por curso", "Para professores e estudantes"],
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

const SAEB_FEATURES = [
  ["Alinhado ao SAEB e à BNCC", "Itens e escala fiéis à avaliação nacional."],
  ["Correção por TRI calibrada", "Nota comparável ao padrão oficial do SAEB."],
  ["Benchmark nacional", "Compare cada rede atendida com referências do país."],
  ["Visão por escola e rede", "Indicadores consolidados e por unidade."],
  ["Por habilidade", "Granularidade que orienta a intervenção pedagógica."],
  ["Online ou impresso", "Aplicação flexível conforme a infraestrutura."],
];

const REPORT_VIEWS = [
  ["Por rede", "Visão consolidada de todas as unidades."],
  ["Por escola", "Comparativos e ranking entre unidades."],
  ["Por turma", "Onde avançar e onde reforçar."],
  ["Por habilidade", "Leitura alinhada à BNCC, que orienta o plano."],
  ["Evolução", "Progresso por ciclo e por avaliação."],
  ["Exportável", "Dados prontos para a gestão pública."],
];

const WHITE_LABEL = [
  ["Marca da editora", "Seu logo e identidade em todas as telas, e-mails e relatórios."],
  ["Paleta de cores", "A interface assume as cores da sua editora."],
  ["Domínio próprio", "Acesso no seu endereço, não no da KodarEdu."],
  ["Sub-marca por rede", "Opcional: cada rede atendida com a própria identidade."],
];

const INCLUSO = [
  ["Sustentação completa", "Infra em nuvem, atualizações e manutenção por nossa conta."],
  ["Evolução contínua", "Novas funcionalidades e melhorias, sem cobrança extra."],
  ["Suporte 24/7", "Atendimento humano todos os dias, inclusive fins de semana."],
  ["SLA com tempo de resposta", "Prioridades e prazos definidos em contrato."],
  ["Auxílio no embarque", "Onboarding guiado, migração de dados e configuração da marca."],
  ["Atendimento aos professores", "Equipe técnica da Kodar apoia os professores das redes atendidas."],
  ["Segurança e LGPD", "Conformidade desde a arquitetura; dados das redes protegidos."],
  ["White label completo", "A plataforma inteira com a marca da sua editora."],
];

const IMPLANT = [
  ["Embarque de avaliações", "Configuração e migração das avaliações no padrão da sua operação."],
  ["Embarque de usuários", "Carga de alunos, professores e gestores das redes atendidas."],
  ["Embarque de conteúdos", "Itens, provas, cursos e materiais da sua editora."],
  ["Infraestrutura dedicada", "Ambiente dedicado e isolado para a sua editora."],
  ["Personalização do branding", "Identidade white label da editora (e sub-marca por rede)."],
  ["Onboarding e treinamento", "Capacitação das equipes da editora e das redes."],
];

const SLA = [
  ["Crítico (P1)", "≤ 4 horas", "Plataforma indisponível"],
  ["Alto (P2)", "≤ 8 horas", "Função essencial afetada"],
  ["Padrão (P3)", "≤ 24h úteis", "Dúvidas e ajustes"],
];

// Perfis de acesso (puxados de /plataforma/acessos) + cor da inicial.
const PERFIL_COLORS = { aluno: "var(--verde)", professor: "var(--azul)", gestao: "var(--ink)", rede: "var(--verde-700)" };
const PERFIS = ACCESS_PROFILES.map((p) => ({ name: p.name, desc: p.desc, color: PERFIL_COLORS[p.slug] || "var(--verde)" }));

// Matriz de permissoes: [Aluno, Professor, Gestor/Coordenacao, Rede]
const PERFIL_HEADERS = ["Aluno", "Professor", "Gestor/Coord.", "Rede"];
const PERMISSIONS = [
  ["Realizar avaliações e simulados", [1, 0, 0, 0]],
  ["Trilha e evolução pessoal", [1, 0, 0, 0]],
  ["Criar e aplicar provas (IA)", [0, 1, 1, 0]],
  ["Corrigir redações (IA + OCR)", [0, 1, 1, 0]],
  ["Leitor OMR e correção por câmera", [0, 1, 1, 0]],
  ["Edu.IA (assistente do professor)", [0, 1, 1, 0]],
  ["Relatórios de turma", [0, 1, 1, 1]],
  ["Relatórios da instituição/rede", [0, 0, 1, 1]],
  ["Gestão de usuários", [0, 0, 1, 1]],
  ["Visão multiunidade", [0, 0, 0, 1]],
  ["Configurar white label", [0, 0, 1, 1]],
];

// Oferta especial: 30% de desconto em todas as assinaturas (por = de x 0,70).
// Escala contínua por total de estudantes atendidos, terminando em R$ 1,00.
const PRICING = [
  { faixa: "Até 2.000 estudantes", de: "R$ 3,00", por: "R$ 2,10" },
  { faixa: "2.001 a 6.000 estudantes", de: "R$ 2,29", por: "R$ 1,60" },
  { faixa: "6.001 a 12.000 estudantes", de: "R$ 1,86", por: "R$ 1,30" },
  { faixa: "12.001 a 20.000 estudantes", de: "R$ 1,43", por: "R$ 1,00" },
  { faixa: "Acima de 20.000 estudantes", consulta: true },
];

const card = (s) => `
  <div class="sol-card">
    <div class="sol-thumb">${img(s.print)}${s.mascot ? `<img class="sol-mascot" src="${asset(s.mascot)}" alt="" />` : ""}</div>
    <div class="sol-body">
      <div class="sol-head"><h3>${t(s.title)}</h3><span class="tag">${t(s.tag)}</span></div>
      <p>${t(s.text)}</p>
      <ul>${s.bullets.map((b) => `<li>${t(b)}</li>`).join("")}</ul>
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
.page{position:relative;width:210mm;height:297mm;overflow:hidden;page-break-after:always;padding:16mm 15mm;display:flex;flex-direction:column;}
.page:last-child{page-break-after:auto;}
.surface-dark{background:linear-gradient(135deg,#0b1033 0%,#0e1e4d 52%,#15327a 100%);color:#fff;}
h1,h2,h3,.display{font-family:var(--display);}
.eyebrow{display:inline-block;font-family:var(--display);font-weight:700;font-size:10pt;letter-spacing:.12em;text-transform:uppercase;color:var(--verde-700);margin-bottom:6mm;}
.surface-dark .eyebrow{color:var(--amarelo-300);}
.edu{font-family:var(--display);font-weight:800;}
.kicker-line{width:18mm;height:3px;background:var(--amarelo);border-radius:2px;margin:5mm 0;}
.h2{font-size:22pt;font-weight:800;line-height:1.1;max-width:165mm;}
.lead{font-size:11.5pt;line-height:1.6;color:var(--slate);max-width:165mm;margin-top:4mm;}

/* Capa */
.cover{justify-content:space-between;}
.brand{font-family:var(--display);font-weight:800;font-size:24pt;}
.tagprop{display:inline-block;margin-top:7mm;font-family:var(--display);font-weight:700;font-size:10pt;letter-spacing:.14em;text-transform:uppercase;color:var(--amarelo-300);}
.cover h1{font-size:33pt;line-height:1.06;font-weight:800;margin-top:3mm;max-width:170mm;}
.cover .sub{font-size:12.5pt;line-height:1.55;color:#dfe4ff;margin-top:6mm;max-width:155mm;}
.pills{display:flex;gap:3mm;flex-wrap:wrap;margin-top:6mm;}
.pill{font-size:9.5pt;font-weight:600;padding:2mm 4mm;border-radius:999px;background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);}
.cover-hero{position:relative;margin-top:7mm;border:1px solid rgba(255,255,255,.18);border-radius:10px;overflow:hidden;background:#fff;box-shadow:0 18px 50px rgba(0,0,0,.35);}
.cover-hero img{width:100%;display:block;}
.cover-foot{display:flex;gap:8mm;flex-wrap:wrap;font-size:10.5pt;color:#cfd6ff;border-top:1px solid rgba(255,255,255,.16);padding-top:6mm;}
.cover-foot b{color:#fff;font-weight:600;}

/* Stats / pilares */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:5mm;margin-top:9mm;}
.stat{background:var(--soft);border:1px solid var(--line);border-radius:10px;padding:6mm 5mm;}
.stat .num{font-family:var(--display);font-weight:800;font-size:21pt;color:var(--ink);}
.stat .lbl{font-size:9.5pt;color:var(--slate);margin-top:1mm;}
.stat .st{color:var(--amarelo);font-size:11pt;letter-spacing:1px;}
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin-top:9mm;}
.pillar{border:1px solid var(--line);border-radius:10px;padding:6mm 5mm;background:#fff;}
.pillar .dot{width:9mm;height:9mm;border-radius:8px;background:var(--verde-100);display:flex;align-items:center;justify-content:center;color:var(--verde-700);font-family:var(--display);font-weight:800;margin-bottom:4mm;}
.pillar h3{font-size:12.5pt;margin-bottom:2mm;}
.pillar p{font-size:10pt;color:var(--slate);line-height:1.5;}

/* SAEB destaque */
.saeb-hero{margin-top:6mm;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--soft);}
.saeb-hero img{width:100%;height:74mm;object-fit:cover;object-position:top;display:block;}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-top:7mm;}
.duo-card{border:1px solid var(--line);border-left:3px solid var(--verde);border-radius:10px;padding:5mm;background:var(--soft);}
.duo-h{font-family:var(--display);font-weight:800;font-size:11pt;color:var(--ink);margin-bottom:2mm;}
.duo-card p{font-size:9.6pt;line-height:1.5;color:var(--slate);}
.duo-card b{color:var(--ink);}
.caps{display:grid;grid-template-columns:repeat(2,1fr);gap:3.5mm 6mm;margin-top:7mm;}
.cap{display:flex;gap:3mm;align-items:flex-start;}
.cap .ck{color:var(--verde);font-weight:800;font-size:12pt;line-height:1.2;}
.cap b{font-size:10.5pt;}
.cap span{font-size:9.5pt;color:var(--slate);}

/* Cards de solucao */
.sol-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:5mm;margin-top:7mm;}
.sol-card{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff;display:flex;flex-direction:column;}
.sol-thumb{position:relative;background:var(--soft);border-bottom:1px solid var(--line);padding:3mm;}
.sol-thumb > img{width:100%;height:38mm;object-fit:cover;object-position:top;border-radius:6px;}
.sol-mascot{position:absolute;right:5mm;bottom:5mm;width:18mm;height:18mm;object-fit:contain;border-radius:50%;background:#fff;border:2px solid var(--line);box-shadow:0 6px 16px rgba(11,16,51,.18);}
.sol-body{padding:4mm 5mm 5mm;}
.sol-head{display:flex;align-items:center;justify-content:space-between;gap:3mm;}
.sol-head h3{font-size:12.5pt;}
.tag{font-size:8.5pt;font-weight:700;color:var(--azul);background:#eaf0ff;border-radius:999px;padding:1.4mm 3mm;white-space:nowrap;}
.sol-body p{font-size:9.8pt;color:var(--slate);line-height:1.5;margin-top:2mm;}
.sol-body ul{list-style:none;margin-top:3mm;}
.sol-body li{font-size:9.5pt;padding:1mm 0 1mm 6mm;position:relative;color:var(--ink);}
.sol-body li::before{content:"✓";position:absolute;left:0;color:var(--verde);font-weight:800;}

/* Acessos & Perfis */
.perfis{display:grid;grid-template-columns:repeat(4,1fr);gap:4mm;margin-top:7mm;}
.perfil{border:1px solid var(--line);border-radius:10px;padding:5mm 4mm;background:#fff;}
.perfil .pb{width:10mm;height:10mm;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:13pt;color:#fff;margin-bottom:3mm;}
.perfil h3{font-size:11pt;}
.perfil p{font-size:8.8pt;color:var(--slate);line-height:1.4;margin-top:1.5mm;}
.matrix{width:100%;border-collapse:separate;border-spacing:0;margin-top:7mm;border:1px solid var(--line);border-radius:12px;overflow:hidden;font-size:9.2pt;}
.matrix th{background:var(--ink);color:#fff;font-family:var(--display);font-weight:700;padding:3.5mm 2mm;text-align:center;font-size:9pt;}
.matrix th:first-child{text-align:left;padding-left:5mm;}
.matrix td{padding:2.8mm 2mm;border-top:1px solid var(--line);text-align:center;}
.matrix td:first-child{text-align:left;padding-left:5mm;color:var(--ink);font-weight:500;}
.matrix tr:nth-child(even) td{background:var(--soft);}
.matrix .yes{color:var(--verde);font-weight:800;font-size:11pt;}
.matrix .no{color:#c7ccdd;}

/* Relatorios */
.report-hero{margin-top:7mm;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--soft);}
.report-hero img{width:100%;display:block;}
.views{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm;margin-top:7mm;}
.view{border:1px solid var(--line);border-radius:9px;padding:5mm;background:#fff;}
.view h3{font-size:11.5pt;margin-bottom:1.5mm;}
.view p{font-size:9.5pt;color:var(--slate);line-height:1.45;}

/* White label */
.wl-hero{margin-top:7mm;border:1px solid var(--line);border-radius:10px;overflow:hidden;}
.wl-hero img{width:100%;display:block;}
.wl-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:4mm 6mm;margin-top:7mm;}
.wl{display:flex;gap:3mm;align-items:flex-start;}
.wl .ck{color:var(--azul);font-weight:800;font-size:12pt;}
.wl b{font-size:11pt;}
.wl span{font-size:9.6pt;color:var(--slate);}

/* Tudo incluso */
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

/* Investimento */
.special{display:inline-flex;align-items:center;gap:2mm;background:var(--amarelo);color:var(--ink);font-family:var(--display);font-weight:800;font-size:11pt;padding:2.5mm 5mm;border-radius:999px;margin-top:2mm;}
.ptable{width:100%;border-collapse:separate;border-spacing:0;margin-top:8mm;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.ptable th{background:var(--ink);color:#fff;font-family:var(--display);font-size:10pt;text-align:left;padding:4.5mm 6mm;letter-spacing:.04em;}
.ptable td{padding:6mm;border-top:1px solid var(--line);vertical-align:middle;}
.ptable .faixa{font-family:var(--display);font-weight:700;font-size:12pt;color:var(--ink);}
.ptable .de{color:var(--slate);text-decoration:line-through;font-size:12pt;}
.ptable .por{font-family:var(--display);font-weight:800;font-size:18pt;color:var(--verde-700);}
.ptable .por small{display:block;font-size:8.5pt;color:var(--slate);font-weight:600;letter-spacing:.02em;}
.ptable tr:nth-child(even) td{background:var(--soft);}
.recap{margin-top:8mm;border:1px dashed var(--verde-500,#1ba559);background:var(--verde-100);border-radius:10px;padding:5mm 6mm;}
.recap b{color:var(--verde-700);}
.recap p{font-size:10pt;color:var(--ink);line-height:1.5;}
.valid{display:flex;gap:8mm;margin-top:7mm;flex-wrap:wrap;font-size:10pt;color:var(--slate);}
.valid b{color:var(--ink);}
.note{margin-top:5mm;font-size:8.5pt;color:var(--slate);line-height:1.5;}

/* CTA final */
.cta{justify-content:center;}
.cta .eyebrow{color:var(--amarelo-300);}
.cta h1{font-size:29pt;font-weight:800;line-height:1.12;max-width:160mm;}
.cta .sub{font-size:12pt;color:#dfe4ff;margin-top:6mm;line-height:1.55;max-width:155mm;}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin-top:9mm;}
.step{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:5mm;}
.step .n{font-family:var(--display);font-weight:800;color:var(--amarelo-300);font-size:13pt;}
.step .tt{color:#fff;font-weight:600;margin-top:1.5mm;font-size:11pt;}
.step .ds{color:#cfd6ff;font-size:9pt;margin-top:1mm;}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-top:9mm;max-width:165mm;}
.contact .ci{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:5mm 6mm;}
.contact .ci .k{font-size:9pt;text-transform:uppercase;letter-spacing:.1em;color:var(--amarelo-300);font-weight:700;}
.contact .ci .v{font-size:12.5pt;font-weight:600;margin-top:2mm;color:#fff;font-family:var(--display);}
.footer-brand{margin-top:auto;padding-top:8mm;border-top:1px solid rgba(255,255,255,.16);display:flex;justify-content:space-between;align-items:center;font-size:10pt;color:#cfd6ff;}
.footer-brand .brand{font-size:15pt;}
.cover-foot a{color:#cfd6ff;text-decoration:none;}
.cover-foot a b{color:#fff;}
.contact .ci a{color:#fff;text-decoration:none;}
.btn-wpp{display:inline-flex;align-items:center;gap:3mm;margin-top:9mm;background:var(--amarelo);color:var(--ink);font-family:var(--display);font-weight:800;font-size:13pt;padding:4.5mm 9mm;border-radius:999px;text-decoration:none;box-shadow:0 10px 26px rgba(255,196,0,.3);}
.btn-wpp svg{width:18px;height:18px;}
</style></head>
<body>

<!-- 1. CAPA -->
<section class="page surface-dark cover">
  <div>
    <div class="brand">Kodar${edu("Edu")}</div>
    <span class="tagprop">Proposta comercial</span>
    <h1>Avaliação no padrão SAEB, embarcada na solução da sua editora.</h1>
    <p class="sub">Preparada para ${CLIENT}. Embarque a KodarEdu como a camada de avaliação do seu produto, com a sua marca, e ofereça diagnóstico no padrão SAEB às redes e escolas que você atende, sem desenvolver do zero e sem competir com a sua marca.</p>
  </div>
  <div class="cover-hero">${img("/assets/prints/relatorio-gestor.svg")}</div>
  <div class="cover-foot">
    <a href="https://kodaredu.com.br"><b>Site</b> &nbsp;kodaredu.com.br</a>
    <a href="mailto:${SITE.email}"><b>E-mail</b> &nbsp;${SITE.email}</a>
  </div>
</section>

<!-- 2. QUEM SOMOS + NUMEROS -->
<section class="page">
  <span class="eyebrow">Quem somos</span>
  <h2 class="h2">A camada de avaliação que fortalece a sua editora</h2>
  <div class="kicker-line"></div>
  <p class="lead">A KodarEdu é a infraestrutura de avaliação que a sua editora embarca no próprio produto, com a sua marca. Em um só ambiente: avaliação no padrão SAEB por TRI, Produção Textual com IA, provas com leitor OMR, banco de itens para atividades, Cursos EAD, ${edu("Edu.IA")} e relatórios, para você entregar às redes e escolas clientes, sem desenvolver do zero e sem competir com a sua marca.</p>
  <div class="stats">
    ${STATS.map((s) => `<div class="stat"><div class="num">${s.value}${s.suffix}</div>${s.stars ? `<div class="st">${stars}</div>` : ""}<div class="lbl">${s.label}</div></div>`).join("")}
  </div>
  <div style="margin-top:11mm"><span class="eyebrow" style="margin-bottom:0">Por que a KodarEdu</span></div>
  <div class="pillars">
    ${PILLARS.map((p, i) => `<div class="pillar"><div class="dot">0${i + 1}</div><h3>${t(p.title)}</h3><p>${t(p.text)}</p></div>`).join("")}
  </div>
</section>

<!-- 3. SAEB EM DESTAQUE -->
<section class="page">
  <span class="eyebrow">Foco da proposta</span>
  <h2 class="h2">Diagnóstico no padrão SAEB, alinhado à BNCC</h2>
  <p class="lead">Ofereça às redes e escolas atendidas pela sua editora um diagnóstico no padrão SAEB: simulados, correção por TRI calibrada e comparação com o benchmark nacional, fortalecendo o seu produto pedagógico com dados confiáveis.</p>
  <div class="saeb-hero">${img("/assets/prints/relatorio-tri.svg")}</div>
  <div class="caps">
    ${SAEB_FEATURES.map(([b, d]) => `<div class="cap"><span class="ck">✓</span><div><b>${b}.</b> <span>${d}</span></div></div>`).join("")}
  </div>
  <div class="duo">
    <div class="duo-card">
      <div class="duo-h">Itens autorais ou os itens da sua editora</div>
      <p>Desenvolvemos as provas com <b>itens autorais</b> da KodarEdu ou <b>cadastramos as provas e os itens da sua editora</b>, respeitando a metodologia aplicada por você e pelas redes que atende. Você escolhe o caminho.</p>
    </div>
    <div class="duo-card">
      <div class="duo-h">Leitor de gabarito em lote (scanner)</div>
      <p>Correção em lote: digitalize as folhas de resposta no <b>scanner</b> e o leitor faz a leitura automática dos gabaritos, reduzindo o trabalho de inserção da sua equipe em <b>até 80%</b>.</p>
    </div>
  </div>
</section>

<!-- 4. RECURSOS INCLUSOS I -->
<section class="page">
  <span class="eyebrow">Recursos inclusos</span>
  <h2 class="h2">Muito além do simulado SAEB</h2>
  <p class="lead">A mesma plataforma entrega todo o ciclo avaliativo da rede, com IA onde acelera e especialista humano onde importa.</p>
  <div class="sol-grid">${SOLUTION_CARDS.slice(0, 4).map(card).join("")}</div>
</section>

<!-- 5. RECURSOS INCLUSOS II -->
<section class="page">
  <span class="eyebrow">Recursos inclusos</span>
  <h2 class="h2">Integração e inteligência artificial</h2>
  <p class="lead">Una o impresso e o digital e dê aos professores um assistente de IA que devolve horas no dia a dia.</p>
  <div class="sol-grid">${SOLUTION_CARDS.slice(4).map(card).join("")}</div>
</section>

<!-- 6. ACESSOS & PERFIS -->
<section class="page">
  <span class="eyebrow">Acessos & Perfis</span>
  <h2 class="h2">Para quem é, e o que cada um acessa</h2>
  <p class="lead">A plataforma controla acessos por nível para todos os usuários das redes atendidas pela sua editora: cada perfil vê só o que precisa, simples para quem usa e seguro para a operação.</p>
  <div class="perfis">
    ${PERFIS.map((p) => `<div class="perfil"><div class="pb" style="background:${p.color}">${p.name[0]}</div><h3>${p.name}</h3><p>${p.desc}</p></div>`).join("")}
  </div>
  <div style="margin-top:9mm"><span class="eyebrow" style="margin-bottom:0">O que cada perfil acessa</span></div>
  <table class="matrix">
    <thead><tr><th>Permissão</th>${PERFIL_HEADERS.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
    <tbody>
      ${PERMISSIONS.map(([label, flags]) => `<tr><td>${t(label)}</td>${flags.map((on) => `<td>${on ? '<span class="yes">✓</span>' : '<span class="no">—</span>'}</td>`).join("")}</tr>`).join("")}
    </tbody>
  </table>
</section>

<!-- 7. RELATORIOS -->
<section class="page">
  <span class="eyebrow">Relatórios & Inteligência de Dados</span>
  <h2 class="h2">Inteligência de dados para a editora e para cada rede</h2>
  <p class="lead">Cada avaliação vira inteligência acionável para a sua editora e para cada rede atendida: visão por rede, escola, turma e habilidade, com régua do SAEB por TRI e dados prontos para a gestão.</p>
  <div class="report-hero">${img("/assets/prints/relatorios-consolidado.svg")}</div>
  <div class="views">
    ${REPORT_VIEWS.map(([h, d]) => `<div class="view"><h3>${h}</h3><p>${d}</p></div>`).join("")}
  </div>
</section>

<!-- 7. WHITE LABEL -->
<section class="page">
  <span class="eyebrow">White Label / Personalização</span>
  <h2 class="h2">A plataforma com a marca da sua editora</h2>
  <p class="lead">Os usuários veem a marca da sua editora (e, opcionalmente, a marca de cada rede atendida), não a KodarEdu: cores, logo, domínio e até um app próprio. Você fortalece o seu produto, sem custo de desenvolvimento.</p>
  <div class="wl-hero">${img("/assets/photos/white-label-devices.jpg")}</div>
  <div class="wl-grid">
    ${WHITE_LABEL.map(([b, d]) => `<div class="wl"><span class="ck">◆</span><div><b>${b}.</b> <span>${d}</span></div></div>`).join("")}
  </div>
</section>

<!-- 8. TUDO INCLUSO -->
<section class="page">
  <span class="eyebrow">Tudo incluso</span>
  <h2 class="h2">Mais que uma plataforma: um parceiro de operação</h2>
  <p class="lead">Nesta proposta, o valor por estudante já inclui tudo o que mantém a operação da sua editora no ar e evoluindo, sem custos ocultos nem surpresas.</p>
  <div class="incluso">
    ${INCLUSO.map(([b, d]) => `<div class="inc"><span class="ck">✓</span><div><b>${t(b)}.</b> <span>${t(d)}</span></div></div>`).join("")}
  </div>
  <div style="margin-top:10mm"><span class="eyebrow" style="margin-bottom:0">SLA · tempo de resposta</span></div>
  <div class="sla">
    ${SLA.map(([l, tm, d]) => `<div class="s"><div class="lvl">${l}</div><div class="tm">${tm}</div><div class="ds">${d}</div></div>`).join("")}
  </div>
</section>

<!-- 9. IMPLANTACAO & EMBARQUE -->
<section class="page">
  <span class="eyebrow">Implantação & Embarque</span>
  <h2 class="h2">Entrada em operação completa, com infraestrutura dedicada</h2>
  <p class="lead">Cuidamos de toda a entrada em operação da sua editora. O <b>prazo e o valor da implantação são a negociar conforme o plano escolhido</b>, e a implantação já contempla todo o escopo abaixo:</p>
  <div class="incluso">
    ${IMPLANT.map(([b, d]) => `<div class="inc"><span class="ck">✓</span><div><b>${b}.</b> <span>${d}</span></div></div>`).join("")}
  </div>
  <div class="recap" style="margin-top:9mm">
    <p><b>Prazo e valor de implantação:</b> definidos conforme o plano escolhido. Embarque de avaliações, usuários e conteúdos, infraestrutura dedicada e personalização do branding white label já fazem parte do escopo de implantação.</p>
  </div>
</section>

<!-- 10. INVESTIMENTO / CONDICAO ESPECIAL -->
<section class="page">
  <span class="eyebrow">Investimento</span>
  <h2 class="h2">Condição especial para ${CLIENT}</h2>
  <div><span class="special">★ Oferta especial · 30% de desconto em todas as assinaturas</span></div>
  <p class="lead">Condição exclusiva desta proposta para a sua editora: <b>30% de desconto</b> em todas as faixas. Quanto maior a base de estudantes atendida, menor o valor por estudante, chegando a <b>R$ 1,00</b>.</p>
  <table class="ptable">
    <thead><tr><th>Faixa de estudantes atendidos</th><th>De</th><th>Por (−30%)</th></tr></thead>
    <tbody>
      ${PRICING.map((p) =>
        p.consulta
          ? `<tr><td class="faixa">${p.faixa}</td><td class="de">—</td><td><span class="por" style="font-size:13pt">Sob consulta</span></td></tr>`
          : `<tr><td class="faixa">${p.faixa}</td><td class="de">${p.de}</td><td><span class="por">${p.por}<small>por estudante / mês</small></span></td></tr>`
      ).join("")}
    </tbody>
  </table>
  <div class="recap">
    <p><b>Tudo incluso na mensalidade:</b> sustentação, evolução contínua, suporte 24/7, SLA com tempo de resposta e atendimento técnico da equipe Kodar aos professores das redes. White label completo. <b>Implantação (embarque de avaliações, usuários e conteúdos, infraestrutura dedicada e branding): prazo e valor a negociar conforme o plano.</b></p>
  </div>
  <div class="valid">
    <span><b>Proposta válida por ${VALIDADE}.</b></span>
    <span><b>Garantia de 30 dias</b> sem risco.</span>
    <span><b>Implantação:</b> prazo conforme o plano.</span>
  </div>
  <p class="note">Valores mensais por estudante ativo atendido pela sua editora, já com 30% de desconto da oferta especial, exclusiva para esta proposta. A faixa é definida pelo total de estudantes atendidos; acima de 20.000, valores sob consulta. Cobrança recorrente com nota fiscal. Implantação (embarque e infraestrutura dedicada) com prazo e valor a negociar conforme o plano escolhido.</p>
</section>

<!-- 11. CTA / PROXIMOS PASSOS -->
<section class="page surface-dark cta">
  <span class="eyebrow">Próximos passos</span>
  <h1>Vamos embarcar o SAEB no produto da sua editora.</h1>
  <p class="sub">Aprovada a condição especial, cuidamos de toda a implantação com a marca da sua editora e damos suporte às redes que você atende.</p>
  <div class="steps">
    <div class="step"><div class="n">01</div><div class="tt">Aprovação</div><div class="ds">Você valida a proposta, o plano e a faixa de estudantes.</div></div>
    <div class="step"><div class="n">02</div><div class="tt">Embarque</div><div class="ds">Avaliações, usuários e conteúdos, infra dedicada e branding.</div></div>
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

// ---- render --------------------------------------------------------------
const OUT = join(PUBLIC, "kodaredu-proposta-saeb.pdf");
const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox"] });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");
await page.pdf({ path: OUT, format: "A4", printBackground: true, preferCSSPageSize: true });

if (process.env.PREVIEW === "1") {
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.4 });
  const secs = await page.$$("section.page");
  for (let i = 0; i < secs.length; i++) {
    await secs[i].screenshot({ path: `/tmp/proposta-preview/p${i + 1}.png` });
  }
  console.log("Previews:", secs.length);
}
await browser.close();
console.log("Proposta gerada:", OUT);
