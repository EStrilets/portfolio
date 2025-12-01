import React from 'react';
import { Handle, Position } from '@xyflow/react';

const TopRightNode = ({ data }) => {
  return (
    <div 
      className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-6 rounded-full shadow-lg flex flex-col justify-center text-center"
      style={{ width: data.width, height: data.height }}
    >
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 !bg-white"
      />
      <Handle
        type="source"
        position={Position.Left}
        className="w-3 h-3 !bg-white"
      />
      <div className="font-semibold text-base">{data.label}</div>
    </div>
  );
};

export default TopRightNode;