import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "AI Business Assistant — Generate Business Ideas, Marketing Plans, Emails and Reports",
  description:
    "AI Business Assistant is a modern SaaS portfolio app for generating business ideas, marketing plans, emails, and reports instantly using AI.",
  keywords: [
    "AI business assistant",
    "business ideas",
    "marketing plan generator",
    "email writer",
    "AI SaaS portfolio",
    "Next.js AI demo",
  ],
  authors: [{ name: "AI Business Assistant" }],
  openGraph: {
    title: "AI Business Assistant — AI-Powered Business Planning for Modern Brands",
    description:
      "Generate business ideas, marketing plans, emails, and reports instantly with AI. Perfect for portfolio presentations and SaaS showcases.",
    type: "website",
    url: "https://aibusinessassistant.example",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Assistant — AI Business SaaS Portfolio",
    description: "Generate business prompts for business ideas, marketing plans, and email writing instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
