// Telas dedicadas para a seção "Inteligência de dados & acessos" da Home.
// Geram mockups específicos por perfil + um painel de relatórios — paleta da logo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "assets", "prints");
mkdirSync(OUT, { recursive: true });

const C = {
  bg: "#F6F8FB",
  card: "#FFFFFF",
  line: "#E4E7EC",
  ink: "#0B1033",
  slate: "#475569",
  mute: "#9AA6B2",
  verde: "#1BA559",
  verdeSoft: "#E6F6EC",
  azul: "#1E50E0",
  azulSoft: "#E8EEFD",
  amarelo: "#FFC400",
  navy: "#0B1033",
};

const W = 1200;
const H = 750;

// Moldura de app: sidebar navy + topbar. `nav` = índice do item ativo.
function chrome(inner, { title, accent = C.verde, nav = 0, avatar = C.verde } = {}) {
  const items = [0, 1, 2, 3, 4];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}">
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  <!-- sidebar -->
  <rect x="0" y="0" width="200" height="${H}" fill="${C.navy}"/>
  <rect x="24" y="28" width="30" height="30" rx="8" fill="${C.amarelo}"/>
  <rect x="62" y="36" width="86" height="14" rx="7" fill="#FFFFFF" opacity=".92"/>
  ${items
    .map((i) => {
      const active = i === nav;
      const y = 104 + i * 50;
      return `${active ? `<rect x="14" y="${y - 12}" width="172" height="40" rx="10" fill="#FFFFFF" opacity=".12"/>` : ""}
      <rect x="28" y="${y}" width="16" height="16" rx="4" fill="#FFFFFF" opacity="${active ? ".95" : ".45"}"/>
      <rect x="54" y="${y + 2}" width="${active ? 104 : 84}" height="12" rx="6" fill="#FFFFFF" opacity="${active ? ".95" : ".4"}"/>`;
    })
    .join("")}
  <rect x="24" y="${H - 60}" width="152" height="36" rx="10" fill="#FFFFFF" opacity=".10"/>
  <!-- topbar -->
  <rect x="200" y="0" width="${W - 200}" height="72" fill="${C.card}"/>
  <line x1="200" y1="72" x2="${W}" y2="72" stroke="${C.line}"/>
  <text x="232" y="44" font-family="Verdana, sans-serif" font-size="20" font-weight="700" fill="${C.ink}">${title}</text>
  <rect x="${W - 230}" y="24" width="120" height="26" rx="13" fill="${accent}" opacity=".12"/>
  <circle cx="${W - 70}" cy="36" r="16" fill="${avatar}"/>
  ${inner}
</svg>`;
}

// ---- helpers ----
const card = (x, y, w, h, r = 16) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${C.card}" stroke="${C.line}"/>`;
const bar = (x, y, w, h, fill, r = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
const txt = (x, y, s, size = 13, fill = C.slate, weight = 400) =>
  `<text x="${x}" y="${y}" font-family="Verdana, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${s}</text>`;

function ring(cx, cy, pct, color, label, value) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const off = circ * (1 - pct / 100);
  return `<g>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.line}" stroke-width="9"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"
      stroke-dasharray="${circ}" stroke-dashoffset="${off}" transform="rotate(-90 ${cx} ${cy})"/>
    <text x="${cx}" y="${cy + 6}" text-anchor="middle" font-family="Verdana, sans-serif" font-size="18" font-weight="800" fill="${C.ink}">${value}</text>
    <text x="${cx}" y="${cy + 60}" text-anchor="middle" font-family="Verdana, sans-serif" font-size="13" fill="${C.slate}">${label}</text>
  </g>`;
}

// ---- ALUNO ----
function aluno() {
  let s = txt(232, 116, "Olá, Ana 👋", 24, C.ink, 800) + txt(232, 140, "Veja seu próximo passo de estudo", 14, C.slate);
  // card destaque: próximo simulado
  s += card(224, 160, 600, 120) +
    bar(244, 184, 70, 24, C.verdeSoft, 12) + txt(256, 201, "ENEM", 12, C.verde, 700) +
    txt(244, 240, "Próximo simulado: 2º Simulado ENEM", 17, C.ink, 700) +
    txt(244, 264, "Quinta, 14h · 90 questões · TRI", 13, C.slate) +
    bar(624, 196, 180, 48, C.amarelo, 24) + txt(666, 226, "Começar", 15, C.ink, 700);
  // anéis de progresso
  s += card(224, 300, 600, 200);
  s += txt(248, 332, "Seu desempenho por área", 15, C.ink, 700);
  s += ring(330, 410, 78, C.azul, "Matemática", "78%");
  s += ring(490, 410, 64, C.verde, "Linguagens", "64%");
  s += ring(650, 410, 92, C.amarelo, "Redação", "92");
  // trilha lateral
  s += card(848, 160, 328, 340);
  s += txt(872, 192, "Sua trilha de estudos", 15, C.ink, 700);
  const items = [["Funções · concluído", C.verde], ["Interpretação · em curso", C.azul], ["Geometria · próximo", C.mute], ["Redação · próximo", C.mute]];
  items.forEach(([t, col], i) => {
    const y = 224 + i * 64;
    s += card(872, y, 280, 48, 12);
    s += `<circle cx="900" cy="${y + 24}" r="9" fill="${col}"/>`;
    s += txt(922, y + 29, t, 13, C.ink, 600);
  });
  return s;
}

