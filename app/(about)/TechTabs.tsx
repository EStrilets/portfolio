"use client"
import { useDragControls, useMotionValue } from "framer-motion";


interface Tab { 
  id: number;
  title?: string;
  content?: string;
}

interface TabsProps { 
  tabs: Tab[];
  activeTab: number;
  handleTabClick: (id: number) => void;
}


const TechTabs: React.FC<TabsProps> = ({ tabs, activeTab, handleTabClick }) => {
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  return (
    <div className="flex flex-col space-y-8 mt-2 p-3">
        {tabs.map((tab) => (
            <div
            key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="w-full 
             h-20 
             flex
             justify-center
             items-center
             bg-black/[0.8] 
             rounded-lg 
             transform translate-y-0 hover:-translate-y-2 duration-500 ease-in-out
             border-4 border-[#FFCF7D]
             cursor-pointer
             text-xl text-[#FA9D00] font-semibold"
            >
              {tab.title}
            </div>
        ))}
    </div>
  );
};

export default TechTabs;
