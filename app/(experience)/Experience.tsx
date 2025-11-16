"use client";
import experienceData from "@/data/experience";
import ExperienceCard from "@/components/ExprienceCard";

const Experience = () => {
  return (
    <div id="experience-section" className="w-full max-w-xl flex flex-col items-center justify-center gap-8">
      <div
        className="
        flex flex-col 
        items-center justify-center 
        mt-[3rem]
        md:items-start
        "
      >
        <div className="mb-6 text-xl text-gray-900 dark:text-white font-bold">
          <h1>Experience</h1>
        </div>
        <div className="space-y-8">
          {experienceData.map((item: any) => (
            <ExperienceCard 
              key={item.id} 
              headerPoints={item.headerPoints}
              company={item.company}
              position={item.position}
              date={item.date}
              type={item.type}
              logo={item.logo}
              logoWidth={item.logoWidth}
              logoHeight={item.logoHeight}
              filterColor={item.filterColor}
              logoScale={item.logoScale}
              url={item.url}
              startDate={item.startDate}
              endDate={item.endDate}
              location={item.location}
              colorFunction={item.colorFunction}
              headerMargin={item.company === "AnyDay Payment" ? "mt-12" : "mt-20"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
