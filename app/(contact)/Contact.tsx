import LinkPreview from "@/components/LinkPreview";
import React from "react";

export default function Contact() {
  return (
    <div id="contact-section" className="flex flex-col w-full max-w-xl">
      <div className="mb-6 text-lg text-gray-900 dark:text-white font-bold">
        <h1>Contact</h1>
      </div>
      <div>
        <span className="font-medium text-lg leading-relaxed md:leading-loose text-gray-700 dark:text-gray-300">
          For collaborations, reach me at yevstrilets@gmail.com or
          <LinkPreview
            url="https://www.linkedin.com/in/yev-strilets/"
            className="mx-1 font-medium text-lg"
          >
            LinkedIn
          </LinkPreview>
        </span>
      </div>
      <div className="">
        <span className="group/blur blur-sm filter transition-all duration-500 ease-in-out focus-within:text-gray-600 focus-within:blur-none hover:text-gray-800 hover:blur-none focus:text-gray-700 focus:blur-none text-gray-500 dark:focus-within:text-gray-400 dark:hover:text-gray-100 dark:focus:text-gray-300 dark:text-gray-400">
          <span className="font-medium text-lg leading-relaxed md:leading-loose text-gray-700 dark:text-gray-300">
            {" "}
            Also you can find me on
            <LinkPreview
              url="https://github.com/EStrilets"
              className="mx-1 font-medium text-lg"
            >
              platform
            </LinkPreview>
          </span>
        </span>
      </div>
    </div>
  );
}
