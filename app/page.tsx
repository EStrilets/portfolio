"use client";
import Projects from "./projects/Projects";
import AboutSection from "./(about)/AboutSection";
import Experience from "./(experience)/Experience";
import Education from "./(education)/Education";
import Skills from "./(skills)/Skills";
import Contact from "./(contact)/Contact";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <AboutSection />
      <Experience />
      <Education />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
};

export default page;
