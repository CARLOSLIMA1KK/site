import { CountUp, Stagger, StaggerItem } from "./Motion";

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.9l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  );
}

// Faixa escura com números de impacto em cards (count-up + estrelas opcionais).
export default function StatBand({ stats = [], title, subtitle }) {
  return (
    <section className="surface-dark py-16 sm:py-20 text-white">
      <div className="container-page">
        {(title || subtitle) && (
          <div className="mb-12 max-w-2xl">
            {title && <h2 className="font-display text-h2 font-bold">{title}</h2>}
            {subtitle && <p className="mt-3 text-lg text-white/80">{subtitle}</p>}
          </div>
        )}
        <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem key={i} className="h-full">
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="font-display text-4xl font-extrabold text-amarelo-500 sm:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                </div>
                {s.stars && (
                  <div className="mt-2 flex gap-0.5 text-amarelo-500" aria-label="Avaliação 5 de 5 estrelas">
                    {[0, 1, 2, 3, 4].map((j) => (
                      <Star key={j} />
                    ))}
                  </div>
                )}
                <p className="mt-2 text-sm font-medium text-white/70">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
