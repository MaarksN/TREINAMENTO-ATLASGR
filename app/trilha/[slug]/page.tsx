import { moduleMetas } from "@/content/modules";
import { ModulePageClient } from "./ModulePageClient";

export function generateStaticParams() {
  return moduleMetas.map((m) => ({ slug: m.slug }));
}

export default function Page() {
  return <ModulePageClient />;
}
