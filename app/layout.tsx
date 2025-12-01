import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ToasterContext from "./context/ToasterContext";
import { ThemeProvider } from "@/components/theme-provider";
import "@theme-toggles/react/css/Expand.css"
import { GlobalMenu } from "@/components/global/GlobalMenu";
import { MusicPlayer } from "@/components/global/MusicPlayer";
import Footer from "@/components/global/Footer";
import Timeline from "@/components/global/Timeline";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "YevStrilets",
  description: "Created by Yevhenii Strilets",
};


const timelineMenuList = {
  sections: [
    { id: "about-section", name: "About" },
    { id: "flow-section", name: "Flow" },
    { id: "experience-section", name: "Experience" },
    { id: "education-section", name: "Education" },
    { id: "contact-section", name: "Contact" }
  ],
  scrollOffset: 100
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-light dark:bg-[#030508]`}>
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
          <GlobalMenu />
        </ThemeProvider>
        <Timeline menuList={timelineMenuList} />
        <Footer />
      </body>
    </html>
  );
}
