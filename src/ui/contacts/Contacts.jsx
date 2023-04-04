import React from 'react';
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
