import SolutionPage from "@/components/SolutionPage";
import LeitorOmrSection from "@/components/sections/LeitorOmrSection";
import RelatoriosConsolidadosSection from "@/components/sections/RelatoriosConsolidadosSection";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["simulado-saeb"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/simulado-saeb" } };

export default function Page() {
  return (
    <SolutionPage data={data}>
      <LeitorOmrSection soft={false} />
      <RelatoriosConsolidadosSection soft />
    </SolutionPage>
  );
}
