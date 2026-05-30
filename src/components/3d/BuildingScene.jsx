import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Environment, MeshReflectorMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function Building({ position, height, color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.material.emissiveIntensity = 0.3 + Math.sin(clock.getElapsedTime() * 2 + position[0]) * 0.1
  })
  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[0.8, height, 0.8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

function CityGrid() {
  const buildings = [
    { position: [0, 1.5, 0], height: 3, color: '#1E3A5F' },
    { position: [1.5, 1, 0], height: 2, color: '#C9A84C' },
    { position: [-1.5, 0.8, 0], height: 1.6, color: '#1E3A5F' },
    { position: [0, 0.6, 1.5], height: 1.2, color: '#C9A84C' },
    { position: [0, 1.8, -1.5], height: 3.6, color: '#1a2a4a' },
    { position: [3, 0.5, 0], height: 1, color: '#C9A84C' },
    { position: [-3, 1.2, 0], height: 2.4, color: '#1E3A5F' },
    { position: [0, 2.5, -3], height: 5, color: '#0d1a2e' },
  ]
  return <>{buildings.map((b, i) => <Building key={i} {...b} />)}</>
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial mirror={0.4} blur={[300, 100]} resolution={1024} mixBlur={1} mixStrength={40} roughness={1} depthScale={1.2} minDepthThreshold={0.4} maxDepthThreshold={1.4} color="#080C14" metalness={0.8} />
    </mesh>
  )
}

export default function BuildingScene() {
  return (
    <Canvas camera={{ position: [5, 4, 8], fov: 55 }} shadows style={{ height: '100vh' }}>
      <color attach="background" args={['#080C14']} />
      <fog attach="fog" args={['#080C14', 15, 30]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 8, 0]} intensity={2} color="#C9A84C" castShadow />
      <pointLight position={[-5, 3, 5]} intensity={0.8} color="#1E90FF" />
      <Stars radius={80} depth={30} count={3000} factor={3} fade />
      <Float speed={0.5} rotationIntensity={0.1}>
        <CityGrid />
      </Float>
      <Ground />
      <Environment preset="night" />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} intensity={1.5} />
      </EffectComposer>
    </Canvas>
  )
}
