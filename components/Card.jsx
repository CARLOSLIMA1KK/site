import Link from "next/link";
import Icon from "./Icon";
import Pill from "./Pill";
import EduText from "./EduText";

// Card de solução/recurso reutilizável.
export default function Card({ title, text, href, icon, tag, image, imageAlt, className = "" }) {
  const inner = (
    <div
      className={`group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pop ${className}`}
    >
      {image && (
        <div className="mb-5 overflow-hidden rounded-md border border-line bg-bg-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-verde-100 text-verde-700">
          <Icon name={icon} size={24} />
        </div>
      )}
      <div className="mb-2 flex items-center gap-2">
        <h3 className="font-display text-xl font-semibold text-ink"><EduText>{title}</EduText></h3>
        {tag && <Pill tone="azul">{tag}</Pill>}
      </div>
      <p className="text-[15px] leading-relaxed text-slate">{text}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-verde-700">
          Saiba mais
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline-none">
        {inner}
      </Link>
    );
  }
  return inner;
}
