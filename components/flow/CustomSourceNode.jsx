import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CustomSourceNode = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg min-w-[140px] text-center">
      <Handle
        type="source"
        position={Position.Top}
        className="w-3 h-3 !bg-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-6 h-3 !bg-white"
      />
      <Handle
        type="source"
        position={Position.Left}
        className="w-3 h-3 !bg-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-white"
      />
      <div className="font-semibold text-base">{data.label}</div>
    </div>
  );
};

export default CustomSourceNode;