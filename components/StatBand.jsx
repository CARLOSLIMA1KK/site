import { CountUp, Stagger, StaggerItem } from "./Motion";

// Faixa escura com números de impacto em amarelo (count-up).
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
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem key={i} className="text-center sm:text-left">
              <div className="font-display text-4xl font-extrabold text-amarelo-500 sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <p className="mt-2 text-sm font-medium text-white/75">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
