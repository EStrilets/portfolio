"use client";
import experience from "@/data/experience";
import ExperienceItem from "./ExpereinceItem";

const Experience = () => {
  return (
    <div className="w-full max-w-xl flex flex-col items-center justify-center gap-8">
      <div
        className="
        flex flex-col 
        items-center justify-center 
        mt-[3rem]
        md:items-start
        "
      >
        <div className="mb-6 text-xl text-white font-bold">
          <h1>Experience</h1>
        </div>
        {experience.map((item) => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
