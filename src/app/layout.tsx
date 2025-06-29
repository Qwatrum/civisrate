import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import Footer from "./components/footer";
import CivisRateImage from "./components/civis_rate_image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CivisRate",
  description: "made by Qwatrum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*<img alt="CivisRate" className="w-100 h-32 object-cover" src=".\public\window.svg"></img>*/} 
         
        <header className="header text-white p-4 text-center">
          <Navigation/>
          <CivisRateImage/>
        </header>
        {children}

        <footer className=" footer text-white p-4 text-center">
          <Footer>Made by Qwatrum</Footer>
        </footer>
      </body>
    </html>
  );
}
