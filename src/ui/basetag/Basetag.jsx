import React from 'react';
import './index.css';

function Basetag({text, className=''}) {
  return (
    <div className={`basetag ${className}`}>
      <div className='line'></div>
      <div className='text_container'>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Basetag
