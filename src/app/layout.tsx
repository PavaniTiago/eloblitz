import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GameProvider } from "@/hooks/useGameColorContext";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/footer";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EloBlitz",
  description: "EloBlitz - elojob com segurança e máximo desempenho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={plus_Jakarta_Sans.className}>
        <GameProvider>
          <Header/>
          {children}
          <Footer />
        </GameProvider>
      </body>
    </html>
  );
}
