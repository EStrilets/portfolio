"use client"
import { useState } from "react";
import { BiLogoHtml5 } from "react-icons/bi";
import ExperienceCard from "../(experience)/ExprienceCard";
import TechStackChart from "../components/charts/TechStackChart";
import {
    TbBrandNextjs,
    TbBrandReact,
    TbBrandGithub,
    TbBrandJavascript,
    TbBrandTypescript,
    TbBrandDocker,
    TbBrandTailwind,
    TbBrandCss3,
  } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiGraphql, SiCplusplus, SiJest, SiMocha, SiReactquery, SiReactrouter, SiRedux } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

const LOGOS = [
    { text: 'JavaScript', element: <TbBrandJavascript width={24} height={24} className="text-[#F0DB4f]" key={4} /> },
    { text: 'TypeScript', element: <TbBrandTypescript width={24} height={24} className="text-[#007acc]" key={5} /> },
    { text: 'C++', element: <SiCplusplus width={24} height={24} className="text-[#044F88]" key={4} /> },
    { text: 'Next', element: <TbBrandNextjs width={50} height={24} className="text-white" key={1} /> },
    { text: 'React', element: <TbBrandReact width={24} height={24} className="text-[#61DBFB]" key={2} /> },
    { text: 'Redux', element: <SiRedux width={24} height={24} className="text-[#1d8286]" key={2} /> },
    { text: 'R.Router', element: <SiReactrouter width={24} height={24} className="text-[#61DBFB]" key={2} /> },
    { text: 'NodeJS', element: <FaNodeJs width={24} height={24} className="text-[#3c873a]" key={9} /> },
  ];

  const LOGOS2 = [
    { text: 'GraphQL', element: <SiGraphql width={24} height={24} className="text-[#e535ab]" key={10} /> },
    { text: 'HTML', element: <BiLogoHtml5 width={24} height={24} className="text-[#e34c26]" key={6} /> },
    { text: 'CSS3', element: <TbBrandCss3 width={24} height={24} className="text-[#264de4]" key={7} /> },
    { text: 'Tailwind', element: <TbBrandTailwind width={24} height={24} className="text-[#1d8286]" key={8} /> },
    { text: 'Docker', element: <TbBrandDocker width={24} height={24} className="text-[#0db7ed]" key={6} /> },
    { text: 'Github', element: <TbBrandGithub width={24} height={24} className="text-violet-50" key={3} /> },
    { text: 'Jest', element: <SiJest width={24} height={24} className="text-[#C63D14]" key={3} /> },
    { text: 'Mocha', element: <SiMocha width={24} height={24} className="text-[#8D6748]" key={3} /> },
  ];

  interface BadgeAnimatedGradientBorderProps {
    logo?: React.ReactNode;
    text?: string;
    onMouseEnter?: () => void; // Add this prop for hover events
    onMouseLeave?: () => void; // Add this prop for hover events
  }
  
  const BadgeAnimatedGradientBorder: React.FC<BadgeAnimatedGradientBorderProps> = ({
    logo,
    text,
    onMouseEnter,
    onMouseLeave,
  }) => {
    return (
      <span
        className='relative inline-block overflow-hidden rounded-full p-[1px]'
        onMouseEnter={onMouseEnter} // Add onMouseEnter event handler
        onMouseLeave={onMouseLeave} // Add onMouseLeave event handler
      >
        <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
          <h1 className="mr-1 text-violet-50">{text}</h1> {logo}
        </div>
      </span>
    );
  };


const Badges = ({ setHoveredBadge }: { setHoveredBadge: (text: string | null) => void }) => {

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        {LOGOS.map((logo, i) => (
          <BadgeAnimatedGradientBorder logo={logo.element} text={logo.text} key={i}   onMouseEnter={() => setHoveredBadge(logo.text)}
          onMouseLeave={() => setHoveredBadge(null)} />
        ))}
      </div>
      <div className="space-y-4">
        {LOGOS2.map((logo, i) => (
          <BadgeAnimatedGradientBorder logo={logo.element} text={logo.text} key={i} onMouseEnter={() => setHoveredBadge(logo.text)}
          onMouseLeave={() => setHoveredBadge(null)} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-6 scroll-mt-40 -mt-10"
      id="education-section"
    >
      <div
        className="
          flex flex-col 
          w-full max-w-4xl
          items-center justify-center 
          mt-[3rem]
          text-violet-50
          md:items-start
          "
      >
        <div className="mb-6 font-bold text-3xl">
          <h1>Skills</h1>
        </div>
        <div className="grid w-full grid-cols-3 gap-4">
          <ExperienceCard colspan="col-span-1">
            <div>
              <Badges setHoveredBadge={setHoveredBadge}/>
            </div>
          </ExperienceCard>
          <ExperienceCard colspan="col-span-2">
            <div className="flex justify-center items-center">
                <TechStackChart hoveredBadge={hoveredBadge} />
            </div>
          </ExperienceCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;
