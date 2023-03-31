import React from 'react';
import './index.css';

function List({icon,text}) {
  return (
    <div className='list'>
      <img src={icon} alt="icon" className='list_icon' />
      <p className='list_text'>{text}</p>
    </div>
  )
}

export default List
