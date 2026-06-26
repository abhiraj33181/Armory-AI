import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next/dist/types";

// Instantiate fonts matching the strict typography parameters
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: '--font-jetbrains',
  display: 'swap',
});

// SEO Hygiene & Metadata
export const metadata: Metadata = {
  title: "Next-Gen AI Platform",
  description: "Advanced AI-driven data automation platform engineered for speed.",
  openGraph: {
    title: "Next-Gen AI Platform",
    description: "Advanced AI-driven data automation platform engineered for speed.",
    type: "website",
    siteName: "Next-Gen AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-arctic-powder text-oceanic-noir antialiased`}>
        {children}
      </body>
    </html>
  );
}