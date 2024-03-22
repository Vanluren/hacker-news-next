import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HACKER NEWS",
  description: "A Hacker News clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f6f6ef]">
      <body className={`${inter.className}`}>
        <main className="w-4/6 mx-auto px-12 pt-20 pb-60">{children}</main>
      </body>
    </html>
  );
}
