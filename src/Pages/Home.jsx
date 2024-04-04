import React from 'react'
import Hero from '../components/Hero'
import Claim from '../components/Claim'
import Services from '../components/Services'
import Partners from '../components/Partners'
import Products from '../components/Products'
import Work from '../components/Work'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'

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
            <Section
                className={'pt-[12rem] pb-20 -mt-[5.25rem]'}
                crosses
                id="services"
            >
                <Testimonials />
            </Section>
        </div>
    )
}

export default Home