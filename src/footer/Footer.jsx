import React from 'react';
import Contacts from '../ui/contacts/Contacts';
import Logo from '../ui/logo/Logo';
import banner from './../assets/banner.svg';
import './index.css';
import email from './../assets/email.svg'
import call from './../assets/Call.svg';
import BaseInput from '../ui/baseinput/BaseInput';
import linkedin from './../assets/linkedin.svg';
import twitter from './../assets/twitter.svg';
import facebook from './../assets/facebook.svg';
import BaseButton from '../ui/basebutton/BaseButton';

function Footer() {
  return (
    <div className='footer'>
      <img src={banner} alt='/' className='footer_image' />
      <div className='footer_content'>
      <div className='footer_heading'>
      <div className='footer_shadow'></div>
      <Logo className='logo' />
      <div className='footer_title_wrap'>
       <h5>Pages</h5>
       <h5>Utility</h5>
       <h5>Subscribe</h5>
      </div>
      </div>
      <div className='footer_text'>
        <div className='footer_content_block'>
            <p>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
           <Contacts  images={email} title='email' description= 'contact@logistics.com'/>
           <Contacts  images={call} title='call' description= '(00) 112 365 489'/>
        </div>
        <div className='about_information'>
            <p>About Us</p>
             <p>Our Team</p>
            <p>Our Project</p>
             <p>Pricing</p>
            <p>Contact</p>
         </div>
         <div className='utility_information'>
              <p>Style Guide</p>
              <p>Changelog</p>
               <p>Licenses</p>
              <p>Protected</p>
              <p>Not Found</p>
         </div>
         <div className='more_information'>
         <BaseInput  placeholder='Email here*'/>
         <div className='socialmedia_information'>
          <BaseButton variant='primary' className='footer_button'>Send Now</BaseButton>
           <img src={linkedin} alt='linkedin'/>
           <img src={twitter} alt='twitter'/>
           <img src={facebook} alt='facebook'/>
         </div>
         </div>
      </div>
      </div>
      <div className="footer_bottom">
        <div className='footer_line'></div>
        <div className='footer_bottom_information'>
            <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
            <ul>
                <li>Style Guide</li>
                <li> Licenses</li>
                <li>Changelog </li>
                <li>Password</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
