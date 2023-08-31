import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Analytics } from "@vercel/analytics/react";
import ToasterContext from "./context/ToasterContext";
import ReadingBar from "./components/readingBar/ReadingBar";
import SideMenu from "./components/sideMenu/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YevStrilets",
  description: "Created by Yevhenii Strilets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ToasterContext />
        {children}
        {/* <div className="flex-grow">
          <SideMenu />
        </div> */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
