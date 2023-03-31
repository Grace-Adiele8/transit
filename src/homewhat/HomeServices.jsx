import React from 'react';
import './index.css';


function HomeServices({image,title,description}) {
  return (
    <div className='service-card'>
      <div className='service_icon'>
       <img src={image} alt="/" />
       </div>
       <div className='service_line'>
       <h5>{title}</h5>
       <p>{description}</p>
       </div>
    </div>
  )
}

export default HomeServices
