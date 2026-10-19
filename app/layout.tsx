import type { Metadata } from "next";
import SmoothScroll from "@/components/smoothscroll";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Descubra Istambul",
  description: "Roteiros e experiências em Istambul.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider><SmoothScroll />{children}</LanguageProvider>
      </body>
    </html>
  );
}
