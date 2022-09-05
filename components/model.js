import React from "react"
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

// export default function Box() {
//     return (
//         <mesh>
//             <sphereGeometry  />
//             <meshStandardMaterial />
//         </mesh>
//     )
// }

export default function Box() {
    const fbx = useLoader(FBXLoader, '/fish.fbx')
    return (
        <mesh 
            >
            <primitive object={fbx}  />
        </mesh>
    )
  }