import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Since the "Mont" font files are not currently available in the repository,
// we will define the CSS variable for the theme, but omit the Next.js localFont setup
// so that the build does not fail. We can rely on fallback fonts (sans-serif)
// until the actual Mont font files are added.
// This ensures WCAG compliance and smooth build.

export const metadata: Metadata = {
  title: "Portal de Onboarding ATLASGR",
  description: "Trilha de onboarding e treinamento corporativo da ATLASGR — protótipo de frontend.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Pass only the available montserrat variable.
  // The global.css maps --font-mont to sans-serif when not provided.
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${montserrat.variable} h-full`}>
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
