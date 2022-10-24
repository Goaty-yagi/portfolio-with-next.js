import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./model";
import { Box } from "@chakra-ui/react";

export default function Goaty() {
  return (
    <Box
      w={{base:"100%", md:"600px"}}
      h={{base:"200px", md:"300px"}}>
      <Canvas
        shadows
        camera={{
          // fov: 200,
          zoom: 8,
          // near: 0.1,
          // far: 800,
          position: [10, -5, -10],
          // aspect: 960 / 540,
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
    </Box>
  );
}
