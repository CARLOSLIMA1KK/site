import Button from "./Button";
import Pill from "./Pill";
import Icon from "./Icon";
import { Stagger, StaggerItem } from "./Motion";

// 3 planos produtizados (todos white label) + badge no recomendado.
export default function PricingTable({ plans = [] }) {
  return (
    <Stagger className="grid items-stretch gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <StaggerItem key={plan.name} className="h-full">
          <div
            className={`relative flex h-full flex-col rounded-lg border bg-white p-7 shadow-card ${
              plan.featured ? "border-verde-500 ring-2 ring-verde-500/30 lg:-mt-3 lg:mb-3" : "border-line"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Pill tone="amarelo">Mais escolhido</Pill>
              </span>
            )}
            <h3 className="font-display text-2xl font-bold text-ink">{plan.name}</h3>
            <p className="mt-1 text-[15px] text-slate">{plan.tagline}</p>
            <div className="mt-5">
              {plan.price ? (
                <>
                  <span className="font-display text-4xl font-extrabold text-ink">{plan.price}</span>
                  {plan.priceSuffix && <span className="text-slate"> {plan.priceSuffix}</span>}
                </>
              ) : (
                <span className="font-display text-3xl font-extrabold text-ink">{plan.priceLabel}</span>
              )}
            </div>
            <div className="mt-6">
              <Button
                href={plan.cta.href}
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full"
                arrow={plan.featured}
              >
                {plan.cta.label}
              </Button>
            </div>
            <ul className="mt-7 space-y-3 border-t border-line pt-6">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[15px] text-ink">
                  <span className="mt-0.5 flex-none text-verde-500">
                    <Icon name="check" size={18} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-xs font-semibold uppercase tracking-wider text-verde-700">
              ✦ White label incluso
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
