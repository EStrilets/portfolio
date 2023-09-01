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
import { SiGraphql } from "react-icons/si";
import { BiLogoHtml5 } from "react-icons/bi";

const LOGOS = [
  <TbBrandNextjs width={50} height={24} className="text-white" key={1} />,
  <TbBrandReact width={24} height={24} className="text-[#61DBFB]" key={2} />,
  <TbBrandGithub width={24} height={24} className="text-violet-50" key={3} />,
  <TbBrandJavascript
    width={24}
    height={24}
    className="text-[#F0DB4f]"
    key={4}
  />,
  <TbBrandTypescript
    width={24}
    height={24}
    className="text-[#007acc]"
    key={5}
  />,
  <BiLogoHtml5
      width={24}
      height={24}
      className="text-[#e34c26]"
      key={5}
    />,
  <TbBrandCss3 width={24} height={24} className="text-[#264de4]" key={7} />,
  <TbBrandDocker width={24} height={24} className="text-[#0db7ed]" key={6} />,
  <TbBrandTailwind width={24} height={24} className="text-[#1d8286]" key={8} />,
  <FaNodeJs width={24} height={24} className="text-[#3c873a]" key={9} />,
  <SiGraphql width={24} height={24} className="text-[#e535ab]" key={10} />

];

export const SEOStack = () => {
  return (
    <div className="relative m-auto w-[850px] overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%, #0F1521_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%, #0F1521_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
