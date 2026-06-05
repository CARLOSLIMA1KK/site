"use client";

import { useEffect, useState } from "react";
import EduAvatar from "./EduAvatar";

// ---- Cartões de resultado (prévias visuais do que o Edu entrega) ----------

function Badge({ tone = "verde", children }) {
  const tones = {
    verde: "bg-verde-100 text-verde-700",
    azul: "bg-[#eaf0ff] text-azul-600",
    amarelo: "bg-[#fff5d6] text-[#8a6a00]",
    slate: "bg-bg-soft text-slate",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

function ResultHeader({ icon, title, right }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-line pb-3">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-verde-100 text-verde-700">
          {icon}
        </span>
        <span className="font-display text-sm font-bold text-ink">{title}</span>
      </div>
      {right}
    </div>
  );
}

function PlanoResult() {
  return (
    <div className="space-y-3.5">
      <ResultHeader
        icon={<DocIcon />}
        title="Plano de aula"
        right={<Badge tone="amarelo">BNCC · EF09HI04</Badge>}
      />
      <div className="flex flex-wrap gap-1.5">
        <Badge>9º ano</Badge>
        <Badge tone="azul">História</Badge>
        <Badge tone="slate">50 min</Badge>
      </div>
      <h4 className="font-display text-[15px] font-bold text-ink">
        Revolução Industrial: origens e impactos
      </h4>
      <div>
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate">Objetivos</p>
        <ul className="space-y-1">
          {[
            "Identificar as causas da Revolução Industrial",
            "Relacionar tecnologia e mudanças sociais",
            "Analisar impactos no trabalho e nas cidades",
          ].map((t) => (
            <li key={t} className="flex gap-2 text-[13px] text-ink">
              <CheckIcon /> {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate">Etapas</p>
        <div className="space-y-1.5">
          {[
            ["Abertura", "Contextualização e pergunta motivadora", "10'"],
            ["Desenvolvimento", "Exposição + análise de fontes", "30'"],
            ["Fechamento", "Síntese e avaliação rápida", "10'"],
          ].map(([t, d, m]) => (
            <div key={t} className="flex items-center gap-3 rounded-md bg-bg-soft px-3 py-2">
              <span className="font-display text-xs font-bold text-verde-700">{m}</span>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-ink">{t}</p>
                <p className="truncate text-[12px] text-slate">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AvaliacaoResult() {
  const alts = [
    ["a", "Nenhuma raiz real"],
    ["b", "Apenas uma raiz real"],
    ["c", "Duas raízes reais distintas"],
    ["d", "Infinitas raízes"],
  ];
  return (
    <div className="space-y-3.5">
      <ResultHeader
        icon={<ListIcon />}
        title="Avaliação · Matemática"
        right={<Badge tone="azul">10 questões</Badge>}
      />
      <div className="rounded-lg border border-line p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">Questão 1</span>
          <Badge tone="slate">EM13MAT302</Badge>
        </div>
        <p className="mb-2.5 text-[13px] leading-relaxed text-ink">
          Dada a função f(x) = x² − 4x + 3, o número de raízes reais distintas é:
        </p>
        <ul className="space-y-1.5">
          {alts.map(([k, t]) => {
            const correct = k === "c";
            return (
              <li
                key={k}
                className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12.5px] ${
                  correct ? "bg-verde-100 font-semibold text-verde-900" : "text-slate"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                    correct
                      ? "border-verde-500 bg-verde-500 text-white"
                      : "border-line text-slate"
                  }`}
                >
                  {k}
                </span>
                {t}
                {correct && <span className="ml-auto"><CheckIcon /></span>}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-between text-[12px]">
        <span className="font-semibold text-verde-700">Gabarito e habilidade inclusos</span>
        <span className="text-slate">+9 questões geradas</span>
      </div>
    </div>
  );
}

function DesempenhoResult() {
  const bars = [
    ["Interpretação", 86, "verde"],
    ["Argumentação", 74, "azul"],
    ["Gramática", 81, "verde"],
    ["Coesão (C4)", 58, "amarelo"],
  ];
  const fill = { verde: "bg-verde-500", azul: "bg-azul-600", amarelo: "bg-amarelo-500" };
  return (
    <div className="space-y-3.5">
      <ResultHeader
        icon={<ChartIcon />}
        title="Desempenho · 9º A"
        right={<Badge tone="verde">↑ +0,8</Badge>}
      />
      <div className="flex items-end gap-3 rounded-lg bg-bg-soft px-4 py-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-slate">Média da turma</p>
          <p className="font-display text-3xl font-extrabold text-ink">7,4</p>
        </div>
        <p className="pb-1 text-[12px] text-slate">em 28 alunos avaliados</p>
      </div>
      <div className="space-y-2">
        {bars.map(([label, val, tone]) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-[12px]">
              <span className="text-ink">{label}</span>
              <span className="font-semibold text-slate">{val}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-line">
              <div className={`h-full rounded-full ${fill[tone]}`} style={{ width: `${val}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-2 rounded-md bg-[#fff5d6] px-3 py-2 text-[12.5px] text-[#8a6a00]">
        <AlertIcon />
        <span>
          <b>Ponto de atenção:</b> coesão (Competência 4). Sugiro reforço com rubricas direcionadas.
        </span>
      </div>
    </div>
  );
}

function AdaptarResult() {
  return (
    <div className="space-y-3">
      <ResultHeader
        icon={<WandIcon />}
        title="Conteúdo adaptado"
        right={<Badge tone="verde">Leitura facilitada</Badge>}
      />
      <div className="rounded-lg border border-line bg-bg-soft p-3">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate">Original</p>
        <p className="text-[12.5px] leading-relaxed text-slate">
          A fotossíntese é o processo bioquímico pelo qual organismos clorofilados convertem energia
          luminosa em energia química, sintetizando compostos orgânicos a partir de CO₂ e água.
        </p>
      </div>
      <div className="flex justify-center text-verde-700">
        <ArrowDownIcon />
      </div>
      <div className="rounded-lg border border-verde-500/30 bg-verde-100 p-3">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-verde-700">
          Adaptado · ensino fundamental
        </p>
        <p className="text-[13.5px] leading-relaxed text-verde-900">
          A fotossíntese é como as plantas fazem seu próprio alimento. Elas usam a luz do sol, a água
          e o gás carbônico do ar para crescer e ainda liberam o oxigênio que respiramos.
        </p>
      </div>
    </div>
  );
}

// ---- Slides -------------------------------------------------------------

const SLIDES = [
  {
    label: "Plano de aula",
    prompt: "Crie um plano de aula sobre Revolução Industrial para o 9º ano.",
    reply: "Pronto! Plano completo alinhado à BNCC, com objetivos, etapas e avaliação.",
    Result: PlanoResult,
  },
  {
    label: "Criar avaliação",
    prompt: "Monte uma avaliação de Matemática sobre função quadrática, nível médio.",
    reply: "Gerei 10 questões inéditas com gabarito e habilidade BNCC. Posso ajustar a dificuldade.",
    Result: AvaliacaoResult,
  },
  {
    label: "Desempenho da turma",
    prompt: "Resuma o desempenho do 9º A na última avaliação.",
    reply: "A turma evoluiu (+0,8). O ponto de atenção é coesão. Quer rubricas de reforço?",
    Result: DesempenhoResult,
  },
  {
    label: "Adaptar conteúdo",
    prompt: "Adapte este texto sobre fotossíntese para um aluno com dificuldade de leitura.",
    reply: "Reescrevi em linguagem mais simples, mantendo o conceito. Veja a versão adaptada.",
    Result: AdaptarResult,
  },
];

// ---- Carrossel ----------------------------------------------------------

export default function EduShowcase() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const slide = SLIDES[i];
  const Result = slide.Result;
  const go = (n) => setI((n + SLIDES.length) % SLIDES.length);

  return (
    <div
      className="overflow-hidden rounded-xl border border-line bg-white shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Abas das interações */}
      <div className="flex flex-wrap gap-1.5 border-b border-line bg-bg-soft p-3 sm:p-4" role="tablist" aria-label="Exemplos de interação com o Edu">
        {SLIDES.map((s, idx) => (
          <button
            key={s.label}
            role="tab"
            aria-selected={idx === i}
            onClick={() => go(idx)}
            className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition ${
              idx === i
                ? "bg-ink text-white shadow-sm"
                : "bg-white text-slate hover:bg-white hover:text-ink"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Conteúdo do slide */}
      <div key={i} className="grid animate-fade-up gap-6 p-5 sm:p-6 lg:grid-cols-2 lg:items-center">
        {/* Conversa */}
        <div className="space-y-3">
          <div className="flex justify-end">
            <p className="max-w-[88%] rounded-2xl rounded-br-sm bg-bg-soft px-4 py-2.5 text-[15px] text-ink">
              {slide.prompt}
            </p>
          </div>
          <div className="flex items-end gap-2.5">
            <EduAvatar size={36} glow={false} className="mb-0.5" />
            <p className="max-w-[88%] rounded-2xl rounded-bl-sm bg-verde-100 px-4 py-2.5 text-[15px] leading-relaxed text-verde-900">
              {slide.reply}
            </p>
          </div>
        </div>

        {/* Resultado visual */}
        <div className="rounded-xl border border-line bg-white p-4 shadow-pop sm:p-5">
          <Result />
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between border-t border-line px-5 py-3 sm:px-6">
        <div className="flex gap-1.5" role="tablist" aria-label="Selecionar exemplo">
          {SLIDES.map((s, idx) => (
            <button
              key={s.label}
              aria-label={`Ir para ${s.label}`}
              aria-selected={idx === i}
              onClick={() => go(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-verde-500" : "w-2 bg-line hover:bg-slate/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(i - 1)}
            aria-label="Exemplo anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition hover:bg-bg-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            onClick={() => go(i + 1)}
            aria-label="Próximo exemplo"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition hover:bg-bg-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- Ícones (inline, sem dependências) ----------------------------------

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-verde-500"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const DocIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M14 2v6h6M8 13h8M8 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);
const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 6h12M8 12h12M8 18h12M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);
const ChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18M8 16V9M13 16v-4M18 16v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const WandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 4V2M15 10V8M12 7h-2M20 7h-2M5 19l9-9M17.5 6.5l1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0"><path d="M12 9v4M12 17h.01M10.3 3.9l-8 14A2 2 0 004 21h16a2 2 0 001.7-3l-8-14a2 2 0 00-3.4 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const ArrowDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
