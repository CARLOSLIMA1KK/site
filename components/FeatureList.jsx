import Icon from "./Icon";
import { Stagger, StaggerItem } from "./Motion";

// Lista de capacidades. Aceita strings ou {title, text, icon}.
// `icon` é o fallback quando o item não traz um ícone próprio.
// `onDark` ajusta as cores para fundos escuros (surface-dark).
export default function FeatureList({ items = [], columns = 2, icon = "check", onDark = false }) {
  const grid =
    columns === 1
      ? "sm:grid-cols-1"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : columns === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2";
  const badge = onDark ? "bg-white/15 text-white" : "bg-verde-100 text-verde-700";
  const titleCls = onDark ? "text-white" : "text-ink";
  const textCls = onDark ? "text-white/75" : "text-slate";
  return (
    <Stagger className={`grid gap-x-8 gap-y-5 ${grid}`}>
      {items.map((item, i) => {
        const obj = typeof item === "string" ? { title: item } : item;
        return (
          <StaggerItem key={i} className="flex gap-3.5">
            <span className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full ${badge}`}>
              <Icon name={obj.icon || icon} size={16} />
            </span>
            <div>
              <p className={`font-semibold ${titleCls}`}>{obj.title}</p>
              {obj.text && <p className={`mt-1 text-[15px] leading-relaxed ${textCls}`}>{obj.text}</p>}
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
