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
    <html lang="en">
      <body className={`${inter.className} bg-[#f6f6ef]`}>
        <main className="w-full mx-auto px-12 pt-20 pb-60">{children}</main>
      </body>
    </html>
  );
}
