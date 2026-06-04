import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["integracao"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/integracao" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
