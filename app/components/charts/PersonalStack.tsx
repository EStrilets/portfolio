import {
    TbBrandNextjs,
    TbBrandReact,
    TbBrandGithub,
    TbBrandJavascript,
    TbBrandTypescript,
    TbBrandDocker,
    TbBrandTailwind
  } from "react-icons/tb";
  
  const LOGOS = [
    <TbBrandNextjs width={50} height={24} className="text-violet-50" key={1} />,
    <TbBrandReact width={24} height={24} className="text-violet-50" key={2} />,
    <TbBrandGithub width={24} height={24} className="text-violet-50" key={3} />,
    <TbBrandJavascript width={24} height={24} className="text-violet-50" key={4} />,
    <TbBrandTypescript width={24} height={24} className="text-violet-50" key={5} />,
    <TbBrandDocker width={24} height={24} className="text-violet-50" key={6} />,
    <TbBrandDocker width={24} height={24} className="text-violet-50" key={7}  />,
    <TbBrandTailwind width={24} height={24} className="text-violet-50" key={8} />,
  ];
  
  export const PersonalStack = () => {
    return (
      <div className="relative m-auto w-[500px] overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%, #0F1521_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%, #0F1521_100%)] after:content-['']">
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