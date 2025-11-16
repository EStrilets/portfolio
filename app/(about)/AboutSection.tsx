"use client";

import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SpeechBubble from "@/components/ui/speech-bubble";
import SpeechBubble2 from "@/components/ui/speech-bubble2";

const AboutSection = () => {
  return (
    <div id="about-section" className="w-full max-w-xl mt-[8rem] md:mt-[14rem] p-12 md:p-0 text-gray-900 dark:text-violet-50">
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 md:mb-0 relative">
            <Avatar className="w-24 h-24 mb-6 ring-2 ring-offset-2 ring-offset-[#661e54] ring-[#661e54] hover:scale-105 transition-all duration-300 ease-in-out">
              <AvatarImage src="/surfphoto.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <SpeechBubble>
              <TextLoop className="font-mono text-base text-gray-900 dark:text-white">
                <span>
                  Salut{" "}
                  <span className="inline-block animate-wave -ml-1 mr-1 wave">
                    👋🏻
                  </span>
                </span>
                <span>
                  Hello{" "}
                  <span className="inline-block animate-wave -ml-1 mr-1 wave">
                    👋🏻
                  </span>
                </span>
                <span>
                  Jimnbo{" "}
                  <span className="inline-block animate-wave -ml-1 mr-1 wave">
                    👋🏻
                  </span>
                </span>
                <span>
                  Limbo{" "}
                  <span className="inline-block animate-wave -ml-1 mr-1 wave">
                    👋🏻
                  </span>
                </span>
              </TextLoop>
            </SpeechBubble>
            <SpeechBubble2>
              <p className="text-center font-medium text-2xl leading-relaxed md:text-xl md:leading-loose text-gray-900 dark:text-white">
                I&apos;m Yev Strilets a fullstack development{" "}
                <span className="inline-block animate-levitate">🚀</span>
              </p>
            </SpeechBubble2>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex-col justify-center mt-[10rem]">
          <p className="text-xl text-gray-900 dark:text-white font-bold">About me</p>
        </div>
        <div className="flex-col justify-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Frontend engineer focused on building accessible, inclusive products
            and digital experiences for the web.
          </p>
        </div>
        <div className="flex-col justify-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I&apos;ve built and developed various interactive applications throughout
            my career, covering everything from SaaS to mobile and web
            applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