// ---- PROFESSOR ----
function professor() {
  let s = txt(232, 116, "Para corrigir", 22, C.ink, 800) + bar(392, 98, 44, 26, C.amarelo, 13) + txt(404, 116, "12", 14, C.ink, 700);
  // lista
  s += card(224, 150, 560, 360);
  const rows = [["Redação · 3º A", "Pendente", C.amarelo], ["Prova Mat · 2º B", "Corrigindo", C.azul], ["Redação · 3º C", "Pendente", C.amarelo], ["Prova Lab · 1º A", "Concluído", C.verde]];
  rows.forEach(([n, st, col], i) => {
    const y = 174 + i * 80;
    s += card(244, y, 520, 64, 12);
    s += `<circle cx="280" cy="${y + 32}" r="18" fill="${col}" opacity=".18"/><circle cx="280" cy="${y + 32}" r="9" fill="${col}"/>`;
    s += txt(312, y + 28, n, 14, C.ink, 700) + txt(312, y + 48, "32 alunos", 12, C.slate);
    s += bar(640, y + 18, 104, 28, col, 14) + `<text x="692" y="${y + 37}" text-anchor="middle" font-family="Verdana, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">${st}</text>`;
  });
  // card correção com nota
  s += card(808, 150, 368, 360);
  s += txt(832, 182, "Correção de redação", 15, C.ink, 700);
  for (let i = 0; i < 6; i++) {
    const wln = [300, 280, 310, 250, 300, 220][i];
    s += bar(832, 206 + i * 26, wln, 12, i === 1 ? C.amarelo : C.line, 6);
    if (i === 1) s += bar(832, 206 + i * 26, wln, 12, C.amarelo, 6);
  }
  s += `<circle cx="900" cy="430" r="40" fill="none" stroke="${C.line}" stroke-width="10"/>`;
  s += `<circle cx="900" cy="430" r="40" fill="none" stroke="${C.verde}" stroke-width="10" stroke-linecap="round" stroke-dasharray="251" stroke-dashoffset="40" transform="rotate(-90 900 430)"/>`;
  s += `<text x="900" y="437" text-anchor="middle" font-family="Verdana, sans-serif" font-size="20" font-weight="800" fill="${C.ink}">920</text>`;
  s += txt(960, 420, "Nota da", 13, C.slate) + txt(960, 440, "redação (IA + revisor)", 13, C.ink, 600);
  return s;
}

// ---- COORDENAÇÃO ----
function coordenacao() {
  let s = txt(232, 116, "Desempenho por turma", 22, C.ink, 800);
  s += card(224, 150, 620, 420);
  s += txt(248, 184, "Média por turma (TRI)", 14, C.slate, 600);
  const vals = [320, 250, 380, 210, 300, 270];
  vals.forEach((v, i) => {
    const x = 270 + i * 92;
    const col = i % 3 === 0 ? C.amarelo : i % 2 ? C.azul : C.verde;
    s += bar(x, 520 - v, 52, v, col, 8);
    s += txt(x + 4, 544, `3º ${String.fromCharCode(65 + i)}`, 12, C.slate);
  });
  // cards laterais
  const stats = [["Turmas ativas", "18", C.azul], ["Acima da média", "62%", C.verde], ["Para reforço", "4 turmas", C.amarelo]];
  stats.forEach(([k, v, col], i) => {
    const y = 150 + i * 142;
    s += card(868, y, 308, 122);
    s += bar(892, y + 28, 8, 36, col, 4);
    s += txt(912, y + 44, k, 13, C.slate);
    s += `<text x="912" y="${y + 86}" font-family="Verdana, sans-serif" font-size="30" font-weight="800" fill="${C.ink}">${v}</text>`;
  });
  return s;
}

