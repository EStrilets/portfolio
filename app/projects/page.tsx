"use client";

const ProjectCard = () => {
  return (
    <div className="flex flex-row z-10 w-full max-w-4xl items-start justify-between m-2 flex-1 space-x-12 mt-10">
      <div
        className="
      flex-auto 
      flex-col
      bg-gradient-to-r from-sky-100 to-sky-300
      items-start justify-start 
      space-y-4 p-12 
      h-[45vh] 
      rounded-2xl 
      text-sky-900
      hover:translate-y-[-5px]
      hover:scale-105 
      hover:drop-shadow-3xl
      transition  
      duration-500
      hover:shadow-[0px_2px_32px_0px_rgb(245,243,255,1)]
      "
      >
        <h1 className="text-5xl font-semibold font-sans">Unifyi</h1>
        <h2 className="text-3xl font-semibold font-sans">
          Full Stack Application
        </h2>
        <p className="text-xl font-sans"></p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-start justify-center 
        font-bold text-3xl
        mt-[3rem]
        text-violet-50
        "
      >
        <div className="mb-[2rem]">
          <h1>Projects</h1>
        </div>
      </div>
        <div className="flex flex-row z-10 w-full max-w-4xl items-start justify-between m-2 flex-1 space-x-12 mb-10">
          <div
            className="
          flex-auto 
          flex-col
          bg-gradient-to-r from-sky-100 to-sky-300
          items-start justify-start 
          space-y-4 p-12 
          h-[45vh] 
          rounded-2xl 
          text-sky-900
          hover:translate-y-[-5px]
          hover:scale-105 
          hover:drop-shadow-3xl
          transition  
          duration-500
          hover:shadow-[0px_2px_32px_0px_rgb(245,243,255,1)]
          "
          >
            <h1 className="text-5xl font-semibold font-sans">Unifyi</h1>
            <h2 className="text-3xl font-semibold font-sans">
              Full Stack Application
            </h2>
            <p className="text-xl font-sans"></p>
          </div>
        </div>
        <ProjectCard />
    </div>
  );
};

export default Projects;
