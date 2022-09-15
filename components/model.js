import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function Model() {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.01;
  });
  const fbx = useLoader(FBXLoader, "/sheep.fbx");
  return (
    <mesh receiveShadow position={[0, -1, 0]} ref={meshRef}>
      <primitive object={fbx} />
    </mesh>
  );
}
