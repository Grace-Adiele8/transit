import React from 'react'
import dropdown from './../../assets/dropdown.svg';
import twitter from './../../assets/twitter.svg';
import linkedin from './../../assets/linkedin.svg';
import facebook from './../../assets/facebook.svg';
import instagram from './../../assets/Instagram.svg';
import './index.css';

function NavBar() {
  return (
    <div className='nav_bar'>
        <div className="nav_bar_content">
            <ul className='nav_links'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Pages <span><img src={dropdown} alt="drop down" /></span></a>
             </li>
             <li><a href="/">Project</a></li>
             <li><a href="/">Contact</a></li>
            </ul>
            <div className="nav_bar_content_info">
          <div className="nav_bar_content_info_socials">
            <a href="/">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="/">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="/">
              <img src={linkedin} alt="Linkedin" />
            </a>
          </div>
          <button className="nav_bar_content_info_button">
            Request Quote
          </button>
        </div> 
        </div>
      
    </div>
  )
}

export default NavBar
