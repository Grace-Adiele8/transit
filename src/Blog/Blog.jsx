import React from 'react'
import Basetag from '../ui/basetag/Basetag'
import BlogPost from './BlogPost'
import './index.css'
import container from './../assets/container.svg';
import carton from './../assets/carton.svg';
import boat from './../assets/boat.svg';

function Blog() {
  return (
    <div className='Blog'>
     <Basetag text='Our Blog' />
     <h5>Our Latest News</h5>
     <BlogPost  image={container} date= '08'  title='Inland freight a worthy solution for your business' />
    <BlogPost  image={carton} date= '12'  title='How technology can help redraw the supply chain map'  />
  <BlogPost  image={boat} date= '25'  title='How technology can help redraw the supply chain map' />
 <div className='line3'></div>
    </div>
  )
}

export default Blog
