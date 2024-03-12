import React from 'react'
import WebServiceSvg from '../assets/ServicePage/WebServiceSvg'
import {motion} from 'framer-motion'
import Section from '../components/Section'
import Heading from '../components/shared/Heading'
import WebDev from '../assets/HeroSvg/WebDev'

const ServicePage = () => {
  return (
    <>
    {
      [{title:"Website"},{title:"Mobile"},{title:"Ui/Ux"}].map((item)=>(
       <>
       <Section
    className={'pt-[12rem] pb-20 -mt-[5.25rem]'}
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="services"
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
                <Heading
                    title={item.title}
                    text={"At Code Wave Tech, we provide all the services from business requirement study, interface design to convert the solutions to digital, portable platforms through android and iOS apps with the aim of expanding further by creating other possible business potentials. We mostly use React Native to build mobile applications with latest technologies maintaining the maximum quality."}
                />
            </motion.div>
            <motion.div

                initial={{
                    opacity: 0,
                    x: 50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1
                    }
                }}
                viewport={{ once: true }}
            >

                <div className='grid justify-center z-10 '>
                    <div className='h1 w-[400px] xl:w-[600px]'> <WebServiceSvg /></div>

                </div>
            </motion.div>
        </div>

    </div>
</Section>
<Section
        className={'pt-[2rem]  bg-n-8/10 '}
        crosses
        // crossesOffset="lg:translate-y-[5.25rem]"
        // customPaddings
        id="services"
        >
    <div className='container mx-auto max-h-[86.875rem] px-4 md:px-8 2xl:px-0 relative'>
        <div className='lg:flex justify-center items-center '>
        <motion.div

initial={{
    opacity: 0,
    x: 50
}}
whileInView={{
    opacity: 1,
    x: 0,
    transition: {
        duration: 1
    }
}}
viewport={{ once: true }}
>

<div className='grid justify-center z-10 '>
    <div className='h1 w-[400px] xl:w-[600px]'> <WebDev /></div>

</div>
</motion.div>
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
                <Heading
                    title={"Website"}
                    text={"At Code Wave Tech, we provide all the services from business requirement study, interface design to convert the solutions to digital, portable platforms through android and iOS apps with the aim of expanding further by creating other possible business potentials. We mostly use React Native to build mobile applications with latest technologies maintaining the maximum quality."}
                />
            </motion.div>
           
        </div>

    </div>
</Section>
</>
      ))
    }
    </>
  )
}

export default ServicePage