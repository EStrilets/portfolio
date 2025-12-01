import React, { useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { AnimatedSvgEdge } from "./AnimatedSvgEdge.tsx";
import FloatingConnectionLine from "./FloatingConnectionLine.jsx";
import { initialElements } from "./initialElements.js";
import CustomSourceNode from "./CustomSourceNode.jsx";
import CustomTargetNode from "./CustomTargetNode.jsx";
import TopLeftNode from "./TopLeftNode.jsx";
import TopRightNode from "./TopRightNode.jsx";
import BottomLeftNode from "./BottomLeftNode.jsx";
import BottomCenterNode from "./BottomCenterNode.jsx";
import BottomRightNode from "./BottomRightNode.jsx";

const { nodes: initialNodes, edges: initialEdges } = initialElements();

const edgeTypes = {
  floating: AnimatedSvgEdge,
};

const nodeTypes = {
  customSource: CustomSourceNode,
  customTarget: CustomTargetNode,
  topLeft: TopLeftNode,
  topRight: TopRightNode,
  bottomLeft: BottomLeftNode,
  bottomCenter: BottomCenterNode,
  bottomRight: BottomRightNode,
};

const NodeAsHandleFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "floating",
            markerEnd: { type: MarkerType.Arrow },
          },
          eds
        )
      ),
    [setEdges]
  );

  return (
     <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        connectionLineComponent={FloatingConnectionLine}
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
        panOnDrag={false}
        panOnScroll={false}
        preventScrolling={false}
      ></ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
