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
    text: "Gere questões com IA, monte provas com layout profissional e corrija por leitor OMR ou câmera, online ou impresso.",
    bullets: ["Banco de Itens integrado", "Correção automática (OMR/câmera)", "Integração com o ERP"],
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
    title: "Banco de Itens",
    tag: "Autoral · IA",
    print: "/assets/prints/banco-questoes.svg",
    text: SOLUTIONS["banco-de-questoes"].hero.subtitle,
    bullets: ["Itens inéditos e autorais", "Filtros por habilidade", "Criação/edição com IA"],
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
    items: ["Banco de Itens", "Trilha adaptativa (CAT)", "Integração físico-digital"],
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

/* ---- Perfis ---- */
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
</style></head>
<body>

<!-- 1. CAPA -->
<section class="page surface-dark cover">
  <div>
    <div class="brand">Kodar${edu("Edu")}</div>
    <div class="pills">
      <span class="pill">Simulados TRI</span>
      <span class="pill">Produção Textual com IA</span>
      <span class="pill">Leitor OMR</span>
      <span class="pill">${edu("Edu.IA")}</span>
      <span class="pill">White Label</span>
    </div>
    <h1>A plataforma completa de avaliação.<br/>Com a sua marca.</h1>
    <p class="sub">${SITE.description}</p>
  </div>
  <div class="cover-hero">${img("/assets/prints/home-dashboard.svg")}<img class="cover-mascot" src="${asset("/assets/mascots/edu-ia.png")}" alt="" /></div>
  <div class="cover-foot">
    <span><b>Site</b> &nbsp;kodaredu.com.br</span>
    <span><b>E-mail</b> &nbsp;${SITE.email}</span>
    <span><b>WhatsApp</b> &nbsp;${SITE.whatsappNumber}</span>
  </div>
</section>

<!-- 2. O QUE E + NUMEROS -->
<section class="page">
  <span class="eyebrow">Quem somos</span>
  <h2 class="h2">Uma plataforma ${edu("educacional")} completa e white label</h2>
  <div class="kicker-line"></div>
  <p class="lead">A KodarEdu reúne, em um só lugar e com a marca da sua instituição, tudo o que uma avaliação de qualidade precisa: simulados ENEM e SAEB por TRI, Produção Textual com IA, provas com leitor OMR, Banco de Itens autoral, ${edu("Edu.IA")} para professores e relatórios acionáveis. Da criação à análise, sem depender de equipe de TI.</p>
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
  <h2 class="h2">${edu("Recursos Edu")} e ${edu("Edu.IA")}</h2>
  <p class="lead">Banco autoral, trilhas adaptativas, integração físico-digital e um assistente de IA que devolve horas ao professor.</p>
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
  <h2 class="h2">Cada perfil vê só o que precisa, do aluno ao gestor</h2>
  <div class="profiles">${ACCESS_PROFILES.map(profile).join("")}</div>
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

<!-- 10. CTA / CONTATO -->
<section class="page surface-dark cta">
  <span class="eyebrow">Vamos conversar</span>
  <h1>Leve a plataforma completa de avaliação para a sua instituição.</h1>
  <p class="sub">Agende uma demonstração e veja a KodarEdu funcionando com a marca da sua instituição. Implantação em poucos dias, sem equipe de TI, com suporte humano por WhatsApp.</p>
  <div class="contact">
    <div class="ci"><div class="k">E-mail</div><div class="v">${SITE.email}</div></div>
    <div class="ci"><div class="k">WhatsApp / Telefone</div><div class="v">${SITE.whatsappNumber}</div></div>
    <div class="ci"><div class="k">Plataforma</div><div class="v">app.kodaredu.com.br</div></div>
    <div class="ci"><div class="k">Site</div><div class="v">kodaredu.com.br</div></div>
  </div>
  <div class="guarantee">
    <span><b>Garantia de 30 dias.</b> Sem risco para a instituição.</span>
    <span><b>Planos sob consulta,</b> do essencial ao enterprise de redes.</span>
  </div>
  <div class="footer-brand">
    <div class="brand">Kodar${edu("Edu")}</div>
    <span>Plataforma educacional completa e white label</span>
  </div>
</section>

</body></html>`;

// ---- render --------------------------------------------------------------
const OUT = join(PUBLIC, "kodaredu-folder-comercial.pdf");
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");
await page.pdf({
  path: OUT,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});

// Previews PNG (apenas quando PREVIEW=1) para conferencia visual.
if (process.env.PREVIEW === "1") {
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.4 });
  const secs = await page.$$("section.page");
  for (let i = 0; i < secs.length; i++) {
    await secs[i].screenshot({ path: `/tmp/folder-preview/p${i + 1}.png` });
  }
  console.log("Previews:", secs.length);
}
await browser.close();
console.log("Folder gerado:", OUT);
