"use client";
import React from "react";
import { SEOStack } from "../components/charts/SEOStack";
import ExperienceCard from "./ExprienceCard";
import { TiggyStack } from "../components/charts/TiggyStack";

interface ExperienceItemProps {
  position?: string;
  company?: string;
  date?: string;
  description?: string;
  headerPoints?: { header: string; body: string }[];
  type?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
  return (
    <div
      className="
          flex flex-col 
          w-full max-w-4xl
          items-start justify-center 
          font-bold text-3xl
          mt-[3rem]
          text-violet-50
          scroll-mt-60
          "
      id="work-section"
    >
      <div className="grid w-full grid-cols-3 gap-4">
        <ExperienceCard colspan="col-span-2">
          <div>
            <h1 className="text-2xl md:text-2xl mb-3 text-[#87A9F8]">{props.company}</h1>
            <p className="text-lg leading-9 font-medium mb-6">
              {props.description}
            </p>
          </div>
        </ExperienceCard>
        <ExperienceCard>
          <div>
            <p className="flex items-center h-16 text-2xl text-[#87A9F8] ml-[1.2rem] md:ml-0 w-[14rem]">
              {props.position}
            </p>
            <p className="flex items-center h-6 text-base text-violet-50 italic ml-[1.2rem] mt-4 md:ml-0">
              {props.date}
            </p>
            <p className="flex items-center h-8 text-base text-violet-50 ml-[1.2rem] md:ml-0">
              {props.type}
            </p>
          </div>
        </ExperienceCard>
        <ExperienceCard colspan="col-span-3">
          {props.headerPoints?.map((item, id) => (
            <React.Fragment key={id}>
              <div className="flex items-center space-x-2 space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current text-[#87A9F8] mt-4"
                >
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <h1 className="text-lg font-semibold">{item.header}</h1>
              </div>
              <p className="ml-7 text-base font-medium">{item.body}</p>
            </React.Fragment>
          ))}
        </ExperienceCard>
        <div
          className={`row-span-1 rounded-xl border-2 border-[#1E2A45] bg-slate-950 p-4 dark:bg-neutral-900 col-span-3 hidden md:flex`}
        >
          {props.company === "SEO Soul" ? (
            <div className="ml-2 md:ml-0">
              <SEOStack />
            </div>
          ) : (
            <div className="ml-2 md:ml-0">
            <TiggyStack />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
