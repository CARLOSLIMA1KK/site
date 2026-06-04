// Gera placeholders SVG neutros para os prints da plataforma (seção 9 do BRIEF).
// Substitua os arquivos em /public/assets/prints/ pelos prints reais quando disponíveis.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "assets", "prints");
mkdirSync(OUT, { recursive: true });

const PRINTS = [
  ["home-dashboard", "Dashboard inicial (gestor)", "dashboard"],
  ["relatorio-gestor", "Relatório do gestor — indicadores", "dashboard"],
  ["relatorio-turma", "Desempenho por turma", "bars"],
  ["relatorio-habilidade", "Evolução por habilidade", "line"],
  ["simulado-andamento", "Simulado em andamento", "quiz"],
  ["relatorio-tri", "Resultado por TRI (régua ENEM/SAEB)", "gauge"],
  ["redacao-correcao", "Correção de redação com marcações", "essay"],
  ["redacao-evolucao", "Evolução da nota de redação", "line"],
  ["banco-questoes", "Banco de questões com filtros", "list"],
  ["editor-prova", "Editor de prova / malote", "essay"],
  ["correcao-automatica", "Correção automática / leitor de gabarito", "list"],
  ["adaptativa-trilha", "Trilha adaptativa (CAT)", "line"],
  ["whitelabel-personalizacao", "Personalização (logo / cores)", "dashboard"],
  ["acessos-perfis", "Telas por perfil", "dashboard"],
];

const C = {
  bg: "#F6F9F8",
  card: "#FFFFFF",
  line: "#E3E8E6",
  ink: "#0F1B17",
  slate: "#4A5B54",
  verde: "#1B9E6B",
  verde700: "#0E6E4E",
  azul: "#1456C4",
  amarelo: "#FFC400",
};

function chrome(inner, { w = 1200, h = 750, title } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}">
  <rect width="${w}" height="${h}" fill="${C.bg}"/>
  <!-- sidebar -->
  <rect x="0" y="0" width="220" height="${h}" fill="${C.verde700}"/>
  <rect x="28" y="32" width="34" height="34" rx="9" fill="${C.amarelo}"/>
  <rect x="72" y="40" width="96" height="16" rx="6" fill="#FFFFFF" opacity=".9"/>
  ${[0, 1, 2, 3, 4].map((i) => `<rect x="28" y="${110 + i * 48}" width="${i === 1 ? 150 : 120}" height="14" rx="7" fill="#FFFFFF" opacity="${i === 1 ? ".95" : ".4"}"/>`).join("")}
  <!-- topbar -->
  <rect x="220" y="0" width="${w - 220}" height="72" fill="${C.card}"/>
  <line x1="220" y1="72" x2="${w}" y2="72" stroke="${C.line}"/>
  <rect x="252" y="28" width="240" height="18" rx="9" fill="${C.ink}" opacity=".85"/>
  <rect x="${w - 150}" y="22" width="110" height="30" rx="15" fill="${C.amarelo}"/>
  ${inner}
