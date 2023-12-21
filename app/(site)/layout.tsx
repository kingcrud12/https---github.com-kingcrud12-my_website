import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yann DIPITA",
  description: " this is Yann DIPITA portfolio",
  openGraph: {
    images:
      "https://letcreateanapp.com/wp-content/uploads/2022/03/Quiz-App-in-Swift.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-[#e66465] to-[#9198e5] text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
