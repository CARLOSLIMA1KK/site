"use client";

import { useState } from "react";

const PRESETS = [
  { name: "Aurora", brand: "Colégio Aurora", primary: "#0E6E4E", accent: "#FFC400", initials: "CA" },
  { name: "Cobalto", brand: "Instituto Cedro", primary: "#1456C4", accent: "#1B9E6B", initials: "IC" },
  { name: "Magenta", brand: "Rede Horizonte", primary: "#B0185E", accent: "#FFC400", initials: "RH" },
  { name: "Grafite", brand: "Pré-Vest Nação", primary: "#1F2937", accent: "#F97316", initials: "PN" },
];

// Mini-demo que repinta um mockup ao vivo conforme a marca escolhida.
export default function WhiteLabelDemo() {
  const [preset, setPreset] = useState(PRESETS[0]);
  const { primary, accent, brand, initials } = preset;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate">
          Escolha uma marca de exemplo
        </p>
        <div className="flex flex-wrap gap-3" role="group" aria-label="Marcas de exemplo">
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => setPreset(p)}
              aria-pressed={preset.name === p.name}
              className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold transition ${
                preset.name === p.name
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-slate hover:border-ink/40"
              }`}
            >
              <span className="h-4 w-4 rounded-full" style={{ background: p.primary }} aria-hidden="true" />
              {p.name}
            </button>
          ))}
        </div>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate">
          Em segundos, a plataforma assume <strong className="text-ink">cores, logo e domínio</strong> da
          instituição. Seus alunos veem a marca da escola — não a nossa.
        </p>
      </div>

      {/* Mockup que reage */}
      <div className="overflow-hidden rounded-lg border border-line bg-white shadow-pop">
        <div className="flex items-center justify-between px-5 py-4" style={{ background: primary }}>
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-extrabold"
              style={{ background: accent, color: "#1A1300" }}
            >
              {initials}
            </span>
            <span className="font-display font-bold text-white">{brand}</span>
          </div>
          <span className="hidden text-xs text-white/80 sm:block">
            {brand.toLowerCase().replace(/[^a-z]/g, "")}.edu.br
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-bold text-ink">Olá, turma 3º A 👋</span>
            <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: primary }}>
              Simulado ENEM
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "Nota TRI", v: "742" },
              { k: "Redação", v: "920" },
              { k: "Ranking", v: "#12" },
            ].map((c) => (
              <div key={c.k} className="rounded-md border border-line bg-bg-soft p-3 text-center">
                <div className="font-display text-xl font-extrabold" style={{ color: primary }}>
                  {c.v}
                </div>
                <div className="text-[11px] text-slate">{c.k}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[80, 64, 92].map((w, i) => (
              <div key={i} className="h-2.5 overflow-hidden rounded-full bg-bg-soft">
                <div className="h-full rounded-full" style={{ width: `${w}%`, background: i === 1 ? accent : primary }} />
              </div>
            ))}
          </div>
          <button className="w-full rounded-full py-2.5 text-sm font-bold" style={{ background: accent, color: "#1A1300" }}>
            Continuar trilha de estudos
          </button>
        </div>
      </div>
    </div>
  );
}
