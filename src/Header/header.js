import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import location from '../assets/images/location.svg';
import mail from '../assets/images/mail.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
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
                    <Link to="/" data-hover="Home" title='Home'><span>Home</span></Link>
                  </li>
                  <li className='menu_item linkEffect'>
                    <Link to="/" data-hover="About" title='About'><span>About</span></Link>
                  </li>
                  <li className='menu_item linkEffect'>
                  <Link to="/" data-hover="Services" title='Services'><span>Services</span></Link>
                  </li>
                  <li className='menu_item linkEffect'>
                    <a href='/' title='Blog' data-hover="Blog"><span>Blog</span></a>
                  </li>
                  <li className='menu_item linkEffect'>
                    <a href='/' title='Contact' data-hover="Contact"><span>Contact</span></a>
                  </li>
                  <li className='menu_item'>
                    <Link className='butn butn_success' to="/" title='Donate'>Donate</Link>
                  </li>
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
