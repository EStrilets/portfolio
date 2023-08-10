"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const navList = [
  {
    name: "About",
    link: "/",
    id: 1,
  },
  {
    name: "Resume",
    link: "/resume",
    id: 2,
  },
  {
    name: "Contact",
    link: "/contact",
    id: 3,
  },
  {
    name: "Blog",
    id: 4,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isSelected, setSelected] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedSelected = localStorage.getItem("isSelected");

    if (storedSelected !== null) {
      const currentRoute = pathname;
      const selectedItem = navList.find((item) => item.link === currentRoute);

      if (selectedItem) {
        setSelected(selectedItem.id);
      }
    }
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("isSelected", isSelected.toString());
  }, [isSelected]);

  return (
    <nav
      className={`
        fixed w-full
        z-20 top-0 left-0
        backdrop-filter backdrop-blur-sm bg-opacity-50
        transition-all duration-300 ease-in-out
        bg-[#141B2D] border-b-[0.5px] border-[#1E2A45]
        ${isSticky ? "h-[6rem]" : " h-[8rem]"}`}
    >
      <div
        className={`max-w-4xl flex flex-wrap items-center justify-between mx-auto transition-all duration-300 ease-in-out ${
          isSticky ? "pt-1" : "pt-6"
        }`}
      >
        <Link href="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            in Progress...
          </span>
        </Link>
        <div
          className={`
          items-center 
          justify-between 
          hidden 
          w-full 
          md:flex 
          md:w-auto 
          md:order-2 
          px-10 py-[1rem] mt-1
          transition-all duration-300 ease-in-out
          space-x-6
          `}
        >
          <div className="flex justify-center items-center rounded-md bg-[#1B263E] h-12 w-12 glow-on-hover">
            <Link href="https://github.com/EStrilets" target="_blank">
              <BsGithub size={30} color="#f5f3ff" />
            </Link>
          </div>
          <div className="flex justify-center items-center rounded-md bg-[#1B263E] h-12 w-12 glow-on-hover">
            <Link
              href="https://www.linkedin.com/in/yev-strilets/"
              target="_blank"
            >
              <BiLogoLinkedin size={30} color="#0077b5" />
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <Tabs defaultValue="account">
          <TabsList
            className={`
              flex 
              flex-col 
              md:p-0 
              mt-4 
              bg-transparent 
              md:flex-row 
              md:space-x-8 md:mt-0 md:border-0
              `}
          >
            {navList.map((item) => (
              <Link key={item.id} href={item.link ? item.link : ""}>
                <TabsTrigger
                  value={item.name}
                  className={`
                 text-violet-50
                ${isSelected === item.id ? "text-text" : "bg-transparent"} 
                text-lg
                rounded-lg
                transition-all duration-100 ease-in-out
                `}
                >
                  {item.name}
                  {item.name === "Blog" ? (
                    <h1 className="text-sm mt-3 ml-1">soon...</h1>
                  ) : (
                    ""
                  )}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </nav>
  );
};

export default Navbar;
