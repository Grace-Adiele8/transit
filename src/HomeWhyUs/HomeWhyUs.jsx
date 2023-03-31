import React from 'react'
import './index.css';
import delivery from './../assets/delivery.svg';
import cost from'../assets/cost.svg';
import aeroplane from './../assets/aeroplane.png';
import lady from './../assets/lady.png';
// import Basetag from '../ui/Basetag/Basetag';


function HomeWhyUs() {
  return (
    <div className='homewhyus'>
    <div className="home_why_us_content">
      <div className="home_why_us_content_top">
        <div className="how_why_content_top_text">
        {/* <Basetag text='Why Us'/> */}
        <h3 className='home_why_us_header'>We provide full range global logistics solution</h3>
        <p className='home_why_us_description'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value
             proposition. <br/><br/>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
         
        <div className="home_why_us_text_list">
           
            </div>
            </div>
        
        <div className="home_why_us_image">
            <div className="home_why_us_image1">
                <img src={aeroplane} alt="image" />
            </div>
            <div className="home_why_us_image2">
                <img src={lady} alt="image" />
            </div>
        </div>
       </div>
        <div className="home_why_us_achievements">
            <div className="home_why_us_packages">
                <h2>1294</h2>
                <div className="home_why_us_pattern"></div>
                <p className='home_why_us_content_text'>Delivered Packages</p>
              </div>
              <div className="home_why_us_clients">
                <h2>3594</h2>
                <div className="home_why_us_pattern"></div>
                <p className='home_why_us_content_text'>Satisfied Clients</p>
              </div>
              </div>
           </div>
           </div>
  )
}

export default HomeWhyUs

