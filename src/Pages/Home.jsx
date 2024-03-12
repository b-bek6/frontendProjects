import React from 'react'
import Hero from '../components/Hero'
import Claim from '../components/Claim'
import Services from '../components/Services'
import Partners from '../components/Partners'
import Products from '../components/Products'
import Work from '../components/Work'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <div>
            <Hero />
            <Claim />
            <Services />
            {/* <FunFact/> */}
            <Partners />
            <Products />
            <Work />
            <Testimonials />
        </div>
    )
}

export default Home