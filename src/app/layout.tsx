import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PageTransition } from "@/components/common/PageTransition";
import { ThemeProvider } from "@/components/common/theme-provider";
import { VantaBackground } from "@/components/common/VantaBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ammar - Portfolio",
  description: "(Pharmacist & Dreamer)",
  openGraph: {
    title: "Ammar - Portfolio",
    description: "(Pharmacist & Dreamer)",
    images: ["/Ammar-P.P1x1-B.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar - Portfolio",
    description: "(Pharmacist & Dreamer)",
    images: ["/Ammar-P.P1x1-B.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Background */}
          <VantaBackground>
            <div className="absolute inset-0 bg-white/30 dark:bg-black/40" />
          </VantaBackground>

          <Header />
          <main className="flex-1 pt-20 relative z-10">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
