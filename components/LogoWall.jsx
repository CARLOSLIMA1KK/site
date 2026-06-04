import { Reveal } from "./Motion";

// Grade de logos de escolas em cinza neutro (prova social).
export default function LogoWall({ logos = [], title }) {
  return (
    <div>
      {title && (
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.14em] text-slate">
          {title}
        </p>
      )}
      <Reveal>
        <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, i) => (
            <li key={i} className="flex items-center justify-center">
              <span className="flex h-12 w-full items-center justify-center rounded-md border border-line bg-white px-3 text-center text-sm font-semibold text-slate/70 grayscale transition hover:text-verde-700 hover:grayscale-0">
                {logo}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
