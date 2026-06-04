// Gera placeholders JPG das personas (Home → cards de perfil).
// SUBSTITUA por fotos reais (mesmos nomes) — veja prompts em personas/PROMPTS.md.
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "assets", "personas");
mkdirSync(OUT, { recursive: true });

const W = 900;
const H = 675;

const PERSONAS = [
  ["aluno", "Aluno", "#1BA559", "#1E50E0"],
  ["professor", "Professor", "#1E50E0", "#1BA559"],
  ["coordenacao", "Coordenação", "#0E7C40", "#1E50E0"],
  ["gestor", "Gestor", "#0B1033", "#1E50E0"],
  ["rede", "Rede de ensino", "#1E50E0", "#0B1033"],
];

function svg(name, c1, c2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <g fill="#FFFFFF" opacity="0.18">
      <circle cx="${W / 2}" cy="${H / 2 - 40}" r="86"/>
      <path d="M${W / 2 - 150} ${H} c0-120 60-200 150-200 s150 80 150 200 z"/>
    </g>
    <text x="${W / 2}" y="${H - 130}" text-anchor="middle" font-family="Arial, sans-serif" font-size="46" font-weight="800" fill="#FFFFFF">${name}</text>
    <text x="${W / 2}" y="${H - 92}" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#FFFFFF" opacity="0.85">Foto ilustrativa — substituir</text>
  </svg>`;
}

for (const [slug, name, c1, c2] of PERSONAS) {
  await sharp(Buffer.from(svg(name, c1, c2)))
    .jpeg({ quality: 82 })
    .toFile(join(OUT, `${slug}.jpg`));
  console.log("✓", `${slug}.jpg`);
}
