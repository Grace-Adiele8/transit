import React from 'react';
import './index.css';

function BaseInput({placeholder,className}) {
  return (
    
      <input type='text'placeholder={placeholder} className={`baseinput ${className}`} />
    
  )
}

export default BaseInput
