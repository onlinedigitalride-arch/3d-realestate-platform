import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointerLockControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,0,0]} receiveShadow>
        <planeGeometry args={[10,10]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Ceiling */}
      <mesh rotation={[Math.PI/2,0,0]} position={[0,3,0]}>
        <planeGeometry args={[10,10]} />
        <meshStandardMaterial color="#0d1117" />
      </mesh>
      {/* Walls */}
      {[[-5,1.5,0,'y',Math.PI/2],[5,1.5,0,'y',-Math.PI/2],[0,1.5,-5,'y',0],[0,1.5,5,'y',Math.PI]].map(([x,y,z,ax,r],i) => (
        <mesh key={i} position={[x,y,z]} rotation={[0,r,0]}>
          <planeGeometry args={[10,3]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      ))}
      {/* Window light */}
      <pointLight position={[0,2,0]} intensity={1} color="#C9A84C" />
      <pointLight position={[3,2,3]} intensity={0.5} color="#ffffff" />
    </group>
  )
}

export default function VirtualTour() {
  return (
    <div className="relative" style={{height:'500px'}}>
      <Canvas camera={{position:[0,1.7,0], fov:75}} style={{borderRadius:'16px'}}>
        <color attach="background" args={['#080C14']} />
        <Room />
        <Environment preset="apartment" />
        <PointerLockControls />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm text-yellow-400">
        Click to enter — use mouse to look around
      </div>
    </div>
  )
}
