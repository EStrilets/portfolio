"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ExperienceCard from "../(experience)/ExprienceCard";

const AboutSection = () => {
  const router = useRouter();

  const handleClick = (destination: string) => {
    router.push(destination);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#141B2D] gap-8">
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-center  
        justify-center 
        font-bold text-3xl
        mt-[3rem]
        text-violet-50
        scroll-mt-40
        md:items-start 
        "
        id="about-section"
      >
        <div>
          <h1>About me</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl md:mb-[3rem] text-violet-50 p-8 md:p-0">
        <ExperienceCard colspan="col-span-1">
          <p className="text-xl font-sans leading-9 text-blue-900">
            Since 2020, I&apos;ve been crafting UIs, specializing in creating component libraries, design systems, and front-end architecture. 
            technologies and design led me to attend <br />{" "}
            <strong className="text-blue-800">
              Simon Fraser University (SFU)
            </strong>
            , where I earned <br /> my Bachelor&apos; Degree of Science with a
            major in Computer Science.
          </p>
        </ExperienceCard>
        
        <ExperienceCard colspan="col-span-1">
          <p className="text-xl font-sans leading-9 text-blue-900">
            As my first big project, I gathered a team of 3 developers and
            started to develop the full-stack application for the university
            experience. My experiments and projects eventually got me my first
            job out of university at{" "}
            <strong className="text-blue-800">Tiggy</strong>.
          </p>
        </ExperienceCard>
        
        <ExperienceCard colspan="col-span-1">
          <p className="text-xl font-sans leading-9 text-blue-900">
            There I have been working on a delivery app and nd received an
            incredible amount of skills and knowledge starting from setting up
            a component library to participating in extensive standup and code
            reviews. After Tiggy, I got into the web development agency{" "}
            <strong className="text-blue-800">SEO Soul</strong>, where I developed
            a Chrome extension for company needs and delivered features to
            clients&apos; projects.
          </p>
        </ExperienceCard>
        
        <ExperienceCard colspan="col-span-1">
          <p className="text-xl font-sans leading-9 text-blue-900">
            My experience spans working with startups on SaaS products, mobile apps, or e-commerce, 
            as well as building products independently or alongside friends. 
          </p>
        </ExperienceCard>
      </div>
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-start justify-center 
        font-bold text-3xl
        mb-[3rem]
        text-violet-50
        p-6
        md:p-0
        "
      >
        <Link href="/yevhenii_strilets_resume2023.pdf" target="blank">
          <button
            className="bg-[#262F45] rounded-md 
              border border-solid border-[#7AA0F7]  
              text-[#5686f5] font-semibold text-sm leading-5 
              py-3 px-4 
              text-center 
              glow-on-hover
              w-full
              md:w-fit
              "
          >
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
