"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import path from "path";



const navList = [
  {
    name: "About",
    link: "/",
    id: 1,
  },
  {
    name: "Projects",
    link: "/projects",
    id: 2,
  },
  {
    name: "Experience",
    link: "/experience",
    id: 3,
  },
  {
    name: "Contact",
    link: "/contact",
    id: 4,
  },
];

const Navbar = () => {
  const pathname = usePathname()
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
    <nav className="bg-green fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className={`
          ${isSticky ? "bg-[#1f1f1f]/[0.85]" : "bg-transparent"} 
          items-center 
          justify-between 
          hidden 
          w-full 
          md:flex 
          md:w-auto 
          px-10 py-[1rem] mt-2
          backdrop-blur-lg
          rounded-lg
          transition-all duration-300 ease-in-out
          space-x-6
          `}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Work in Progress...
          </span>
        </div>
        <div
          className={`
          ${isSticky ? "bg-[#1f1f1f]/[0.85]" : "bg-transparent"} 
          items-center 
          justify-between 
          hidden 
          w-full 
          md:flex 
          md:w-auto 
          md:order-2 
          px-10 py-[1rem] mt-2
          backdrop-blur-lg
          rounded-lg
          transition-all duration-300 ease-in-out
          space-x-6
          `}
        >
          <Link href="https://github.com/EStrilets" target="_blank">
            <BsGithub size={30} color={`${isSticky ? "white" : "black"}`} />
          </Link>
          <Link href="https://www.linkedin.com/in/yev-strilets/" target="_blank">
            <BiLogoLinkedin
              size={30}
              color={`${isSticky ? "#0077b5" : "black"}`}
            />
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`
          ${isSticky ? "bg-[#1f1f1f]/[0.85]" : "bg-transparent"} 
          items-center 
          justify-between 
          hidden 
          w-full 
          md:flex 
          md:w-auto 
          md:order-1 
          px-10 py-[1rem] mt-2
          backdrop-blur-lg
          rounded-lg
          transition-all duration-300 ease-in-out
          `}
          id="navbar-sticky"
        >
          <Tabs defaultValue="account">
            <TabsList
              className={`
              flex 
              flex-col 
              md:p-0 
              mt-4 
              border 
              border-gray-100 
              rounded-lg 
              bg-transparent 
              md:flex-row 
              md:space-x-8 md:mt-0 md:border-0`}
            >
              {navList.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setSelected(item.id)}
                >
                  <TabsTrigger
                    value={item.name}
                    className={`
                ${isSticky ? "text-[#FA9D00]" : "text-black"} 
                ${
                  isSelected === item.id
                    ? "bg-[#FFCF7D] text-black"
                    : "bg-transparent"
                } 
                text-lg
                rounded-lg
                transition-all duration-100 ease-in-out
                `}
                  >
                    {item.name}
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
