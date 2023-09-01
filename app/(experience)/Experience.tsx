"use client";
import experience from "@/data/experience";
import ExperienceItem from "./ExpereinceItem";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-center justify-center 
        font-bold text-3xl
        mt-[3rem]
        text-violet-50
        md:items-start
        "
      >
        <div className="mb-6">
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
