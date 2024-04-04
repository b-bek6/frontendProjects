import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import ServicePage from './Pages/ServicePage'
import { Route, Routes } from 'react-router-dom'
import WebService from './Pages/ServicePages/WebService'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import Dropdown from 'react-dropdown'


const App = () => {        
   return (
      <>
         <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden '>
            <Header />
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/services" element={<ServicePage />} />
               <Route path="/services/web" element={<WebService />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
         </div>
      </>
   )
}

export default App