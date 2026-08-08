import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// A Mont é a fonte primária da marca, mas seus arquivos licenciados não estão no
// repositório. O manual indica Montserrat como família secundária oficial.
const title = "Portal de Treinamento ATLASGR";
const description =
  "Portal Enterprise de onboarding e treinamento corporativo da ATLASGR: conectamos pessoas e tecnologia, gerando valor com segurança e inovação para a logística nacional.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | ATLASGR",
  },
  description,
  applicationName: "Portal ATLASGR",
  keywords: [
    "ATLASGR",
    "treinamento corporativo",
    "onboarding",
    "logística",
    "segurança patrimonial",
    "portal enterprise",
  ],
  authors: [{ name: "ATLASGR" }],
  openGraph: {
    title,
    description,
    siteName: "Portal ATLASGR",
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
      className={`${montserrat.variable} h-full`}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
