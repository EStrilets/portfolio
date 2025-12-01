import React from "react";
import { Handle, Position } from "@xyflow/react";

const BottomCenterNode = ({ data }) => {
  return (
    <div
     className="bg-gray-900 text-green-400 font-mono text-sm rounded-lg shadow-xl overflow-hidden"
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
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-white"
      />
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-3 text-gray-300 text-xs">ai_model.py</span>
        </div>
        <span className="text-xs text-gray-400">Python</span>
      </div>

      {/* Code Content */}
      <div className="flex h-full">
        {/* Line Numbers */}
        <div className="bg-gray-800 px-3 py-3 text-gray-500 text-right select-none border-r border-gray-700">
          <div className="flex flex-col text-xs leading-5">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
          </div>
        </div>

        {/* Code */}
        <div className="flex-1 p-3 overflow-auto">
          <pre className="text-xs leading-5">
            <code>
              <span className="text-gray-500">// server.js</span>
              {"\n"}
              <span className="text-purple-400">import</span>{" "}
              <span className="text-yellow-300">{"{"}</span>{" "}
              <span className="text-blue-400">createServer</span>{" "}
              <span className="text-yellow-300">{"}"}</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-300">'node:http'</span>
              <span className="text-gray-300">;</span>
              {"\n"}
              {"\n"}
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">server</span>{" "}
              <span className="text-gray-300">=</span>{" "}
              <span className="text-yellow-400">createServer</span>
              <span className="text-yellow-300">(</span>
              <span className="text-gray-300">(</span>
              <span className="text-orange-400">req</span>
              <span className="text-gray-300">,</span>{" "}
              <span className="text-orange-400">res</span>
              <span className="text-gray-300">)</span>{" "}
              <span className="text-purple-400">=</span>{" "}
              <span className="text-yellow-300">{"{"}</span>
              {"\n"} <span className="text-orange-400">res</span>
              <span className="text-gray-300">.</span>
              <span className="text-yellow-400">writeHead</span>
              <span className="text-yellow-300">(</span>
              <span className="text-red-400">200</span>
              <span className="text-gray-300">,</span>{" "}
              <span className="text-yellow-300">{"{"}</span>{" "}
              <span className="text-green-300">'Content-Type'</span>
              <span className="text-gray-300">:</span>{" "}
              <span className="text-green-300">'text/plain'</span>{" "}
              <span className="text-yellow-300">{"}"}</span>
              <span className="text-yellow-300">)</span>
              <span className="text-gray-300">;</span>
              {"\n"} <span className="text-orange-400">res</span>
              <span className="text-gray-300">.</span>
              <span className="text-yellow-400">end</span>
              <span className="text-yellow-300">(</span>
              <span className="text-green-300">'Hello World!\n'</span>
              <span className="text-yellow-300">)</span>
              <span className="text-gray-300">;</span>
              {"\n"}
              <span className="text-yellow-300">{"}"}</span>
              <span className="text-yellow-300">)</span>
              <span className="text-gray-300">;</span>
              {"\n"}
              {"\n"}
              <span className="text-gray-500">
                // starts a simple http server locally on port 3000
              </span>
              {"\n"}
              <span className="text-orange-400">server</span>
              <span className="text-gray-300">.</span>
              <span className="text-yellow-400">listen</span>
              <span className="text-yellow-300">(</span>
              <span className="text-red-400">3000</span>
              <span className="text-gray-300">,</span>{" "}
              <span className="text-green-300">'127.0.0.1'</span>
              <span className="text-gray-300">,</span>{" "}
              <span className="text-gray-300">()</span>{" "}
              <span className="text-purple-400">=</span>{" "}
              <span className="text-yellow-300">{"{"}</span>
              {"\n"} <span className="text-blue-400">console</span>
              <span className="text-gray-300">.</span>
              <span className="text-yellow-400">log</span>
              <span className="text-yellow-300">(</span>
              <span className="text-green-300">
                'Listening on 127.0.0.1:3000'
              </span>
              <span className="text-yellow-300">)</span>
              <span className="text-gray-300">;</span>
              {"\n"}
              <span className="text-yellow-300">{"}"}</span>
              <span className="text-yellow-300">)</span>
              <span className="text-gray-300">;</span>
              {"\n"}
              {"\n"}
              <span className="text-gray-500">
                // run with `node server.js`
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BottomCenterNode;
