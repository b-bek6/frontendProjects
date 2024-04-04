import React from 'react'
import Section from './Section'
import WebDev from '../assets/HeroSvg/WebDev'
import Button from './shared/Button'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <Section
        className={'pt-[10rem] pb-10 xl:pb-32 -mt-[5.25rem]'}
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
    >
        <div className='container mx-auto max-h-[86.875rem] px-4 md:px-8 2xl:px-0 relative'>
            <div className='lg:flex justify-center items-center '>
            <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
                <div className='h1 leading-relaxed'>
                    <p className=''>
                   
                    <div className='h5 text-color-2'>Your Vision, Our Expertise</div>
                {/* Your Vision, Our Expertise: */}
                 Craft Seamless Digital Solutions
                    </p>
                    <Button> Get Stated</Button>
                </div>
                </motion.div>
                <div className='grid justify-center z-10 '>
                    <div className='h1 w-[400px] xl:w-[600px]'> <WebDev/></div>
                    
                </div>
            </div>

        </div>

    </Section>
  )
}

export default Hero