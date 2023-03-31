import Blog from './Blog/Blog'
import Footer from './footer/Footer'
import HomeContact from './homecontact/HomeContact'
import HomeCustomers from './homecustomers/HomeCustomers'
import HomeTeam from './Hometeam/HomeTeam'

import HomeTransporting from './Hometransporting/HomeTransporting'
import HomeServices from './homewhat/HomeServices'
import HomeWhat from './homewhat/HomeWhat'
import HomeWhyUs from './HomeWhyUs/HomeWhyUs'
import NavBar from './NavBar/NavBar'
import Logo from './ui/logo/Logo'
import WhyChoose from './Whychoose/WhyChoose'

function App() {
 
  return (
    <div className="App">
    <NavBar />
    <HomeWhat />
     <HomeWhyUs/>
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

export default App
