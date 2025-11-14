import "./globals.css";

import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiwify",
  description:
    "Transforme o seu conhecimento em um curso online e crie seu negócio na internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${geistMono.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
