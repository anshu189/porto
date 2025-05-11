import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import { Montserrat } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PRAVEEN PASUPULETI",
  description: "Cloud Engineer | Writer | Shutterbug | Articulate Minimalist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#fff] antialiased !font-mont hero-bg`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
