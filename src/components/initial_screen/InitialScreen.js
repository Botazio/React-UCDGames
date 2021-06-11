import InitialScreenCSS from './InitialScreen.module.css';
import { Canvas } from '@react-three/fiber';

const InitialScreen = () => {
   return (
      <div className={InitialScreenCSS.content}>
         <Canvas>
            <mesh>
               <boxBufferGeometry
                  attach="geometry"
                  args={[1, 1, 1]}
               />
               <meshBasicMaterial attach="material" color="rgb(0, 270, 270)" />
            </mesh>
         </Canvas>
      </div>
   );
}

export default InitialScreen;