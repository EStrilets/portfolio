"use client";
import Link from "next/link";
import Projects from "../projects/Projects";
import AboutSection from "./AboutSection";
import Experience from "../(experience)/Experience";
import Education from "../education/Education";

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
    <main className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col justify-center w-full max-w-4xl space-y-5 mt-[8rem] md:mt-[15rem] p-6 md:p-0">
        <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-4xl md:leading-loose">
          Hello! I&apos;m Yev, a Vancouver 🇨🇦 based space 
        </p>
        <div className="flex flex-row">
          <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-4xl md:leading-loose">
           enthusiast 🚀and 
           <span className="md:hidden">
            Frontend Developer
           </span>
        </p>
        <p className="md:flex items-center font-bold text-4xl text-violet-50 hidden">
          <span className="relative ml-3 h-[1.05em] w-96 overflow-hidden">
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white">
              <span className="text-text"> Software Developer </span>
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:3s]">
            <span className="text-text"> Frontend Developer  </span>
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:6s]">
            <span className="text-text"> Full-stack Developer  </span>
            </span>
          </span>
        </p>
        </div>
        <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-4xl md:leading-loose">
        working with Typescript and React
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
            Experience
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
      </div>
      <AboutSection />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
};

export default About;
