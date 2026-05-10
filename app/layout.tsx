import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaaya AI — The Intelligent Digital Executive Assistant",
  description:
    "Kaaya is your AI-native hyper-assistant. Orchestrating your digital ecosystem with state-of-the-art multimodal AI — WhatsApp, calls, memory, image generation, and native device control from a single floating overlay.",
  keywords: [
    "Kaaya AI",
    "digital assistant",
    "AI assistant",
    "Gemini",
    "executive assistant",
    "multimodal AI",
    "Android overlay",
  ],
  authors: [{ name: "Mayank Kumar Jha" }],
  openGraph: {
    title: "Kaaya AI — The Intelligent Digital Executive Assistant",
    description:
      "Orchestrating your digital ecosystem with state-of-the-art multimodal AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
