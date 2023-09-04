"use client";
import { useEffect, useState } from "react";

type MenuItem = {
  text: string;
  section: string;
};

type MenuList = { 
  items: MenuItem[],
  scrollOffset: number
}

interface SideMenuProps {
  menuList: MenuList;
}

const SideMenu:React.FC<SideMenuProps> = ({ menuList }) => {
  const [isMenuSticky, setIsMenuSticky] = useState(false);
  const [isMenuItem, setMenuItem] = useState("about-section");

  const handleScrollMenu = () => {
    if (window.scrollY > menuList.scrollOffset) {
      setIsMenuSticky(true);
    } else {
      setIsMenuSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollMenu);

    return () => {
      window.removeEventListener("scroll", handleScrollMenu);
    };
  }, []);

  useEffect(() => {
    const handleScrollSection = () => {
      let sensitivityOffset = 900;
      const sections = [
        "about-section",
        "work-section",
        "projects-section",
        "education-section",
      ];
      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom + sensitivityOffset >= window.innerHeight / 0.9
          ) {
            setMenuItem(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSection);

    return () => {
      window.removeEventListener("scroll", handleScrollSection);
    };
  }, []);

  const scrollToView = (targetId: string) => (e: any) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`fixed hidden md:block transition-opacity duration-300 ease-in-out ${
        isMenuSticky ? "opacity-100" : "opacity-0"
      } top-60 ml-[4rem] h-screen bg-transparant`}
    >
      <div className="flex flex-col justify-center items-start space-y-6 border-l-[2.5px] border-[#1E2A45] p-3">
        {menuList.items.map((item, key) => (
          <button
            key={key}
            onClick={scrollToView(`${item.section}`)}
            className={`${
              isMenuItem === `${item.section}` ? "text-text" : "text-violet-50"
            } transition duration-300 ease-in-out`}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
