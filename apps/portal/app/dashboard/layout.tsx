import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cockpit Operacional — Portal ATLASGR",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
