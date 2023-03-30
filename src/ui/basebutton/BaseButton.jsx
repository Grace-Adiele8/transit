import React from 'react';
import './index.css';

function BaseButton({text}) {
  return (
   <button className={`base-button--${variant} ${className} `}>{text}</button>  
 
  )
}

export default BaseButton
