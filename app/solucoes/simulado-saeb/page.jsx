import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["simulado-saeb"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/simulado-saeb" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
