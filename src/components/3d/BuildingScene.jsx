import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Building({ position, height, color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.material.emissiveIntensity = 0.1 + Math.sin(clock.getElapsedTime() * 2 + position[0]) * 0.05
  })
  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[0.8, height, 0.8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.1} metalness={0.4} roughness={0.3} />
    </mesh>
  )
}

export default function BuildingScene() {
  const buildings = [
    {position:[0,1.5,0],height:3,color:'#B8A9C9'},{position:[1.5,1,0],height:2,color:'#C9A84C'},
    {position:[-1.5,0.8,0],height:1.6,color:'#9DB4CC'},{position:[0,0.6,1.5],height:1.2,color:'#C9A84C'},
    {position:[0,1.8,-1.5],height:3.6,color:'#A8C5DA'},{position:[3,0.5,0],height:1,color:'#C9A84C'},
    {position:[-3,1.2,0],height:2.4,color:'#B8A9C9'},{position:[0,2.5,-3],height:5,color:'#8EA8C3'},
  ]
  return (
    <Canvas camera={{position:[5,4,8],fov:55}} shadows style={{height:'100vh'}}>
      <color attach="background" args={['#F0EDE8']} />
      <fog attach="fog" args={['#F0EDE8',15,30]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10,10,5]} intensity={1.5} color="#FFF8E7" castShadow />
      <pointLight position={[0,8,0]} intensity={1} color="#C9A84C" />
      <Float speed={0.5} rotationIntensity={0.1}>
        <group>{buildings.map((b,i)=><Building key={i} {...b}/>)}</group>
      </Float>
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1.2,0]} receiveShadow>
        <planeGeometry args={[30,30]}/>
        <meshStandardMaterial color="#E8E3DC" roughness={0.8}/>
      </mesh>
      <Environment preset="dawn" />
      <EffectComposer>
        <Bloom luminanceThreshold={0.9} intensity={0.3} />
      </EffectComposer>
    </Canvas>
  )
}
