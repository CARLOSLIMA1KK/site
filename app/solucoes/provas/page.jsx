import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["provas"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/provas" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
