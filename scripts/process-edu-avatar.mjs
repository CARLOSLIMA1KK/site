// Remove o fundo claro do avatar do Edu (flood-fill a partir das bordas, para
// preservar partes claras internas como os olhos), recorta e re-centra num
// quadrado transparente. Saida: sobrescreve public/assets/mascots/edu-ia.png
import sharp from "sharp";

const SRC = "public/assets/mascots/edu-ia.png";

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// cor de fundo = media dos cantos
const corners = [
  [0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1],
  [Math.floor(width / 2), 0], [Math.floor(width / 2), height - 1],
];
let br = 0, bg = 0, bb = 0;
for (const [x, y] of corners) {
  const i = (y * width + x) * channels;
  br += data[i]; bg += data[i + 1]; bb += data[i + 2];
}
br /= corners.length; bg /= corners.length; bb /= corners.length;

const TOL = 78; // tolerancia de cor (pega anti-aliasing da borda)
const close = (i) => {
  const dr = data[i] - br, dg = data[i + 1] - bg, db = data[i + 2] - bb;
  return Math.sqrt(dr * dr + dg * dg + db * db) < TOL;
};

const visited = new Uint8Array(width * height);
const stack = [];
for (let x = 0; x < width; x++) { stack.push(x, 0, x, height - 1); }
for (let y = 0; y < height; y++) { stack.push(0, y, width - 1, y); }

while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  if (x < 0 || y < 0 || x >= width || y >= height) continue;
  const p = y * width + x;
  if (visited[p]) continue;
  const i = p * channels;
  if (!close(i)) continue;
  visited[p] = 1;
  data[i + 3] = 0; // transparente
  stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1);
}

const cut = await sharp(Buffer.from(data), { raw: { width, height, channels } }).png().toBuffer();

// recorta o transparente e re-centra num quadrado 512x512 com margem
const trimmed = await sharp(cut).trim({ threshold: 12 }).toBuffer();
const m = await sharp(trimmed).metadata();
const side = Math.round(Math.max(m.width, m.height) * 1.12); // ~6% de margem em volta

await sharp({
  create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: trimmed, gravity: "center" }])
  .resize(512, 512)
  .png()
  .toFile(SRC + ".tmp");

await sharp(SRC + ".tmp").toFile(SRC);
console.log("avatar processado:", SRC, "(fundo removido + centralizado)");
