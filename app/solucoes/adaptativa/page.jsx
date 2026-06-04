import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["adaptativa"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/adaptativa" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
