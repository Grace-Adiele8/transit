import React from 'react';
import container from '../assets/container.svg';
import calendar from '../assets/calendar.svg';
import './index.css';




function BlogPost({image,date,title}) {
  return (
    <div>
    <div className='line1'></div>
    <div className='blogpost'>
    <div className='blogpost_image'>
    <img src={image} alt='/' />
      </div>
      <div className='date'>
      <img src={calendar} alt='/'/>
      <h2>{date}</h2>
      <p>September</p>
      </div>
      <div className='blogpost_text'>
      <h5>{title}</h5>
      <p> 'We are dedicated in creating added value for our customers by implementing modern technology in our work.' </p>
      <ul>
       <li>Urgent transport solutions</li>
      <li>Reliable & experienced staffs</li>
      <li>Urgent transport solutions</li>
      <li>Reliable & experienced staffs</li>
       </ul>
      </div>
      </div>
     </div>
  )
}

export default BlogPost
