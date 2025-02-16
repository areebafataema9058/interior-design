import { Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import LivingRoom from './Pages/LivingRoom'
import BedRoom from './Pages/BedRoom'
import Kitchen from './Pages/Kitchen'
import OutDoorPatio from './Pages/OutDoorPatio'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path='/livingroom' element={<LivingRoom/>}/>
    <Route path='/bedroom' element={<BedRoom/>}/>
    <Route path='/kitchen' element={<Kitchen/>}/>
    <Route path='/outdoor' element={<OutDoorPatio/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>

   </Routes>
    <Footer/>
    
    </>
  )
}

export default App
