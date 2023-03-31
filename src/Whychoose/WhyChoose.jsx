import React from 'react';
import airplane from '../assets/airplane.png';
import airplaneicon from '../assets/airplaneicon.svg';
// import Basetag from '../ui/Basetag/Basetag';
import List from '../ui/lists/List';
import box from './../assets/box.svg';
import global from './../assets/global.svg';
import  time from './../assets/time.svg';
import shipping from './../assets/shipping.svg';
import headphone from './../assets/headphone.svg';
import pricing from './../assets/pricing.svg';

import './index.css';

function WhyChoose() {
  return (
    <div className='why_choose'>
        <div className="why_choose_content">
          <div className="why_choose_content_background">
            <img src={airplane} alt="airplane" className='why_choose_content_image'/>
            <div className='why_choose_content_icon'>
            <img src={airplaneicon} alt="icon"  />
            <h4 className='why_choose_content_icon_text'>Moving your products across borders</h4>
            </div>
            </div> 
            <div className="why_choose_content_information">
              {/* <Basetag text='Why Choose'/> */}
              <h5 className='why_choose_content_information_text'>We create opportunity to reach potential</h5>
              <p className='why_choose_content_information_description'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
              <div className='why_choose_content_list'>
                <div className='why_choose_list'>
               <List icon={box} text='Safe Package'/>
               <List icon={global} text='Global Tracking'/>
               <List icon={time} text='In Time Delivery'/>
               <List icon={shipping} text='Ship Everyware'/>
               <List icon={headphone} text='24/7 Support' />
               <List icon={pricing} text='Transparant Pricing'/>
               </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default WhyChoose
