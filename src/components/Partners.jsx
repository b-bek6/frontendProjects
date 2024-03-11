import React from 'react'
import Section from './Section'
import Heading from './shared/Heading'
import { PartnerLogo, brandData } from '../constants'
import SingleBrand from './shared/SingleBrand'


const Partners = () => {
  return (
    <Section
      className={'pt-[8rem]  pb-20 -mt-[5.25rem]'}
      crosses
    //   crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="services"
    >
      <div className="container relative">
        <Heading
          className="md:max-w-md  lg:max-w-2xl "
          title="Our Trusted Partners"
          text="Discover our tailored solutions for your business needs."
        />
        <div className=" mx-auto  px-4 md:px-8 2xl:px-0">
            <img
            width={335}
            height={384}
            src="./src/assets/shape/shape-04.png"
            alt="Man"
            className="absolute hidden md:block -left-15 top-25  lg:-top-[200px] z-5 lg:left-0"
          />
       
          <div className="grid grid-cols-3 items-center  justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandData.map((brand, key) => (
              <SingleBrand  brand={brand} key={key} />
            ))}
          </div>
        </div>
        </div>
        </Section>
  )
}

export default Partners