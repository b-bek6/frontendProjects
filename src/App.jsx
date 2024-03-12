import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import Claim from './components/Claim'
import Products from './components/Products'
import Work from './components/Work'
import Partners from './components/Partners'
import FunFact from './components/Funfact'
import Testimonials from './components/Testimonials'
import Header1 from './components/shared/Header1'
import Home from './Pages/Home'
import ServicePage from './Pages/ServicePage'
import { Route, Routes } from 'react-router-dom'
import WebService from './Pages/ServicePages/WebService'


const App = () => {
   return (
      <>
         <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden '>
            <Header />
            {/* <Header1/> */}
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/services" element={<ServicePage />} />
               <Route path="/services/web" element={<WebService />} />
            </Routes>
            {/* <Hero />
            <Claim />
            <Services />
            {/* <FunFact/> */}
            {/*<Partners />
            <Products />
            <Work />
            <Testimonials /> */}
            <Footer />
         </div>
      </>
   )
}

export default App