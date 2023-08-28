"use client";
import Link from "next/link";
import Projects from "../projects/Projects";
import AboutSection from "./AboutSection";
import Experience from "../(experience)/Experience";
import { PersonalStack } from "../components/charts/PersonalStack";

const About = () => {
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
    <main className="flex flex-col items-center justify-center gap-12 bg-[radial-gradient(#1E2A45_1px,transparent_1px)] [background-size:32px_32px]">
      <div className="flex flex-col justify-center w-full max-w-4xl space-y-5 mt-[8rem] md:mt-[15rem] p-6 md:p-0">
        <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-4xl md:leading-loose">
          Hello! I&apos;m Yev, a Vancouver 🇨🇦 based space 
        </p>
        <div className="flex flex-row">
          <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-4xl md:leading-loose">
           enthusiast 🚀and 
        </p>
        <p className="flex items-center font-bold text-4xl text-violet-50">
          <span className="relative ml-3 h-[1.05em] w-96 overflow-hidden">
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white">
              Frontend Developer 
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:3.5s]">
            Full-stack Developer 
            </span>
          </span>
        </p>
        </div>
        <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-4xl md:leading-loose">
        working with Typescript and React.
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center max-w-4xl mt-[1rem] mb-[6rem] space-x-0 space-y-6 md:flex-row md:space-y-0 md:justify-start md:space-x-3">
        <Link href="#about-section">
          <button
            onClick={scrollToView("about-section")}
            className="bg-[#262F45] w-[325px] rounded-md border border-solid border-[#7AA0F7]  text-[#5686f5] font-semibold text-sm leading-5 py-3 px-4 text-center glow-on-hover md:w-auto"
          >
            About me
          </button>
        </Link>
        <Link href="#work-section">
          <button
            onClick={scrollToView("work-section")}
            className="bg-[#262F45] rounded-md 
              border border-solid border-[#7AA0F7]  
              text-[#5686f5] font-semibold text-sm leading-5 
              py-3 px-4 
              text-center
              w-[325px]
              md:w-auto
              glow-on-hover"
          >
            Work
          </button>
        </Link>
        <Link href="#projects-section">
          <button
            onClick={scrollToView("projects-section")}
            className="bg-[#262F45] rounded-md 
              border border-solid border-[#7AA0F7]  
              text-[#5686f5] font-semibold text-sm leading-5 
              py-3 px-4 
              text-center
              w-[325px]
              md:w-auto
              glow-on-hover"
          >
            Projects
          </button>
        </Link>
        <Link href="#projects-section">
          <button
            onClick={scrollToView("projects-section")}
            className="bg-[#262F45] rounded-md 
              border border-solid border-[#7AA0F7]  
              text-[#5686f5] font-semibold text-sm leading-5 
              py-3 px-4 
              text-center
              w-[325px]
              md:w-auto
              glow-on-hover"
          >
            Education
          </button>
        </Link>
      </div>
      <AboutSection />
      <Experience />
      <Projects />
    </main>
  );
};

export default About;
