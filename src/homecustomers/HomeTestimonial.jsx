import React from 'react';
import './index.css';
import quote from './../assets/quote.svg';
import star from './../assets/Star.svg';

function HomeTestimonial({image,person,company}) {
  return (
      
            <div className="testimonial_card">
                <div className="testimonial_card_top">
                    <div className="testimonial_author">
                       <div className="testimonial_name">
                       <img src={image} alt="avatar" />
                       <div className='testimonial_customer_name'>
                            <h2>{person}</h2>
                            <p>{company}</p>
                            </div>
                        </div>
                        <img src={quote} alt="icon" />
                    </div>
                    <p className='testimonial_customer_name_text'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                        thinking to further the overall value proposition. Organically grow the holistic 
                        world view of disruptive innovation via workplace diversity and empowerment.</p>
                </div>
                <div className="testimonial_rating">
                 <img src={star} alt="icon" />
                 <img src={star} alt="icon" />
                 <img src={star} alt="icon" />
                 <img src={star} alt="icon" />
                 <img src={star} alt="icon" />
                 <img src={star} alt="icon" />
                </div>
            </div>
        
    
  )
}

export default HomeTestimonial
