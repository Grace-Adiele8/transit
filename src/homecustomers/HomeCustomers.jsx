import React from 'react'
import Basetag from '../ui/Basetag/Basetag';
import arrowleft from './../assets/arrowleft.svg';
import arrowright from './../assets/arrowright.svg';
import HomeTestimonial from './HomeTestimonial';
import './index.css';
import smith from './../assets/smith.svg';
import martin from './../assets/martin.svg';

function HomeCustomers() {
  return (
    <div className='home_customers'>
      <Basetag text='Testimonial'/>
      <div className="slider_arrow">
        <h3>What Our Customer Say</h3>
        <div className='slider_header'>
          <img src={arrowleft} alt="arrowright" />
          <img src={arrowright} alt='arrowright' />
          </div>
        </div>
        <div className="testimonial_information">
        <HomeTestimonial image={smith} person='Kathleen Smith' company='Fuel Company'/>
        <HomeTestimonial image={martin} person='John Martin' company='Restoration Company'/>
        </div>
        </div>
    
  )
}

export default HomeCustomers
