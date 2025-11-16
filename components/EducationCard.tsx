import { useRef, useState } from "react";
import React from "react";

interface EducationCardProps {
  university?: string;
  degree?: string;
  major?: string;
  period?: string;
  location?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  university,
  degree,
  major,
  period,
  location,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-xl w-full rounded-xl backdrop-blur-lg p-6 m-4 md:m-0 border-[0.5px] border-gray-300 dark:border-[#0b1220]"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(86, 134, 245, 0.2), transparent 40%)`,
        }}
      />
      
      <div className="relative space-y-4">
        <div className="flex flex-row justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {university || "University Name"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {period || "Period"}
          </p>
        </div>
        
        <div className="space-y-2">
          <p className="text-base font-medium text-gray-700 dark:text-gray-300">
            {degree || "Degree"}
          </p>
          {major && (
            <p className="text-base text-gray-600 dark:text-neutral-400">
              {major}
            </p>
          )}
        </div>
        
        {location && (
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {location}
          </p>
        )}
      </div>
    </div>
  );
};

export default EducationCard;