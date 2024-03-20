import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#about">About</a></p>
  <p><a href="#pricing">Pricing</a></p>
  <p><a href="#technology">Technology</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='website__navbar'>
      <div className='website__navbar-links'>
        <div className='website__navbar-links_logo'>
          <h1>TechWebsite</h1>
        </div>
        <div className='website__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='website__navbar-sign'>
        
        <button type='button'>Get Started</button>
      </div>
      <div className='website__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='website__navbar-menu_container scale-up-center'>
            <div className='website__navbar-menu_container-links'>
              <Menu />
              <div className='website__navbar-menu_container-links-sign'>
                
                <button type='button'>Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