// ---- GESTOR ----
function gestor() {
  let s = txt(232, 116, "Visão geral da escola", 22, C.ink, 800);
  const kpis = [["Alunos", "1.248", C.azul], ["Avaliações", "342", C.verde], ["Nota TRI média", "712", C.amarelo], ["Aprovação", "94%", C.verde]];
  kpis.forEach(([k, v, col], i) => {
    const x = 224 + i * 240;
    s += card(x, 150, 220, 116);
    s += txt(x + 22, 184, k, 13, C.slate);
    s += `<text x="${x + 22}" y="${228}" font-family="Verdana, sans-serif" font-size="30" font-weight="800" fill="${col}">${v}</text>`;
  });
  // gráfico de linha
  s += card(224, 290, 620, 280);
  s += txt(248, 322, "Evolução da nota média", 14, C.slate, 600);
  let pts = [];
  for (let i = 0; i <= 7; i++) pts.push(`${280 + i * 76},${500 - (90 + Math.sin(i / 1.5) * 60 + i * 20)}`);
  s += `<polyline points="${pts.join(" ")}" fill="none" stroke="${C.verde}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
  s += pts.map((p) => { const [x, y] = p.split(","); return `<circle cx="${x}" cy="${y}" r="6" fill="${C.azul}"/>`; }).join("");
  // lista lateral
  s += card(868, 290, 308, 280);
  s += txt(892, 322, "Destaques", 14, C.ink, 700);
  for (let i = 0; i < 4; i++) {
    const y = 346 + i * 52;
    s += bar(892, y, 180, 12, C.line, 6);
    s += bar(892, y + 18, 110, 10, C.line, 5);
    s += bar(1092, y, 60, 24, [C.verdeSoft, C.azulSoft][i % 2], 12);
  }
  return s;
}

// ---- REDE ----
function rede() {
  let s = txt(232, 116, "Rede · 8 unidades", 22, C.ink, 800);
  s += card(224, 150, 620, 420);
  s += txt(248, 184, "Desempenho por unidade", 14, C.slate, 600);
  const units = [["Unidade Centro", 86], ["Unidade Norte", 72], ["Unidade Sul", 64], ["Unidade Leste", 91], ["Unidade Oeste", 58]];
  units.forEach(([n, pct], i) => {
    const y = 214 + i * 66;
    s += txt(248, y, n, 14, C.ink, 600);
    s += bar(248, y + 12, 560, 16, C.bg, 8);
    s += bar(248, y + 12, 560 * (pct / 100), 16, i % 2 ? C.azul : C.verde, 8);
    s += `<text x="816" y="${y + 25}" text-anchor="end" font-family="Verdana, sans-serif" font-size="13" font-weight="700" fill="${C.ink}">${pct}%</text>`;
  });
  // rede de nós
  s += card(868, 150, 308, 420);
  s += txt(892, 184, "Consolidado da rede", 14, C.ink, 700);
  const nodes = [[1022, 280], [952, 360], [1092, 360], [922, 460], [1022, 460], [1122, 460]];
  s += nodes.slice(1).map(([x, y]) => `<line x1="1022" y1="280" x2="${x}" y2="${y}" stroke="${C.line}" stroke-width="3"/>`).join("");
  s += nodes.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === 0 ? 22 : 14}" fill="${i === 0 ? C.azul : C.verde}"/>`).join("");
  s += `<text x="1022" y="524" text-anchor="middle" font-family="Verdana, sans-serif" font-size="13" fill="${C.slate}">3.1M alunos · 8 unidades</text>`;
  return s;
}

// ---- PAINEL DE RELATÓRIOS (mockup principal) ----
function relatorios() {
  let s = txt(232, 116, "Relatórios", 22, C.ink, 800);
  const kpis = [["Nota TRI média", "742", C.amarelo], ["Avaliações", "128", C.azul], ["Acima da média", "38%", C.verde], ["Habilidades", "62", C.verde]];
  kpis.forEach(([k, v, col], i) => {
    const x = 224 + i * 240;
    s += card(x, 150, 220, 108);
    s += txt(x + 20, 182, k, 12, C.slate);
    s += `<text x="${x + 20}" y="${224}" font-family="Verdana, sans-serif" font-size="28" font-weight="800" fill="${col}">${v}</text>`;
  });
  // donut por competência
  s += card(224, 282, 380, 290);
  s += txt(248, 314, "Por competência", 14, C.ink, 700);
  const segs = [[40, C.verde], [25, C.azul], [20, C.amarelo], [15, C.line]];
  let acc = 0; const cx = 350, cy = 430, r = 70, circ = 2 * Math.PI * r;
  segs.forEach(([p, col]) => {
    const len = (p / 100) * circ;
    s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${col}" stroke-width="26" stroke-dasharray="${len} ${circ - len}" stroke-dashoffset="${-acc}" transform="rotate(-90 ${cx} ${cy})"/>`;
    acc += len;
  });
  segs.forEach(([p, col], i) => { const y = 360 + i * 36; s += `<rect x="468" y="${y}" width="14" height="14" rx="4" fill="${col}"/>` + txt(492, y + 12, `C${i + 1} · ${p}%`, 12, C.slate); });
  // barras por turma
  s += card(624, 282, 552, 290);
  s += txt(648, 314, "Por turma", 14, C.ink, 700);
  const vals = [180, 130, 210, 150, 190, 120, 170];
  vals.forEach((v, i) => { const x = 668 + i * 70; const col = i % 3 === 0 ? C.amarelo : i % 2 ? C.azul : C.verde; s += bar(x, 520 - v, 44, v, col, 8) + txt(x + 6, 544, `${i + 1}º`, 11, C.slate); });
  return s;
}

// ---- EDU.IA (assistente do professor) ----
function eduIA() {
  // barra de prompt
  let s = card(224, 116, 952, 64, 14);
  s += `<circle cx="258" cy="148" r="12" fill="${C.azul}"/>`;
  s += txt(286, 153, "Peça ao Edu.IA: “Crie um plano de aula sobre funções para o 9º ano”", 15, C.slate);
  s += bar(1020, 128, 132, 40, C.amarelo, 20) + txt(1052, 153, "✨ Gerar", 14, C.ink, 700);
  // ferramentas
  s += txt(232, 214, "Ferramentas", 14, C.slate, 700);
  const tools = [
    ["Plano de aula", C.verde], ["Atividades", C.azul], ["Questões", C.amarelo],
    ["Resumos", C.verde], ["Adaptar nível", C.azul], ["Feedback", C.amarelo],
  ];
  tools.forEach(([t, col], i) => {
    const x = 224 + (i % 3) * 326;
    const y = 232 + Math.floor(i / 3) * 118;
    s += card(x, y, 300, 98, 14);
    s += `<rect x="${x + 20}" y="${y + 22}" width="40" height="40" rx="10" fill="${col}" opacity=".16"/>`;
    s += `<rect x="${x + 31}" y="${y + 33}" width="18" height="18" rx="5" fill="${col}"/>`;
    s += txt(x + 76, y + 42, t, 15, C.ink, 700);
    s += bar(x + 76, y + 56, 150, 10, C.line, 5);
  });
  // resposta gerada
  s += card(224, 480, 952, 116, 14);
  s += `<rect x="248" y="504" width="150" height="24" rx="12" fill="${C.verde}" opacity=".14"/>` + txt(266, 521, "✨ Edu.IA gerou", 12, C.verde, 700);
  s += txt(412, 521, "Plano de aula · 9º ano — Funções", 14, C.ink, 700);
  [820, 900, 760].forEach((w, i) => { s += bar(248, 544 + i * 18, w, 10, C.line, 5); });
  return s;
}

