"use client";
import { ThemeProvider } from "@material-tailwind/react";
import './globals.css'

import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <ThemeProvider>
      <body className="min-h-screen flex flex-col">
      <header className="w-full bg-blue-gray-700">
        <Navigation/>
      </header>
      <main className="w-full p-6">
        {children}
      </main>
      <footer
        className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-700 bg-blue-gray-700 py-6 text-center md:justify-between mt-auto">
        <Footer/>
      </footer>
      </body>
    </ThemeProvider>
    </html>
  );
}
