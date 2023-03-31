import React from 'react';
import './index.css';

function TranspotType({image,type,method}) {
  return (
    <div className='transport_type'>
      <img src={image} alt='transport type' />
      <div className="transport_type_text">
        <p className='transport_type_way'>{type}</p>
        <p className='transport_type_method'>{method}</p>
      </div>
    </div>
  )
}

export default TranspotType
