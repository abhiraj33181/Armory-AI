import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: "Next-Gen AI Platform",
  description: "Advanced AI-driven data automation platform.",
  openGraph: {
    title: "Next-Gen AI Platform",
    description: "Advanced AI-driven data automation platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-arctic-powder text-oceanic-noir antialiased`}>
        {children}
      </body>
    </html>
  );
}