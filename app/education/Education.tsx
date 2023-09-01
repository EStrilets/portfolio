"use client";

import ExperienceCard from "../(experience)/ExprienceCard";

import Particles from "../components/particles/Particles";

const Education = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-8 scroll-mt-40"
      id="education-section"
    >
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
          <h1>Education</h1>
        </div>
        <div className="grid w-full grid-cols-3 gap-4">
          <ExperienceCard colspan="col-span-2">
            <div className="space-y-3">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl">Simon Fraser University</h1>
                <h1 className="text-lg">2018-2022</h1>
              </div>
              <p className="text-lg font-medium">Bachelor of Science 🎓</p>
              <p className="text-lg font-medium">Major in Computer Science 🎨</p>
            </div>
          </ExperienceCard>
          <ExperienceCard colspan="col-span-1">
            <div className="flex justify-center items-center">
              <Particles />
            </div>
          </ExperienceCard>
        </div>
      </div>
    </div>
  );
};

export default Education;
