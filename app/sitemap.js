const ROUTES = [
  "/",
  "/white-label",
  "/plataforma/relatorios",
  "/plataforma/acessos",
  "/solucoes",
  "/solucoes/simulado-enem",
  "/solucoes/simulado-saeb",
  "/solucoes/adaptativa",
  "/solucoes/redacao",
  "/solucoes/banco-de-questoes",
  "/solucoes/provas",
  "/solucoes/integracao",
  "/solucoes/edu-ia",
  "/planos",
  "/para/escolas",
  "/para/cursinhos",
  "/para/redes",
  "/para/editoras",
  "/por-que-kodaredu",
  "/quem-somos",
  "/contato",
  "/privacidade",
  "/termos",
];

export default function sitemap() {
  const base = "https://www.kodaredu.com.br";
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