// ---- CRIAR PROVA (editor + gerar com IA) ----
function provasEditor() {
  let s = txt(232, 116, "Nova prova · Matemática · 3º A", 20, C.ink, 800);
  s += card(224, 150, 600, 420);
  for (let i = 0; i < 3; i++) {
    const y = 174 + i * 132;
    s += card(244, y, 560, 116, 12);
    s += `<rect x="244" y="${y}" width="6" height="116" rx="3" fill="${[C.verde, C.azul, C.amarelo][i]}"/>`;
    s += txt(272, y + 30, `Questão ${i + 1}`, 14, C.ink, 700);
    s += bar(272, y + 44, 500, 10, C.line, 5);
    s += bar(272, y + 62, 440, 10, C.line, 5);
    for (let a = 0; a < 4; a++) {
      const cx = 284 + a * 70;
      s += `<circle cx="${cx}" cy="${y + 92}" r="8" fill="none" stroke="${C.line}" stroke-width="2"/>`;
      if (a === i % 4) s += `<circle cx="${cx}" cy="${y + 92}" r="4" fill="${C.verde}"/>`;
    }
  }
  s += card(848, 150, 328, 420);
  s += txt(872, 184, "Gerar com IA", 15, C.ink, 700);
  s += card(872, 204, 280, 92, 12);
  s += txt(892, 232, "Gere 10 questões de", 12, C.slate);
  s += txt(892, 252, "funções do 2º grau,", 12, C.slate);
  s += txt(892, 272, "nível médio", 12, C.slate);
  s += bar(872, 312, 280, 46, C.amarelo, 23) + txt(942, 340, "✨ Gerar questões", 13, C.ink, 700);
  ["Banco de Itens", "Dificuldade", "Habilidade BNCC"].forEach((t, i) => {
    const y = 378 + i * 44;
    s += card(872, y, 280, 34, 10);
    s += txt(892, y + 22, t, 12, C.slate);
    s += `<circle cx="1128" cy="${y + 17}" r="9" fill="${C.verde}" opacity=".2"/><circle cx="1128" cy="${y + 17}" r="4" fill="${C.verde}"/>`;
  });
  return s;
}

// ---- PAINEL DA ESCOLA (Home hero) ----
function painelEscola() {
  let s = txt(232, 116, "Olá, Colégio Aurora 👋", 22, C.ink, 800) + txt(232, 140, "Resumo da sua escola hoje", 14, C.slate);
  s += `<rect x="224" y="160" width="952" height="92" rx="16" fill="${C.verde}"/>`;
  s += txt(252, 196, "Próximo: 2º Simulado ENEM", 18, "#FFFFFF", 700);
  s += `<text x="252" y="224" font-family="Verdana,sans-serif" font-size="13" fill="#FFFFFF" opacity=".85">Quinta, 14h · 1.248 alunos inscritos</text>`;
  s += bar(1004, 184, 148, 44, C.amarelo, 22) + txt(1034, 212, "Ver agenda", 13, C.ink, 700);
  const kpis = [["Alunos ativos", "1.248", C.azul], ["Simulados no mês", "12", C.verde], ["Nota média", "712", C.amarelo]];
  kpis.forEach(([k, v, col], i) => {
    const x = 224 + i * 316;
    s += card(x, 272, 292, 108);
    s += txt(x + 22, 304, k, 13, C.slate);
    s += `<text x="${x + 22}" y="348" font-family="Verdana,sans-serif" font-size="30" font-weight="800" fill="${col}">${v}</text>`;
  });
  s += card(224, 400, 952, 170);
  s += txt(248, 432, "Evolução da escola", 14, C.ink, 700);
  let pts = [];
  for (let i = 0; i <= 9; i++) pts.push([262 + i * 98, 540 - (36 + Math.sin(i / 1.3) * 24 + i * 8)]);
  const line = pts.map((p) => p.join(",")).join(" ");
  s += `<polygon points="262,540 ${line} ${262 + 9 * 98},540" fill="${C.verde}" opacity=".12"/>`;
  s += `<polyline points="${line}" fill="none" stroke="${C.verde}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
  s += pts.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="${C.azul}"/>`).join("");
  return s;
}

