import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tejash-portfolio.vercel.app"),
  title: {
    default: "Hazari Tejash | Software Engineer & AI Enthusiast",
    template: "%s | Hazari Tejash",
  },
  description: "Portfolio of Hazari Tejash — Software Engineer specializing in AI, Machine Learning, and Full Stack Development. Explore projects, skills, and experience.",
  keywords: ["Hazari Tejash", "Software Engineer", "AI Enthusiast", "Machine Learning", "Full Stack Development", "Portfolio", "Web Developer"],
  authors: [{ name: "Hazari Tejash", url: "https://tejash-portfolio.vercel.app" }],
  creator: "Hazari Tejash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejash-portfolio.vercel.app",
    title: "Hazari Tejash | Software Engineer & AI Enthusiast",
    description: "Portfolio of Hazari Tejash — Software Engineer specializing in AI, Machine Learning, and Full Stack Development. Explore projects, skills, and experience.",
    siteName: "Hazari Tejash Portfolio",
    images: [
      {
        url: "/images/lander_dark.png",
        width: 1200,
        height: 630,
        alt: "Hazari Tejash Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazari Tejash | Software Engineer & AI Enthusiast",
    description: "Portfolio of Hazari Tejash — Software Engineer specializing in AI, Machine Learning, and Full Stack Development. Explore projects, skills, and experience.",
    images: ["/images/lander_dark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}