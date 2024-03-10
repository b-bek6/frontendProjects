import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'


const App = () => {
  return (
   <>
      <div className='pt-[4.75rem] lg:pt-5.25rem] overflow-hidden '>

   <Header/>
   <Hero/>
<Services/>
<Footer/>
      </div>
   </>
  )
}

export default App