// ---- RELATÓRIOS (hero da página de relatórios) ----
function relatoriosHero() {
  let s = txt(232, 116, "Relatórios", 22, C.ink, 800);
  ["Competência", "Habilidade", "Turma", "Período"].forEach((t, i) => {
    const x = 224 + i * 150;
    s += i === 0 ? bar(x, 150, 138, 34, C.verde, 17) : `<rect x="${x}" y="150" width="138" height="34" rx="17" fill="none" stroke="${C.line}"/>`;
    s += txt(x + 20, 172, t, 12, i === 0 ? "#FFFFFF" : C.slate, 600);
  });
  s += card(224, 206, 620, 364);
  s += txt(248, 238, "Evolução por competência", 14, C.ink, 700);
  let p1 = [], p2 = [];
  for (let i = 0; i <= 8; i++) {
    p1.push([286 + i * 66, 500 - (60 + Math.sin(i / 1.5) * 40 + i * 20)]);
    p2.push([286 + i * 66, 500 - (30 + Math.cos(i / 1.7) * 26 + i * 14)]);
  }
  const l1 = p1.map((p) => p.join(",")).join(" ");
  const l2 = p2.map((p) => p.join(",")).join(" ");
  s += `<polygon points="286,500 ${l1} ${286 + 8 * 66},500" fill="${C.verde}" opacity=".10"/>`;
  s += `<polyline points="${l1}" fill="none" stroke="${C.verde}" stroke-width="4" stroke-linecap="round"/>`;
  s += `<polyline points="${l2}" fill="none" stroke="${C.azul}" stroke-width="4" stroke-linecap="round"/>`;
  s += card(868, 206, 308, 170);
  s += txt(892, 238, "Precisão (TRI)", 13, C.slate);
  s += `<text x="892" y="292" font-family="Verdana,sans-serif" font-size="38" font-weight="800" fill="${C.verde}">99,7%</text>`;
  s += txt(892, 326, "vs. resultado oficial", 12, C.slate);
  s += card(868, 392, 308, 178);
  s += txt(892, 424, "Habilidades mapeadas", 13, C.slate);
  for (let i = 0; i < 4; i++) {
    const y = 446 + i * 30;
    s += bar(892, y, 180, 12, C.bg, 6) + bar(892, y, 60 + i * 34, 12, i % 2 ? C.azul : C.verde, 6);
  }
  return s;
}

// ---- RELATÓRIOS CONSOLIDADOS (tabela, p/ a seção reutilizável) ----
function relatoriosConsolidado() {
  let s = txt(232, 116, "Relatórios consolidados", 22, C.ink, 800);
  s += card(224, 150, 952, 420);
  s += txt(252, 188, "Turma", 12, C.slate, 700) + txt(560, 188, "Média", 12, C.slate, 700) + txt(724, 188, "Acima da média", 12, C.slate, 700) + txt(1060, 188, "Evolução", 12, C.slate, 700);
  s += `<line x1="248" y1="204" x2="1152" y2="204" stroke="${C.line}"/>`;
  const rows = [["3º A", 742, 68, "+12%"], ["3º B", 680, 54, "+8%"], ["3º C", 760, 72, "+15%"], ["2º A", 655, 49, "+5%"], ["2º B", 705, 61, "+9%"]];
  rows.forEach(([t, m, a, e], i) => {
    const y = 240 + i * 64;
    s += `<text x="252" y="${y + 6}" font-family="Verdana,sans-serif" font-size="15" font-weight="700" fill="${C.ink}">${t}</text>`;
    s += `<text x="560" y="${y + 6}" font-family="Verdana,sans-serif" font-size="15" font-weight="700" fill="${C.ink}">${m}</text>`;
    s += bar(724, y - 6, 300, 14, C.bg, 7) + bar(724, y - 6, (300 * a) / 100, 14, i % 2 ? C.azul : C.verde, 7);
    s += `<text x="1152" y="${y + 6}" text-anchor="end" font-family="Verdana,sans-serif" font-size="14" font-weight="700" fill="${C.verde}">${e}</text>`;
    if (i < 4) s += `<line x1="248" y1="${y + 32}" x2="1152" y2="${y + 32}" stroke="${C.line}"/>`;
  });
  return s;
}

// ---- APLICAÇÃO DIGITAL (simulado online: cronômetro + ao vivo) ----
function aplicacaoDigital() {
  let s = txt(232, 116, "Simulado · em andamento", 20, C.ink, 800);
  // cronômetro
  s += card(224, 150, 300, 120);
  s += txt(248, 184, "Tempo restante", 13, C.slate);
  s += `<text x="248" y="234" font-family="Verdana,sans-serif" font-size="40" font-weight="800" fill="${C.azul}">01:32:45</text>`;
  // progresso
  s += card(540, 150, 400, 120);
  s += txt(564, 184, "Progresso", 13, C.slate);
  s += txt(564, 212, "Questão 27 de 90", 16, C.ink, 700);
  s += bar(564, 230, 352, 14, C.bg, 7) + bar(564, 230, 352 * 0.3, 14, C.verde, 7);
  // ação
  s += card(956, 150, 220, 120);
  s += bar(980, 182, 172, 48, C.amarelo, 24) + txt(1018, 212, "Finalizar", 14, C.ink, 700);
  s += txt(980, 252, "Salvo automaticamente", 11, C.slate);
  // questão
  s += card(224, 290, 620, 280);
  s += bar(248, 322, 560, 14, C.ink, 7);
  s += bar(248, 346, 470, 12, C.line, 6);
  for (let i = 0; i < 4; i++) {
    const y = 384 + i * 44;
    s += card(248, y, 572, 34, 10);
    s += `<circle cx="270" cy="${y + 17}" r="9" fill="${i === 1 ? C.verde : "none"}" stroke="${i === 1 ? C.verde : C.line}" stroke-width="2"/>`;
    s += bar(292, y + 11, 300, 12, C.line, 6);
  }
  // ao vivo
  s += card(868, 290, 308, 280);
  s += `<circle cx="892" cy="318" r="5" fill="${C.verde}"/>` + txt(908, 323, "Ao vivo", 13, C.ink, 700);
  s += `<text x="1152" y="323" text-anchor="end" font-family="Verdana,sans-serif" font-size="12" fill="${C.slate}">312 online</text>`;
  for (let i = 0; i < 5; i++) {
    const y = 350 + i * 42;
    s += `<circle cx="892" cy="${y + 8}" r="12" fill="${[C.verde, C.azul, C.amarelo][i % 3]}" opacity=".25"/>`;
    s += bar(914, y, 150, 10, C.line, 5) + bar(914, y + 16, 92, 8, C.line, 4);
    s += bar(1086, y - 2, 66, 18, [C.verdeSoft, C.azulSoft][i % 2], 9);
  }
  return s;
}

