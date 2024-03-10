import React from 'react'
import Section from './Section'
import WebDev from '../assets/HeroSvg/WebDev'
import Button from './shared/Button'

const Hero = () => {
  return (
    <Section
        className={'pt-[10rem] -mt-[5.25rem]'}
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
    >
        <div className='container h-[90vh] relative'>
            <div className='lg:flex justify-center items-center '>
                <div className='h1 leading-relaxed'>
                    <p className=''>

                    <div className='h5 text-color-1'>Your Vision, Our Expertise</div>
                {/* Your Vision, Our Expertise: */}
                 Craft Seamless Digital Solutions
                    </p>
                    <Button> Get Stated</Button>
                </div>
                <div className='grid justify-center z-10 '>
                    <div className='h1 w-[400px] xl:w-[600px]'> <WebDev/></div>
                    
                </div>
            </div>

        </div>

    </Section>
  )
}

export default Hero