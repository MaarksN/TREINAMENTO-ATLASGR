import { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AtlasShorts } from "@/components/innovation/AtlasShorts";

export const metadata: Metadata = {
  title: "Micro-learning",
  description: "Dicas rápidas e logísticas no AtlasShorts",
};

export default function ShortsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AtlasShorts />
      </main>
    </div>
  );
}
