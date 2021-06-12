import { NavLink } from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';
import { ReactComponent as GamePad } from './fixtures/icon-gamepad.svg';
import { ReactComponent as List } from './fixtures/icon-list.svg'
import { ReactComponent as Options } from './fixtures/icon-options.svg';
import { ReactComponent as Login } from './fixtures/icon-login.svg';
import { ReactComponent as Moon } from './fixtures/icon-moon.svg'
import { useState } from 'react';

const Navbar = () => {
   const [optionsActive, setOptionsActive] = useState(false);

   return (
      <div>
         <nav className={NavbarCSS.navbar}>
            <NavLink exact to="/">
               <div className={NavbarCSS.navbar_logo}>
                  <GamePad fill={'rgb(0, 230, 230)'} height={'45'} />
                  <h2 id="logo-navbar">UCD GAMES</h2>
               </div>
            </NavLink>
            <div className={NavbarCSS.navbar_links}>
               <NavLink exact activeClassName={NavbarCSS.active_link} to="/games">GAMES</NavLink>
               <NavLink exact activeClassName={NavbarCSS.active_link} to="/documentation">DOCUMENTATION</NavLink>
               <NavLink exact activeClassName={NavbarCSS.active_link} to="/join">JOIN</NavLink>
            </div>
            <List onClick={() => setOptionsActive(!optionsActive)} className={NavbarCSS.list} fill={'rgb(0, 230, 230)'} height={'20'} />
            <div className={NavbarCSS.options_bar + " " + (optionsActive ? NavbarCSS.options_bar_active : NavbarCSS.options_bar_inactive)}>
               <Login height={'35'} />
               <Moon height={'35'} />
               <Options className={NavbarCSS.options} height={'35'} />
            </div>
         </nav>
      </div>
   );
}

export default Navbar;