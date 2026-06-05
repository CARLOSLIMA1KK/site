// Avatar do Edu, o assistente de IA da KodarEdu, com brilho suave da marca.
// Reutilizável em páginas, cards e seções. Imagem: /assets/mascots/edu-ia.png
export default function EduAvatar({ size = 160, glow = true, className = "" }) {
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-br from-verde-500/30 via-amarelo-500/25 to-azul-600/30 blur-2xl"
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/mascots/edu-ia.png"
        alt="Edu, o assistente de IA da KodarEdu"
        width={size}
        height={size}
        className="relative h-full w-full object-contain drop-shadow-md"
      />
    </div>
  );
}
