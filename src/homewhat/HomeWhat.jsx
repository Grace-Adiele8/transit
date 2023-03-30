import React from 'react'
import Basetag from '../ui/Basetag/Basetag';
import HomeServices from './HomeServices';
import ship from './../assets/ship.svg';
import aeroplane from './../assets/aeroplane.svg';
import warehouse from './../assets/warehouse.svg';
import truck from './../assets/truck.svg';

function HomeWhat() {
  return (
    <div className='HomeWhat'>
      <div className='solutions'>
    <Basetag text='What We Do'/>
    <h3>Safe & Reliable Cargo Solutions</h3>
    </div>
    <div className='home_services'>
    <HomeServices image={ship} title='Sea Transport Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    <HomeServices image={aeroplane} title='Air Fright Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    <HomeServices image={warehouse} title='warehousing Transport Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    <HomeServices image={truck} title='Local Shipping Services' description='Following the quality of our service thus having gained trust of our many clients.'/>
    </div>
    </div>
  )
}

export default HomeWhat
