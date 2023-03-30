import React from 'react';
import Basetag from '../ui/Basetag/Basetag';
import Contacts from '../ui/contacts/Contacts';
import email from './../assets/email.svg';
import call from './../assets/call.svg';
import clock from './../assets/clock.svg';
import './index.css';
import BaseInput from '../ui/baseinput/BaseInput';
import BaseButton from '../ui/basebutton/BaseButton';
import studio from './../assets/studio.png';
import norto from './../assets/norto.png';
import points from './../assets/norto.png';
import sandbox from './../assets/sandbox.png';

function HomeContact() {
  return (
    <div className='homecontact'>
    <div className='home_contact_information'>
    <div className='contact_us'>
     <Basetag text='Contact' /> 
     <h3>Get in touch with us</h3>
     <p className='home_contact_text'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
     <Contacts images={email}  title='email' description= 'contact@logistics.com'/>
     <Contacts images={call} title='call' description= '(00) 112 365 489'/>
     <Contacts images={clock} title='Mon - Sat 9.00 - 18.00' description= 'Sunday Closed'/>
     </div>
     <div className='form'>
    <div className='form_information'>
     <BaseInput placeholder='Your name*'/>
     <BaseInput placeholder='Email*'/>
     <BaseInput placeholder='Phone Number*'/>
     <BaseInput placeholder='City*'/>
     </div>
     <BaseInput className='message' placeholder='Your Message' />
      {/* <BaseButton>Submit Message</BaseButton> */}
     </div>
     </div>
     <div className="partners">
        <img src={studio} alt="studio" />
        <img src={norto} alt='norto' />
        <img src={points} alt="points" />
        <img src={sandbox} alt='sandbox' />
     </div>
     
    </div>
  )
}

export default HomeContact
