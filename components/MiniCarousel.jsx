"use client";

import { useEffect, useState } from "react";

// Mini-carrossel de imagens para um card (ex.: prints de um recurso).
// - `fit`: "cover" (default) corta para preencher; "contain" mostra inteira
//   com letterbox (ideal para screenshots de UI).
// - `autoplay`: avança automaticamente a cada `interval` ms, pausa no hover.
// - `framed`: envolve em uma moldura tipo navegador (bolinhas + label opcional),
//   com bordas mais arredondadas e sombra realçada — bom para screenshots.
// - `frameLabel`: texto exibido na "barra de URL" quando `framed` é true.
export default function MiniCarousel({
  images = [],
  alt = "",
  fit = "cover",
  autoplay = false,
  interval = 3500,
  framed = false,
  frameLabel,
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = images.length;
  const go = (k) => setI((k + n) % n);

  useEffect(() => {
    if (!autoplay || n < 2 || paused) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), interval);
    return () => clearInterval(t);
  }, [autoplay, n, paused, interval]);

  if (n === 0) return null;

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  const wrapperClass = framed
    ? "group relative overflow-hidden rounded-lg border border-line bg-white shadow-pop"
    : "group relative overflow-hidden rounded-md border border-line bg-bg-soft";

  return (
    <div
      className={wrapperClass}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {framed && (
        <div className="flex items-center gap-1.5 border-b border-line bg-bg-soft px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          {frameLabel && (
            <span className="ml-3 truncate rounded-full border border-line bg-white px-2.5 py-0.5 text-[11px] text-slate">
              {frameLabel}
            </span>
          )}
        </div>
      )}

      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={i}
          src={images[i]}
          alt={`${alt} — exemplo ${i + 1}`}
          loading="lazy"
          className={`aspect-[4/3] w-full ${fitClass}`}
        />

        {n > 1 && (
          <>
            {/* Setas (aparecem no hover) */}
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Imagem anterior"
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition group-hover:opacity-100 focus-visible:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Próxima imagem"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition group-hover:opacity-100 focus-visible:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            {/* Dots */}
            <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {images.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => go(k)}
                  aria-label={`Ir para imagem ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-4 bg-white" : "w-1.5 bg-white/60 hover:bg-white/90"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
