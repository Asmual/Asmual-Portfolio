import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Asmual Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#161616",
              color: "#fff",
              border: "1px solid rgba(201, 168, 76, 0.3)",
              fontSize: "14px",
            },
          }}
        />

        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}