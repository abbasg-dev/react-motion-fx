import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

const ImageWaveMaterial = shaderMaterial(
  // uniform
  {
    uTime: 0,
  },
  // vertex shader
  glsl`
    void main () {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  glsl`
  void main() {
    gl_FragColor = vec4(0.0, 0.4, 1.0, 0.5);
  }`
);

extend({ ImageWaveMaterial });

const ImageWave = () => {
  const imageWaveMaterialRef = useRef();
  return (
    <mesh>
      <planeBufferGeometry args={[1, 0.57, 8, 8]} />
      {/* <meshStandardMaterial wireframe={true} /> */}
      <imageWaveMaterial ref={imageWaveMaterialRef} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 8 }}>
      <Suspense fallback={null}>
        <ImageWave />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
