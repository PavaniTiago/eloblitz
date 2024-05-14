import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GameProvider } from "@/hooks/useGameColorContext";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
