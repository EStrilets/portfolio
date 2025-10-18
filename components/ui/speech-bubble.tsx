"use client";

import { motion } from "framer-motion";

const SpeechBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div 
      className="absolute -top-36 right-[3.5rem] w-[14rem] h-[10rem] z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <svg 
        width="810" 
        height="889" 
        viewBox="0 0 810 889" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute top-0 left-0 scale-x-[-1]"
      >
        <path 
          d="M79.9641 763.082C48.1753 763.082 22.4278 788.831 22.4278 820.622C22.4278 852.413 48.1753 878.162 79.9641 878.162C111.753 878.162 137.5 852.413 137.5 820.622C137.5 788.831 111.753 763.082 79.9641 763.082ZM252.573 619.233C204.904 619.233 166.269 657.871 166.269 705.543C166.269 753.214 204.904 791.852 252.573 791.852C300.242 791.852 338.877 753.214 338.877 705.543C338.877 657.871 300.242 619.233 252.573 619.233ZM797.384 406.451C787.517 348.422 743.098 301.729 681.535 275.606C684.584 269.823 687.864 264.184 690.251 257.941C719.768 180.234 682.916 97.7506 607.888 73.6702C558.695 57.8755 505.618 71.57 466.349 104.511C413.186 32.3567 321.214 -5.64833 232.464 16.1017C120.844 43.4618 55.8564 155.175 83.0423 268.787C38.3942 297.903 10 341.115 10 389.448C10 477.052 102.95 548.085 217.591 548.085C253.695 548.085 287.641 541.008 317.215 528.608C360.569 601.77 465.917 644.694 579.494 628.411C717.351 608.617 814.875 509.246 797.384 406.451Z" 
          fill="transparent"
          stroke="#FFFFFF" 
          strokeWidth="8" 
          strokeMiterlimit="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute top-[10%] left-[20%] right-[15%] bottom-[35%] flex items-center justify-center text-center text-xs font-semibold text-black leading-tight z-[11]">
        {children}
      </div>
    </motion.div>
  );
};

export default SpeechBubble;