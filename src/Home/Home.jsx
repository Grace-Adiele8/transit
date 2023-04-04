import React from 'react'
import HomeHero from '../Homehero/HomeHero'
import HomeWhat from '../homewhat/HomeWhat'
import HomeWhyUs from '../HomeWhyUs/HomeWhyUs'
import HomeTransporting from '../Hometransporting/HomeTransporting'

import WhyChoose from '../Whychoose/WhyChoose'
import Blog from './../Blog/Blog';
import HomeTeam from '../Hometeam/HomeTeam'
import HomeContact from '../homecontact/HomeContact'
import Footer from '../footer/Footer'
import HomeCustomers from '../homecustomers/HomeCustomers'

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeWhat />
      <HomeWhyUs />
      <HomeTransporting />
      <HomeCustomers />
      <WhyChoose />
      <HomeTeam />
      <HomeContact />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
