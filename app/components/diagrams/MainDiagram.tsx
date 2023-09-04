import React from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  ConnectionLineType,
} from "reactflow";
import { nodes as initialNodes, edges as initialEdges } from "./InitialElements";

function MainDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  return (
    <div style={{ height: "20vh", margin: "10px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-left"
        connectionLineType={ConnectionLineType.SmoothStep}
      />
    </div>
  );
}

export default MainDiagram;
