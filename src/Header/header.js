import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={`mainHeader ${active ? 'showMenu' : ''}`}>
      <div className='header_inner'>
        <div className='custom-container'>
          <div className='header_wrap'>
            <div className='logo'>
              <a href='/' title='NGO'>
                <img src={logo} alt='NGO' title='NGO' />
              </a>
            </div>
            <div className='hamburger' onClick={() => setActive(!active)}>
              <span className='bar'></span>
            </div>
            <div className='navigationWrapper'>
              <nav>
                <ul className='nav_menu header_menu'>
                  <li className='menu_item linkEffect'>
                    <Link to="/" title='Home'>Home</Link>
                  </li>
                  <li className='menu_item linkEffect'>
                    <Link to="/about" title='About'>About</Link>
                  </li>
                  <li className='menu_item linkEffect'>
                    <Link to="/ministries" title='Ministries'>Ministries</Link>
                  </li>
                  {/* <li className='menu_item linkEffect dropdown'> */}
                  <li className='menu_item linkEffect'>
                    <Link to="/outreach" title='Outreach'>Outreach</Link>
                    {/* <ul className='dropdownMain'>
                      <li className='linkEffect'>
                        <Link to='/pages/outreach_detail' title='Pakistan'>Pakistan</Link>
                      </li>
                      <li className='linkEffect'>
                        <Link to='/pages/outreach_detail' title='Fiji'>Fiji</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className='menu_item linkEffect'>
                    {/* <Link to="/events" title='Events'>Events</Link> */}
                    <Link to="/gallery" title='Gallery'>Gallery</Link>
                  </li>
                  <li className='menu_item linkEffect'>
                    <Link to="/contact" title='Contact'>Contact</Link>
                  </li>
                  <li className='menu_item'>
                    <Link className='butn butn_main' to="https://buy.stripe.com/test_5kAbLq39w22Y3eg144" target='_blank' title='Donate'>Donate</Link>                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
