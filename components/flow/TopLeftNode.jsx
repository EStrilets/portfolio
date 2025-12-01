import React from 'react';
import { Handle, Position } from '@xyflow/react';

const TopLeftNode = ({ data }) => {
  return (
    <div 
      className="text-white p-8 rounded-full shadow-lg flex flex-col justify-center text-center relative overflow-hidden"
      style={{ width: data.width, height: data.height }}
    >
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 !bg-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-white"
      />
       <video
          className="absolute inset-0 w-full h-full object-cover rounded-full"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => console.error('Video error:', e)}
          onLoadStart={() => console.log('Video loading:', data.video)}
        >
          <source src="/skiing.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
    </div>
  );
};

export default TopLeftNode;