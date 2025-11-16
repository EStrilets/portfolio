'use client'

import { useTheme } from "next-themes";
import { useState } from "react";

import { 
  LuActivity,
  LuPackage,
  LuFileText,
  LuHome,
} from "react-icons/lu";
import { CgDarkMode } from "react-icons/cg";
import { FaPenNib } from "react-icons/fa";
import Link from "next/link";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

export function GlobalMenu() {
  const { setTheme, theme } = useTheme();

  const [isRotated, setIsRotated] = useState(false);
  
  const handleThemeToggle = () => {
    setIsRotated(!isRotated);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 250); // Add a small delay to allow animation to happen before theme changes
  };

  const data = [
    {
      title: "Home",
      icon: (
        <LuHome className='h-full w-full text-neutral-600 dark:text-neutral-300' />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <LuPackage className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    // {
    //   title: "Blog",
    //   icon: (<FaPenNib className="h-full w-full text-neutral-600 dark:text-neutral-300" />),
    //   href: "/blog",
    // },
    {
      title: "Resume",
      icon: (
        <LuFileText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/yevhenii_strilets_resume_2025.pdf",
    },
    {
      title: "Theme",
      icon: <CgDarkMode className={`h-full w-full text-neutral-600 dark:text-neutral-300 transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`} />,
      href: null,
      onClick: handleThemeToggle
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          item.href ? (
            <Link key={idx} href={item.href} className="no-underline" target={item.title === "Resume" ? "_blank" : undefined}>
              <DockItem
                className="aspect-square rounded-full bg-[#5686f5]/15 backdrop-blur-xl border border-[#5686f5]/40"
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ) : (
          <div key={idx} onClick={item.onClick} className="cursor-pointer">
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-[#5686f5]/15 backdrop-blur-xl border border-[#5686f5]/40"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </div>
          )
        ))}
      </Dock>
    </div>
  );
}
