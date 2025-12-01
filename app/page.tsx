"use client";
import Projects from "./projects/Projects";
import AboutSection from "./(about)/AboutSection";
import Experience from "./(experience)/Experience";
import Education from "./(education)/Education";
import Skills from "./(skills)/Skills";
import Contact from "./(contact)/Contact";
import FlowSection from "@/components/flow/FlowSection.jsx";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <AboutSection />
      <FlowSection />
      <Experience />
      <Education />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
};

export default page;