const screens = [
  ["secao-relatorios", relatorios(), { title: "Relatórios", accent: C.verde, nav: 3, avatar: C.azul }],
  ["aplicacao-digital", aplicacaoDigital(), { title: "Simulado online", accent: C.azul, nav: 0, avatar: C.azul }],
  ["painel-escola", painelEscola(), { title: "Início", accent: C.verde, nav: 0, avatar: C.verde }],
  ["relatorios-hero", relatoriosHero(), { title: "Relatórios", accent: C.azul, nav: 3, avatar: C.azul }],
  ["relatorios-consolidado", relatoriosConsolidado(), { title: "Relatórios", accent: C.verde, nav: 3, avatar: C.verde }],
  ["provas-editor", provasEditor(), { title: "Criar prova", accent: C.verde, nav: 1, avatar: C.verde }],
  ["edu-ia-professor", eduIA(), { title: "Edu.IA · Assistente", accent: C.azul, nav: 1, avatar: C.azul }],
  ["perfil-aluno", aluno(), { title: "Aluno", accent: C.azul, nav: 0, avatar: C.azul }],
  ["perfil-professor", professor(), { title: "Professor", accent: C.verde, nav: 1, avatar: C.verde }],
  ["perfil-coordenacao", coordenacao(), { title: "Coordenação", accent: C.azul, nav: 2, avatar: C.amarelo }],
  ["perfil-gestor", gestor(), { title: "Gestor", accent: C.verde, nav: 3, avatar: C.verde }],
  ["perfil-rede", rede(), { title: "Rede de ensino", accent: C.azul, nav: 4, avatar: C.azul }],
];

for (const [slug, inner, opts] of screens) {
  writeFileSync(join(OUT, `${slug}.svg`), chrome(inner, opts));
  console.log("✓", `${slug}.svg`);
}

