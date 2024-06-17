import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";

function Title3D() {
  return (
    <div className="w-[700px] h-[50rem]">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default Title3D