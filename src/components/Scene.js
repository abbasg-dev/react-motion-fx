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
    precision mediump float;
    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
    
    void main () {
      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  glsl`
  precision mediump float;
  uniform float uTime;

  void main() {
    gl_FragColor = vec4(0.0, 0.4, 1.0, 1);
  }`
);

extend({ ImageWaveMaterial });

const ImageWave = () => {
  const imageWaveMaterialRef = useRef();
  useFrame(
    ({ clock }) => (imageWaveMaterialRef.current.uTime = clock.getElapsedTime())
  );
  return (
    <mesh>
      <planeBufferGeometry args={[1, 0.57, 16, 16]} />
      {/* <meshStandardMaterial wireframe={true} /> */}
      <imageWaveMaterial ref={imageWaveMaterialRef} wireframe={true} />
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
