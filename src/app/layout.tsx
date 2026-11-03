import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ismi Nilam Anggraini — Data Analytics & ML Portfolio",
  description:
    "Portfolio of an Informatics student specializing in Data Analytics, Machine Learning, and Software Development. Explore projects, skills, and experience.",
  keywords: [
    "portfolio",
    "data analytics",
    "machine learning",
    "software development",
    "informatika",
    "web developer",
    "Ismi Nilam Anggraini",
  ],
  authors: [{ name: "Ismi Nilam Anggraini" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-surface-950 text-gray-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
