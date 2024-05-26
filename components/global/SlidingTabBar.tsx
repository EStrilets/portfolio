"use client";
import React, { useEffect, useRef, useState } from "react";
import { DarkModeToggle } from "../DarkModeToggle";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BiArch } from "react-icons/bi";
import { BsFilePdf, BsLightbulb } from "react-icons/bs";
import Link from "next/link";

let allTabs = [
  {
    id: "home",
    name: "Home",
    link: "/",
    icon: <BiArch size={22} />,
  },
  {
    id: "projects",
    link: "/projects",
    name: "Projects",
    icon: <BsLightbulb size={22} />,
  },
  {
    id: "resume",
    link: "/yevhenii_strilets_resume2023.pdf",
    name: "Resume",
    icon: <BsFilePdf size={22} />,
  },
];

export const SlidingTabBar = () => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const homeTabIndex = allTabs.findIndex((tab) => tab.id === "home");
  const [activeTabIndex, setActiveTabIndex] = useState<number>(homeTabIndex);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);


  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  const handleTabClick = (index: number, tabId: string) => {
    if (tabId !== "resume") {
      setActiveTabIndex(index);
    }
  };

  return (
    <div
      className="backdrop-filter backdrop-blur-sm bg-opacity-60
      transition-all duration-300 ease-in-out
      bg-[#495b88] flew justify-center items-center align-middle sticky bottom-4 mt-12 mx-auto flex w-max h-12 rounded-xl"
    >
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-md py-1 px-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-lg bg-[#405079]" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                className="mx-0 my-0"
                  key={tab.id}
                  href={tab.link ? tab.link : ""}
                  target={tab.name === "Resume" ? "blank" : ""}
                >
                  <button
                    key={index}
                    ref={(el) => (tabsRef.current[index] = el)}
                    className="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white"
                    onClick={() => handleTabClick(index, tab.id)}
                  >
                    {React.cloneElement(tab.icon, {
                      className: `mt-[0.2rem] ${
                        isActive ? "text-text" : "text-second dark:text-white"
                      }`,
                    })}
                  </button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tab.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
      <span className="inline-block h-[2rem] w-[0.125rem] self-stretch bg-second bg-white/10 rounded-lg mt-[0.4rem] mx-1" />
      <FiMoreHorizontal size={24} className="mx-1" />
      <DarkModeToggle />
    </div>
  );
};
