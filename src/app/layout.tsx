import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

// page metadata
export const metadata: Metadata = {
  title: "Aibo Feng",
  description: "Computer Science student at the University of Washington",
};

// layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 flex flex-col items-center justify-center min-h-screen font-times">
        <div className="container mx-auto px-4 max-w-lg sm:max-w-xl md:max-w-2xl py-6">
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
