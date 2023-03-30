import Blog from './Blog/Blog'
import Footer from './footer/Footer'
import HomeContact from './homecontact/HomeContact'
import HomeCustomers from './homecustomers/HomeCustomers'
import HomeServices from './homewhat/HomeServices'
import HomeWhat from './homewhat/HomeWhat'
import Logo from './ui/logo/Logo'

function App() {
 
  return (
    <div className="App">
      <HomeCustomers />
      <HomeWhat />
     
      <HomeContact />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
