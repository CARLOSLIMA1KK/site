// Gera placeholders (2 por material imprimível) em public/assets/printables/.
// Substitua estes SVGs pelos prints reais da plataforma (mesmo nome de arquivo,
// ou troque os caminhos em components/EduPrintables.jsx).
//
// Uso: node scripts/gen-printables.mjs

import { mkdirSync, writeFileSync } from "node:fs";

const OUT = "public/assets/printables";
mkdirSync(OUT, { recursive: true });

const ACCENT = { verde: "#1ba559", azul: "#1e50e0", amarelo: "#ffc400" };
const INK = "#0b1033";
const SOFT = "#f6f7fb";
const LINE = "#e6e8f0";

const ITEMS = [
  { slug: "colorir", title: "Imagem para colorir", accent: "verde" },
  { slug: "caligrafia", title: "Caligrafia", accent: "azul" },
  { slug: "cruzadinha", title: "Cruzadinha & caça-palavras", accent: "amarelo" },
  { slug: "matematica", title: "Matemática básica", accent: "verde" },
  { slug: "libras", title: "Aprendendo Libras", accent: "azul" },
  { slug: "historias", title: "Histórias ilustradas", accent: "amarelo" },
];

function skeleton(n) {
  // dois layouts diferentes para os dois exemplos
  if (n === 1) {
    return `
      <rect x="60" y="150" width="680" height="26" rx="8" fill="${LINE}"/>
      <rect x="60" y="196" width="560" height="26" rx="8" fill="${LINE}"/>
      <rect x="60" y="260" width="300" height="220" rx="14" fill="#fff" stroke="${LINE}" stroke-width="2"/>
      <rect x="400" y="260" width="340" height="26" rx="8" fill="${LINE}"/>
      <rect x="400" y="306" width="340" height="26" rx="8" fill="${LINE}"/>
      <rect x="400" y="352" width="260" height="26" rx="8" fill="${LINE}"/>
      <rect x="400" y="430" width="200" height="40" rx="10" fill="${LINE}"/>`;
  }
  return `
      <rect x="60" y="150" width="320" height="170" rx="14" fill="#fff" stroke="${LINE}" stroke-width="2"/>
      <rect x="420" y="150" width="320" height="170" rx="14" fill="#fff" stroke="${LINE}" stroke-width="2"/>
      <rect x="60" y="350" width="680" height="24" rx="8" fill="${LINE}"/>
      <rect x="60" y="392" width="600" height="24" rx="8" fill="${LINE}"/>
      <rect x="60" y="434" width="480" height="24" rx="8" fill="${LINE}"/>`;
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg(rawTitle, accentKey, n) {
  const accent = ACCENT[accentKey];
  const title = esc(rawTitle);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${title} — exemplo ${n}">
  <rect width="800" height="600" fill="${SOFT}"/>
  <rect x="24" y="24" width="752" height="552" rx="18" fill="#fff" stroke="${LINE}" stroke-width="2"/>
  <!-- header -->
  <rect x="24" y="24" width="752" height="92" rx="18" fill="${accent}"/>
  <rect x="24" y="92" width="752" height="24" fill="${accent}"/>
  <circle cx="72" cy="70" r="22" fill="#ffffff" opacity="0.9"/>
  <text x="112" y="78" font-family="Sora, system-ui, sans-serif" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
  <!-- badge exemplo -->
  <rect x="650" y="50" width="100" height="40" rx="20" fill="#ffffff" opacity="0.92"/>
  <text x="700" y="76" text-anchor="middle" font-family="Sora, system-ui, sans-serif" font-size="20" font-weight="700" fill="${INK}">Ex. ${n}</text>
  ${skeleton(n)}
  <!-- footer note -->
  <text x="400" y="545" text-anchor="middle" font-family="Public Sans, system-ui, sans-serif" font-size="20" fill="#9aa1bd">Substitua por um print da plataforma</text>
</svg>`;
}

let count = 0;
for (const it of ITEMS) {
  for (const n of [1, 2]) {
    writeFileSync(`${OUT}/${it.slug}-${n}.svg`, svg(it.title, it.accent, n));
    count++;
  }
}
console.log(`Gerados ${count} placeholders em ${OUT}/`);
