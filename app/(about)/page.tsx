"use client";
import Link from "next/link";
import Projects from "../projects/Projects";
import AboutSection from "./AboutSection";
import Experience from "../(experience)/Experience";
import Education from "../(education)/Education";
import Skills from "../(skills)/Skills";
import LinkPreview from "@/components/LinkPreview";

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
      <div className="pointer-events-none fixed inset-0 -z-40 h-full w-full overflow-hidden">
        <div className="noice"></div>
      </div>
      <div className="flex flex-col justify-center w-full max-w-4xl mt-[8rem] md:mt-[15rem] p-12 md:p-0 text-light-text dark:text-violet-50">
        <p className="font-medium text-2xl leading-relaxed md:text-xl md:leading-loose dark:text-[#EDB200]">
          Salut{" "}
          <span className="inline-block animate-wave -ml-1 mr-1 wave">👋🏻</span>{" "}
          I&apos;m Yev Strilets a web development enthusiast{" "}
          <span className="inline-block animate-levitate">🚀</span>
        </p>
        <p className="font-bold text-2xl leading-relaxed md:text-4xl md:leading-loose">
          Crafting engaging web experiences.
        </p>
        <p className="font-bold text-2xl leading-relaxed md:text-4xl md:leading-loose">
          Exploring development, UI/UX, and interactivity.
        </p>
        <div className="flex flex-row items-center justify-start">
          <p className="font-medium text-2xl leading-relaxed md:text-xl md:leading-loose mr-1">
            Get in touch via Email or see my work on
            <LinkPreview
              url="https://ui.aceternity.com"
              className="mx-1 font-medium text-xl"
            >
              Github
            </LinkPreview>
            or {" "}
          </p>
          <span className="group/blur blur-sm filter transition-all duration-500 ease-in-out focus-within:text-gray-400 focus-within:blur-none hover:text-gray-100 hover:blur-none focus:text-gray-300 focus:blur-none text-gray-400">
            <p className="font-medium text-2xl leading-relaxed md:text-xl md:leading-loose">
              {" "}
              find me on
              <LinkPreview
                url="https://ui.aceternity.com"
                className="font-medium text-xl"
              >
                {" "}
                platforms{" "}
              </LinkPreview>
              I don’t like using
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center max-w-4xl mt-[1rem] mb-[6rem] space-x-0 space-y-6 md:flex-row md:space-y-0 md:justify-start md:space-x-3">
        {/* <Link href="#about-section">
          <button
            onClick={scrollToView("about-section")}
            className="bg-[#262F45] w-[325px] rounded-md border border-solid border-[#7AA0F7]  text-[#5686f5] font-semibold text-sm leading-5 py-3 px-4 text-center glow-on-hover md:w-auto"
          >
            About me
          </button>
        </Link>
        <Link href="#projects-section">
          <button
            onClick={scrollToView("projects-section")}
            className="dark:bg-[#262F45] rounded-md 
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
        </Link> */}
      </div>
      <AboutSection />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      {/* <Title3D /> */}
    </main>
  );
};

export default About;

