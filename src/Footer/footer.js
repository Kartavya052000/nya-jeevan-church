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
                <p>Lorem Ipsum dolor sit amet, we revolutionize the way businesses connect with their target audiences. Our dynamic fleet of mobile billboards transforms ordinary trucks into powerful advertising mediums.</p>
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
                      <Link to="#" title="Home">Home</Link>
                    </li>
                    <li>
                      <Link to="#" title="About">About</Link>
                    </li>
                    <li>
                      <Link to="#" title="Services">Services</Link>
                    </li>
                    <li>
                      <Link to="#" title="Blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="#" title="Contact">Contact</Link>
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