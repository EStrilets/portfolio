"use client";
import Projects from "./projects/Projects";
import AboutSection from "./(about)/AboutSection";
import Experience from "./(experience)/Experience";
import Education from "./(education)/Education";
import Skills from "./(skills)/Skills";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <AboutSection />
      <Experience />
      <Projects />
      <Education />
      <Skills />
    </main>
  );
};

export default page;
