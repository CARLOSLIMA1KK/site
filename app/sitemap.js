const ROUTES = [
  "/",
  "/plataforma",
  "/plataforma/tour",
  "/white-label",
  "/plataforma/relatorios",
  "/plataforma/acessos",
  "/solucoes",
  "/solucoes/simulado-enem",
  "/solucoes/simulado-saeb",
  "/solucoes/simulado-vestibulares",
  "/solucoes/avaliacao",
  "/solucoes/redacao",
  "/solucoes/banco-de-questoes",
  "/solucoes/adaptativa",
  "/solucoes/revisa",
  "/solucoes/provas",
  "/planos",
  "/labs",
  "/para/escolas",
  "/para/cursinhos",
  "/para/redes",
  "/para/editoras",
  "/por-que-kodaredu",
  "/resultados",
  "/depoimentos",
  "/na-midia",
  "/quem-somos",
  "/conteudo",
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
