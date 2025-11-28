import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Break Into Finance - Gamified Finance Internship Prep",
  description: "Learn finance concepts through bite-sized lessons, duels, and articles. Prepare for your finance internship with gamified learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <header className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">Break Into Finance</Link>
            <nav className="space-x-3 text-sm">
              <Link href="/article/demo" className="text-gray-700 hover:text-gray-900">Demo</Link>
              <Link href="/beta" className="text-gray-700 hover:text-gray-900">Beta</Link>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-600">© 2025 Break Into Finance</div>
        </footer>
      </body>
    </html>
  );
}
