import React from 'react'
import Section from './Section'
import Heading from './shared/Heading'

const Products = () => {
  return (
    <Section
        className={'pt-[12rem] -mt-[5.25rem]'}
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="services"
    >
        <div className='h-screen'>
             <Heading
             className="md:max-w-md lg:max-w-2xl"
             title="Our Products"
             text="Discover our tailored solutions for your business needs."
           />
        </div>
    </Section>
  )
}

export default Products