import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["banco-de-questoes"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/banco-de-questoes" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
