import NotfoundCSS from '../Notfound.module.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'

const StarsBackground = () => {
   return (
      <div className={NotfoundCSS.canvas_container}>
         <Canvas dpr={[1.5, 2]} linear shadows>
            <ambientLight intensity={0.75} />
            <OrbitControls autoRotate enableZoom={false} />
            <Stars radius={300} depth={50} count={1000} factor={10} />
         </Canvas>
      </div>
   );
}

export default StarsBackground;