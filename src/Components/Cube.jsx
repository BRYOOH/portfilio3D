
import {PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Cube() {
    const textRef= useRef();      
 useFrame((state)=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime)*2));
    return (
  
    <mesh>
    <boxGeometry args={[3,3,3]}/>
     <meshStandardMaterial>
      <RenderTexture attach="map">
        <PerspectiveCamera
        makeDefault
        position={[0,0,2]}/>
        <color attach="background" args={["pink"]}/>
        <Text ref={textRef}  fontSize={1} color="#555">
          Hello
        </Text> 
      </RenderTexture>
     </meshStandardMaterial>
  </mesh>
  )
}
