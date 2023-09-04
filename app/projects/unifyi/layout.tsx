import "@/styles/globals.css";
import type { Metadata } from "next";
import { unifyiMenuItems } from "@/data/menuData"
import SideMenu from "@/app/components/sideMenu/SideMenu";

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
          <SideMenu menuList={unifyiMenuItems} />
        </div>
      </div>
  );
}
