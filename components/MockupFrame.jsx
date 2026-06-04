// Moldura de navegador ou celular para prints da plataforma.
export default function MockupFrame({ src, alt, type = "browser", label, placeholder = true, className = "" }) {
  if (type === "mobile") {
    return (
      <div className={`relative mx-auto w-[260px] ${className}`}>
        <div className="rounded-[2.2rem] border-[10px] border-azul-900 bg-azul-900 shadow-pop">
          <div className="mx-auto mb-1 mt-1 h-1.5 w-16 rounded-full bg-white/30" />
          <div className="overflow-hidden rounded-[1.4rem] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} loading="lazy" className="aspect-[9/19] w-full object-cover" />
          </div>
        </div>
        {placeholder && <PlaceholderTag />}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg border border-line bg-white shadow-pop ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-bg-soft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        {label && (
          <span className="ml-3 truncate rounded-full bg-white px-3 py-1 text-xs text-slate border border-line">
            {label}
          </span>
        )}
      </div>
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
        {placeholder && <PlaceholderTag />}
      </div>
    </div>
  );
}

function PlaceholderTag() {
  return (
    <span className="absolute right-3 top-3 z-10 rounded-full bg-azul-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
      Placeholder
    </span>
  );
}
