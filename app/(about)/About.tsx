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
                Back in 2012, I decided to try my hand at creating custom Tumblr
                themes and tumbled head first into the rabbit hole of coding and
                web development. Fast-forward to today, and I’ve had the privilege
                of building software for an advertising agency, a start-up, a
                student-led design studio, and a huge corporation.
                </h1>
            </motion.div>
            <p className="text-xl font-sans">
                My main focus these days is building products and leading projects
                for our clients at Upstatement. In my free time Ive also released an
                online video course that covers everything you need to know to build
                a web app with the Spotify API.
            </p>
            <p className="text-xl font-sans">
                When I’m not at the computer, I’m usually rock climbing, hanging out
                with my wife and two cats, or running around Hyrule searching for
                Korok seeds K o r o k s e e d s .
            </p>
            <div className="flex">
                <Scene />
                <Scene />
                <Scene />
                <Scene />
            </div>
            </div>
        </div>
        <div className="w-full max-w-6xl items-center justify-start mt-[5rem] border-b-4 border-black">
            <h2 className="text-5xl font-semibold">Technical Stack</h2>
        </div>

        <div className="z-10 w-full max-w-6xl items-start justify-between lg:flex m-2">
            <div className="flex-1 w-64">
            <TechTabs
                tabs={tabs}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
            />
            </div>
            <div className="flex-auto w-64 ml-2 space-y-4 flex flex-col">
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
