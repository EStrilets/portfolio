"use client";
import TechStackChartSEO from '@/app/components/charts/TechStackChartSEO';
import TechStackChartTiggy from '@/app/components/charts/TechStackChartTiggy';
import experience from '@/data/experience'
import React from 'react';

interface ExperienceCardProps { 
  position?: string,
  company?: string,
  date?: string,
  description?: string,
  headerPoints?: { header: string, body: string }[]; 
}
const ExperienceCard:React.FC<ExperienceCardProps> = (props) => {
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
      <div className="space-y-16 mb-[3rem]">
        <div className="flex flex-col items-start space-x-5 px-6 md:flex-row md:px-0">
          <p className="flex items-center h-8 text-sm text-[#87A9F8] ml-[1.2rem] md:ml-0">
            {props.date}
          </p>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between space-x-4 mb-7">
              <h1 className="text-2xl md:text-3xl">{props.position}</h1>
              <h1 className="whitespace-nowrap text-base text-[#5686f5]">
                {props.company}
              </h1>
            </div>
            <div>
              <p className="text-lg leading-9 font-medium mb-6">
                {props.description}
              </p>
              {props.headerPoints?.map((item, id) => (
                <React.Fragment key={id}>
                  <div className="flex items-center space-x-2 space-y-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:text-violet-400 mt-4"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h1 className="text-lg font-semibold">{item.header}</h1>
                  </div>
                  <p className="ml-7 text-base font-medium">{item.body}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 text-2xl ml-[7.5rem]">
        <h1>Tech Stack</h1>
        {props.company === 'SEO Soul' ? <TechStackChartSEO /> : <TechStackChartTiggy />}
      </div>
    </div>
  );
};

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
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
