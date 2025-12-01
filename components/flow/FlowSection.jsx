"use client";
import React from 'react';
import NodeAsHandleFlow from './NodeAsHandleFlow.jsx';

const FlowSection = () => {
  return (
    <div 
      className="w-full max-w-3xl mx-auto scroll-mt-20" 
      id="flow-section"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Interactive Flow</h2>
      </div>
      <div className="w-full h-[45rem] rounded-lg">
        <NodeAsHandleFlow />
      </div>
    </div>
  );
};

export default FlowSection;