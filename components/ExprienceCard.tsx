import { useRef, useState } from "react";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import InfoButton from "./navigationButtons/InfoButton";
import NavigateToOtherPage from "./navigationButtons/NavigationToOtherPage";
import ExpirienceParticles from "./particles/ExpirienceParticles";
import { SEOStack } from "./charts/SEOStack";

interface HeaderPoint {
  header: string;
  body: string;
}

interface ExperienceCardProps {
  colspan?: string;
  headerPoints?: HeaderPoint[];
  children?: React.ReactNode;
  company?: string;
  position?: string;
  date?: string;
  type?: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  filterColor?: string;
  logoScale?: number;
  url?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  colorFunction?: any;
  headerMargin?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  children,
  colspan,
  headerPoints,
  company,
  position,
  logo,
  logoWidth,
  logoHeight,
  filterColor,
  logoScale,
  url,
  startDate,
  endDate,
  location,
  colorFunction,
  headerMargin = "mt-20"
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`row-span-1 ${colspan} relative max-w-xl w-full
        rounded-xl backdrop-blur-lg p-6 m-4 md:m-0 border-[0.5px] border-gray-300 dark:border-[#0b1220]`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(86, 134, 245, 0.2)
            , transparent 40%)`,
        }}
      />
      <div className="p-2 w-full">
        <div className="flex flex-row justify-between h-[10rem]">
          <div className="flex h-full justify-start items-end w-full cursor-grab">
            <div className="flex flex-col justify-between space-x-2 h-full">
              {/* <div className="flex justify-start items-end">
                <InfoButton route={url || "#"} toolTipText="Company info" />
              </div> */}
            </div>
          </div>
          <div className="flex flex-col w-full h-full cursor-pointer">
            <div className="flex justify-center items-center h-full">
              <ExpirienceParticles
                imgSrc={logo ? `/${logo}` : "/sanctuary-ai.png"}
                filterColor={filterColor || "#ffffff"}
                colorFunction={colorFunction}
                logoScale={logoScale || 0.25}
                logoWidth={logoWidth || 120}
                logoHeight={logoHeight || 120}
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 mt-10">
              <h2
                className="text-lg font-semibold text-gray-900 dark:text-white"
              >
                {company || "Company Name"}
              </h2>
              <p className="text-base text-center text-gray-600 dark:text-neutral-400 whitespace-nowrap">
                {position || "Position"}
              </p>
            </div>
          </div>
          <div className="flex h-full justify-end items-end w-full">
            <div className="flex flex-col justify-between space-x-2 h-full cursor-grab">
              <div className="flex justify-end items-end">
                {/* <NavigateToOtherPage
                  route="helll oworld"
                  toolTipText="Learn more"
                /> */}
                <InfoButton route={url || "#"} toolTipText="Company info" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {headerPoints ? (
        <div className={`relative ${headerMargin} space-y-6`}>
          {headerPoints.map((item, index) => (
            <React.Fragment key={index}>
              <p className="text-base px-6 font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.body}
              </p>
            </React.Fragment>
          ))}
        </div>
      ) : (
        children
      )}
      <div className="px-6">
        <SEOStack />
      </div>
      <div className="flex flex-row justify-between items-center mt-10">
        <div className="flex flex-row justify-center items-center space-x-2">
          <FaLocationDot
            size={16}
            className="text-gray-600 dark:text-neutral-400"
          />
          <p className="text-sm text-gray-600 dark:text-neutral-400">{location}</p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <p className="text-sm text-gray-600 dark:text-neutral-300">
            {startDate}
          </p>
          <p className="text-sm text-gray-600 dark:text-neutral-300">-</p>
          <p className="text-sm text-gray-600 dark:text-neutral-300">
            {endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
