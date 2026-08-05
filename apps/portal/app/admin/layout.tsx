import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel Administrativo — Portal ATLASGR",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
