import SolutionPage from "@/components/SolutionPage";
import AplicacaoSection from "@/components/sections/AplicacaoSection";
import LeitorOmrSection from "@/components/sections/LeitorOmrSection";
import RelatoriosConsolidadosSection from "@/components/sections/RelatoriosConsolidadosSection";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["simulado-saeb"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/simulado-saeb" } };

export default function Page() {
  return (
    <SolutionPage data={data}>
      <AplicacaoSection soft={false} />
      <LeitorOmrSection soft />
      <RelatoriosConsolidadosSection soft={false} />
    </SolutionPage>
  );
}
