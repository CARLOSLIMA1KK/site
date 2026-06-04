import Icon from "./Icon";
import { Stagger, StaggerItem } from "./Motion";

// Lista de capacidades com check verde. Aceita strings ou {title, text}.
export default function FeatureList({ items = [], columns = 2, icon = "check" }) {
  const grid = columns === 1 ? "sm:grid-cols-1" : columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <Stagger className={`grid gap-x-8 gap-y-5 ${grid}`}>
      {items.map((item, i) => {
        const obj = typeof item === "string" ? { title: item } : item;
        return (
          <StaggerItem key={i} className="flex gap-3.5">
            <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-verde-100 text-verde-700">
              <Icon name={icon} size={16} />
            </span>
            <div>
              <p className="font-semibold text-ink">{obj.title}</p>
              {obj.text && <p className="mt-1 text-[15px] leading-relaxed text-slate">{obj.text}</p>}
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
