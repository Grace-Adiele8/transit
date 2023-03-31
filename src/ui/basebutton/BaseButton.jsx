import React, { Children } from 'react';
import './index.css';

function BaseButton({children,variant='primary',className=''}) {
  return (
   <button className={`base-button--${variant} ${className} `}>{children}</button>  
 
  )
}

export default BaseButton
