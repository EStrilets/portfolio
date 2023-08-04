    "use client";
    import Scene from "@/components/ParticleTheme/ParticleCircle";
    import { motion } from "framer-motion";
    import TechTabs from "./TechTabs";
    import { useState } from "react";
    import TechCard from "./TechCard";

    const tabs = [
    {
        id: 1,
        title: "Fontend",
        content: "Content of Tab 1",
    },
    {
        id: 2,
        title: "Backend",
        content: "Content of Tab 2",
    },
    {
        id: 3,
        title: "DevOps",
        content: "Content of Tab 3",
    },
    ];

    const About = () => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

    const handleTabClick = (id: number) => {
        setActiveTab(id);
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 lg:mt-20">
        <div className="z-10 w-full max-w-6xl items-start justify-between lg:flex m-2">
          <div className="flex-auto w-64">
            <div className="flex flex-col items-start justify-start space-y-4">
              <h1 className="text-5xl font-semibold font-sans">
                Yevhenii Strilets
              </h1>
              <h2 className="text-3xl font-semibold font-sans">
                Full Stack Developer
              </h2>
              <p className="text-xl font-sans">
                I build accessible, inclusive products and digital <br />
                experiences for the web.
              </p>
            </div>
          </div>
          <div className="flex-auto w-64 items-start justify-start ml-2 space-y-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <h1 className="text-xl font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </h1>
            </motion.div>
            <p className="text-xl font-sans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
            </p>
            <p className="text-xl font-sans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <div className="flex">
              <Scene />
              <Scene />
              <Scene />
              <Scene />
            </div>
          </div>
        </div>

        <div className="z-10 flex flex-row w-full max-w-6xl items-center justify-between">
          <div className="flex-1 w-64 flex flex-col">
            <div className="mt-[5rem] text-center">
              <h2 className="text-5xl font-semibold">Technical Stack</h2>
            </div>
            <TechTabs
              tabs={tabs}
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
          </div>
          <div className="flex-auto w-64 space-y-4 mt-[7rem]">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <TechCard key={tab.id} title={tab.title} />
                )
            )}
          </div>
        </div>
      </main>
    );
    };

    export default About;
