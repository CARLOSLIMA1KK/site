// Avatar do Edu, o assistente de IA da KodarEdu. Renderiza como um avatar
// circular (fundo sutil + anel), com brilho opcional da marca atrás.
// Imagem (fundo transparente): /assets/mascots/edu-ia.png
export default function EduAvatar({ size = 160, glow = true, className = "" }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-br from-verde-500/30 via-amarelo-500/25 to-azul-600/30 blur-2xl"
        />
      )}
      <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-white to-[#eef1f8] shadow-sm ring-1 ring-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/mascots/edu-ia.png"
          alt="Edu, o assistente de IA da KodarEdu"
          className="h-[88%] w-[88%] translate-y-[3%] object-contain"
        />
      </span>
    </span>
  );
}
