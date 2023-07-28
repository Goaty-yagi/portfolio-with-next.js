import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./model";

export default function Goaty() {
  return (
      <Canvas
        shadows
        camera={{
          zoom: 8,
          position: [10, -5, -10],
        }}
      >
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[1, 1, 1]}
          intensity={1}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <Model castShadow />
      </Canvas>
    
  );
}
