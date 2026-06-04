import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["avaliacao"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/avaliacao" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