</svg>`;
}

const PANELS = {
  dashboard: () => {
    let s = "";
    const cards = [
      [C.verde, "742"],
      [C.azul, "920"],
      [C.amarelo, "#12"],
      [C.verde700, "98%"],
    ];
    cards.forEach(([col], i) => {
      const x = 252 + i * 226;
      s += `<rect x="${x}" y="104" width="206" height="110" rx="14" fill="${C.card}" stroke="${C.line}"/>
      <rect x="${x + 20}" y="124" width="80" height="12" rx="6" fill="${C.slate}" opacity=".5"/>
      <rect x="${x + 20}" y="148" width="120" height="34" rx="8" fill="${col}"/>`;
    });
    s += `<rect x="252" y="238" width="560" height="300" rx="16" fill="${C.card}" stroke="${C.line}"/>`;
    for (let i = 0; i < 7; i++) {
      const bh = 60 + ((i * 53) % 170);
      s += `<rect x="${290 + i * 70}" y="${500 - bh}" width="40" height="${bh}" rx="6" fill="${i % 2 ? C.azul : C.verde}"/>`;
    }
    s += `<rect x="836" y="238" width="332" height="300" rx="16" fill="${C.card}" stroke="${C.line}"/>`;
    for (let i = 0; i < 5; i++) {
      s += `<rect x="864" y="${272 + i * 50}" width="180" height="12" rx="6" fill="${C.slate}" opacity=".4"/>
      <rect x="1060" y="${268 + i * 50}" width="80" height="20" rx="10" fill="${C.verde}" opacity=".15"/>`;
    }
    return s;
  },
  bars: () => {
    let s = `<rect x="252" y="104" width="916" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>`;
    for (let i = 0; i < 9; i++) {
      const bh = 90 + ((i * 71) % 360);
      s += `<rect x="${300 + i * 95}" y="${600 - bh}" width="56" height="${bh}" rx="8" fill="${i % 3 === 0 ? C.amarelo : C.verde}"/>`;
    }
    return s;
  },
  line: () => {
    let pts = [];
    for (let i = 0; i <= 8; i++) pts.push(`${300 + i * 100},${500 - (120 + Math.sin(i) * 90 + i * 18)}`);
    return `<rect x="252" y="104" width="916" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>
    <polyline points="${pts.join(" ")}" fill="none" stroke="${C.verde}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    ${pts.map((p) => { const [x, y] = p.split(","); return `<circle cx="${x}" cy="${y}" r="7" fill="${C.azul}"/>`; }).join("")}`;
  },
  gauge: () =>
    `<rect x="252" y="104" width="916" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>
    <path d="M 470 470 A 240 240 0 0 1 950 470" fill="none" stroke="${C.line}" stroke-width="34" stroke-linecap="round"/>
    <path d="M 470 470 A 240 240 0 0 1 880 300" fill="none" stroke="${C.verde}" stroke-width="34" stroke-linecap="round"/>
    <text x="710" y="450" font-family="sans-serif" font-size="92" font-weight="800" fill="${C.ink}" text-anchor="middle">742</text>
    <rect x="630" y="500" width="160" height="20" rx="10" fill="${C.slate}" opacity=".4"/>`,
  quiz: () => {
    let s = `<rect x="252" y="104" width="916" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>
    <rect x="290" y="140" width="640" height="20" rx="10" fill="${C.ink}" opacity=".8"/>
    <rect x="290" y="172" width="500" height="14" rx="7" fill="${C.slate}" opacity=".4"/>`;
    for (let i = 0; i < 4; i++) {
      s += `<rect x="290" y="${230 + i * 80}" width="840" height="60" rx="12" fill="${i === 1 ? C.verde : C.bg}" stroke="${C.line}"/>
      <circle cx="324" cy="${260 + i * 80}" r="12" fill="${i === 1 ? "#fff" : C.line}"/>`;
    }
    return s;
  },
  essay: () => {
    let s = `<rect x="252" y="104" width="600" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>`;
    const widths = [560, 540, 520, 560, 480, 540, 500];
    widths.forEach((wd, i) => {
      s += `<rect x="290" y="${150 + i * 46}" width="${wd}" height="13" rx="6" fill="${C.slate}" opacity="${i % 3 === 0 ? ".7" : ".3"}"/>`;
    });
    s += `<rect x="320" y="196" width="180" height="20" rx="6" fill="${C.amarelo}" opacity=".5"/>
    <rect x="350" y="334" width="220" height="20" rx="6" fill="${C.verde}" opacity=".3"/>`;
    s += `<rect x="876" y="104" width="292" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>`;
    for (let i = 0; i < 5; i++) {
      s += `<rect x="904" y="${140 + i * 96}" width="120" height="12" rx="6" fill="${C.slate}" opacity=".5"/>
      <rect x="904" y="${162 + i * 96}" width="236" height="44" rx="10" fill="${C.verde}" opacity=".12"/>
      <text x="1118" y="${192 + i * 96}" font-family="sans-serif" font-size="22" font-weight="700" fill="${C.verde700}" text-anchor="end">${160 + i * 8}</text>`;
    }
    return s;
  },
  list: () => {
    let s = `<rect x="252" y="104" width="280" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>`;
    for (let i = 0; i < 6; i++)
      s += `<rect x="280" y="${140 + i * 56}" width="${i === 0 ? 160 : 224}" height="${i === 0 ? 18 : 38}" rx="9" fill="${i === 0 ? C.ink : C.bg}" stroke="${i === 0 ? "none" : C.line}"/>`;
    s += `<rect x="556" y="104" width="612" height="540" rx="16" fill="${C.card}" stroke="${C.line}"/>`;
    for (let i = 0; i < 6; i++)
      s += `<rect x="584" y="${140 + i * 84}" width="556" height="64" rx="12" fill="${C.bg}" stroke="${C.line}"/>
      <rect x="608" y="${158 + i * 84}" width="380" height="14" rx="7" fill="${C.slate}" opacity=".5"/>
      <rect x="608" y="${180 + i * 84}" width="${120 + (i * 37) % 220}" height="10" rx="5" fill="${C.slate}" opacity=".3"/>
      <rect x="1040" y="${156 + i * 84}" width="76" height="30" rx="15" fill="${C.azul}" opacity=".15"/>`;
    return s;
  },
};

for (const [slug, title, panel] of PRINTS) {
  const svg = chrome(PANELS[panel](), { title });
  writeFileSync(join(OUT, `${slug}.svg`), svg);
  console.log("✓", `${slug}.svg`);
}

// App mobile (formato vertical)
const mobile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 760" role="img" aria-label="App mobile com a marca da escola">
  <rect width="360" height="760" fill="${C.bg}"/>
  <rect width="360" height="150" fill="${C.verde700}"/>
  <rect x="24" y="40" width="40" height="40" rx="10" fill="${C.amarelo}"/>
  <rect x="76" y="52" width="140" height="16" rx="8" fill="#fff" opacity=".95"/>
  <rect x="24" y="100" width="200" height="14" rx="7" fill="#fff" opacity=".5"/>
  ${[0, 1, 2].map((i) => `<rect x="${24 + i * 108}" y="186" width="96" height="92" rx="14" fill="${C.card}" stroke="${C.line}"/><rect x="${40 + i * 108}" y="210" width="64" height="28" rx="7" fill="${[C.verde, C.azul, C.amarelo][i]}"/>`).join("")}
  <rect x="24" y="300" width="312" height="180" rx="16" fill="${C.card}" stroke="${C.line}"/>
  ${[80, 56, 92].map((wp, i) => `<rect x="48" y="${340 + i * 44}" width="288" height="12" rx="6" fill="${C.bg}"/><rect x="48" y="${340 + i * 44}" width="${wp * 2.8}" height="12" rx="6" fill="${i === 1 ? C.amarelo : C.verde}"/>`).join("")}
  <rect x="24" y="640" width="312" height="52" rx="26" fill="${C.amarelo}"/>
  <rect x="120" y="660" width="120" height="14" rx="7" fill="${C.ink}"/>
</svg>`;
writeFileSync(join(OUT, "app-mobile.svg"), mobile);
console.log("✓ app-mobile.svg");
