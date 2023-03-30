import React from 'react';
import email from './../../assets/email.svg';
import call from './../../assets/Call.svg';
import './index.css';

function Contacts({images,title,description}) {
  return (
    <div className='contacts'>
      <img src={images} alt="icons" />
      <div className='contact_information'>
      <p>{title}</p>
      <p>{description}</p>
      </div>
    </div>
  )
}

export default Contacts
