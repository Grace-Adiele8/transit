import React from 'react'
import HomeServices from './HomeServices';
import ship from './../assets/ship.svg';
import aeroplane from './../assets/aeroplane.svg';
import warehouse from './../assets/warehouse.svg';
import truck from './../assets/truck.svg';
// import BaseButton from '../ui/basebutton/BaseButton';
import Basetag from '../ui/Basetag/Basetag';

function HomeWhat() {
  return (
    <div className='home_what'>
      <div className='solutions'>
    <Basetag text='What We Do'/>
    <h3>Safe & Reliable Cargo Solutions</h3>
    </div>
    <div className='home_services'>
    <HomeServices image={ship} title='Sea Transport Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    <HomeServices image={aeroplane} title='warehousing Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    <HomeServices image={warehouse} title='Air Fright Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    <HomeServices image={truck} title='Local Shipping Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    </div>
    
    </div>
  )
}

export default HomeWhat
