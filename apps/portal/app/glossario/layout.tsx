import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossário Técnico — Portal ATLASGR",
};

export default function GlossarioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
