import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import { AssistantBalloon } from "@/components/ui/AssistantBalloon";
import { AICopilot } from "@/components/innovation/AICopilot";
import { VLibrasWidget } from "@/components/accessibility/VLibrasWidget";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const title = "Academia ATLASGR";
const description =
  "Academia corporativa da ATLASGR com onboarding, formação em segurança e inteligência logística, prática aplicada, recursos multimídia e validação de domínio.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | ATLASGR",
  },
  description,
  applicationName: "Academia ATLASGR",
  keywords: [
    "ATLASGR",
    "treinamento corporativo",
    "onboarding",
    "logística",
    "gerenciamento de risco",
    "inteligência logística",
    "academia corporativa",
  ],
  authors: [{ name: "ATLASGR" }],
  openGraph: {
    title,
    description,
    siteName: "Academia ATLASGR",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-atlas-orange focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        <ThemeProvider>
          {children}
          <Toaster />
          <AssistantBalloon />
          <AICopilot />
          <VLibrasWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
