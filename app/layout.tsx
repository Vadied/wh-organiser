import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Page from "@/components/Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wh40k battle manager",
  description: "Gestisci le tue epiche battaglie di Warhammer 40k",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
