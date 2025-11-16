"use client";
import React from "react";
import EducationCard from "@/components/EducationCard";

const Education = () => {
  return (
    <div id="education-section" className="w-full max-w-xl flex flex-col gap-8">
        <div className="mt-10 text-xl text-gray-900 dark:text-white font-bold">
          <h1>Education</h1>
        </div>
        <EducationCard
          university="Simon Fraser University"
          degree="Bachelor of Science"
          major="Computer Science"
          period="2018-2021"
          location="Vancouver, Canada 🇨🇦"
        />
    </div>
  );
};

export default Education;
