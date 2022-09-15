import styles from "/styles/components/footer.module.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import Model from "./model";
import { useRef } from "react";

export default function Fish() {
    
    return (
        <div>
            <Canvas 
                style={{
                height: "300px",
            }}
            camera={{ 
                // fov: 200, 
                zoom: 7, 
                // near: 0.1, 
                // far: 800, 
                position: [10, -5, -10],
                // aspect: 960 / 540, 
                }}>
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.2} />
                <directionalLight position={[1, 1, 1]} intensity={1} />
                <Model />
            </Canvas>
        </div>
    ) 
}