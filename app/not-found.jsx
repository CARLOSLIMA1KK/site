import Button from "@/components/Button";
import Pill from "@/components/Pill";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <Pill tone="verde">Página em construção</Pill>
        <h1 className="mt-5 font-display text-display font-extrabold text-ink">
          Estamos construindo esta página
        </h1>
        <p className="mt-4 max-w-lg text-lg text-slate">
          Esta seção do site da KodarEdu ainda está sendo desenvolvida. Enquanto isso, volte para a
          página inicial ou fale com nosso time.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" arrow>
            Voltar para a Home
          </Button>
          <Button href="/contato" variant="secondary">
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  );
}
