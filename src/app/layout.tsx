import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "inspiroIT | Future-Ready IT Solutions",
  description: "Software Development, Social Media Handling, and Website Designing.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPConfig from "@/components/GSAPConfig";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GSAPConfig />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
