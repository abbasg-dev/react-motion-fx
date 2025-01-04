import * as React from "react";
import { Canvas } from "@react-three/fiber";

const ImageWave = () => {
  return (
    <mesh>
      <planeBufferGeometry args={[1, 0.57, 8, 8]} />
      <meshStandardMaterial wireframe={true} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 8 }}>
      <ImageWave />
    </Canvas>
  );
};

export default Scene;
