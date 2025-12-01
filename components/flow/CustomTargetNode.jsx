import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CustomTargetNode = ({ data }) => {
  return (
    <div 
      className="bg-gradient-to-br from-purple-500 to-blue-600 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center text-center border-"
      style={{ width: data.width, height: data.height }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        className="w-3 h-3"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3"
      />
      <Handle
        type="target"
        position={Position.Right}
        className="w-3 h-3"
      />
      <div className="font-bold text-sm">{data.label}</div>
    </div>
  );
};

export default CustomTargetNode;