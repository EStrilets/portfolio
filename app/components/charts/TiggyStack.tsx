import {
    TbBrandReact,
    TbBrandGithub,
    TbBrandJavascript,
    TbBrandTypescript,
    TbBrandDocker,
    TbBrandCss3,
    TbBrandReactNative,
    TbBrandGolang
  } from "react-icons/tb";
  
  import { FaGolang } from "react-icons/fa6";
  import { SiRedux } from "react-icons/si";
  import { BiLogoPostgresql, BiLogoHtml5 } from "react-icons/bi";
  
  const LOGOS = [
      <TbBrandJavascript
      width={24}
      height={24}
      className="text-[#F0DB4f]"
      key={4}
      />,
      <BiLogoHtml5
      width={24}
      height={24}
      className="text-[#e34c26]"
      key={5}
      />,
      <TbBrandCss3 width={24} height={24} className="text-[#264de4]" key={7} />,
      <TbBrandReact width={24} height={24} className="text-[#61DBFB]" key={2} />,
    <TbBrandReactNative
      width={50}
      height={24}
      className="text-rose-500"
      key={1}
    />,
    <SiRedux width={24} height={24} className="text-[#1d8286]" key={8} />,
    <TbBrandDocker width={24} height={24} className="text-[#0db7ed]" key={6} />,
    <FaGolang width={24} height={24} className="text-[#00A29C]" key={9} />,
    <BiLogoPostgresql
      width={24}
      height={24}
      className="text-[#0064a5]"
      key={10}
    />,
    <TbBrandGithub width={24} height={24} className="text-violet-50" key={3} />,
  ];
  
  export const TiggyStack = () => {
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
  