"use client"
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className="flex flex-col items-center justify-between p-24 lg:mt-20 space-y-12">
      <Image
        src="/projectsheader.svg"
        alt="An SVG of an eye"
        width={400}
        height={400}
        className="my-4"
      />
      <div className="flex max-w-2xl items-center justify-center text-center">
        <h1 className="text-xl font-medium">
          Im passionate about crafting experiences that are engaging,
          accessible, and user-centric.
        </h1>
      </div>
      <div className="flex flex-row z-10 w-full max-w-6xl items-start justify-between m-2 flex-1 space-x-12">
        <div className="flex-auto w-3/6">
          <div
            style={{ backgroundImage: `url("/card1.jpg")` }}
            className="
             relative
             flex-auto 
             flex-col 
             items-start justify-start 
             space-y-4 p-12 
             h-[40vh] 
             rounded-2xl 
             text-main
             bg-cover
             hover:translate-y-[-5px]
             hover:scale-105 
             hover:drop-shadow-3xl
             hober: shadow-black
             transition-transform 
             duration-300
             shadow-[0_8px_30px_rgb(0,0,0,0.12)]
             hover:duration-500
             "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 rounded-2xl"></div>
            <h1 className="relative text-5xl font-semibold font-sans">
              Unifyi
            </h1>
            <h2 className="relative text-3xl font-semibold font-sans">
              Full Stack Application
            </h2>
            <p className="text-xl font-sans"></p>
            <div
              className={`opacity-0 absolute bottom-0 left-0 right-0 p-4 transition-opacity ${
                isHovered ? "opacity-100 -translate-y-2" : ""
              }`}
              style={{ transition: "opacity 0.3s, transform 0.3s" }}
            >
              <p className="text-white text-lg font-semibold">
                Hidden Element 1
              </p>
            </div>
            <div
              className={`opacity-0 absolute bottom-0 left-0 right-0 p-4 transition-opacity ${
                isHovered ? "opacity-100 -translate-y-2" : ""
              }`}
              style={{ transition: "opacity 0.3s, transform 0.3s" }}
            >
              <p className="text-white text-lg font-semibold">
                Hidden Element 2
              </p>
            </div>
          </div>
        </div>

        {/* card2  */}
        <div className="flex-auto w-2/6">
          <div
            style={{ backgroundImage: `url("/card2.png")` }}
            className="
             h-[40vh]
             relative
             bg-cover 
             items-start justify-start 
             p-12 space-y-4 
             rounded-2xl
             hover:translate-y-[-5px]
             hover:scale-105 
             hover:drop-shadow-3xl
             hober: shadow-black
             transition-transform 
             duration-300
             shadow-[0_8px_30px_rgb(0,0,0,0.12)]
             hover:duration-500
            "
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#7169D4] opacity-60 rounded-2xl"></div>
            <p className="relative text-xl font-sans text-white">
              My main focus these days is building products and leading projects
              for our clients at Upstatement. In my free time, Ive also released
              an online video course that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row z-10 w-full max-w-6xl items-start justify-between m-2 flex-1 space-x-12">
        {/* card3 */}
        <div className="flex-auto w-2/6">
          <div
            className="
              h-[40vh] 
              relative
              items-start justify-start 
              p-12 space-y-4 
              rounded-2xl
              bg-cover
              hover:translate-y-[-5px]
              hover:scale-105 
              hover:drop-shadow-3xl
              hober: shadow-black
              transition-transform 
              duration-300
              shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              hover:duration-500
              "
            style={{ backgroundImage: `url("/card3.png")` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#FFE6F2] opacity-60 rounded-2xl"></div>
            <p className=" relative text-xl font-sans">
              My main focus these days is building products and leading projects
              for our clients at Upstatement. In my free time, Ive also released
              an online video course that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
          </div>
        </div>
        <div className="flex-auto w-3/6">
          <div
            className="
              flex-auto flex-col 
              items-start justify-start
              relative 
              bg-cover
              space-y-4 
              p-12 h-[40vh] 
              rounded-2xl
              hover:translate-y-[-5px]
              hover:scale-105 
              hover:drop-shadow-3xl
              hober: shadow-black
              transition-transform 
              duration-300
              shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              hover:duration-500
              text-white
              "
            style={{ backgroundImage: `url("/card4.png")` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#7B166C] opacity-80 rounded-2xl"></div>
            <h1 className="relative text-5xl font-semibold font-sans">
              Yevhenii Strilets
            </h1>
            <h2 className="relative text-3xl font-semibold font-sans">
              Full Stack Developer
            </h2>
            <p className="relative text-xl font-sans">
              I build accessible, inclusive products and digital <br />
              experiences for the web.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;