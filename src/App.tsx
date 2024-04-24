import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './page/home/Home';
import Login from './page/auth/Login';
import Navbar from './layout/Navbar';
import DashBoard from './Dashboard';
import About from './page/about/About';
import Track from './page/track/Track';
import Service from './page/service/Service';
import Contact from './page/contact/Contact';
import Admin from './page/admin/Admin';



function App() {
  

  return (
    <Router>
      <DashBoard>
      <Navbar/>
      </DashBoard>
     <Routes>
      <Route index element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='About' element={<About/>} />
      <Route path='Track' element={<Track/>} />
      <Route path='Service' element={<Service/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='Admin' element={<Admin/>} />
     </Routes>
    </Router>
  )
}

export default App
