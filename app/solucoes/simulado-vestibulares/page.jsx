import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["simulado-vestibulares"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/simulado-vestibulares" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
