"use client";
import projects from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  title?: string;
  images?: string[];
  bgColor?: string;
  description?: string 
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  images,
  bgColor,
  description
}) => {
  const inlineStyle = {
    background: `${bgColor}`,
  };

  console.log(bgColor);
  return (
    <div className="flex flex-col w-full max-w-4xl p-6 md:p-0 mb-4">
      <div className="flex flex-row z-10 m-2 flex-1 space-x-12 mt-10">
        <div
          style={inlineStyle}
          className={`
            flex-auto 
            flex-col
            items-center justify-center
            space-y-4 p-6 
            h-[30rem] 
            rounded-2xl 
            text-sky-900
            md:hover:translate-y-[-5px]
            md:hover:scale-105 
            hover:drop-shadow-3xl
            transition  
            duration-500
            md:hover:shadow-[0px_2px_32px_0px_rgb(245,243,255,1)]
            overflow-hidden
            md:p-12
          `}
        >
          <div className="mt-0 ml-0 static  space-y-10 md:space-y-0 md:relative md:mt-2 md:ml-20">
            <Image
              src={images ? images[1] : ""}
              alt="image"
              width={550}
              height={500}
              className="static md:absolute top-0 left-0 filter drop-shadow-lg rounded-md"
            />
            <Image
              src={images ? images[0] : ""}
              alt="image"
              width={550}
              height={500}
              className="static md:absolute top-[90px] left-[100px] filter drop-shadow-lg rounded-md overflow-hidden"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start mt-8 text-violet-50">
        <h1 className="text-4xl font-semibold font-sans">{title}</h1>
        <h2 className="text-xl font-sans">
          {description}
        </h2>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-2 scroll-mt-20 md:gap-8"
      id="projects-section"
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
        <div className="md:mb-[2rem]">
          <h1>Projects</h1>
        </div>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
