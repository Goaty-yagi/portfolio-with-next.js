import React from "react"
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function Model() {
    const fbx = useLoader(FBXLoader, '/fish.fbx')
    return (
        <mesh 
            >
            <primitive object={fbx}  />
        </mesh>
    )
  }