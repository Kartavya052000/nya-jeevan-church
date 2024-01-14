import React from 'react';
import location from '../assets/images/location.svg';
import mail from '../assets/images/mail.svg';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer>
      <section className='footer-sec'>
        <div className='custom-container'>
          <div className='custom_row'>
            <div className='footerCol-6'>
              <div className='footerCol_inner'>
                <h4>About Us</h4>
                <p>Welcome to Naya Jeevan Church! This is where a vibrant church community, faith, fellowship,
                    and purpose converge! Since 1995, Naya Jeevan Church has been committed to creating a
                    welcoming space for all, fostering spiritual growth and embracing diversity.
                </p>
                <ul className='social_info'>
                  <li>
                    <a href='#'>
                    <span>Twitter</span>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Facebook</span>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Instagram</span>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footerCol-3'>
              <div className='footerCol_inner'>
                  <h4>Quick Links</h4>
                  <ul className='foot_menu'>
                    <li>
                      <Link to="/" title="Home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about" title="About">About</Link>
                    </li>
                    <li>
                      <Link to="/ministries" title="Ministries">Ministries</Link>
                    </li>
                    <li>
                      <Link to="/gallery" title="Gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/contact" title="Contact">Contact</Link>
                    </li>
                  </ul>
              </div>
            </div>
            <div className='footerCol-3'>
            <div className='footerCol_inner'>
                  <h4>Address</h4>
                  <ul className='address'>
                    <li>
                      <span><img src={location} /> XYZ, Surrey, Canada</span>
                    </li>
                    <li>
                      <span><img src={mail} /><a href='mailto:info@navjeevanchurch.ca' title='info@navjeevanchurch.ca'>info@navjeevanchurch.ca</a></span>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <div className='custom-container'>
          <span>&copy; {new Date().getFullYear()} by Nav jeevan Church</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;