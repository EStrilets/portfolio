import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ToasterContext from "./context/ToasterContext";
import { SlidingTabBar } from "@/components/global/SlidingTabBar";
import { ThemeProvider } from "@/components/theme-provider";
import "@theme-toggles/react/css/Expand.css"

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
      <body className={`${inter.className} bg-main-light dark:bg-[#190F18]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <ToasterContext />
            {children}
            <Analytics />
          </div>
          <SlidingTabBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
