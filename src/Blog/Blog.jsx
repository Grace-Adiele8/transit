import React from 'react'
import BlogPost from './BlogPost'
import './index.css'
import container from './../assets/container.svg';
import carton from './../assets/carton.svg';
import boat from './../assets/boat.svg';
import BaseButton from '../ui/basebutton/BaseButton';
import Basetag from '../ui/Basetag/Basetag';

function Blog() {
  return (
    <div className='Blog'>
      <div className='blog_news'> 
       <Basetag className='base_tag' text='Our Blog' />
       <h5>Our Latest News</h5>
     </div>
     <BlogPost  image={container} date= '08'  title='Inland freight a worthy solution for your business' />
    <BlogPost  image={carton} date= '12'  title='How technology can help redraw the supply chain map'  />
  <BlogPost  image={boat} date= '25'  title='How technology can help redraw the supply chain map' />
 <div className='line3'></div>
 <BaseButton className='more_blog_button'>More Blog</BaseButton>
 
    </div>
  )
}

export default Blog
