import styles from "/styles/components/footer.module.scss";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./model";

export default function Fish() {
    return (
        <div>
            <Canvas 
                style={{
                height: "400px",
            }}
            camera={{ fov: 150, zoom: 1.2, near: 0.1, far: 800 }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Model />
            </Canvas>
        </div>
    ) 
}