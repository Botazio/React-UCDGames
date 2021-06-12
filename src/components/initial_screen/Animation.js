import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import * as THREE from 'three';
import niceColors from 'nice-color-palettes';
import React, { useMemo } from 'react'
import CarbonTexture from './fixtures/carbon_normal.jpg';


// A physical sphere tied to mouse coordinates without visual representation
function Mouse() {
   const { viewport } = useThree();
   const [, api] = useSphere(() => ({ type: "Kinematic", args: 6 }));
   return useFrame((state) =>
      api.position.set(
         (state.mouse.x * viewport.width) / 2,
         (state.mouse.y * viewport.height) / 2,
         7
      )
   );
}

// A physical plane without visual representation
function Plane({ color, ...props }) {
   usePlane(() => ({ ...props }));
   return null;
}

// Creates a crate that catches the spheres
function Borders() {
   const { viewport } = useThree();
   return (
      <>
         <Plane
            position={[0, -viewport.height / 2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
         />
         <Plane
            position={[-viewport.width / 2 - 1, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
         />
         <Plane
            position={[viewport.width / 2 + 1, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
         />
         <Plane position={[0, 0, 0]} rotation={[0, 0, 0]} />
         <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
      </>
   );
}

// Spheres falling down
function InstancedSpheres({ number = 100 }) {
   const map = useLoader(THREE.TextureLoader, CarbonTexture)
   const { viewport } = useThree();
   const [ref] = useSphere(index => ({
      mass: 1,
      position: [4 - Math.random() * 8, viewport.height, 0, 0],
      args: 1
   }))
   const colors = useMemo(() => {
      const array = new Float32Array(number * 3)
      const color = new THREE.Color()
      for (let i = 0; i < number; i++)
         color
            .set(niceColors[17][Math.floor(Math.random() * 5)])
            .convertSRGBToLinear()
            .toArray(array, i * 3)
      return array
   }, [number])
   return (
      <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, number]}>
         <sphereBufferGeometry attach="geometry" args={[1, 16, 16]}>
            <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colors, 3]} />
         </sphereBufferGeometry>
         <meshPhongMaterial
            attach="material"
            vertexColors={THREE.VertexColors}
            normalMap={map}
            normalScale={[1, 1]}
            normalMap-wrapS={THREE.RepeatWrapping}
            normalMap-wrapT={THREE.RepeatWrapping}
            normalMap-repeat={[10, 10]}
         />
      </instancedMesh>
   )
}

export default function Animation() {
   return (
      <Canvas
         camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
      >
         <ambientLight intensity={0.3} />
         <directionalLight
            position={[-30, 50, -20]}
            angle={0.3}
            intensity={2}
            shadow-mapSize-width={64}
            shadow-mapSize-height={64}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
         />
         <Physics
            gravity={[0, -50, 0]}
            defaultContactMaterial={{ restitution: 0.5 }}
         >
            <group position={[0, 0, -10]}>
               <Mouse />
               <Borders />
               <InstancedSpheres />
            </group>
         </Physics>
      </Canvas>
   );
}