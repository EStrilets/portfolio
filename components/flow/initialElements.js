// @ts-nocheck
import { Position, MarkerType } from '@xyflow/react';
 
// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
function getNodeIntersection(intersectionNode, targetNode) {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const { width: intersectionNodeWidth, height: intersectionNodeHeight } =
    intersectionNode.measured;
  const intersectionNodePosition = intersectionNode.internals.positionAbsolute;
  const targetPosition = targetNode.internals.positionAbsolute;
 
  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;
 
  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + targetNode.measured.width / 2;
  const y1 = targetPosition.y + targetNode.measured.height / 2;
 
  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;
 
  return { x, y };
}
 
// returns the position (top,right,bottom or right) passed node compared to the intersection point
function getEdgePosition(node, intersectionPoint) {
  const n = { ...node.internals.positionAbsolute, ...node };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);
 
  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + n.measured.width - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + n.measured.height - 1) {
    return Position.Bottom;
  }
 
  return Position.Top;
}
 
// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(source, target) {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);
 
  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);
 
  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
}
 
const NODE_CONFIGS = {
  center: { 
    x: 320, 
    y: 240,
    width: '120px',
    height: '80px' 
  },
  topLeft: { 
    x: 5, 
    y: 15,
    width: '14rem',
    height: '14rem' 
  },
  topRight: { 
    x: 510, 
    y: 50,
    width: '14rem',
    height: '14rem' 
  },
  bottomLeft: { 
    x: 90, 
    y: 300,
    width: '8rem',
    height: '3rem' 
  },
  bottomCenter: { 
    x: 10, 
    y: 420,
    width: '26rem',
    height: '16rem' 
  },
  bottomRight: { 
    x: 490, 
    y: 390,
    width: '16rem',
    height: '20rem' 
  }
};

export function initialElements() {
  const nodes = [];
  const edges = [];

  // Target node with custom type
  const centerConfig = NODE_CONFIGS.center;
  nodes.push({ 
    id: 'target', 
    type: 'customTarget',
    data: { 
      label: 'Center',
      width: centerConfig.width,
      height: centerConfig.height
    }, 
    position: { x: centerConfig.x, y: centerConfig.y },
    style: {
      width: centerConfig.width,
      height: centerConfig.height
    }
  });

  // Feature nodes
  const featureConfigs = [
    {
      id: '0',
      type: 'topLeft',
      label: 'Top Left',
      config: NODE_CONFIGS.topLeft
    },
    {
      id: '1',
      type: 'topRight',
      label: 'Top Right',
      config: NODE_CONFIGS.topRight
    },
    {
      id: '2',
      type: 'bottomLeft',
      label: 'Bottom Left',
      config: NODE_CONFIGS.bottomLeft
    },
    {
      id: '3',
      type: 'bottomCenter',
      label: 'Bottom Center',
      config: NODE_CONFIGS.bottomCenter
    },
    {
      id: '4',
      type: 'bottomRight',
      label: 'Bottom Right',
      config: NODE_CONFIGS.bottomRight
    }
  ];

  featureConfigs.forEach((config) => {
    const nodeConfig = config.config;
    nodes.push({ 
      id: config.id,
      type: config.type,
      data: { 
        label: config.label,
        width: nodeConfig.width,
        height: nodeConfig.height
      }, 
      position: { x: nodeConfig.x, y: nodeConfig.y },
      style: {
        width: nodeConfig.width,
        height: nodeConfig.height
      }
    });
  });

  // Create edges for all 5 nodes
  for (let i = 0; i < 5; i++) {
    edges.push({
      id: `edge-${i}`,
      target: 'target',
      source: `${i}`,
      type: 'floating',
      markerEnd: {
        type: MarkerType.Arrow,
      },
    });
  }
 
  return { nodes, edges };
}