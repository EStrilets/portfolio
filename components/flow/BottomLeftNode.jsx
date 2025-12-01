import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { AudioPlayer } from 'react-audio-play';

const BottomLeftNode = ({ data }) => {
  return (
    <div 
      className=" text-white p-6 rounded-lg shadow-lg flex flex-col justify-center text-center"
      style={{ width: data.width, height: data.height }}
    >
      <Handle
        type="source"
        position={Position.Top}
        className="w-3 h-3 !bg-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-white"
      />
       <div className="flex items-center justify-center">
        {/* <AudioPlayer 
          className='custom-style' 
          src='/audio/TomMeiraArmonyRaven.mp3' 
          autoPlay
          style={{ 
            width: '100%', 
            minWidth: window.innerWidth <= 768 ? '250px' : '250px',
            maxWidth: window.innerWidth <= 480 ? '200px' : 'none'
          }}
        /> */}
      </div>
    </div>
  );
};

export default BottomLeftNode;