import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function Model() {
  const meshRef = useRef();
  const [rotation, setRotation] = useState(0.8)
  
  useEffect(() => {

    const intervalid = setInterval(() => {
      
      setRotation(rotation > 0.2 ? rotation -= 0.1:rotation -= 0.01)
      if(rotation < 0.01) {
        clearInterval(intervalid)
        setRotation(0.01)
      }
    },100)
  },[])
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    
    meshRef.current.rotation.y += rotation;
  });
  const fbx = useLoader(FBXLoader, "/sheep.fbx");
  return (
    <>
    <mesh receiveShadow position={[0, -1, 0]} ref={meshRef}>
      <primitive object={fbx} />
    </mesh>
    </>
  );
}
