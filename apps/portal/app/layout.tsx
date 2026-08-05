import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Os arquivos da fonte "Mont" (identidade oficial ATLASGR) não estão disponíveis
// no repositório para uso via next/font/local. Poppins é a geométrica sans mais
// próxima do desenho da Mont entre as disponíveis no Google Fonts — mesmo
// contra-formas circulares e traço uniforme — e serve como substituta de
// display até os arquivos oficiais da Mont serem adicionados.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal de Onboarding ATLASGR",
  description: "Uma jornada de onboarding e treinamento corporativo da ATLASGR.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${poppins.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
