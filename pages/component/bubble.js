import { Canvas, useThree } from "@react-three/fiber";
import { useRef } from "react";


function Sphere(props) {
    const ref = useRef()
    return (
        <mesh
          {...props}
          ref={ref}
          scale={1}
        >
          <sphereGeometry attach="geometry" args={[1.8, 16, 16]} />
          <meshPhongMaterial 
            attach="material"
            wireframe="true"
            ambient="0x990000"
            specular="0xffff00"
            shininess="30"
            metal="true"
            color= "gray"
            opacity="0.5"
            transparent/>
        </mesh>
    )
}

export default function Bubble() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[10, 10, -0]} />
            <Sphere></Sphere>
        </Canvas>
    )
}