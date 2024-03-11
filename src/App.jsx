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


const App = () => {
   return (
      <>
         <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden '>
            <Header />
            {/* <Header1/> */}
            <Hero />
            <Claim />
            <Services />
            {/* <FunFact/> */}
            <Partners/>
            <Products/>
            <Work/>
            <Testimonials/>
            <Footer />
         </div>
      </>
   )
}

export default App