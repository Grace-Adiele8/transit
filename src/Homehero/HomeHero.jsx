import React from 'react'
// import Basetag from '../ui/Basetag/Basetag'
import BaseButton from '../ui/basebutton/BaseButton'
import './index.css';



export default function HomeHero() {
  return (

   <div className='home-hero'>
      <div className='home_hero_content'>
      {/* <Basetag text='Logistics & Supply Chain Solutions'
 className='home_hero_basetag'/> */}
 <h1 className='home_hero_header'>Your Gateway 
to any Destination in the World</h1>
<p className='home_hero_description'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus 
finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
<BaseButton variant='primary' className='home_hero_button'>Explore More</BaseButton>
    </div>
    </div>
  )
}



