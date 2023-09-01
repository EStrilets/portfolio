"use client";
import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

interface AnimatedGradientBorderCardProps {
  children: React.ReactNode;
  bgColor?: string;
}

const AnimatedGradientBorderCard: React.FC<AnimatedGradientBorderCardProps> = ({
  children,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      className="
          flex w-full
          overflow-hidden
          md:hover:translate-y-[-5px] hover:drop-shadow-3xl md:hover:shadow-[0px_2px_32px_0px_rgb(147,197,253)] 
          md:hover:scale-[1.02] transition duration-500 
          max-w-4xl items-center justify-center box"
    >
      {children}
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
        <>
          <Link href={`/projects/${project.link}`}>
            <AnimatedGradientBorderCard bgColor={project.bgColor}>
              <div className="mt-0 w-full h-[20rem] ml-0 static space-y-10 md:space-y-0 md:relative md:mt-2 md:ml-20">
                <Image
                  src={project.images ? project.images[1] : ""}
                  alt="image"
                  width={550}
                  height={500}
                  className="static md:absolute top-0 left-0 filter drop-shadow-lg rounded-md"
                />
                <Image
                  src={project.images ? project.images[0] : ""}
                  alt="image"
                  width={550}
                  height={500}
                  className="static md:absolute top-[90px] left-[100px] filter drop-shadow-lg rounded-md overflow-hidden"
                />
              </div>
            </AnimatedGradientBorderCard>
          </Link>
          <div className="flex flex-col w-full max-w-4xl items-start justify-start mt-6 mb-12 text-violet-50">
            <h1 className="text-4xl font-semibold font-sans">
              {project.title}
            </h1>
            <h2 className="text-xl font-sans">{project.description}</h2>
          </div>
        </>
      ))}
    </div>
  );
};

export default Projects;
