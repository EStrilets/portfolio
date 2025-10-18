"use client";

import { motion } from "framer-motion";

const SpeechBubble2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div 
      className="absolute top-[7rem] -left-[15.5rem] w-[30rem] h-[6rem] z-10"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <svg 
        width="2778" 
        height="603" 
        viewBox="0 0 2778 603" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute top-0 left-0 "
      >
        <path 
          d="M1678.48 121.335L239.833 121.335C113.195 121.335 10 146.223 10 176.825V537.51C10 568.113 113.195 593 239.833 593L2538.17 593C2664.8 593 2768 568.113 2768 537.51V176.825C2768 146.223 2664.8 121.335 2538.17 121.335L2308.33 121.335C2256.78 119.303 2217.71 119.236 2176.7 110.53C2145.97 104.008 2110.81 73.9995 2088.78 65.2939C2031.68 42.8402 1956.33 23.8234 1869.6 10C1892 23.8234 1905.98 38.5752 1911.63 53.6029C1924.21 87.2458 1802.97 118.952 1678.48 121.335Z" 
          stroke="white" 
          fill="transparent"
          strokeWidth="8" 
          strokeMiterlimit="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute top-[50%] left-[8%] right-[8%] bottom-[30%] flex items-center justify-center text-center text-xs font-semibold text-black leading-tight z-[11]">
        {children}
      </div>
    </motion.div>
  );
};

export default SpeechBubble2;