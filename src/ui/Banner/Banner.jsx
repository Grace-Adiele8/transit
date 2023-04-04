import React from 'react';
import Contacts from '../contacts/Contacts';
import Logo from '../logo/Logo';
import email from '../../assets/email.svg';
import call from '../../assets/call.svg';
import clock from '../../assets/clock.svg';
import './index.css';


function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <Logo />
        <div className="banner_content_contact_details">
        <Contacts images={email}  title='email' description= 'contact@logistics.com'/>
     <Contacts images={call} title='call' description= '(00) 112 365 489'/>
     <Contacts images={clock} title='Mon - Sat 9.00 - 18.00' description= 'Sunday Closed'/>
        </div>
      </div>
    </div>
  )
}

export default Banner
