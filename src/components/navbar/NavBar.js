import { NavLink } from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';
import { ReactComponent as GamePad } from './fixtures/icon-gamepad.svg'
import { ReactComponent as Options } from './fixtures/icon-options.svg'

const Navbar = () => {
   return (
      <div>
         <nav className={NavbarCSS.navbar}>
            <div>
               <div className={NavbarCSS.navbar_logo}>
                  <GamePad fill={'rgb(0, 230, 230)'} height={'45'} />
                  <h2 id="logo-navbar">UCD GAMES</h2>
               </div>
            </div>
            <div className={NavbarCSS.navbar_links}>
               <NavLink exact activeClassName={NavbarCSS.active_link} to="/games">GAMES</NavLink>
               <NavLink exact activeClassName={NavbarCSS.active_link} to="/documentation">DOCUMENTATION</NavLink>
               <NavLink exact activeClassName={NavbarCSS.active_link} to="/join">JOIN</NavLink>
            </div>
            <Options className={NavbarCSS.options} fill={'rgb(0, 230, 230)'} height={'20'} />
         </nav>
      </div>
   );
}

export default Navbar;