// ---- OCR: da redação manuscrita à correção (composição própria) ----
function redacaoOcr() {
  const ink = "#33415C";
  let hand = "";
  for (let r = 0; r < 11; r++) {
    const y = 244 + r * 34;
    const len = r === 10 ? 180 : 330;
    let d = `M 150 ${y}`;
    const segs = 16;
    for (let i = 1; i <= segs; i++) {
      const x = 150 + (len / segs) * i;
      const yy = y + Math.sin(i * 1.6 + r * 0.8) * 4.5;
      d += ` L ${x.toFixed(1)} ${yy.toFixed(1)}`;
    }
    hand += `<path d="${d}" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round" opacity="${r === 10 ? 0.45 : 0.9}"/>`;
  }
  let typed = "";
  [320, 360, 300, 340, 270, 320].forEach((wl, i) => {
    typed += `<rect x="720" y="${236 + i * 30}" width="${wl}" height="12" rx="6" fill="${C.line}"/>`;
  });
  let comps = "";
  [92, 84, 88, 76, 90].forEach((v, i) => {
    const y = 452 + i * 34;
    comps += `<text x="720" y="${y + 12}" font-family="Verdana,sans-serif" font-size="13" fill="${C.slate}">C${i + 1}</text>`;
    comps += `<rect x="752" y="${y}" width="280" height="14" rx="7" fill="${C.bg}"/>`;
    comps += `<rect x="752" y="${y}" width="${(280 * v) / 100}" height="14" rx="7" fill="${i % 2 ? C.azul : C.verde}"/>`;
    comps += `<text x="1092" y="${y + 12}" text-anchor="end" font-family="Verdana,sans-serif" font-size="12" font-weight="700" fill="${C.ink}">${v * 2}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="OCR: da redação manuscrita à correção">
  <rect width="1200" height="750" fill="${C.bg}"/>
  <g transform="rotate(-4 360 420)">
    <rect x="120" y="150" width="430" height="520" rx="14" fill="#FFFFFF" stroke="${C.line}"/>
    <rect x="120" y="150" width="430" height="54" rx="14" fill="${C.verde}" opacity=".12"/>
    <text x="150" y="184" font-family="Verdana,sans-serif" font-size="16" font-weight="700" fill="${C.ink}">Redação manuscrita</text>
    ${hand}
    <g stroke="${C.amarelo}" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M150 612 h-24 v-24"/><path d="M520 612 h24 v-24"/>
      <path d="M150 612 h-24 v-24"/>
    </g>
  </g>
  <circle cx="156" cy="156" r="26" fill="${C.navy}"/>
  <circle cx="156" cy="156" r="9" fill="#FFFFFF" opacity=".9"/>
  <g>
    <rect x="566" y="384" width="118" height="50" rx="25" fill="${C.navy}"/>
    <text x="625" y="415" text-anchor="middle" font-family="Verdana,sans-serif" font-size="17" font-weight="800" fill="#FFFFFF">OCR</text>
    <path d="M576 470 h98 m-16 -10 l16 10 -16 10" stroke="${C.azul}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <rect x="690" y="150" width="430" height="470" rx="16" fill="#FFFFFF" stroke="${C.line}"/>
  <text x="720" y="196" font-family="Verdana,sans-serif" font-size="16" font-weight="700" fill="${C.ink}">Texto digitalizado + correção</text>
  ${typed}
  <line x1="720" y1="430" x2="1092" y2="430" stroke="${C.line}"/>
  ${comps}
</svg>`;
}

writeFileSync(join(OUT, "redacao-ocr.svg"), redacaoOcr());
console.log("✓", "redacao-ocr.svg");

// ---- LEITOR / OMR / IA (composição própria) ----
function omrLeitor() {
  // bolhas OMR na folha
  let bubbles = "";
  for (let r = 0; r < 9; r++) {
    const y = 252 + r * 40;
    bubbles += `<text x="150" y="${y + 5}" font-family="Verdana,sans-serif" font-size="13" fill="${C.slate}">${r + 1}</text>`;
    for (let a = 0; a < 5; a++) {
      const cx = 192 + a * 46;
      const filled = a === (r * 2 + 1) % 5;
      bubbles += `<circle cx="${cx}" cy="${y}" r="11" fill="${filled ? C.navy : "#FFFFFF"}" stroke="${filled ? C.navy : C.line}" stroke-width="2"/>`;
    }
  }
  // grade de correção (direita)
  let marks = "";
  const wrong = new Set([7, 14, 22]);
  for (let i = 0; i < 30; i++) {
    const cx = 730 + (i % 6) * 64;
    const cy = 470 + Math.floor(i / 6) * 38;
    const bad = wrong.has(i);
    marks += `<circle cx="${cx}" cy="${cy}" r="13" fill="${bad ? "#FDECEC" : C.verdeSoft}"/>`;
    marks += bad
      ? `<path d="M${cx - 5} ${cy - 5} l10 10 m0 -10 l-10 10" stroke="#D14343" stroke-width="2.4" stroke-linecap="round"/>`
      : `<path d="M${cx - 5} ${cy} l3 3 7 -7" stroke="${C.verde}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="Leitor OMR: identificação automática do aluno e extração de respostas">
  <rect width="1200" height="750" fill="${C.bg}"/>
  <!-- pilha (lote da turma) -->
  <rect x="128" y="168" width="430" height="510" rx="14" fill="#FFFFFF" stroke="${C.line}"/>
  <rect x="118" y="159" width="436" height="514" rx="14" fill="#FFFFFF" stroke="${C.line}"/>
  <!-- folha principal -->
  <rect x="108" y="150" width="440" height="520" rx="14" fill="#FFFFFF" stroke="${C.line}"/>
  <rect x="108" y="150" width="440" height="56" rx="14" fill="${C.azul}" opacity=".12"/>
  <text x="138" y="186" font-family="Verdana,sans-serif" font-size="16" font-weight="700" fill="${C.ink}">Folha de respostas · OMR</text>
  ${bubbles}
  <!-- celular lendo (app com câmera) -->
  <g transform="translate(372 470)">
    <rect x="0" y="0" width="150" height="220" rx="20" fill="${C.navy}"/>
    <rect x="10" y="14" width="130" height="192" rx="10" fill="#FFFFFF"/>
    <g stroke="${C.amarelo}" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M26 40 v-12 h12"/><path d="M124 40 v-12 h-12"/><path d="M26 176 v12 h12"/><path d="M124 176 v12 h-12"/>
    </g>
    ${[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => `<circle cx="${40 + c * 24}" cy="${64 + r * 28}" r="7" fill="${(r + c) % 3 === 0 ? C.navy : "#FFFFFF"}" stroke="${C.line}" stroke-width="1.5"/>`).join("")).join("")}
  </g>
  <!-- badge OMR + IA -->
  <rect x="566" y="384" width="126" height="50" rx="25" fill="${C.navy}"/>
  <text x="629" y="415" text-anchor="middle" font-family="Verdana,sans-serif" font-size="15" font-weight="800" fill="#FFFFFF">OMR + IA</text>
  <path d="M576 470 h100 m-16 -10 l16 10 -16 10" stroke="${C.azul}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- card resultado -->
  <rect x="690" y="150" width="430" height="520" rx="16" fill="#FFFFFF" stroke="${C.line}"/>
  <text x="720" y="194" font-family="Verdana,sans-serif" font-size="16" font-weight="700" fill="${C.ink}">Identificação automática</text>
  <circle cx="742" cy="246" r="24" fill="${C.verde}"/>
  <text x="742" y="252" text-anchor="middle" font-family="Verdana,sans-serif" font-size="16" font-weight="800" fill="#FFFFFF">AS</text>
  <text x="780" y="240" font-family="Verdana,sans-serif" font-size="16" font-weight="700" fill="${C.ink}">Ana Souza</text>
  <text x="780" y="262" font-family="Verdana,sans-serif" font-size="13" fill="${C.slate}">3º A · Matrícula 2024-0157</text>
  <line x1="720" y1="298" x2="1090" y2="298" stroke="${C.line}"/>
  <text x="720" y="338" font-family="Verdana,sans-serif" font-size="13" fill="${C.slate}">Respostas extraídas</text>
  <text x="720" y="384" font-family="Verdana,sans-serif" font-size="40" font-weight="800" fill="${C.verde}">90/90</text>
  <text x="980" y="338" font-family="Verdana,sans-serif" font-size="13" fill="${C.slate}">Nota</text>
  <text x="980" y="384" font-family="Verdana,sans-serif" font-size="40" font-weight="800" fill="${C.ink}">8,4</text>
  <text x="720" y="436" font-family="Verdana,sans-serif" font-size="13" fill="${C.slate}">Correção por questão</text>
  ${marks}
</svg>`;
}

writeFileSync(join(OUT, "omr-leitor.svg"), omrLeitor());
console.log("✓", "omr-leitor.svg");

// ---- APLICAÇÃO IMPRESSA (caderno + folha de respostas + malote/OMR) ----
function aplicacaoImpressa() {
  let s = `<rect width="1200" height="750" fill="${C.bg}"/>`;
  // caderno de prova (pilha)
  s += `<rect x="118" y="159" width="344" height="464" rx="12" fill="#FFFFFF" stroke="${C.line}"/>`;
  s += `<rect x="108" y="150" width="350" height="480" rx="12" fill="#FFFFFF" stroke="${C.line}"/>`;
  s += `<rect x="108" y="150" width="350" height="54" rx="12" fill="${C.verde}" opacity=".12"/>`;
  s += `<text x="134" y="185" font-family="Verdana,sans-serif" font-size="15" font-weight="700" fill="${C.ink}">Prova · Caderno 1</text>`;
  for (let i = 0; i < 5; i++) {
    const y = 244 + i * 74;
    s += `<text x="134" y="${y}" font-family="Verdana,sans-serif" font-size="13" font-weight="700" fill="${C.slate}">${i + 1}.</text>`;
    s += bar(158, y - 11, 268, 11, C.line, 5) + bar(158, y + 4, 210, 11, C.line, 5);
    for (let a = 0; a < 4; a++) s += `<circle cx="${168 + a * 60}" cy="${y + 30}" r="7" fill="none" stroke="${C.line}" stroke-width="2"/>`;
  }
  // folha de respostas (OMR)
  s += `<rect x="494" y="150" width="300" height="480" rx="12" fill="#FFFFFF" stroke="${C.line}"/>`;
  s += `<rect x="494" y="150" width="300" height="48" rx="12" fill="${C.azul}" opacity=".12"/>`;
  s += `<text x="518" y="180" font-family="Verdana,sans-serif" font-size="14" font-weight="700" fill="${C.ink}">Folha de respostas</text>`;
  for (let r = 0; r < 9; r++) {
    const y = 232 + r * 42;
    s += `<text x="518" y="${y + 5}" font-family="Verdana,sans-serif" font-size="12" fill="${C.slate}">${r + 1}</text>`;
    for (let a = 0; a < 5; a++) {
      const cx = 552 + a * 44;
      const filled = a === (r * 2 + 1) % 5;
      s += `<circle cx="${cx}" cy="${y}" r="10" fill="${filled ? C.navy : "#FFFFFF"}" stroke="${filled ? C.navy : C.line}" stroke-width="2"/>`;
    }
  }
  // coluna direita: malote + leitor OMR
  s += card(836, 150, 340, 224, 14);
  s += `<rect x="864" y="182" width="60" height="48" rx="6" fill="${C.amarelo}" opacity=".25"/><path d="M864 198h60M894 182v48" stroke="${C.amarelo}" stroke-width="3"/>`;
  s += txt(940, 196, "Malote para impressão", 14, C.ink, 700);
  s += txt(940, 218, "Geração automática do lote", 12, C.slate);
  s += txt(864, 270, "Logística de envio e retorno", 13, C.slate);
  s += bar(864, 286, 284, 12, C.bg, 6) + bar(864, 286, 200, 12, C.verde, 6);
  s += `<text x="864" y="338" font-family="Verdana,sans-serif" font-size="12" fill="${C.slate}">Envio</text><text x="1148" y="338" text-anchor="end" font-family="Verdana,sans-serif" font-size="12" fill="${C.slate}">Retorno</text>`;
  s += card(836, 392, 340, 238, 14);
  s += `<rect x="864" y="424" width="120" height="150" rx="8" fill="${C.bg}" stroke="${C.line}"/>`;
  for (let i = 0; i < 4; i++) s += bar(878, 444 + i * 30, 92, 8, C.line, 4);
  s += `<rect x="864" y="492" width="120" height="6" fill="${C.azul}" opacity=".6"/>`;
  s += txt(1002, 452, "Leitor OMR", 15, C.ink, 700);
  s += txt(1002, 474, "Coleta automatizada", 12, C.slate);
  s += txt(1002, 492, "dos gabaritos", 12, C.slate);
  s += `<circle cx="1014" cy="536" r="16" fill="${C.verde}"/><path d="M1007 536l5 5 9-9" stroke="#FFFFFF" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  s += txt(1040, 542, "Correção na hora", 12, C.ink, 600);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="Aplicação impressa: caderno, folha de respostas, malote e leitor OMR">${s}</svg>`;
}

writeFileSync(join(OUT, "aplicacao-impressa.svg"), aplicacaoImpressa());
console.log("✓", "aplicacao-impressa.svg");
