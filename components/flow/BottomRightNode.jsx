import React from 'react';
import { Handle, Position } from '@xyflow/react';

const BottomRightNode = ({ data }) => {
  return (
    <div 
      className="text-white p-6 shadow-lg flex flex-col justify-center text-center"
      style={{ width: data.width, height: data.height }}
    >
      <Handle
        type="source"
        position={Position.Top}
        className="w-3 h-3 !bg-white"
      />
      <Handle
        type="source"
        position={Position.Left}
        className="w-3 h-3 !bg-white"
      />
      <img
          className="absolute inset-0 w-full h-full brightness-100 rounded-lg"
          src="/owlPainting2.jpg"
          alt=""
        />
    </div>
  );
};

export default BottomRightNode;