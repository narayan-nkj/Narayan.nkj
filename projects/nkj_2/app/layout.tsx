import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AccentProvider } from "@/components/ui/AccentContext";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import HeaderNav from "@/components/ui/HeaderNav";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark"
};

export const metadata: Metadata = {
  title: "Narayan Kumar Jha — Creative Developer & Data Scientist",
  description: "Portfolio of Narayan Kumar Jha. Intersecting computational rigor, linear algebra, and data architecture from IIT Madras with high-fidelity, creative digital interfaces.",
  keywords: [
    "Narayan Kumar Jha",
    "Creative Developer",
    "Data Scientist",
    "IIT Madras",
    "BPPIMT",
    "Next.js",
    "Linear Algebra",
    "Python",
    "TypeScript",
    "Tactile UI"
  ],
  authors: [{ name: "Narayan Kumar Jha", url: "https://github.com/narayan-nkj" }],
  openGraph: {
    title: "Narayan Kumar Jha — Creative Developer & Data Scientist",
    description: "Computational rigor, linear algebra, and tactile digital architectures.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#09090b] text-[#f4f4f5] selection:bg-[#ff4520] selection:text-white`}
    >
      <body className="min-h-screen bg-[#09090b] font-sans antialiased relative noise-overlay">
        <AccentProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <HeaderNav />
            {children}
          </SmoothScrollProvider>
        </AccentProvider>
      </body>
    </html>
  );
}
