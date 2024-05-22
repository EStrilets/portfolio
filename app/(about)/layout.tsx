import "@/styles/globals.css";
import type { Metadata } from "next";
import SideMenu from "@/components/sideMenu/SideMenu";
import { landingMenuItems } from "@/data/menuData"

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
          <SideMenu menuList={landingMenuItems} />
        </div>
      </div>
  );
}
