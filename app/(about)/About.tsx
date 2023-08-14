"use client";
import Link from "next/link";
import Projects from "../(projects)/Projects";
import AboutSection from "./AboutSection";
import Experience from "../(experience)/Experience";

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
      <div className="flex flex-col justify-center max-w-4xl space-y-5 mt-[8rem] md:mt-[15rem] p-6 md:p-0">
        <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-4xl md:leading-loose">
          Hello! I&apos;m Yev, a Vancouver 🇨🇦 based space enthusiast 🚀and
          frontend engineer 👨‍💻 working with Typescript and React.
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
              glow-on-hover">
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
              glow-on-hover">
            Projects
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
