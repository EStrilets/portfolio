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
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

export const SEOStack = () => {
  return (
    <InfiniteSlider speedOnHover={50} gap={24} className="mt-10">
      <TbBrandNextjs className="w-6 h-6 text-white" key={1} />
      <TbBrandReact className="w-6 h-6 text-[#61DBFB]" key={2} />
      <TbBrandGithub className="w-6 h-6 text-violet-50" key={3} />
      <TbBrandJavascript className="w-6 h-6 text-[#f0db4f]" key={4} />
      <TbBrandTypescript className="w-6 h-6 text-[#3178c6]" key={11} />
      <BiLogoHtml5 className="w-6 h-6 text-[#e34c26]" key={5} />
      <TbBrandCss3 className="w-6 h-6 text-[#264de4]" key={7} />
      <TbBrandDocker className="w-6 h-6 text-[#0db7ed]" key={6} />
      <TbBrandTailwind className="w-6 h-6 text-[#1d8286]" key={8} />
      <FaNodeJs className="w-6 h-6 text-[#3c873a]" key={9} />
      <SiGraphql className="w-6 h-6 text-[#e535ab]" key={10} />
    </InfiniteSlider>
  );
};
