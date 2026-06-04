import SolutionPage from "@/components/SolutionPage";
import { SOLUTIONS } from "@/lib/solutions";

const data = SOLUTIONS["edu-ia"];
export const metadata = { ...data.meta, alternates: { canonical: "/solucoes/edu-ia" } };

export default function Page() {
  return <SolutionPage data={data} />;
}
