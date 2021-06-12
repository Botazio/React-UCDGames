import { NavLink } from 'react-router-dom';
import Animation from './Animation';
import InitialScreenCSS from './InitialScreen.module.css';

const InitialScreen = () => {
   return (
      <div>
         <NavLink exact to="/games">
            <div className={InitialScreenCSS.title}>
               <h1>PLAY NOW!</h1>
               <h1>PLAY NOW!</h1>
               <h1>PLAY NOW!</h1>
            </div>
         </NavLink>
         <div className={InitialScreenCSS.canvas_container}>
            <Animation />
         </div>
      </div>
   );
}

export default InitialScreen;