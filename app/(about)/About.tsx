"use client";
import Experience from "../experience/page";
import Projects from "../projects/page";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col justify-center max-w-4xl space-y-5 mt-[15rem]">
        <p className="font-bold text-4xl leading-relaxed text-violet-50">
          Hello! I&aposs;m Yev, a Vancouver 🇨🇦 based space enthusiast 🚀and frontend
          engineer 👨‍💻 working with Typescript and React.
        </p>
      </div>
      <div className="flex w-full justify-start max-w-4xl mt-[1rem] mb-[6rem] space-x-3">
        <button className="bg-[#262F45] rounded-md border border-solid border-[#7AA0F7]  text-[#5686f5] font-semibold text-sm leading-5 py-3 px-4 text-center glow-on-hover">
          About me
        </button>
        <button className="bg-[#262F45] rounded-md border border-solid border-[#7AA0F7]  text-[#5686f5] font-semibold text-sm leading-5 py-3 px-4 text-center glow-on-hover">
          Work
        </button>
      </div>
      <AboutSection />
      <Experience />
      <Projects />
    </main>
  );
};

export default About;
