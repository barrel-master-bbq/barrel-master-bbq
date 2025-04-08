import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barrel Master BBQ",
  description: "No frills, no fuss—just darn good BBQ, ready when you are!",
  openGraph: {
    title: "Barrel Master BBQ",
    description: "No frills, no fuss—just darn good BBQ, ready when you are!",
    url: "https://barrelmasterbbq.com/",
    siteName: "Barrel Master BBQ",
    images: [
      {
        url: "https://barrelmasterbbq.com/logo.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrel Master BBQ",
    description: "No frills, no fuss—just darn good BBQ, ready when you are!",
    images: ["https://barrelmasterbbq.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
