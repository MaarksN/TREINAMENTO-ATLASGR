import type { Metadata } from "next";
import { moduleMetas, getModuleMeta } from "@/content/modules";
import { ModulePageClient } from "./ModulePageClient";

export function generateStaticParams() {
  return moduleMetas.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = getModuleMeta(slug);
  return { title: meta ? `${meta.title} — Portal ATLASGR` : "Módulo — Portal ATLASGR" };
}

export default function Page() {
  return <ModulePageClient />;
}
