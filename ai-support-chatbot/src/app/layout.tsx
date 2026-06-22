import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "SupportAI — AI Customer Support That Works 24/7",
  description:
    "Deploy an intelligent AI assistant that handles customer queries instantly, resolves tickets automatically, and delights customers around the clock. Start your free trial today.",
  keywords: [
    "AI customer support",
    "chatbot",
    "customer service automation",
    "helpdesk AI",
    "24/7 support",
  ],
  authors: [{ name: "SupportAI" }],
  openGraph: {
    title: "SupportAI — AI Customer Support That Works 24/7",
    description:
      "Automate customer support with AI. Handle thousands of queries instantly, improve satisfaction scores, and reduce costs by 60%.",
    type: "website",
    url: "https://supportai.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "SupportAI — AI Customer Support That Works 24/7",
    description: "Automate customer support with AI. Start free today.",
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
