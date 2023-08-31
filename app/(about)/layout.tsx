import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "../components/sideMenu/SideMenu";

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
      <div>
        {children}
        <div className="flex-grow">
          <SideMenu />
        </div>
      </div>
  );
}
